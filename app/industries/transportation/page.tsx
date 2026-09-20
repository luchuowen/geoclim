import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';

export const metadata: Metadata = {
  title: 'Transportation — GeoClim East Africa',
  description:
    'Live visibility for roads, rail, ports, and airports across East Africa — map the network, track what moves on it, act before delay becomes cost.',
};

const TYPES = [
  {
    key: 'rd',
    name: 'Roads & Highways',
    tag: 'Network to fleet',
    items: [
      'Real-time congestion & incident mapping',
      'Route & dispatch optimization',
      'Pavement condition & asset inventory',
      'Road-safety black-spot analysis',
    ],
  },
  {
    key: 'rl',
    name: 'Rail & Mass Transit',
    tag: 'Track to timetable',
    items: [
      'Rolling-stock & asset GIS mapping',
      'Ridership & capacity analytics',
      'Corridor & station-catchment planning',
      'Predictive maintenance scheduling',
    ],
  },
  {
    key: 'pt',
    name: 'Ports & Logistics',
    tag: 'Berth to border',
    items: [
      'Port & terminal yard-capacity mapping',
      'Multimodal freight-flow analytics',
      'Customs/border transit-time tracking',
      'Supply-chain visibility dashboards',
    ],
  },
];

export default function TransportationIndustryPage() {
  return (
    <div className="tr-page">
      <SharedDefs />

      {/* ================= HERO ================= */}
      <header className="page-hero">
        <svg className="tr-hero-map" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path
            d="M-20,120 C 200,140 320,60 500,90 S 820,180 1000,120 S 1180,60 1240,90"
            fill="none"
            stroke="#e8a83e"
            strokeWidth={3}
            strokeDasharray="2 14"
            strokeLinecap="round"
            opacity={0.55}
          />
          <path
            d="M-20,300 C 180,260 340,360 520,320 S 860,240 1020,300 S 1180,340 1240,300"
            fill="none"
            stroke="#7fa0ea"
            strokeWidth={3}
            opacity={0.5}
          />
          <path
            d="M-20,430 C 220,400 380,470 560,430 S 880,380 1040,430 S 1180,460 1240,420"
            fill="none"
            stroke="#c76fc7"
            strokeWidth={3}
            strokeDasharray="1 10"
            strokeLinecap="round"
            opacity={0.5}
          />
          <circle cx="500" cy="90" r="5" fill="#e8a83e" />
          <circle cx="1000" cy="120" r="5" fill="#e8a83e" />
          <circle cx="520" cy="320" r="5" fill="#7fa0ea" />
          <circle cx="1020" cy="300" r="5" fill="#7fa0ea" />
          <circle cx="560" cy="430" r="5" fill="#c76fc7" />
          <circle cx="1040" cy="430" r="5" fill="#c76fc7" />
          <circle cx="230" cy="150" r="4" fill="#e8a83e" opacity={0.8} />
          <circle cx="760" cy="230" r="4" fill="#7fa0ea" opacity={0.8} />
          <circle cx="290" cy="390" r="4" fill="#c76fc7" opacity={0.8} />
        </svg>
        <HeroTexture />
        <div className="page-hero-inner tr-hero-inner">
          <h1>
            <span className="stat">4th</span> most congested city on Earth. <span className="stat">KSh 100bn</span> lost to
            it, every year.
          </h1>
          <p>
            Roads, rail, ports, and airports move Kenya&apos;s economy — but most of that network is invisible the moment
            you stop watching it. GeoClim turns the physical network into a live data layer, before a jam, a bottleneck, or
            a breakdown costs you the day.
          </p>
          <div className="tr-hero-actions">
            <Link className="pill-cta" href="/contact">
              See the network live
            </Link>
            <Link className="ghost-cta" href="/work">
              See the case study →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= THE BLIND NETWORK (light, dashboard readout) ================= */}
      <section className="tr-light">
        <div className="section-head">
          <div className="kicker">The blind network</div>
          <h2>A road, a railway, a port — each one only as useful as the last time someone looked.</h2>
        </div>
        <Reveal className="tr-net-panel">
          <div className="tr-net-col rd">
            <div className="tnc-label">Congestion cost</div>
            <div className="tnc-stat">KSh 100bn/yr</div>
            <p>Lost to Nairobi traffic jams every year — the 4th-most congested city in the world.</p>
            <span className="tnc-src">The Standard / NaMATA</span>
          </div>
          <div className="tr-net-col rl">
            <div className="tnc-label">Road safety</div>
            <div className="tnc-stat">4,458</div>
            <p>Lives lost on Kenyan roads in 2025, up from 4,311 the year before.</p>
            <span className="tnc-src">NTSA, 2025</span>
          </div>
          <div className="tr-net-col pt">
            <div className="tnc-label">Logistics drag</div>
            <div className="tnc-stat">30–40%</div>
            <p>Of product cost lost to logistics inefficiency in Kenya, against a 10–15% global norm.</p>
            <span className="tnc-src">Industry estimates, 2025</span>
          </div>
        </Reveal>
      </section>

      {/* ================= MAP / TRACK / MOVE (dark, route-line cards) ================= */}
      <section className="tr-flow">
        <div className="section-head">
          <div className="kicker">How GeoClim closes the gap</div>
          <h2>Map it. Track it. Move it.</h2>
        </div>
        <div className="tr-track">
          <span className="node" />
          <span className="node" />
          <span className="node" />
        </div>
        <div className="tr-stop-grid">
          <Reveal className="tr-stop rd">
            <div className="tr-stop-top">
              <div className="tr-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
                  <path d="M9 4v14M15 6v14" />
                </svg>
              </div>
              <div>
                <h3>Map it</h3>
                <span className="ts-tools">PENTA-B · SATELLITE/GIS</span>
              </div>
            </div>
            <p>Every road, rail line, port, and facility geo-referenced into one live network model — not a five-year-old shapefile.</p>
          </Reveal>
          <Reveal className="tr-stop rl" delay="0.08s">
            <div className="tr-stop-top">
              <div className="tr-stop-ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3.2" />
                  <path d="M2 12c2.5-4 6-6 10-6s7.5 2 10 6c-2.5 4-6 6-10 6s-7.5-2-10-6z" />
                </svg>
              </div>
              <div>
                <h3>Track it</h3>
                <span className="ts-tools">ROCKEYE · FLEET/TELEMATICS</span>
              </div>
            </div>
            <p>Vehicles, wagons, and shipments tracked in real time against the network model, surfacing delay and risk as it happens.</p>
          </Reveal>
          <Reveal className="tr-stop pt" delay="0.16s">
            <div className="tr-stop-top">
              <div className="tr-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h13" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </div>
              <div>
                <h3>Move it</h3>
                <span className="ts-tools">ROCKEYE · ROUTE INTELLIGENCE</span>
              </div>
            </div>
            <p>Dispatch and routing get the fastest safe path, not the usual one — before congestion or breakdown eats the schedule.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= THREE WAYS KENYA MOVES (light, header-band cards) ================= */}
      <section className="tr-light">
        <div className="section-head">
          <div className="kicker">Built for how Kenya moves</div>
          <h2>Roads, rail, and ports don&apos;t share a template — they share a network.</h2>
        </div>
        <div className="tr-type-grid">
          {TYPES.map((t) => (
            <Reveal className={`tr-type-card ${t.key}`} key={t.key}>
              <div className="tr-tc-head">
                <h3>{t.name}</h3>
                <span className="tr-tc-tag">{t.tag}</span>
              </div>
              <div className="tr-tc-body">
                {t.items.map((it) => (
                  <div className="tr-tc-item" key={it}>
                    <span className="tr-tc-dot" />
                    {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROOF (dark, centered panel) ================= */}
      <section className="tr-proof">
        <Reveal className="tr-proof-card">
          <svg className="tr-proof-spark" viewBox="0 0 220 100" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,30 20,40 40,32 60,46 80,38 100,52 120,40 140,58 160,46 180,62 200,50 220,64"
              fill="none"
              stroke="#7fa0ea"
              strokeWidth={2}
            />
          </svg>
          <div className="kicker">Transportation · Kenya</div>
          <div className="tr-proof-result">-22%</div>
          <h3>Route and dispatch optimization for a regional logistics fleet</h3>
          <p>
            Live network and fleet data applied across daily dispatch — the same map → track → move approach outlined
            above, already running in the region. Methodology and timeframe available on request.
          </p>
          <Link href="/work">Read the engagement →</Link>
        </Reveal>
      </section>

      {/* ================= CTA (light, sitewide component) ================= */}
      <section className="cta-band">
        <h2>Ready to see your network move in real time?</h2>
        <p>
          A network visibility assessment shows where congestion, delay, and risk actually sit — not where last year&apos;s
          traffic study said they would.
        </p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            See the network live
          </Link>
        </div>
      </section>
    </div>
  );
}
