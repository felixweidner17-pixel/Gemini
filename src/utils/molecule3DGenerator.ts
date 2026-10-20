export type ElementSymbol =
  | 'C'
  | 'N'
  | 'O'
  | 'S'
  | 'P'
  | 'F'
  | 'Cl'
  | 'Br'
  | 'I'
  | 'B'
  | 'Xe'
  | 'H';

export interface Atom3D {
  index: number;
  element: ElementSymbol;
  x: number;
  y: number;
  z: number;
  charge: number;
  isAromatic: boolean;
  hybridization: 'sp' | 'sp2' | 'sp3';
  ringSizes: number[];
  covalentRadius: number;
  vdwRadius: number;
}

export interface Bond3D {
  from: number;
  to: number;
  order: 1 | 1.5 | 2 | 3;
  isAromatic: boolean;
  isInRing: boolean;
}

export interface Molecule3DStructure {
  id: string;
  smiles: string;
  atoms: Atom3D[];
  bonds: Bond3D[];
  elementCounts: Partial<Record<ElementSymbol, number>>;
  boundingRadius: number;
  source: 'vsepr-3d' | 'pubchem-3d';
}

export const ELEMENT_CPK_COLORS: Record<
  ElementSymbol,
  {
    main: string;
    highlight: string;
    shadow: string;
    labelColor: string;
    covalentRadius: number;
    vdwRadius: number;
  }
> = {
  C: {
    main: '#334155',
    highlight: '#94A3B8',
    shadow: '#0F172A',
    labelColor: '#F8FAFC',
    covalentRadius: 0.76,
    vdwRadius: 1.7,
  },
  N: {
    main: '#2563EB',
    highlight: '#93C5FD',
    shadow: '#1E3A8A',
    labelColor: '#FFFFFF',
    covalentRadius: 0.71,
    vdwRadius: 1.55,
  },
  O: {
    main: '#DC2626',
    highlight: '#FCA5A5',
    shadow: '#7F1D1D',
    labelColor: '#FFFFFF',
    covalentRadius: 0.66,
    vdwRadius: 1.52,
  },
  S: {
    main: '#D97706',
    highlight: '#FDE047',
    shadow: '#78350F',
    labelColor: '#FFFFFF',
    covalentRadius: 1.05,
    vdwRadius: 1.8,
  },
  P: {
    main: '#EA580C',
    highlight: '#FDBA74',
    shadow: '#7C2D12',
    labelColor: '#FFFFFF',
    covalentRadius: 1.07,
    vdwRadius: 1.8,
  },
  F: {
    main: '#059669',
    highlight: '#6EE7B7',
    shadow: '#064E3B',
    labelColor: '#FFFFFF',
    covalentRadius: 0.57,
    vdwRadius: 1.47,
  },
  Cl: {
    main: '#0D9488',
    highlight: '#5EEAD4',
    shadow: '#134E4A',
    labelColor: '#FFFFFF',
    covalentRadius: 1.02,
    vdwRadius: 1.75,
  },
  Br: {
    main: '#9333EA',
    highlight: '#D8B4FE',
    shadow: '#4C1D95',
    labelColor: '#FFFFFF',
    covalentRadius: 1.2,
    vdwRadius: 1.85,
  },
  I: {
    main: '#7C3AED',
    highlight: '#C4B5FD',
    shadow: '#3B0764',
    labelColor: '#FFFFFF',
    covalentRadius: 1.39,
    vdwRadius: 1.98,
  },
  B: {
    main: '#DB2777',
    highlight: '#F9A8D4',
    shadow: '#831843',
    labelColor: '#FFFFFF',
    covalentRadius: 0.84,
    vdwRadius: 1.92,
  },
  Xe: {
    main: '#0891B2',
    highlight: '#67E8F9',
    shadow: '#164E63',
    labelColor: '#FFFFFF',
    covalentRadius: 1.4,
    vdwRadius: 2.16,
  },
  H: {
    main: '#CBD5E1',
    highlight: '#FFFFFF',
    shadow: '#64748B',
    labelColor: '#0F172A',
    covalentRadius: 0.31,
    vdwRadius: 1.2,
  },
};

const structureCache = new Map<string, Molecule3DStructure>();

function normalizeElement(raw: string): ElementSymbol {
  const clean = raw.trim();
  if (clean === 'Cl' || clean === 'cl') return 'Cl';
  if (clean === 'Br' || clean === 'br') return 'Br';
  if (clean === 'Xe' || clean === 'xe') return 'Xe';
  const upper = clean.charAt(0).toUpperCase() as ElementSymbol;
  if (upper in ELEMENT_CPK_COLORS) return upper;
  return 'C';
}

interface RawAtom {
  element: ElementSymbol;
  charge: number;
  isAromatic: boolean;
}

