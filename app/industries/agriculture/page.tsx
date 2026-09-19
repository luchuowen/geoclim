import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';
import { mulberry32 } from '@/lib/svg-devices';

export const metadata: Metadata = {
  title: 'Agriculture — GeoClim East Africa',
  description:
    'Field-level visibility for crops, livestock, and agribusiness across East Africa — see the season, flag the risk, act before harvest.',
};

const NDVI_COLORS = ['#3f8a3a', '#5fa84f', '#7ecb6f', '#a97a1f', '#c99a3e', '#935935'];

/** Deterministic NDVI-tile backdrop — same seed always renders the same
 * grid, so this stays a plain server-rendered <svg> with no client JS and
 * no hydration mismatch (same pattern as DataPanel/WireGlobe in
 * lib/svg-devices.ts). */
function ndviTiles(seed: number) {
  const rng = mulberry32(seed);
  const w = 60;
  const h = 60;
  const cols = 20;
  const rows = 9;
  const tiles: { x: number; y: number; w: number; h: number; fill: string; opacity: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rng() < 0.55) continue;
      tiles.push({
        x: c * w + 4,
        y: r * h + 4,
        w: w - 8,
        h: h - 8,
        fill: NDVI_COLORS[Math.floor(rng() * NDVI_COLORS.length)],
        opacity: Number((0.12 + rng() * 0.22).toFixed(2)),
      });
    }
  }
  return tiles;
}

const TYPES = [
  {
    key: 'c',
    name: 'Crops & Horticulture',
    tag: 'Field to harvest',
    items: [
      'NDVI crop-health & stress mapping',
      'Yield forecasting by plot',
      'Irrigation & water-stress monitoring',
      'Post-harvest loss tracking',
    ],
  },
  {
    key: 's',
    name: 'Livestock & Rangeland',
    tag: 'Pasture to herd',
    items: [
      'Satellite forage & rangeland condition index',
      'Index-based livestock insurance data feeds',
      'Grazing-corridor & drought-migration mapping',
      'Herd-health geofencing',
    ],
  },
  {
    key: 'b',
    name: 'Agribusiness & Cooperatives',
    tag: 'Farm to buyer',
    items: [
      'Multi-farm aggregation & traceability mapping',
      'Collection-point & supply-chain logistics',
      'Cooperative yield reporting',
      'Buyer-side sourcing & quality verification',
    ],
  },
];

