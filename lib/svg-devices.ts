// Pure, deterministic geometry builders for the two SVG "devices"
// (DataPanel, WireGlobe) — ported from the imperative JS in
// reference/geoclim_spatial_register.html (mulberry32, blobPath,
// buildDataPanel, buildWireGlobe, buildRegionGlobe). These return plain
// data (numbers, path strings); the components turn that into real <svg>
// JSX at render time. No DOM access here — safe to call during SSR.

/** Deterministic PRNG — same seed always produces the same sequence, which
 * is what lets DataPanel render identical output across server and client
 * for a given `seed` prop. */
export function mulberry32(seed: number): () => number {
  let a = seed;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Closed, slightly-irregular blob outline as an SVG path `d` string,
 * quadratic-curved through `points` around (cx, cy) at radius `r`. */
export function blobPath(
  cx: number,
  cy: number,
  r: number,
  points: number,
  rng: () => number,
  irregularity: number
): string {
  const pts: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const rr = r * (1 - irregularity / 2 + rng() * irregularity);
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} `;
  for (let j = 0; j < pts.length; j++) {
    const p0 = pts[j];
    const p1 = pts[(j + 1) % pts.length];
    const mx = (p0[0] + p1[0]) / 2;
    const my = (p0[1] + p1[1]) / 2;
    d += `Q ${p0[0].toFixed(1)} ${p0[1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)} `;
  }
  d += 'Z';
  return d;
}

const DEFAULT_PALETTE = ['#B9C0EE', '#7C87D6', '#081B99'];

export interface DataPanelBlob {
  d: string;
  fill: string;
  opacity: number;
}

export interface DataPanelGeometry {
  width: number;
  height: number;
  gridXs: number[];
  gridYs: number[];
  blobs: DataPanelBlob[];
  leader: { cx: number; cy: number; lineX2: number; lineY2: number; textX: number; textY: number };
}

/** Matches reference `buildDataPanel()`: a 400x300 canvas, a 40px grid, 3
 * translucent blobs seeded from `seed`, and one leader-line/coordinate
 * annotation. Same seed + palette always produces the same layout. */
export function buildDataPanelGeometry(seed: number, palette: string[] = DEFAULT_PALETTE): DataPanelGeometry {
  const rng = mulberry32(seed);
  const w = 400;
  const h = 300;

  const gridXs: number[] = [];
  for (let gx = 0; gx <= w; gx += 40) gridXs.push(gx);
  const gridYs: number[] = [];
  for (let gy = 0; gy <= h; gy += 40) gridYs.push(gy);

  const blobs: DataPanelBlob[] = [];
  for (let i = 0; i < 3; i++) {
    const cx = 60 + rng() * (w - 120);
    const cy = 60 + rng() * (h - 120);
    const r = 40 + rng() * 68;
    blobs.push({
      d: blobPath(cx, cy, r, 10, rng, 0.5),
      fill: palette[i % palette.length],
      opacity: 0.55,
    });
  }

  const lx = w * 0.6;
  const ly = h * 0.3;

  return {
    width: w,
    height: h,
    gridXs,
    gridYs,
    blobs,
    leader: { cx: lx, cy: ly, lineX2: lx + 40, lineY2: ly - 26, textX: lx + 44, textY: ly - 22 },
  };
}

export interface WireGlobeGeometry {
  cx: number;
  cy: number;
  r: number;
  /** One ellipse per latitude ring (excludes the poles, matching the
   * reference's `i = 1..latN-1` loop). */
  latEllipses: { cy: number; ry: number }[];
  /** rx for each longitude ellipse, at rotation phase 0 (the mockup's
   * continuous spin is a decorative, purely client-side effect and is not
   * reproduced by this static geometry). */
  lonRxs: number[];
}

/** Matches reference `buildWireGlobe()`: an outer circle, `lat` latitude
 * rings and `lon` longitude rings around a sphere of radius `r` centred at
 * (cx, cy). */
export function buildWireGlobeGeometry(opts: {
  cx: number;
  cy: number;
  r: number;
  lat?: number;
  lon?: number;
}): WireGlobeGeometry {
  const { cx, cy, r } = opts;
  const latN = opts.lat ?? 7;
  const latEllipses: { cy: number; ry: number }[] = [];
  for (let i = 1; i < latN; i++) {
    const t = i / latN;
    const ry = r * Math.sin(t * Math.PI);
    const yy = cy - r + 2 * r * t;
    latEllipses.push({ cy: yy, ry: ry * 0.18 });
  }

  const lonN = opts.lon ?? 8;
  const lonRxs: number[] = [];
  for (let j = 0; j < lonN; j++) {
    const rx = r * Math.abs(Math.cos((j / lonN) * Math.PI));
    lonRxs.push(Math.max(rx, 0.5));
  }

  return { cx, cy, r, latEllipses, lonRxs };
}

export interface RegionGlobeInput {
  name: string;
  hub?: boolean;
  /** Degrees. */
  angle: number;
  /** 0–1, fraction of the globe's radius. */
  dist: number;
}

export interface RegionGlobeNode {
  x: number;
  y: number;
  radius: number;
  fill: string;
  line: { x1: number; y1: number; x2: number; y2: number } | null;
  label: string;
  labelX: number;
  labelY: number;
  labelAnchor: 'start' | 'end' | 'middle';
  labelSize: number;
  labelWeight: number;
  labelColor: string;
}

/** Matches reference `buildRegionGlobe()`'s per-country node placement: the
 * hub (Nairobi) sits at the sphere's centre, every other node is placed by
 * angle/distance and flattened onto the sphere's visual ellipse. */
export function buildRegionGlobeNodes(
  countries: RegionGlobeInput[],
  geo: { cx: number; cy: number; r: number }
): RegionGlobeNode[] {
  const { cx, cy, r } = geo;
  return countries.map((c) => {
    const rad = (c.angle * Math.PI) / 180;
    const hub = !!c.hub;
    const nd = hub ? 0 : r * c.dist;
    const x = hub ? cx : cx + Math.cos(rad) * nd;
    const y = hub ? cy : cy + Math.sin(rad) * nd * 0.55;
    const labelX = x + Math.cos(rad) * 14;
    const labelY = y + Math.sin(rad) * 10 + (hub ? -14 : 4);
    const labelAnchor: 'start' | 'end' | 'middle' =
      Math.cos(rad) > 0.2 ? 'start' : Math.cos(rad) < -0.2 ? 'end' : 'middle';

    return {
      x,
      y,
      radius: hub ? 5.5 : 3.2,
      fill: hub ? '#081B99' : '#7C87D6',
      line: hub ? null : { x1: cx, y1: cy, x2: x, y2: y },
      label: hub ? 'NAIROBI · HQ' : c.name,
      labelX,
      labelY,
      labelAnchor,
      labelSize: hub ? 11 : 9,
      labelWeight: hub ? 600 : 400,
      labelColor: hub ? '#02051F' : '#6E6E6E',
    };
  });
}