interface RawBond {
  from: number;
  to: number;
  order: 1 | 1.5 | 2 | 3;
  isAromatic: boolean;
}

/**
 * Parses a canonical SMILES string into a topological atom & bond graph.
 */
export function parseSmilesToGraph(smiles: string): {
  atoms: RawAtom[];
  bonds: RawBond[];
} {
  const atoms: RawAtom[] = [];
  const bonds: RawBond[] = [];
  const branchStack: number[] = [];
  const openRings = new Map<
    number,
    { atomIdx: number; order: 1 | 1.5 | 2 | 3; isAromatic: boolean }
  >();

  let currentAtom = -1;
  let nextBondOrder: 1 | 1.5 | 2 | 3 | null = null;
  let nextBondAromatic = false;

  const addAtom = (element: ElementSymbol, charge: number, isAromatic: boolean) => {
    const newIdx = atoms.length;
    atoms.push({ element, charge, isAromatic });
    if (currentAtom !== -1) {
      const bothAromatic = isAromatic && atoms[currentAtom].isAromatic;
      const order: 1 | 1.5 | 2 | 3 =
        nextBondOrder !== null
          ? nextBondOrder
          : bothAromatic
          ? 1.5
          : 1;
      bonds.push({
        from: currentAtom,
        to: newIdx,
        order,
        isAromatic: nextBondAromatic || bothAromatic,
      });
    }
    currentAtom = newIdx;
    nextBondOrder = null;
    nextBondAromatic = false;
  };

  let i = 0;
  const len = smiles.length;
  while (i < len) {
    const ch = smiles[i];

    // Bracket atom e.g. [N+], [O-], [Xe]
    if (ch === '[') {
      const closeIdx = smiles.indexOf(']', i);
      if (closeIdx !== -1) {
        const content = smiles.slice(i + 1, closeIdx);
        // Extract element letters (ignore H attached inside brackets like [nH])
        const elemMatch = content.match(/^(Cl|Br|Xe|[BCNOPSFIbcnopsfi])/);
        const elemStr = elemMatch ? elemMatch[1] : 'C';
        const isLower = elemStr === elemStr.toLowerCase() && elemStr !== 'Xe';
        const charge = content.includes('+')
          ? 1
          : content.includes('-')
          ? -1
          : 0;
        addAtom(normalizeElement(elemStr), charge, isLower);
        i = closeIdx + 1;
        continue;
      }
    }

    // Branches
    if (ch === '(') {
      if (currentAtom !== -1) branchStack.push(currentAtom);
      i++;
      continue;
    }
    if (ch === ')') {
      if (branchStack.length > 0) {
        currentAtom = branchStack.pop()!;
      }
      nextBondOrder = null;
      nextBondAromatic = false;
      i++;
      continue;
    }

    // Disconnected fragments (salts/hydrates)
    if (ch === '.') {
      currentAtom = -1;
      nextBondOrder = null;
      nextBondAromatic = false;
      i++;
      continue;
    }

    // Bond order modifiers
    if (ch === '=') {
      nextBondOrder = 2;
      i++;
      continue;
    }
    if (ch === '#') {
      nextBondOrder = 3;
      i++;
      continue;
    }
    if (ch === ':') {
      nextBondOrder = 1.5;
      nextBondAromatic = true;
      i++;
      continue;
    }
    if (ch === '-') {
      nextBondOrder = 1;
      i++;
      continue;
    }
    if (ch === '/' || ch === '\\' || ch === '@') {
      i++;
      continue;
    }

    // Ring closure digits (%10 or 1-9)
    if (ch === '%' && i + 2 < len) {
      const ringNum = parseInt(smiles.slice(i + 1, i + 3), 10);
      if (!Number.isNaN(ringNum) && currentAtom !== -1) {
        if (openRings.has(ringNum)) {
          const prev = openRings.get(ringNum)!;
          openRings.delete(ringNum);
          if (prev.atomIdx !== currentAtom) {
            const order =
              nextBondOrder !== null
                ? nextBondOrder
                : prev.order !== 1
                ? prev.order
                : atoms[prev.atomIdx].isAromatic && atoms[currentAtom].isAromatic
                ? 1.5
                : 1;
            bonds.push({
              from: prev.atomIdx,
              to: currentAtom,
              order,
              isAromatic: prev.isAromatic || nextBondAromatic || order === 1.5,
            });
          }
        } else {
          openRings.set(ringNum, {
            atomIdx: currentAtom,
            order: nextBondOrder ?? 1,
            isAromatic: nextBondAromatic,
          });
        }
        nextBondOrder = null;
        nextBondAromatic = false;
        i += 3;
        continue;
      }
    }

    if (ch >= '0' && ch <= '9') {
      const ringNum = ch.charCodeAt(0) - 48;
      if (currentAtom !== -1) {
        if (openRings.has(ringNum)) {
          const prev = openRings.get(ringNum)!;
          openRings.delete(ringNum);
          if (prev.atomIdx !== currentAtom) {
            const order =
              nextBondOrder !== null
                ? nextBondOrder
                : prev.order !== 1
                ? prev.order
                : atoms[prev.atomIdx].isAromatic && atoms[currentAtom].isAromatic
                ? 1.5
                : 1;
            bonds.push({
              from: prev.atomIdx,
              to: currentAtom,
              order,
              isAromatic: prev.isAromatic || nextBondAromatic || order === 1.5,
            });
          }
        } else {
          openRings.set(ringNum, {
            atomIdx: currentAtom,
            order: nextBondOrder ?? 1,
            isAromatic: nextBondAromatic,
          });
        }
      }
      nextBondOrder = null;
      nextBondAromatic = false;
      i++;
      continue;
    }

    // Two-character elements: Cl, Br, Xe
    const twoChar = smiles.slice(i, i + 2);
    if (twoChar === 'Cl' || twoChar === 'Br' || twoChar === 'Xe') {
      addAtom(twoChar as ElementSymbol, 0, false);
      i += 2;
      continue;
    }

    // Single-character organic or aromatic atom
    if (/[BCNOPSFIbcnopsfi]/.test(ch)) {
      const isArom = ch === ch.toLowerCase();
      addAtom(normalizeElement(ch), 0, isArom);
      i++;
      continue;
    }

    i++;
  }

  return { atoms, bonds };
}

