import { buildDataPanelGeometry } from '@/lib/svg-devices';
import type { DataPanelStatus } from '@/content/types';

export interface DataPanelProps {
  seed: number;
  caption: string;
  status: DataPanelStatus;
  coordLabel: string;
}

/** Pure, SSR-safe port of the reference mockup's `buildDataPanel()`: a
 * gridded canvas with three seeded blobs and one leader-line annotation,
 * captioned below with a status marker. Same seed always renders the same
 * layout — no client JS involved. */
export default function DataPanel({ seed, caption, status, coordLabel }: DataPanelProps) {
  const geo = buildDataPanelGeometry(seed);

  return (
    <div className="data-panel">
      <div className="panel-canvas">
        <svg viewBox={`0 0 ${geo.width} ${geo.height}`} width="100%" height="100%">
          <rect x={0} y={0} width={geo.width} height={geo.height} fill="#F5F5F5" />
          {geo.gridXs.map((gx) => (
            <line key={`gx-${gx}`} x1={gx} y1={0} x2={gx} y2={geo.height} stroke="rgba(2,5,31,0.05)" strokeWidth={1} />
          ))}
          {geo.gridYs.map((gy) => (
            <line key={`gy-${gy}`} x1={0} y1={gy} x2={geo.width} y2={gy} stroke="rgba(2,5,31,0.05)" strokeWidth={1} />
          ))}
          {geo.blobs.map((blob, i) => (
            <path key={i} d={blob.d} fill={blob.fill} opacity={blob.opacity} />
          ))}
          <circle cx={geo.leader.cx} cy={geo.leader.cy} r={3.5} fill="#081B99" />
          <line
            x1={geo.leader.cx}
            y1={geo.leader.cy}
            x2={geo.leader.lineX2}
            y2={geo.leader.lineY2}
            stroke="#081B99"
            strokeWidth={1}
          />
          <text x={geo.leader.textX} y={geo.leader.textY} fill="#02051F" fontFamily="IBM Plex Mono, monospace" fontSize={10}>
            {coordLabel}
          </text>
        </svg>
      </div>
      <div className="panel-caption">
        <span className="cap-main">{caption}</span>
        <span className="cap-status">{status}</span>
      </div>
    </div>
  );
}
