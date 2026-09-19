import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';

export const metadata: Metadata = {
  title: 'Utilities — GeoClim East Africa',
  description:
    'Network visibility for water, electricity, and gas & petroleum utilities across East Africa — map the network, detect the loss, predict the failure.',
};

const TYPES = [
  {
    key: 'w',
    name: 'Water',
    tag: 'Networks & treatment',
    icon: <path d="M12 3c3 3 4 6 4 9a4 4 0 0 1-8 0c0-3 1-6 4-9z" />,
    items: [
      'Non-revenue water & leak-zone mapping',
      'Smart meter integration & billing reconciliation',
      'Pressure-zone & hydraulic modeling',
      'Sanitation & sewer network mapping',
    ],
  },
  {
    key: 'p',
    name: 'Electricity',
    tag: 'Generation to meter',
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
    items: [
      'Distribution network GIS & asset registry',
      'Fault & outage mapping',
      'Load forecasting by feeder',
      'Substation & transformer digital twin',
    ],
  },
  {
    key: 'g',
    name: 'Gas & Petroleum',
    tag: 'Pipeline & terminal',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </>
    ),
    items: [
      'Pipeline route & right-of-way management',
      'Corrosion & leak risk zoning',
      'Satellite / UAV right-of-way monitoring',
      'HSE incident geofencing',
    ],
  },
];