/**
 * Applies structural modifications to the topological graph for dynamic cannabinoid derivatives
 * (-mod-oac, -mod-9oh, -mod-10oh, -mod-8oh, -mod-11oh) so their 3D model reflects the derivative.
 */
function applyDerivativeToGraph(
  id: string,
  atoms: RawAtom[],
  bonds: RawBond[]
): void {
  if (atoms.length === 0) return;

  const adj: number[][] = Array.from({ length: atoms.length }, () => []);
  for (const b of bonds) {
    adj[b.from].push(b.to);
    adj[b.to].push(b.from);
  }

  if (id.endsWith('-mod-oac')) {
    // Find a terminal oxygen (degree 1 single bond, phenolic -OH) and attach -C(=O)CH3
    const termOxygen = atoms.findIndex(
      (a, idx) => a.element === 'O' && adj[idx].length === 1
    );
    if (termOxygen !== -1) {
      const carbonylC = atoms.length;
      atoms.push({ element: 'C', charge: 0, isAromatic: false });
      const carbonylO = atoms.length;
      atoms.push({ element: 'O', charge: 0, isAromatic: false });
      const methylC = atoms.length;
      atoms.push({ element: 'C', charge: 0, isAromatic: false });

      bonds.push({ from: termOxygen, to: carbonylC, order: 1, isAromatic: false });
      bonds.push({ from: carbonylC, to: carbonylO, order: 2, isAromatic: false });
      bonds.push({ from: carbonylC, to: methylC, order: 1, isAromatic: false });
    }
  } else if (
    id.endsWith('-mod-9oh') ||
    id.endsWith('-mod-10oh') ||
    id.endsWith('-mod-8oh') ||
    id.endsWith('-mod-11oh')
  ) {
    // Attach an extra hydroxyl (-OH) to a ring or exocyclic carbon
    const targetCarbon = atoms.findIndex(
      (a, idx) => a.element === 'C' && adj[idx].length >= 2 && adj[idx].length <= 3
    );
    if (targetCarbon !== -1) {
      const ohIdx = atoms.length;
      atoms.push({ element: 'O', charge: 0, isAromatic: false });
      bonds.push({ from: targetCarbon, to: ohIdx, order: 1, isAromatic: false });
    }
  }
}

/**
 * Deterministic pseudo-random generator seeded by compound ID / SMILES
 */
