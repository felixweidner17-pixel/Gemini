import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateMolecule3D,
  applyTrackballDelta,
  createInitialRotationMatrix,
  parsePubChem3DSdf,
} from './molecule3DGenerator.ts';

test('generateMolecule3D generates accurate 3D conformer for Quetiapine with S, N, O heteroatoms and 3D depth', () => {
  const quetiapineSmiles =
    'C1CN(CCN1CCOCCO)C2=NC3=CC=CC=C3SC4=CC=CC=C42';
  const mol = generateMolecule3D('quetiapine', quetiapineSmiles);

  // Quetiapine C21H25N3O2S -> 27 heavy atoms
  assert.equal(mol.atoms.length, 27);
  assert.equal(mol.elementCounts.C, 21);
  assert.equal(mol.elementCounts.N, 3);
  assert.equal(mol.elementCounts.O, 2);
  assert.equal(mol.elementCounts.S, 1);
  assert.ok(mol.bonds.length >= 29);

  // Verify non-zero 3D coordinates (x, y, z spread)
  const xs = mol.atoms.map((a) => a.x);
  const ys = mol.atoms.map((a) => a.y);
  const zs = mol.atoms.map((a) => a.z);
  const spreadX = Math.max(...xs) - Math.min(...xs);
  const spreadY = Math.max(...ys) - Math.min(...ys);
  const spreadZ = Math.max(...zs) - Math.min(...zs);

  assert.ok(spreadX > 2.0, `Expected X spread > 2.0, got ${spreadX}`);
  assert.ok(spreadY > 2.0, `Expected Y spread > 2.0, got ${spreadY}`);
  assert.ok(spreadZ > 0.4, `Expected 3D Z depth > 0.4, got ${spreadZ}`);
});

test('generateMolecule3D reflects dynamic cannabinoid derivative modifications (-mod-oac and -mod-11oh)', () => {
  const d9Smiles = 'CCCCCC1=CC(=C2C3C=C(CCC3C(OC2=C1)(C)C)C)O';
  const baseMol = generateMolecule3D('delta9-thc', d9Smiles);
  const oacMol = generateMolecule3D('delta9-thc-mod-oac', d9Smiles);
  const oh11Mol = generateMolecule3D('delta9-thc-mod-11oh', d9Smiles);

  // Base D9-THC C21H30O2 -> 23 heavy atoms
  assert.equal(baseMol.atoms.length, 23);
  // O-Acetate adds C(=O)CH3 (+3 heavy atoms: 2 C, 1 O)
  assert.equal(oacMol.atoms.length, 26);
  // 11-OH adds an extra hydroxyl O (+1 heavy atom)
  assert.equal(oh11Mol.atoms.length, 24);
});

test('3D trackball rotation matrix preserves vector lengths and orthonormality across arbitrary turns', () => {
  let mat = createInitialRotationMatrix(0.35, -0.6);
  mat = applyTrackballDelta(mat, 1.25, -0.85);
  mat = applyTrackballDelta(mat, -0.45, 2.1);

  // Test norm preservation on a 3D vector (3, -4, 5)
  const vx = 3;
  const vy = -4;
  const vz = 5;
  const origLen = Math.hypot(vx, vy, vz);

  const rx = mat[0] * vx + mat[1] * vy + mat[2] * vz;
  const ry = mat[3] * vx + mat[4] * vy + mat[5] * vz;
  const rz = mat[6] * vx + mat[7] * vy + mat[8] * vz;
  const rotLen = Math.hypot(rx, ry, rz);

  assert.ok(Math.abs(origLen - rotLen) < 1e-9);
});

test('parsePubChem3DSdf parses V2000 3D coordinate blocks accurately', () => {
  const sampleSdf = `5002
  -OEChem-10192620363D

  3  2  0     0  0  0  0  0  0999 V2000
    0.0000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.4200    0.0000    0.3500 N   0  0  0  0  0  0  0  0  0  0  0  0
    2.1500    1.2100   -0.2800 O   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  2  0  0  0  0
  2  3  1  0  0  0  0
M  END`;

  const parsed = parsePubChem3DSdf('test-mol', 'C=NO', sampleSdf);
  assert.ok(parsed !== null);
  assert.equal(parsed.atoms.length, 3);
  assert.equal(parsed.bonds.length, 2);
  assert.equal(parsed.source, 'pubchem-3d');
});
