import { buildWireGlobeGeometry, buildRegionGlobeNodes, type RegionGlobeInput } from '@/lib/svg-devices';

export interface WireGlobeProps {
  width?: number;
  height?: number;
  cy?: number;
  r?: number;
  lat?: number;
  lon?: number;
  /** When provided, renders the region-globe variant: node markers, leader
   * lines and mono labels for each named location, exactly as the
   * reference mockup's `buildRegionGlobe()`. When omitted, renders the
   * plain hero variant: sphere + one traced accent path + three pin dots. */
  nodes?: RegionGlobeInput[];
}

const WIRE_STROKE = '#E3E5F7';
const OUTER_STROKE = '#D7DAF2';
const ACCENT = '#081B99';
const ACCENT_SOFT = '#7C87D6';

/** Pure, SSR-safe port of the reference mockup's `buildWireGlobe()` /
 * `buildHeroGlobe()` / `buildRegionGlobe()`. The mockup's continuous
 * longitude-spin and stroke-dashoffset draw-in are decorative,
 * client-only progressive enhancement and are intentionally not
 * reproduced here — this renders the sphere at its settled, final state. */
export default function WireGlobe({ width = 820, height = 400, cy = 46, r = 380, lat = 9, lon = 12, nodes }: WireGlobeProps) {
  const cx = width / 2;
  const geo = buildWireGlobeGeometry({ cx, cy, r, lat, lon });
  const regionNodes = nodes ? buildRegionGlobeNodes(nodes, { cx, cy, r }) : null;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={OUTER_STROKE} strokeWidth={1} />
      {geo.latEllipses.map((e, i) => (
        <ellipse key={`lat-${i}`} cx={cx} cy={e.cy} rx={r} ry={e.ry} fill="none" stroke={WIRE_STROKE} strokeWidth={0.8} />
      ))}
      {geo.lonRxs.map((rx, i) => (
        <ellipse key={`lon-${i}`} cx={cx} cy={cy} rx={rx} ry={r} fill="none" stroke={WIRE_STROKE} strokeWidth={0.8} />
      ))}

      {!regionNodes && (
        <>
          <path
            d={`M ${cx - 110} ${cy + 50} Q ${cx - 24} ${cy + 220} ${cx + 50} ${cy + 280}`}
            fill="none"
            stroke={ACCENT}
            strokeWidth={1.6}
            opacity={0.6}
          />
          {[
            { x: cx - 110, y: cy + 50, hub: false },
            { x: cx + 50, y: cy + 280, hub: true },
            { x: cx + 170, y: cy + 186, hub: false },
          ].map((p, i) => (
            <circle key={`pin-${i}`} cx={p.x} cy={p.y} r={p.hub ? 5.5 : 4} fill={p.hub ? ACCENT : ACCENT_SOFT} />
          ))}
        </>
      )}

      {regionNodes &&
        regionNodes.map((n, i) => (
          <g key={i}>
            {n.line && (
              <line x1={n.line.x1} y1={n.line.y1} x2={n.line.x2} y2={n.line.y2} stroke={ACCENT} strokeWidth={0.5} opacity={0.28} />
            )}
            <circle cx={n.x} cy={n.y} r={n.radius} fill={n.fill} />
            <text
              x={n.labelX}
              y={n.labelY}
              fill={n.labelColor}
              fontFamily="IBM Plex Mono, monospace"
              fontSize={n.labelSize}
              textAnchor={n.labelAnchor}
              fontWeight={n.labelWeight}
            >
              {n.label}
            </text>
          </g>
        ))}
    </svg>
  );
}