function createSeededRng(seedStr: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generates a realistic 3D molecular conformer (atomic coordinates & bonds) from SMILES + ID.
 */
export function generateMolecule3D(
  id: string,
  smiles: string
): Molecule3DStructure {
  const cacheKey = `${id}::${smiles}`;
  const cached = structureCache.get(cacheKey);
  if (cached) return cached;

  const { atoms: rawAtoms, bonds: rawBonds } = parseSmilesToGraph(smiles);
  applyDerivativeToGraph(id, rawAtoms, rawBonds);

  // Fallback for single-atom or empty SMILES (e.g., [Xe])
  if (rawAtoms.length === 0) {
    rawAtoms.push({ element: 'C', charge: 0, isAromatic: false });
  }

  const n = rawAtoms.length;
  const adj: { to: number; bondIdx: number; order: number }[][] = Array.from(
    { length: n },
    () => []
  );
  rawBonds.forEach((b, idx) => {
    adj[b.from].push({ to: b.to, bondIdx: idx, order: b.order });
    adj[b.to].push({ to: b.from, bondIdx: idx, order: b.order });
  });

  // 1. Detect Smallest Rings (cycles of length 3..8) via BFS without each bond
  const atomRingSizes: number[][] = Array.from({ length: n }, () => []);
  const bondInRing: boolean[] = new Array(rawBonds.length).fill(false);
  const rings: number[][] = [];
  const seenRingKeys = new Set<string>();

  for (let bIdx = 0; bIdx < rawBonds.length; bIdx++) {
    const { from: start, to: target } = rawBonds[bIdx];
    const parent = new Int32Array(n).fill(-1);
    const visited = new Uint8Array(n);
    const queue: number[] = [start];
    visited[start] = 1;
    let found = false;

    while (queue.length > 0 && !found) {
      const curr = queue.shift()!;
      for (const edge of adj[curr]) {
        if (edge.bondIdx === bIdx) continue;
        if (!visited[edge.to]) {
          visited[edge.to] = 1;
          parent[edge.to] = curr;
          if (edge.to === target) {
            found = true;
            break;
          }
          queue.push(edge.to);
        }
      }
    }

    if (found) {
      const cycle: number[] = [target];
      let p = parent[target];
      while (p !== -1 && cycle.length <= 10) {
        cycle.push(p);
        if (p === start) break;
        p = parent[p];
      }
      if (cycle.length >= 3 && cycle.length <= 8) {
        bondInRing[bIdx] = true;
        const sortedKey = [...cycle].sort((a, b) => a - b).join(',');
        if (!seenRingKeys.has(sortedKey)) {
          seenRingKeys.add(sortedKey);
          rings.push(cycle);
          for (const aIdx of cycle) {
            atomRingSizes[aIdx].push(cycle.length);
          }
        }
      }
    }
  }

  // 2. Determine hybridization & aromaticity
  const hasDoubleOrTriple = new Uint8Array(n);
  const hasTriple = new Uint8Array(n);
  for (const b of rawBonds) {
    if (b.order >= 2) {
      hasDoubleOrTriple[b.from] = 1;
      hasDoubleOrTriple[b.to] = 1;
    }
    if (b.order === 3) {
      hasTriple[b.from] = 1;
      hasTriple[b.to] = 1;
    }
  }

  // Mark conjugated 6-membered rings with >= 2 double bonds as aromatic
  for (const ring of rings) {
    if (ring.length === 5 || ring.length === 6) {
      const allSp2 = ring.every(
        (idx) => hasDoubleOrTriple[idx] === 1 || rawAtoms[idx].isAromatic || rawAtoms[idx].element !== 'C'
      );
      let doubleCount = 0;
      for (const b of rawBonds) {
        if (ring.includes(b.from) && ring.includes(b.to) && b.order >= 1.5) {
          doubleCount++;
        }
      }
      if (allSp2 && doubleCount >= 2) {
        for (const idx of ring) {
          rawAtoms[idx].isAromatic = true;
        }
        for (const b of rawBonds) {
          if (ring.includes(b.from) && ring.includes(b.to)) {
            b.isAromatic = true;
          }
        }
      }
    }
  }

  const hybridizations: ('sp' | 'sp2' | 'sp3')[] = rawAtoms.map((a, idx) => {
    if (hasTriple[idx]) return 'sp';
    if (a.isAromatic || hasDoubleOrTriple[idx]) return 'sp2';
    return 'sp3';
  });

  // 3. Initial 3D Coordinate Seeding (Ring-aware + Tetrahedral 3D Torsion)
  const rng = createSeededRng(cacheKey);
  const px = new Float64Array(n);
  const py = new Float64Array(n);
  const pz = new Float64Array(n);
  const placed = new Uint8Array(n);

  // Place rings first if present, else start from atom 0
  if (rings.length > 0) {
    const firstRing = rings[0];
    const rLen = firstRing.length;
    const radius = 1.42 / (2 * Math.sin(Math.PI / rLen));
    const isAromRing = firstRing.every((idx) => rawAtoms[idx].isAromatic);
    for (let k = 0; k < rLen; k++) {
      const aIdx = firstRing[k];
      const angle = (2 * Math.PI * k) / rLen;
      px[aIdx] = radius * Math.cos(angle);
      py[aIdx] = radius * Math.sin(angle);
      // Give saturated/non-aromatic rings authentic 3D chair/boat puckering!
      pz[aIdx] = isAromRing
        ? 0.04 * Math.sin(angle * 2)
        : (k % 2 === 0 ? 0.28 : -0.28);
      placed[aIdx] = 1;
    }
  } else {
    px[0] = 0;
    py[0] = 0;
    pz[0] = 0;
    placed[0] = 1;
  }

  // BFS placement for remaining atoms in 3D space
  const bfsQueue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (placed[i]) bfsQueue.push(i);
  }
  if (bfsQueue.length === 0) {
    placed[0] = 1;
    bfsQueue.push(0);
  }

  for (let pass = 0; pass < n; pass++) {
    while (bfsQueue.length > 0) {
      const curr = bfsQueue.shift()!;
      const neighbors = adj[curr];

      // Compute average direction from already-placed neighbors of curr
      let dirX = 0;
      let dirY = 0;
      let dirZ = 0;
      let placedNeighborCount = 0;
      for (const nb of neighbors) {
        if (placed[nb.to]) {
          dirX += px[curr] - px[nb.to];
          dirY += py[curr] - py[nb.to];
          dirZ += pz[curr] - pz[nb.to];
          placedNeighborCount++;
        }
      }

      const dLen = Math.hypot(dirX, dirY, dirZ);
      if (dLen > 1e-4) {
        dirX /= dLen;
        dirY /= dLen;
        dirZ /= dLen;
      } else {
        dirX = 1;
        dirY = 0.2;
        dirZ = 0.15;
      }

      // Build two orthogonal vectors u, v perpendicular to dir
      let ux = -dirY;
      let uy = dirX;
      let uz = 0;
      if (Math.hypot(ux, uy, uz) < 0.1) {
        ux = 0;
        uy = -dirZ;
        uz = dirY;
      }
      const uLen = Math.hypot(ux, uy, uz) || 1;
      ux /= uLen;
      uy /= uLen;
      uz /= uLen;

      const vx = dirY * uz - dirZ * uy;
      const vy = dirZ * ux - dirX * uz;
      const vz = dirX * uy - dirY * ux;

      let unplacedSlot = 0;
      for (const nb of neighbors) {
        const next = nb.to;
        if (placed[next]) continue;

        const bondLen = 1.48;
        const isSp3 = hybridizations[curr] === 'sp3' || hybridizations[next] === 'sp3';
        const coneAngle = isSp3 ? 0.62 : 0.52; // ~35 deg from forward axis -> ~110-120 deg bond angle
        const azimuth =
          unplacedSlot * ((2 * Math.PI) / Math.max(2, neighbors.length - placedNeighborCount + 0.5)) +
          (curr % 2 === 0 ? 0.55 : -0.55) +
          (rng() - 0.5) * 0.35;

        const cosC = Math.cos(coneAngle);
        const sinC = Math.sin(coneAngle);
        const cosA = Math.cos(azimuth);
        const sinA = Math.sin(azimuth);

        const stepX = dirX * cosC + (ux * cosA + vx * sinA) * sinC;
        const stepY = dirY * cosC + (uy * cosA + vy * sinA) * sinC;
        const stepZ = dirZ * cosC + (uz * cosA + vz * sinA) * sinC;

        px[next] = px[curr] + stepX * bondLen;
        py[next] = py[curr] + stepY * bondLen;
        pz[next] =
          pz[curr] +
          stepZ * bondLen +
          (isSp3 ? (unplacedSlot % 2 === 0 ? 0.32 : -0.32) : (rng() - 0.5) * 0.18);

        placed[next] = 1;
        bfsQueue.push(next);
        unplacedSlot++;
      }
    }

    // Handle any unvisited disconnected components
    for (let i = 0; i < n; i++) {
      if (!placed[i]) {
        px[i] = (rng() - 0.5) * 3;
        py[i] = (rng() - 0.5) * 3;
        pz[i] = (rng() - 0.5) * 2;
        placed[i] = 1;
        bfsQueue.push(i);
        break;
      }
    }
  }

  // 4. Build 1-2 Bond & 1-3 Geminal Angle Constraints for 3D Molecular Mechanics Relaxation
  const constraints: {
    i: number;
    j: number;
    targetDist: number;
    stiffness: number;
  }[] = [];

  const bondedMatrix = new Uint8Array(n * n);

  // 1-2 Bond length constraints
  for (let bIdx = 0; bIdx < rawBonds.length; bIdx++) {
    const b = rawBonds[bIdx];
    bondedMatrix[b.from * n + b.to] = 1;
    bondedMatrix[b.to * n + b.from] = 1;

    const r1 = ELEMENT_CPK_COLORS[rawAtoms[b.from].element].covalentRadius;
    const r2 = ELEMENT_CPK_COLORS[rawAtoms[b.to].element].covalentRadius;
    let targetDist = r1 + r2;
    if (b.order === 2) targetDist *= 0.89;
    else if (b.order === 3) targetDist *= 0.81;
    else if (b.order === 1.5 || b.isAromatic) targetDist *= 0.93;

    constraints.push({
      i: b.from,
      j: b.to,
      targetDist,
      stiffness: 0.45,
    });
  }

  // 1-3 Geminal angle constraints
  for (let center = 0; center < n; center++) {
    const nbrs = adj[center];
    if (nbrs.length < 2) continue;

    const hyb = hybridizations[center];
    for (let a = 0; a < nbrs.length; a++) {
      for (let b = a + 1; b < nbrs.length; b++) {
        const u = nbrs[a].to;
        const v = nbrs[b].to;
        if (bondedMatrix[u * n + v] === 1) continue; // 3-membered ring already has 1-2 bond
        bondedMatrix[u * n + v] = 2;
        bondedMatrix[v * n + u] = 2;

        // Check if u, center, v share a small ring
        let sharedRingSize = 0;
        for (const ring of rings) {
          if (
            ring.includes(u) &&
            ring.includes(center) &&
            ring.includes(v)
          ) {
            sharedRingSize = ring.length;
            break;
          }
        }

        let angleRad = (109.47 * Math.PI) / 180;
        if (sharedRingSize > 0) {
          if (sharedRingSize === 4) angleRad = (88 * Math.PI) / 180;
          else if (sharedRingSize === 5) {
            angleRad = rawAtoms[center].isAromatic
              ? (108 * Math.PI) / 180
              : (104 * Math.PI) / 180;
          } else if (sharedRingSize === 6) {
            angleRad = rawAtoms[center].isAromatic
              ? (120 * Math.PI) / 180
              : (110.5 * Math.PI) / 180; // Chair conformation pucker!
          } else if (sharedRingSize >= 7) {
            angleRad = (116 * Math.PI) / 180; // Boat/twist-boat 7-ring (e.g. Quetiapine & Benzos!)
          }
        } else if (hyb === 'sp') {
          angleRad = Math.PI;
        } else if (hyb === 'sp2') {
          angleRad = (120 * Math.PI) / 180;
        }

        const l1 =
          ELEMENT_CPK_COLORS[rawAtoms[center].element].covalentRadius +
          ELEMENT_CPK_COLORS[rawAtoms[u].element].covalentRadius;
        const l2 =
          ELEMENT_CPK_COLORS[rawAtoms[center].element].covalentRadius +
          ELEMENT_CPK_COLORS[rawAtoms[v].element].covalentRadius;

        const target13 = Math.sqrt(
          Math.max(0.5, l1 * l1 + l2 * l2 - 2 * l1 * l2 * Math.cos(angleRad))
        );

        constraints.push({
          i: u,
          j: v,
          targetDist: target13,
          stiffness: 0.25,
        });
      }
    }
  }

  // Ring cross-ring stabilization for 5 and 6-membered rings
  for (const ring of rings) {
    if (ring.length === 6) {
      const isArom = ring.every((idx) => rawAtoms[idx].isAromatic);
      const paraDist = isArom ? 2.78 : 2.58; // Chair para-distance is shorter than flat hexagon!
      for (let k = 0; k < 3; k++) {
        const u = ring[k];
        const v = ring[k + 3];
        constraints.push({
          i: u,
          j: v,
          targetDist: paraDist,
          stiffness: 0.18,
        });
      }
    }
  }

  // 5. Iterative 3D Molecular Mechanics Relaxation (110 iterations)
  const iterations = 110;
  for (let iter = 0; iter < iterations; iter++) {
    const cooling = 1 - (iter / iterations) * 0.65;

    // Apply distance constraints (1-2 bonds, 1-3 angles, ring diagonals)
    for (let c = 0; c < constraints.length; c++) {
      const { i, j, targetDist, stiffness } = constraints[c];
      let dx = px[j] - px[i];
      let dy = py[j] - py[i];
      let dz = pz[j] - pz[i];
      const dist = Math.hypot(dx, dy, dz);
      if (dist < 1e-5) {
        dx = 0.05;
        dy = 0.03;
        dz = 0.04;
      } else {
        const diff = ((dist - targetDist) / dist) * stiffness * cooling;
        const ox = dx * diff * 0.5;
        const oy = dy * diff * 0.5;
        const oz = dz * diff * 0.5;
        px[i] += ox;
        py[i] += oy;
        pz[i] += oz;
        px[j] -= ox;
        py[j] -= oy;
        pz[j] -= oz;
      }
    }

    // Apply non-bonded 3D steric repulsion so substituents/rings spread cleanly in 3D
    const minNonBond = 2.35;
    const minNonBondSq = minNonBond * minNonBond;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (bondedMatrix[i * n + j] > 0) continue;
        const dx = px[j] - px[i];
        const dy = py[j] - py[i];
        let dz = pz[j] - pz[i];
        const dSq = dx * dx + dy * dy + dz * dz;
        if (dSq < minNonBondSq) {
          const dist = Math.sqrt(dSq) || 0.01;
          if (Math.abs(dz) < 0.05) {
            dz += (i + j) % 2 === 0 ? 0.08 : -0.08;
          }
          const push = ((minNonBond - dist) / dist) * 0.14 * cooling;
          px[i] -= dx * push;
          py[i] -= dy * push;
          pz[i] -= dz * push;
          px[j] += dx * push;
          py[j] += dy * push;
          pz[j] += dz * push;
        }
      }
    }
  }

  // Ensure multi-atom molecules have authentic 3D depth (Z spread) even for mostly planar aromatics
  if (n >= 3) {
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (let i = 0; i < n; i++) {
      if (pz[i] < minZ) minZ = pz[i];
      if (pz[i] > maxZ) maxZ = pz[i];
    }
    if (maxZ - minZ < 0.45) {
      // Apply a gentle 3D conformational tilt / out-of-plane torsion so turning around in 3D shows full depth
      for (let i = 0; i < n; i++) {
        pz[i] += 0.25 * Math.sin(px[i] * 0.7 + py[i] * 0.5);
      }
    }
  }

  // 6. Center molecule at (0, 0, 0) and compute bounding radius
  let cx = 0;
  let cy = 0;
  let cz = 0;
  for (let i = 0; i < n; i++) {
    cx += px[i];
    cy += py[i];
    cz += pz[i];
  }
  cx /= n;
  cy /= n;
  cz /= n;

  let maxRadius = 1.5;
  const elementCounts: Partial<Record<ElementSymbol, number>> = {};

  const atoms: Atom3D[] = rawAtoms.map((raw, i) => {
    const x = px[i] - cx;
    const y = py[i] - cy;
    const z = pz[i] - cz;
    const r = Math.hypot(x, y, z) + ELEMENT_CPK_COLORS[raw.element].covalentRadius;
    if (r > maxRadius) maxRadius = r;
    elementCounts[raw.element] = (elementCounts[raw.element] || 0) + 1;

    return {
      index: i,
      element: raw.element,
      x,
      y,
      z,
      charge: raw.charge,
      isAromatic: raw.isAromatic,
      hybridization: hybridizations[i],
      ringSizes: atomRingSizes[i],
      covalentRadius: ELEMENT_CPK_COLORS[raw.element].covalentRadius,
      vdwRadius: ELEMENT_CPK_COLORS[raw.element].vdwRadius,
    };
  });

  const bonds: Bond3D[] = rawBonds.map((b, idx) => ({
    from: b.from,
    to: b.to,
    order: b.order,
    isAromatic: b.isAromatic,
    isInRing: bondInRing[idx],
  }));

  const result: Molecule3DStructure = {
    id,
    smiles,
    atoms,
    bonds,
    elementCounts,
    boundingRadius: maxRadius,
    source: 'vsepr-3d',
  };

  structureCache.set(cacheKey, result);
  return result;
}

