import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';

export const metadata: Metadata = {
  title: 'Natural Resources — GeoClim East Africa',
  description:
    'Live visibility for forests, mineral concessions, and land across East Africa — survey the landscape, model what changes, protect it before it is lost.',
};

const TYPES = [
  {
    key: 'fr',
    name: 'Forestry & Conservation',
    tag: 'Canopy to carbon',
    items: [
      'Deforestation & degradation change-detection',
      'Carbon-stock & REDD+ monitoring',
      'Protected-area encroachment alerts',
      'Reforestation progress tracking',
    ],
  },
  {
    key: 'mn',
    name: 'Mining & Minerals',
    tag: 'Deposit to permit',
    items: [
      'Mineral-exploration target mapping',
      'Concession & license-boundary compliance',
      'Illegal/artisanal mining detection',
      'Site rehabilitation monitoring',
    ],
  },
  {
    key: 'ld',
    name: 'Land & Water Systems',
    tag: 'Basin to boundary',
    items: [
      'Land-use & land-cover change mapping',
      'Watershed & water-resource monitoring',
      'Rangeland & ASAL degradation tracking',
      'Boundary & tenure dispute resolution',
    ],
  },
];

export default function NaturalResourcesIndustryPage() {
  return (
    <div className="nr-page">
      <SharedDefs />

      {/* ================= HERO ================= */}
      <header className="page-hero">
        <svg className="nr-hero-topo" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path
            d="M-40,470 C 140,420 220,320 180,220 C 140,120 260,60 420,90 C 580,120 620,220 560,300 C 500,380 560,460 700,440 C 840,420 900,320 1040,340 C 1140,354 1200,300 1240,260"
            fill="none"
            stroke="#5fcf95"
            strokeWidth={1.4}
            opacity={0.55}
          />
          <path
            d="M-40,500 C 160,450 260,360 220,260 C 180,160 300,100 460,130 C 620,160 660,250 600,330 C 540,410 610,480 740,460 C 870,440 930,340 1070,360 C 1160,374 1220,330 1260,300"
            fill="none"
            stroke="#5fcf95"
            strokeWidth={1.4}
            opacity={0.35}
          />
          <path
            d="M-40,120 C 120,90 260,140 300,220 C 340,300 260,360 320,420 C 380,480 520,470 580,410"
            fill="none"
            stroke="#8fb0c9"
            strokeWidth={1.4}
            opacity={0.4}
          />
          <path
            d="M-40,90 C 140,60 280,110 330,200 C 380,290 290,360 350,430 C 400,488 540,478 610,420"
            fill="none"
            stroke="#8fb0c9"
            strokeWidth={1.4}
            opacity={0.28}
          />
          <circle cx="420" cy="90" r="4" fill="#e8935a" />
          <circle cx="700" cy="440" r="4" fill="#e8935a" />
          <circle cx="1040" cy="340" r="4" fill="#e8935a" />
          <circle cx="300" cy="220" r="3.5" fill="#5fcf95" opacity={0.85} />
          <circle cx="580" cy="410" r="3.5" fill="#5fcf95" opacity={0.85} />
        </svg>
        <HeroTexture />
        <div className="page-hero-inner nr-hero-inner">
          <h1>
            <span className="stat">KSh 534bn</span> lost to deforestation every year. <span className="stat">80%</span> of
            Kenya&apos;s land is barely watched at all.
          </h1>
          <p>
            Forests, mineral deposits, and the 80% of the country classed as arid and semi-arid move faster than anyone
            can survey on foot. GeoClim turns satellite, drone, and ground data into a live picture of what&apos;s
            actually out there — before it&apos;s logged, degraded, or mined out from under you.
          </p>
          <div className="nr-hero-actions">
            <Link className="pill-cta" href="/contact">
              See the terrain live
            </Link>
            <Link className="ghost-cta" href="/work">
              See the case study →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= THE UNMONITORED FRONTIER (light, core-sample strip) ================= */}
      <section className="nr-light">
        <div className="section-head">
          <div className="kicker">The unmonitored frontier</div>
          <h2>Kenya&apos;s natural wealth is mapped once, in a report, and watched never.</h2>
        </div>
        <Reveal className="nr-strip">
          <div className="nr-band fr">
            <div className="nrb-label">Forest loss</div>
            <div className="nrb-stat">KSh 534bn/yr</div>
            <p>Lost to deforestation and forest degradation annually — about 3% of GDP, and 84,716 hectares of cover a year.</p>
            <div className="nrb-src">Forest Status Report 2024</div>
          </div>
          <div className="nr-band mn">
            <div className="nrb-label">Mining&apos;s GDP share</div>
            <div className="nrb-stat">1% → 10%</div>
            <p>Where mining sits today versus the government&apos;s 2030 target — a tenfold gap that exploration and compliance data has to close.</p>
            <div className="nrb-src">Ministry of Mining, 2026 policy</div>
          </div>
          <div className="nr-band ld">
            <div className="nrb-label">Land under-surveyed</div>
            <div className="nrb-stat">80%</div>
            <p>Of Kenya&apos;s landmass is arid or semi-arid — carrying 70% of the nation&apos;s livestock and 90% of its wildlife.</p>
            <div className="nrb-src">ASAL Secretariat</div>
          </div>
        </Reveal>
      </section>

      {/* ================= SURVEY / MODEL / PROTECT (dark, benchmark cards) ================= */}
      <section className="nr-flow">
        <div className="section-head">
          <div className="kicker">How GeoClim closes the gap</div>
          <h2>Survey it. Model it. Protect it.</h2>
        </div>
        <div className="nr-stop-grid">
          <Reveal className="nr-stop fr">
            <div className="nr-stamp">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="nr-stop-top">
              <div className="nr-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 20 7 20 17 12 22 4 17 4 7 Z" />
                </svg>
              </div>
              <div>
                <h3>Survey it</h3>
                <span className="ns-tools">PENTA-B · SATELLITE/UAV/LIDAR</span>
              </div>
            </div>
            <p>Forest cover, mineral concessions, and land-use boundaries captured at resolution no field team can walk.</p>
          </Reveal>
          <Reveal className="nr-stop mn" delay="0.08s">
            <div className="nr-stamp">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="nr-stop-top">
              <div className="nr-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v20M4 8l8-6 8 6M4 16l8 6 8-6" />
                </svg>
              </div>
              <div>
                <h3>Model it</h3>
                <span className="ns-tools">ROCKEYE · CHANGE DETECTION</span>
              </div>
            </div>
            <p>Every new pass compared against the last, turning slow change — a shrinking canopy, an expanding pit — into a number.</p>
          </Reveal>
          <Reveal className="nr-stop ld" delay="0.16s">
            <div className="nr-stamp">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="nr-stop-top">
              <div className="nr-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z" />
                </svg>
              </div>
              <div>
                <h3>Protect it</h3>
                <span className="ns-tools">ROCKEYE · EARLY WARNING</span>
              </div>
            </div>
            <p>Encroachment, illegal extraction, and degradation flagged early enough for enforcement or restoration to still work.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= THREE RESOURCE SYSTEMS (light, header-band cards) ================= */}
      <section className="nr-light">
        <div className="section-head">
          <div className="kicker">Built for three resource systems</div>
          <h2>A forest, a mine, and a watershed don&apos;t share a template — they share a landscape.</h2>
        </div>
        <div className="nr-type-grid">
          {TYPES.map((t) => (
            <Reveal className={`nr-type-card ${t.key}`} key={t.key}>
              <div className="nr-tc-head">
                <h3>{t.name}</h3>
                <span className="nr-tc-tag">{t.tag}</span>
              </div>
              <div className="nr-tc-body">
                {t.items.map((it) => (
                  <div className="nr-tc-item" key={it}>
                    <span className="nr-tc-dot" />
                    {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROOF (dark, centered panel) ================= */}
      <section className="nr-proof">
        <Reveal className="nr-proof-card">
          <svg className="nr-proof-spark" viewBox="0 0 220 100" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,20 20,26 40,24 60,34 80,30 100,42 120,36 140,50 160,44 180,56 200,50 220,60"
              fill="none"
              stroke="#e8935a"
              strokeWidth={2}
            />
          </svg>
          <div className="kicker">Natural Resources · Kenya</div>
          <div className="nr-proof-result">-35%</div>
          <h3>Concession compliance monitoring for a mineral-exploration licensee</h3>
          <p>
            Satellite and drone survey data applied across an active concession — the same survey → model → protect
            approach outlined above, already running in the region. Methodology and timeframe available on request.
          </p>
          <Link href="/work">Read the engagement →</Link>
        </Reveal>
      </section>

      {/* ================= CTA (light, sitewide component) ================= */}
      <section className="cta-band">
        <h2>Ready to see the ground truth?</h2>
        <p>
          A terrain visibility assessment shows what&apos;s really happening on your concession, catchment, or forest
          block — not what the last survey said.
        </p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            See the terrain live
          </Link>
        </div>
      </section>
    </div>
  );
}