export default function UtilitiesIndustryPage() {
  return (
    <div className="util-page">
      <SharedDefs />

      {/* ================= HERO ================= */}
      <header className="page-hero">
        <svg
          className="util-hero-net"
          viewBox="0 0 1200 520"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="uFlowW" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#57b8ea" stopOpacity="0" />
              <stop offset="50%" stopColor="#57b8ea" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#57b8ea" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="uFlowP" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f0b429" stopOpacity="0" />
              <stop offset="50%" stopColor="#f0b429" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f0b429" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="uFlowG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e08a5b" stopOpacity="0" />
              <stop offset="50%" stopColor="#e08a5b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e08a5b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="#20232e" strokeWidth={1}>
            <path d="M-20,120 L260,120 L340,60 L620,60 L700,140 L980,140 L1080,90 L1240,90" />
            <path d="M-20,260 L180,260 L260,320 L520,320 L600,260 L880,260 L960,200 L1240,200" />
            <path d="M-20,400 L300,400 L380,340 L660,340 L740,420 L1020,420 L1100,380 L1240,380" />
            <path d="M340,60 L340,320" />
            <path d="M620,60 L600,260" />
            <path d="M700,140 L740,420" />
          </g>
          <g fill="none" strokeWidth={1.6} strokeLinecap="round">
            <path
              d="M-20,120 L260,120 L340,60 L620,60 L700,140 L980,140 L1080,90 L1240,90"
              stroke="url(#uFlowW)"
              strokeDasharray="140 900"
            >
              <animate attributeName="stroke-dashoffset" from="1040" to="0" dur="7s" repeatCount="indefinite" />
            </path>
            <path
              d="M-20,260 L180,260 L260,320 L520,320 L600,260 L880,260 L960,200 L1240,200"
              stroke="url(#uFlowP)"
              strokeDasharray="140 900"
            >
              <animate attributeName="stroke-dashoffset" from="1040" to="0" dur="8.5s" repeatCount="indefinite" />
            </path>
            <path
              d="M-20,400 L300,400 L380,340 L660,340 L740,420 L1020,420 L1100,380 L1240,380"
              stroke="url(#uFlowG)"
              strokeDasharray="140 900"
            >
              <animate attributeName="stroke-dashoffset" from="1040" to="0" dur="9.5s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <circle cx="340" cy="60" r="4" fill="#57b8ea" />
            <circle cx="700" cy="140" r="4" fill="#57b8ea" />
            <circle cx="600" cy="260" r="4" fill="#f0b429" />
            <circle cx="960" cy="200" r="4" fill="#f0b429" />
            <circle cx="740" cy="420" r="4" fill="#e08a5b" />
            <circle cx="1100" cy="380" r="4" fill="#e08a5b" />
          </g>
        </svg>
        <HeroTexture />
        <div className="page-hero-inner util-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/industries">Industries</Link> <span>/</span> Utilities
          </div>
          <div className="util-eyebrow">
            <span className="seg">
              <span className="dot w" /> Water
            </span>
            <span className="sep">/</span>
            <span className="seg">
              <span className="dot p" /> Electricity
            </span>
            <span className="sep">/</span>
            <span className="seg">
              <span className="dot g" /> Gas &amp; Petroleum
            </span>
          </div>
          <h1>
            <span className="stat-w">24%</span> of the power. <span className="stat-w">48%</span> of the water.
            <br />
            Lost before anyone can see where.
          </h1>
          <p>
            East African utilities lose a fifth of their power and nearly half their treated water in transit — not
            from one big failure, but from thousands of small, unmapped ones. GeoClim makes the network visible
            first, then makes it predictable.
          </p>
          <div className="util-hero-actions">
            <Link className="pill-cta" href="/contact">
              Scope a network assessment
            </Link>
            <Link className="ghost-cta" href="/work">
              See the utility case study →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= THE INVISIBLE NETWORK (light) ================= */}
      <section className="util-light">
        <div className="section-head">
          <div className="kicker">The invisible network</div>
          <h2>Every utility loses the same way — in the gap between what&apos;s built and what&apos;s known.</h2>
        </div>
        <Reveal className="util-net-strip">
          <div className="util-net-cell w">
            <div className="unc-label">Water</div>
            <div className="unc-stat">48%</div>
            <p>
              Non-revenue water lost to leaks, illegal connections, and unmetered supply before it reaches a paying
              customer — an estimated KSh 10bn a year nationally.
            </p>
            <span className="unc-src">Kenya News Agency, 2026</span>
          </div>
          <div className="util-net-cell p">
            <div className="unc-label">Electricity</div>
            <div className="unc-stat">24.2%</div>
            <p>
              Transmission &amp; distribution system losses, driven by an aging grid with limited real-time
              visibility into load and fault conditions.
            </p>
            <span className="unc-src">Kenyan Wallstreet, 2026</span>
          </div>
          <div className="util-net-cell g">
            <div className="unc-label">Gas &amp; Petroleum</div>
            <div className="unc-stat">RoW</div>
            <p>
              Pipeline right-of-way and corrosion risk are still tracked manually across much of the region — the
              same blind spot, in a higher-consequence network.
            </p>
            <span className="unc-src">Industry pattern, regional</span>
          </div>
        </Reveal>
      </section>

      {/* ================= MAP / DETECT / PREDICT (dark) ================= */}
      <section className="util-mdp">
        <div className="section-head">
          <div className="kicker">How GeoClim closes the gap</div>
          <h2>Map the network. Detect the loss. Predict the failure.</h2>
        </div>
        <div className="util-mdp-rail">
          <Reveal className="util-mdp-stage w">
            <div className="util-mdp-node">01</div>
            <div className="util-mdp-body">
              <h3>Map it</h3>
              <span className="util-mdp-tools">Penta-B Maps &amp; Apps · SMART Real-Time GIS</span>
              <p>
                Every pipe, line, valve, meter, and substation gets a verified spatial record — the as-built network
                reconciled against what&apos;s actually in the ground, not what the original design drawings say.
              </p>
            </div>
          </Reveal>
          <Reveal className="util-mdp-stage p" delay="0.08s">
            <div className="util-mdp-node">02</div>
            <div className="util-mdp-body">
              <h3>Detect it</h3>
              <span className="util-mdp-tools">RockEye Analytics · Smart Meter / IoT Integration</span>
              <p>
                Pressure, flow, and load data from smart meters and sensors overlays the network map in real time —
                turning a support ticket or a billing anomaly into a specific point on a specific line.
              </p>
            </div>
          </Reveal>
          <Reveal className="util-mdp-stage g" delay="0.16s">
            <div className="util-mdp-node">03</div>
            <div className="util-mdp-body">
              <h3>Predict it</h3>
              <span className="util-mdp-tools">RockEye Predictive Maintenance · AI Risk Scoring</span>
              <p>
                Failure history, asset age, and load patterns combine into a risk score per segment — so crews are
                dispatched to what&apos;s about to fail, not what already has.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= THREE UTILITY TYPES (light) ================= */}
      <section className="util-light">
        <div className="section-head">
          <div className="kicker">Built for three utility types</div>
          <h2>Water, electricity, and gas &amp; petroleum don&apos;t share a template — they share a method.</h2>
        </div>
        <div className="util-type-grid">
          {TYPES.map((t) => (
            <Reveal className={`util-type-card ${t.key}`} key={t.key}>
              <div className="utc-icon">
                <svg viewBox="0 0 24 24">{t.icon}</svg>
              </div>
              <h3>{t.name}</h3>
              <span className="utc-tag">{t.tag}</span>
              <ul>
                {t.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROOF (dark) ================= */}
      <section className="util-proof">
        <Reveal className="util-proof-card">
          <div className="util-proof-result">−25%</div>
          <div className="util-proof-body">
            <div className="kicker">Utilities · Uganda</div>
            <h3>Leak reduction for a regional water utility</h3>
            <p>
              Smart GIS monitoring identified network losses ahead of manual inspection cycles — the same map →
              detect → predict approach outlined above, already running in the region. Methodology and timeframe
              available on request.
            </p>
            <Link href="/work">Read the engagement →</Link>
          </div>
        </Reveal>
      </section>

      {/* ================= CTA (light, sitewide component) ================= */}
      <section className="cta-band">
        <h2>Ready to see what&apos;s actually running through your network?</h2>
        <p>
          A network visibility assessment maps what you have against what you think you have — usually the most
          useful hour a utility spends all quarter.
        </p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Scope a network assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