/**
 * Parses an NIH PubChem V2000 3D SDF string into a Molecule3DStructure if available.
 */
export function parsePubChem3DSdf(
  id: string,
  smiles: string,
  sdfText: string
): Molecule3DStructure | null {
  try {
    const lines = sdfText.split(/\r?\n/);
    const countsLineIdx = lines.findIndex((l) => l.includes('V2000'));
    if (countsLineIdx === -1) return null;

    const countsLine = lines[countsLineIdx];
    const numAtoms = parseInt(countsLine.slice(0, 3).trim(), 10);
    const numBonds = parseInt(countsLine.slice(3, 6).trim(), 10);
    if (Number.isNaN(numAtoms) || numAtoms <= 0) return null;

    const rawParsed: {
      x: number;
      y: number;
      z: number;
      element: ElementSymbol;
    }[] = [];
    const oldToNewIdx = new Int32Array(numAtoms).fill(-1);

    for (let i = 0; i < numAtoms; i++) {
      const line = lines[countsLineIdx + 1 + i];
      if (!line) return null;
      const x = parseFloat(line.slice(0, 10).trim());
      const y = parseFloat(line.slice(10, 20).trim());
      const z = parseFloat(line.slice(20, 30).trim());
      const symbolRaw = line.slice(31, 34).trim();
      // Skip explicit hydrogens for clean heavy-atom 3D ball-and-stick model (unless H2O/tiny)
      if (symbolRaw === 'H' && numAtoms > 6) continue;

      const element = normalizeElement(symbolRaw);
      oldToNewIdx[i] = rawParsed.length;
      rawParsed.push({ x, y, z, element });
    }

    if (rawParsed.length === 0) return null;

    const bonds: Bond3D[] = [];
    const bondStart = countsLineIdx + 1 + numAtoms;
    for (let i = 0; i < numBonds; i++) {
      const line = lines[bondStart + i];
      if (!line) break;
      const a1 = parseInt(line.slice(0, 3).trim(), 10) - 1;
      const a2 = parseInt(line.slice(3, 6).trim(), 10) - 1;
      const bType = parseInt(line.slice(6, 9).trim(), 10);
      const from = oldToNewIdx[a1];
      const to = oldToNewIdx[a2];
      if (from !== -1 && to !== -1 && from !== undefined && to !== undefined) {
        const order: 1 | 1.5 | 2 | 3 =
          bType === 2 ? 2 : bType === 3 ? 3 : bType === 4 ? 1.5 : 1;
        bonds.push({
          from,
          to,
          order,
          isAromatic: bType === 4,
          isInRing: false,
        });
      }
    }

    // Center coordinates
    let cx = 0;
    let cy = 0;
    let cz = 0;
    for (const a of rawParsed) {
      cx += a.x;
      cy += a.y;
      cz += a.z;
    }
    cx /= rawParsed.length;
    cy /= rawParsed.length;
    cz /= rawParsed.length;

    let maxRadius = 1.5;
    const elementCounts: Partial<Record<ElementSymbol, number>> = {};

    const atoms: Atom3D[] = rawParsed.map((a, idx) => {
      const x = a.x - cx;
      const y = a.y - cy;
      const z = a.z - cz;
      const cov = ELEMENT_CPK_COLORS[a.element].covalentRadius;
      const r = Math.hypot(x, y, z) + cov;
      if (r > maxRadius) maxRadius = r;
      elementCounts[a.element] = (elementCounts[a.element] || 0) + 1;

      return {
        index: idx,
        element: a.element,
        x,
        y,
        z,
        charge: 0,
        isAromatic: false,
        hybridization: 'sp3',
        ringSizes: [],
        covalentRadius: cov,
        vdwRadius: ELEMENT_CPK_COLORS[a.element].vdwRadius,
      };
    });

    return {
      id,
      smiles,
      atoms,
      bonds,
      elementCounts,
      boundingRadius: maxRadius,
      source: 'pubchem-3d',
    };
  } catch {
    return null;
  }
}

