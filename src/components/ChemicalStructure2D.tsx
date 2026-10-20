import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { CannabinoidProfile } from '../data/cannabinoids';
import {
  generateMolecule3D,
  ELEMENT_CPK_COLORS,
  createInitialRotationMatrix,
  applyTrackballDelta,
  type Mat3,
  type ElementSymbol,
} from '../utils/molecule3DGenerator';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Box,
  Sun,
  Moon,
  Move3d,
} from 'lucide-react';

export type RenderStyle3D = 'ball-and-stick' | 'spacefill' | 'sticks';

export interface ChemicalStructure2DProps {
  compound: CannabinoidProfile;
  variant?: 'card' | 'modal' | 'thumbnail';
  initialStyle?: RenderStyle3D;
  defaultDark?: boolean;
  className?: string;
}

const isHeadlessEnv =
  typeof navigator !== 'undefined' &&
  (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

export const ChemicalStructure2D: React.FC<ChemicalStructure2DProps> = ({
  compound,
  variant = 'card',
  initialStyle = 'ball-and-stick',
  defaultDark = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate deterministic 3D conformer immediately (0ms cached, never shifts asynchronously)
  const activeMolecule = useMemo(
    () => generateMolecule3D(compound.id, compound.canonicalSmiles),
    [compound.id, compound.canonicalSmiles]
  );

  const [renderStyle, setRenderStyle] = useState<RenderStyle3D>(initialStyle);
  const [darkBackdrop, setDarkBackdrop] = useState<boolean>(
    defaultDark || variant === 'modal'
  );
  const [zoom, setZoom] = useState<number>(1.0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [turnCount, setTurnCount] = useState<number>(0);
  const [hoveredAtomIdx, setHoveredAtomIdx] = useState<number | null>(null);

  // Mutable 3D state in refs for zero-GC pointer dragging
  const rotMatRef = useRef<Mat3>(createInitialRotationMatrix(0.42, -0.52));
  const dragStateRef = useRef<{
    active: boolean;
    lastX: number;
    lastY: number;
    movedDist: number;
  }>({
    active: false,
    lastX: 0,
    lastY: 0,
    movedDist: 0,
  });
  const projectedAtomsRef = useRef<
    { index: number; sx: number; sy: number; sr: number; rz: number }[]
  >([]);

  // Reset rotation & zoom when compound changes
  useEffect(() => {
    rotMatRef.current = createInitialRotationMatrix(0.42, -0.52);
    setZoom(1.0);
    setHoveredAtomIdx(null);
  }, [compound.id]);

  // Core 3D software-accelerated perspective + Phong-shaded sphere & cylinder renderer
  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = Math.max(40, rect.width || (variant === 'thumbnail' ? 48 : 240));
    const height = Math.max(40, rect.height || (variant === 'thumbnail' ? 48 : 150));
    const dpr = isHeadlessEnv ? 1 : Math.min(window.devicePixelRatio || 1, 2);

    const targetW = Math.round(width * dpr);
    const targetH = Math.round(height * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Subtle 3D studio radial lighting backdrop when dark mode is active
    if (darkBackdrop && variant !== 'thumbnail') {
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.7
      );
      bgGrad.addColorStop(0, '#1E293B');
      bgGrad.addColorStop(1, '#0F172A');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle 3D perspective floor grid ring
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.38 * zoom,
        Math.min(width, height) * 0.38 * zoom,
        0,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    }

    const { atoms, bonds, boundingRadius } = activeMolecule;
    if (atoms.length === 0) {
      ctx.restore();
      return;
    }

    const m = rotMatRef.current;
    const cx = width * 0.5;
    const cy = height * 0.5;
    const paddingFactor =
      variant === 'thumbnail' ? 0.42 : variant === 'modal' ? 0.38 : 0.39;
    const baseScale =
      (Math.min(width, height) * paddingFactor * zoom) /
      Math.max(1.8, boundingRadius);
    const cameraDist = Math.max(14, boundingRadius * 3.4);

    // 1. Transform & project all 3D atoms
    const tAtoms = atoms.map((a) => {
      const rx = m[0] * a.x + m[1] * a.y + m[2] * a.z;
      const ry = m[3] * a.x + m[4] * a.y + m[5] * a.z;
      const rz = m[6] * a.x + m[7] * a.y + m[8] * a.z;

      // Perspective projection factor (positive rz is closer to viewer)
      const persp = cameraDist / Math.max(3, cameraDist - rz);
      const sx = cx + rx * baseScale * persp;
      const sy = cy - ry * baseScale * persp;

      const radiusAngstrom =
        renderStyle === 'spacefill'
          ? a.vdwRadius * 0.68
          : renderStyle === 'sticks'
          ? 0.24
          : a.covalentRadius * 0.56;

      const sr = Math.max(
        variant === 'thumbnail' ? 2.2 : 3.2,
        radiusAngstrom * baseScale * persp
      );

      // Depth normalized [-1, +1] for atmospheric depth cueing
      const depthNorm = Math.max(
        -1,
        Math.min(1, rz / Math.max(1.5, boundingRadius))
      );

      return {
        atom: a,
        rx,
        ry,
        rz,
        sx,
        sy,
        sr,
        persp,
        depthNorm,
      };
    });

    // Save projected positions for hover/click hit-testing
    projectedAtomsRef.current = tAtoms.map((ta) => ({
      index: ta.atom.index,
      sx: ta.sx,
      sy: ta.sy,
      sr: ta.sr,
      rz: ta.rz,
    }));

    // 2. Build unified Z-sorted render primitives (half-bonds + atom spheres)
    type RenderItem =
      | {
          kind: 'atom';
          z: number;
          ta: (typeof tAtoms)[number];
        }
      | {
          kind: 'bond';
          z: number;
          x1: number;
          y1: number;
          x2: number;
          y2: number;
          order: 1 | 1.5 | 2 | 3;
          isAromatic: boolean;
          color: string;
          thickness: number;
          depthNorm: number;
        };

    const renderList: RenderItem[] = [];

    for (const ta of tAtoms) {
      renderList.push({
        kind: 'atom',
        z: ta.rz,
        ta,
      });
    }

    if (renderStyle !== 'spacefill') {
      for (const b of bonds) {
        const a1 = tAtoms[b.from];
        const a2 = tAtoms[b.to];
        if (!a1 || !a2) continue;

        // Split each bond at midpoint so front half renders in front of back atom and behind front atom
        const mx = (a1.sx + a2.sx) * 0.5;
        const my = (a1.sy + a2.sy) * 0.5;
        const mz = (a1.rz + a2.rz) * 0.5;

        const baseThickness = Math.max(
          variant === 'thumbnail' ? 1.3 : 2.0,
          baseScale * (renderStyle === 'sticks' ? 0.22 : 0.16) * ((a1.persp + a2.persp) * 0.5)
        );

        const c1 = ELEMENT_CPK_COLORS[a1.atom.element].main;
        const c2 = ELEMENT_CPK_COLORS[a2.atom.element].main;

        renderList.push({
          kind: 'bond',
          z: (a1.rz + mz) * 0.5 - 0.04,
          x1: a1.sx,
          y1: a1.sy,
          x2: mx,
          y2: my,
          order: b.order,
          isAromatic: b.isAromatic,
          color: c1,
          thickness: baseThickness,
          depthNorm: (a1.depthNorm + a2.depthNorm) * 0.5,
        });

        renderList.push({
          kind: 'bond',
          z: (a2.rz + mz) * 0.5 - 0.04,
          x1: mx,
          y1: my,
          x2: a2.sx,
          y2: a2.sy,
          order: b.order,
          isAromatic: b.isAromatic,
          color: c2,
          thickness: baseThickness,
          depthNorm: (a1.depthNorm + a2.depthNorm) * 0.5,
        });
      }
    }

    // Painter's algorithm sort: back-to-front (lowest Z to highest Z)
    renderList.sort((a, b) => a.z - b.z);

    // 3. Render sorted 3D bonds and 3D spheres
    for (const item of renderList) {
      if (item.kind === 'bond') {
        const { x1, y1, x2, y2, order, isAromatic, color, thickness, depthNorm } =
          item;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        if (len < 0.4) continue;

        const nx = -dy / len;
        const ny = dx / len;

        ctx.globalAlpha = 0.72 + 0.28 * ((depthNorm + 1) * 0.5);
        ctx.lineCap = 'round';

        const drawCylinderSegment = (
          sx1: number,
          sy1: number,
          sx2: number,
          sy2: number,
          w: number,
          dashed = false
        ) => {
          if (dashed) {
            ctx.setLineDash([Math.max(2, w * 1.2), Math.max(2, w * 1.1)]);
          } else {
            ctx.setLineDash([]);
          }
          // Outer cylinder body
          ctx.strokeStyle =
            color === '#334155' && darkBackdrop ? '#94A3B8' : color;
          ctx.lineWidth = w;
          ctx.beginPath();
          ctx.moveTo(sx1, sy1);
          ctx.lineTo(sx2, sy2);
          ctx.stroke();

          // 3D Cylindrical specular highlight ridge
          if (!dashed && w >= 2.2) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.lineWidth = Math.max(0.8, w * 0.32);
            ctx.beginPath();
            ctx.moveTo(sx1 - nx * w * 0.18, sy1 - ny * w * 0.18);
            ctx.lineTo(sx2 - nx * w * 0.18, sy2 - ny * w * 0.18);
            ctx.stroke();
          }
          ctx.setLineDash([]);
        };

        if (order === 2) {
          const offset = Math.max(1.6, thickness * 0.85);
          drawCylinderSegment(
            x1 + nx * offset,
            y1 + ny * offset,
            x2 + nx * offset,
            y2 + ny * offset,
            thickness * 0.68
          );
          drawCylinderSegment(
            x1 - nx * offset,
            y1 - ny * offset,
            x2 - nx * offset,
            y2 - ny * offset,
            thickness * 0.68
          );
        } else if (order === 1.5 || isAromatic) {
          const offset = Math.max(1.5, thickness * 0.82);
          drawCylinderSegment(
            x1 - nx * offset * 0.4,
            y1 - ny * offset * 0.4,
            x2 - nx * offset * 0.4,
            y2 - ny * offset * 0.4,
            thickness * 0.78
          );
          drawCylinderSegment(
            x1 + nx * offset,
            y1 + ny * offset,
            x2 + nx * offset,
            y2 + ny * offset,
            thickness * 0.55,
            true
          );
        } else if (order === 3) {
          const offset = Math.max(2.0, thickness * 1.05);
          drawCylinderSegment(x1, y1, x2, y2, thickness * 0.6);
          drawCylinderSegment(
            x1 + nx * offset,
            y1 + ny * offset,
            x2 + nx * offset,
            y2 + ny * offset,
            thickness * 0.52
          );
          drawCylinderSegment(
            x1 - nx * offset,
            y1 - ny * offset,
            x2 - nx * offset,
            y2 - ny * offset,
            thickness * 0.52
          );
        } else {
          drawCylinderSegment(x1, y1, x2, y2, thickness);
        }
      } else {
        // 3D Atom Sphere with radial Phong specular shading
        const { ta } = item;
        const { atom, sx, sy, sr, depthNorm } = ta;
        const cpk = ELEMENT_CPK_COLORS[atom.element];
        const isHovered = hoveredAtomIdx === atom.index;

        ctx.globalAlpha = 0.78 + 0.22 * ((depthNorm + 1) * 0.5);

        // Selection / hover halo
        if (isHovered) {
          ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
          ctx.beginPath();
          ctx.arc(sx, sy, sr + 4.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3D Radial Gradient (light source at top-left-front)
        const grad = ctx.createRadialGradient(
          sx - sr * 0.34,
          sy - sr * 0.34,
          sr * 0.08,
          sx,
          sy,
          sr
        );
        const mainColor =
          atom.element === 'C' && darkBackdrop ? '#64748B' : cpk.main;
        grad.addColorStop(0, cpk.highlight);
        grad.addColorStop(0.55, mainColor);
        grad.addColorStop(1, cpk.shadow);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();

        // Crisp rim outline for figure-ground separation
        ctx.strokeStyle = darkBackdrop
          ? 'rgba(15, 23, 42, 0.65)'
          : 'rgba(15, 23, 42, 0.28)';
        ctx.lineWidth = variant === 'thumbnail' ? 0.5 : 0.8;
        ctx.stroke();

        // Heteroatom symbol badge on the 3D sphere (O, N, S, Cl, F, Br, I, P, Xe)
        if (
          variant !== 'thumbnail' &&
          atom.element !== 'C' &&
          sr >= 5.2 &&
          renderStyle !== 'sticks'
        ) {
          ctx.fillStyle = cpk.labelColor;
          ctx.font = `700 ${Math.round(Math.min(11, Math.max(7.5, sr * 0.92)))}px ui-monospace, SFMono-Regular, Menlo, monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(atom.element, sx, sy + 0.5);
        }
      }
    }

    ctx.globalAlpha = 1;
    ctx.restore();
  }, [activeMolecule, darkBackdrop, hoveredAtomIdx, renderStyle, variant, zoom]);

  // Observe container resize and draw static 3D frame on state changes
  useEffect(() => {
    drawScene();
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => {
      drawScene();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [drawScene]);

  // Pointer Drag Handlers (Turn the 3D molecule around manually in any direction)
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (variant === 'thumbnail') return;
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStateRef.current = {
      active: true,
      lastX: e.clientX,
      lastY: e.clientY,
      movedDist: 0,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (variant === 'thumbnail') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (dragStateRef.current.active) {
      e.stopPropagation();
      const dx = e.clientX - dragStateRef.current.lastX;
      const dy = e.clientY - dragStateRef.current.lastY;
      dragStateRef.current.lastX = e.clientX;
      dragStateRef.current.lastY = e.clientY;
      dragStateRef.current.movedDist += Math.hypot(dx, dy);

      const sensitivity = 0.014;
      const dYaw = dx * sensitivity;
      const dPitch = dy * sensitivity;

      rotMatRef.current = applyTrackballDelta(rotMatRef.current, dYaw, dPitch);
      drawScene();
    } else if (variant === 'modal') {
      // Hit-test atoms for hover inspection in modal view
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let bestIdx: number | null = null;
      let bestZ = -Infinity;

      for (const pa of projectedAtomsRef.current) {
        const d = Math.hypot(mx - pa.sx, my - pa.sy);
        if (d <= pa.sr + 4 && pa.rz >= bestZ) {
          bestZ = pa.rz;
          bestIdx = pa.index;
        }
      }
      if (bestIdx !== hoveredAtomIdx) {
        setHoveredAtomIdx(bestIdx);
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (variant === 'thumbnail') return;
    if (dragStateRef.current.active) {
      e.stopPropagation();
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
      if (dragStateRef.current.movedDist > 2) {
        setTurnCount((c) => c + 1);
      }
      dragStateRef.current.active = false;
      setIsDragging(false);
      drawScene();
    }
  };

  // Keyboard rotation support for accessibility and deterministic testing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (variant === 'thumbnail') return;
    const step = 0.28;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      rotMatRef.current = applyTrackballDelta(rotMatRef.current, -step, 0);
      setTurnCount((c) => c + 1);
      drawScene();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      rotMatRef.current = applyTrackballDelta(rotMatRef.current, step, 0);
      setTurnCount((c) => c + 1);
      drawScene();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      rotMatRef.current = applyTrackballDelta(rotMatRef.current, 0, -step);
      setTurnCount((c) => c + 1);
      drawScene();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      rotMatRef.current = applyTrackballDelta(rotMatRef.current, 0, step);
      setTurnCount((c) => c + 1);
      drawScene();
    }
  };

  const handleResetOrientation = (e: React.MouseEvent) => {
    e.stopPropagation();
    rotMatRef.current = createInitialRotationMatrix(0.42, -0.52);
    setZoom(1.0);
    setTurnCount(0);
    drawScene();
  };

  const handleRotateStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    rotMatRef.current = applyTrackballDelta(rotMatRef.current, 0.55, 0.25);
    setTurnCount((c) => c + 1);
    drawScene();
  };

  const hoveredAtom =
    hoveredAtomIdx !== null ? activeMolecule.atoms[hoveredAtomIdx] : null;

  if (variant === 'thumbnail') {
    return (
      <div
        ref={containerRef}
        className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block pointer-events-none"
          aria-label={`3D molecular model of ${compound.name}`}
        />
      </div>
    );
  }

  if (variant === 'modal') {
    const elementEntries = Object.entries(activeMolecule.elementCounts) as [
      ElementSymbol,
      number,
    ][];

    return (
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        data-testid={`molecule-3d-modal-${compound.id}`}
        data-turns={turnCount}
        data-style={renderStyle}
        role="region"
        aria-label={`Interactive 3D molecular model of ${compound.name}. Drag or press arrow keys to rotate 360 degrees.`}
        className={`relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden select-none outline-hidden focus:ring-2 focus:ring-[#007AFF] transition-colors flex flex-col justify-between ${
          darkBackdrop
            ? 'bg-slate-900 text-slate-100 border border-slate-700/80'
            : 'bg-slate-50 text-slate-900 border border-slate-200/90'
        } ${className}`}
      >
        {/* Top Header Bar: 3D Badge + CPK Element Legend (Zero Overlap) */}
        <div
          className={`px-3 py-1.5 z-10 flex items-center justify-between gap-2 shrink-0 border-b ${
            darkBackdrop
              ? 'bg-slate-900/95 border-slate-800'
              : 'bg-white/95 border-slate-200/80'
          }`}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#007AFF] text-white shadow-2xs shrink-0">
              <Move3d className="w-3 h-3" />
              <span>
                3D · DRAG<span className="hidden sm:inline"> TO TURN</span>
              </span>
            </span>
            {hoveredAtom ? (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/40 truncate">
                #{hoveredAtom.index + 1} {hoveredAtom.element} (
                {hoveredAtom.hybridization})
              </span>
            ) : (
              <span
                className={`text-[10px] font-mono truncate hidden lg:inline ${
                  darkBackdrop ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {activeMolecule.atoms.length} atoms · {activeMolecule.bonds.length} bonds
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 flex-wrap justify-end shrink-0">
            {elementEntries.map(([el, count]) => (
              <span
                key={el}
                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-mono font-bold ${
                  darkBackdrop
                    ? 'bg-slate-800 text-slate-200 border border-slate-700'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: ELEMENT_CPK_COLORS[el].main }}
                />
                <span>
                  {el}:{count}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Unobstructed Interactive 3D Canvas */}
        <div className="relative flex-1 min-h-0 w-full">
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`w-full h-full block touch-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          />
        </div>

        {/* Dedicated Bottom Interactive 3D Control Dock */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`px-2.5 py-1.5 z-10 flex flex-wrap items-center justify-between gap-1.5 shrink-0 border-t ${
            darkBackdrop
              ? 'bg-slate-900/95 border-slate-800 text-slate-200'
              : 'bg-white/95 border-slate-200/80 text-slate-700'
          }`}
        >
          {/* 3D Representation Style Buttons */}
          <div className="flex items-center gap-1">
            {(
              [
                { id: 'ball-and-stick', label: 'Ball & Stick' },
                { id: 'spacefill', label: 'Spacefill (CPK)' },
                { id: 'sticks', label: 'Licorice' },
              ] as const
            ).map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setRenderStyle(mode.id)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold transition-colors ${
                  renderStyle === mode.id
                    ? 'bg-[#007AFF] text-white'
                    : darkBackdrop
                    ? 'hover:bg-slate-800 text-slate-300'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          {/* 3D Turn / Zoom / Theme Controls (Static by default, turns only on user action) */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={`Turn 3D model of ${compound.shortName}`}
              onClick={handleRotateStep}
              className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold flex items-center gap-1 transition-colors ${
                darkBackdrop
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
              title="Turn 3D model 45°"
            >
              <Move3d className="w-3 h-3 text-[#007AFF]" />
              <span>Turn</span>
            </button>

            <button
              type="button"
              aria-label="Zoom in 3D structure"
              onClick={() => setZoom((z) => Math.min(1.8, +(z + 0.18).toFixed(2)))}
              className={`p-1 rounded-lg transition-colors ${
                darkBackdrop
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              aria-label="Zoom out 3D structure"
              onClick={() => setZoom((z) => Math.max(0.65, +(z - 0.18).toFixed(2)))}
              className={`p-1 rounded-lg transition-colors ${
                darkBackdrop
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              aria-label="Reset 3D orientation"
              onClick={handleResetOrientation}
              className={`p-1 rounded-lg transition-colors ${
                darkBackdrop
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
              title="Reset 3D View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              aria-label={
                darkBackdrop ? 'Switch to light 3D backdrop' : 'Switch to dark 3D backdrop'
              }
              onClick={() => setDarkBackdrop((d) => !d)}
              className={`p-1 rounded-lg transition-colors ${
                darkBackdrop
                  ? 'hover:bg-slate-800 text-amber-300'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
              title="Toggle Dark/Light 3D Backdrop"
            >
              {darkBackdrop ? (
                <Sun className="w-3.5 h-3.5" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default: Interactive 3D Card Viewer (used on all Library cards)
  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-testid={`molecule-3d-card-${compound.id}`}
      data-turns={turnCount}
      data-style={renderStyle}
      role="region"
      aria-label={`Interactive 3D molecular model of ${compound.name}. Drag to turn around in 3D.`}
      className={`relative w-full h-full min-h-[104px] flex items-center justify-center select-none group/mol3d outline-hidden focus:ring-2 focus:ring-[#007AFF] rounded-lg overflow-hidden ${
        darkBackdrop ? 'bg-slate-900' : ''
      } ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`w-full h-full block touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      />

      {/* Interactive 3D Drag Prompt Pill */}
      <div className="absolute bottom-1 left-1 z-10 pointer-events-none flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-900/75 text-white text-[8.5px] font-mono font-semibold">
        <Move3d className="w-2.5 h-2.5 text-sky-400 shrink-0" />
        <span>{isDragging ? 'Turning 3D...' : '3D · Drag'}</span>
      </div>

      {/* Quick Turn & Style Mini Controls on Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-1 right-1 z-10 flex items-center gap-0.5"
      >
        <button
          type="button"
          aria-label={`Turn 3D model of ${compound.shortName}`}
          onClick={handleRotateStep}
          title="Turn 3D Model"
          className="px-1.5 py-0.5 rounded bg-white/90 hover:bg-[#007AFF] hover:text-white text-slate-700 border border-slate-200/90 text-[8.5px] font-mono font-bold transition-colors shadow-2xs"
        >
          Turn
        </button>
        <button
          type="button"
          aria-label={`Toggle CPK spacefill for ${compound.shortName}`}
          onClick={() =>
            setRenderStyle((prev) =>
              prev === 'ball-and-stick' ? 'spacefill' : 'ball-and-stick'
            )
          }
          title="Toggle Ball & Stick / Spacefill CPK"
          className="p-0.5 rounded bg-white/90 hover:bg-[#007AFF] hover:text-white text-slate-700 border border-slate-200/90 transition-colors shadow-2xs"
        >
          <Box className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
};

export const ChemicalStructure3D = ChemicalStructure2D;