export default function AgricultureIndustryPage() {
  const tiles = ndviTiles(19);

  return (
    <div className="ag-page">
      <SharedDefs />

      {/* ================= HERO ================= */}
      <header className="page-hero">
        <svg className="ag-hero-ndvi" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {tiles.map((t, i) => (
            <rect key={i} x={t.x} y={t.y} width={t.w} height={t.h} fill={t.fill} opacity={t.opacity} />
          ))}
        </svg>
        <HeroTexture />
        <div className="page-hero-inner ag-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/industries">Industries</Link> <span>/</span> Agriculture
          </div>
          <h1>
            <span className="stat">23%</span> of Kenya&apos;s GDP. Up to <span className="stat">40%</span> of what it
            grows —<br />
            lost before it reaches market.
          </h1>
          <p>
            Agriculture employs a third of Kenya&apos;s workforce and rainfed harvests swing with a season no one is
            watching in real time. GeoClim turns the field into data before the harvest is lost, not after.
          </p>
          <div className="ag-hero-actions">
            <Link className="pill-cta" href="/contact">
              See a season in data
            </Link>
            <Link className="ghost-cta" href="/work">
              See the case study →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= THE INVISIBLE SEASON (light, chip tiles) ================= */}
      <section className="ag-light">
        <div className="section-head">
          <div className="kicker">The invisible season</div>
          <h2>A harvest is decided by a hundred small conditions no one is watching in real time.</h2>
        </div>
        <Reveal className="ag-season-strip">
          <div className="ag-season-cell c">
            <div className="asc-label">Post-harvest loss</div>
            <div className="asc-stat">30–40%</div>
            <p>Of crop production lost field to market — over KSh 150bn a year nationally.</p>
            <span className="asc-src">FAO / Kenya Food Loss Studies</span>
          </div>
          <div className="ag-season-cell s">
            <div className="asc-label">Margin squeeze</div>
            <div className="asc-stat">+65%</div>
            <p>Rise in input costs since 2021, against 59% output growth over the same period.</p>
            <span className="asc-src">Kenyan Wallstreet, 2025</span>
          </div>
          <div className="ag-season-cell b">
            <div className="asc-label">Workforce at stake</div>
            <div className="asc-stat">1 in 3</div>
            <p>Kenyan jobs tied to agriculture — still planned on last season&apos;s data, not this one&apos;s.</p>
            <span className="asc-src">World Bank / ILO, 2023</span>
          </div>
        </Reveal>
      </section>

      {/* ================= SEE / FLAG / ACT (dark, ticket-stub cards) ================= */}
      <section className="ag-flow">
        <div className="section-head">
          <div className="kicker">How GeoClim closes the gap</div>
          <h2>See the season. Flag the risk. Act before harvest.</h2>
        </div>
        <div className="ag-stub-grid">
          <Reveal className="ag-stub c">
            <div className="ag-stub-ic">
              <span className="ghost">01</span>
              <svg viewBox="0 0 24 24">
                <path d="M12 3c3 3 4 6 4 9a4 4 0 0 1-8 0c0-3 1-6 4-9z" />
              </svg>
            </div>
            <div className="ag-stub-body">
              <div className="as-head">
                <h3>See it</h3>
                <span className="as-tools">PENTA-B · SATELLITE/UAV</span>
              </div>
              <p>Every plot gets a continuously updated view of crop condition, land use and water stress.</p>
            </div>
          </Reveal>
          <Reveal className="ag-stub s" delay="0.08s">
            <div className="ag-stub-ic">
              <span className="ghost">02</span>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3.2" />
                <path d="M2 12c2.5-4 6-6 10-6s7.5 2 10 6c-2.5 4-6 6-10 6s-7.5-2-10-6z" />
              </svg>
            </div>
            <div className="ag-stub-body">
              <div className="as-head">
                <h3>Flag it</h3>
                <span className="as-tools">ROCKEYE · NDVI RISK</span>
              </div>
              <p>Vegetation-index and weather data turn a stress signal into a specific plot, a specific week.</p>
            </div>
          </Reveal>
          <Reveal className="ag-stub b" delay="0.16s">
            <div className="ag-stub-ic">
              <span className="ghost">03</span>
              <svg viewBox="0 0 24 24">
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 10v4" />
                <circle cx="12" cy="17" r="0.6" fill="currentColor" />
              </svg>
            </div>
            <div className="ag-stub-body">
              <div className="as-head">
                <h3>Act on it</h3>
                <span className="as-tools">ROCKEYE · EARLY WARNING</span>
              </div>
              <p>Risk scores reach the field team early enough to irrigate, treat, or harvest early — before a shortfall becomes a loss.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= THREE WAYS OF FARMING (light, header-band cards) ================= */}
      <section className="ag-light">
        <div className="section-head">
          <div className="kicker">Built for three ways of farming</div>
          <h2>Smallholder, estate, and cooperative operations don&apos;t share a template — they share a season.</h2>
        </div>
        <div className="ag-type-grid">
          {TYPES.map((t) => (
            <Reveal className={`ag-type-card ${t.key}`} key={t.key}>
              <div className="ag-tc-head">
                <h3>{t.name}</h3>
                <span className="ag-tc-tag">{t.tag}</span>
              </div>
              <div className="ag-tc-body">
                {t.items.map((it) => (
                  <div className="ag-tc-item" key={it}>
                    <span className="ag-tc-dot" />
                    {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROOF (dark, centered panel) ================= */}
      <section className="ag-proof">
        <Reveal className="ag-proof-card">
          <svg className="ag-proof-spark" viewBox="0 0 220 100" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,80 20,76 40,70 60,72 80,58 100,60 120,44 140,46 160,28 180,30 200,12 220,14"
              fill="none"
              stroke="#7ecb6f"
              strokeWidth={2}
            />
          </svg>
          <div className="kicker">Agriculture · Kenya</div>
          <div className="ag-proof-result">+30%</div>
          <h3>Precision agriculture for a commercial agribusiness client</h3>
          <p>
            Real-time monitoring applied across the growing season — the same see → flag → act approach outlined
            above, already running in the region. Methodology and timeframe available on request.
          </p>
          <Link href="/work">Read the engagement →</Link>
        </Reveal>
      </section>

      {/* ================= CTA (light, sitewide component) ================= */}
      <section className="cta-band">
        <h2>Ready to see this season before it&apos;s over?</h2>
        <p>
          A field visibility assessment shows what&apos;s happening in your crop or herd right now — not what a
          report says happened last month.
        </p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            See a season in data
          </Link>
        </div>
      </section>
    </div>
  );
}