/**
 * 3D Orthogonal Rotation Matrix Helper (3x3 row-major Float64Array)
 * Supports trackball X/Y drag rotation without gimbal lock.
 */
export type Mat3 = [
  number, number, number,
  number, number, number,
  number, number, number
];

export function createInitialRotationMatrix(rx = 0.42, ry = -0.52): Mat3 {
  const cx = Math.cos(rx);
  const sx = Math.sin(rx);
  const cy = Math.cos(ry);
  const sy = Math.sin(ry);
  // R_x(rx) * R_y(ry)
  return [
    cy, 0, sy,
    sx * sy, cx, -sx * cy,
    -cx * sy, sx, cx * cy,
  ];
}

export function applyTrackballDelta(
  m: Mat3,
  deltaYaw: number,
  deltaPitch: number
): Mat3 {
  // Incremental rotation matrix dR = R_x(deltaPitch) * R_y(deltaYaw)
  const cx = Math.cos(deltaPitch);
  const sx = Math.sin(deltaPitch);
  const cy = Math.cos(deltaYaw);
  const sy = Math.sin(deltaYaw);

  const d00 = cy,       d01 = 0,  d02 = sy;
  const d10 = sx * sy,  d11 = cx, d12 = -sx * cy;
  const d20 = -cx * sy, d21 = sx, d22 = cx * cy;

  // Multiply dR * m and re-orthonormalize via Gram-Schmidt to prevent float drift
  let r00 = d00 * m[0] + d01 * m[3] + d02 * m[6];
  let r01 = d00 * m[1] + d01 * m[4] + d02 * m[7];
  let r02 = d00 * m[2] + d01 * m[5] + d02 * m[8];

  let r10 = d10 * m[0] + d11 * m[3] + d12 * m[6];
  let r11 = d10 * m[1] + d11 * m[4] + d12 * m[7];
  let r12 = d10 * m[2] + d11 * m[5] + d12 * m[8];

  const len0 = Math.hypot(r00, r01, r02) || 1;
  r00 /= len0;
  r01 /= len0;
  r02 /= len0;

  const dot01 = r00 * r10 + r01 * r11 + r02 * r12;
  r10 -= dot01 * r00;
  r11 -= dot01 * r01;
  r12 -= dot01 * r02;
  const len1 = Math.hypot(r10, r11, r12) || 1;
  r10 /= len1;
  r11 /= len1;
  r12 /= len1;

  // Cross product r2 = r0 x r1
  const r20 = r01 * r12 - r02 * r11;
  const r21 = r02 * r10 - r00 * r12;
  const r22 = r00 * r11 - r01 * r10;

  return [r00, r01, r02, r10, r11, r12, r20, r21, r22];
}
