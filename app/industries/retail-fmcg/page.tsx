import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';

export const metadata: Metadata = {
  title: 'Retail & FMCG — GeoClim East Africa',
  description:
    'Live visibility for outlets, distribution, and demand across East Africa — map the market, stock the shelf, grow into what the data actually shows.',
};

const TYPES = [
  {
    key: 'gm',
    name: 'Geo-Marketing & Site Selection',
    tag: 'Footprint to funnel',
    items: [
      'Outlet mapping & catchment analysis',
      'Site-selection & expansion scoring',
      'Trade-area & competitor mapping',
      'Campaign geo-targeting',
    ],
  },
  {
    key: 'sc',
    name: 'Supply Chain & Distribution',
    tag: 'Depot to duka',
    items: [
      'Route-to-market optimization',
      'Real-time stock & availability tracking',
      'Cold-chain & delivery monitoring',
      'Distributor performance analytics',
    ],
  },
  {
    key: 'mx',
    name: 'Market Expansion Analytics',
    tag: 'Data to decision',
    items: [
      'White-space & demand modeling',
      'New-market entry scoring',
      'Category & basket-performance analysis',
      'Counterfeit & grey-market detection',
    ],
  },
];

export default function RetailFmcgIndustryPage() {
  return (
    <div className="rf-page">
      <SharedDefs />

      {/* ================= HERO ================= */}
      <header className="page-hero">
        <svg className="rf-hero-map" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g stroke="#3a3d52" strokeWidth={1} opacity={0.5}>
            <path d="M0,80 H1200 M0,160 H1200 M0,240 H1200 M0,320 H1200 M0,400 H1200 M0,480 H1200" />
            <path d="M120,0 V540 M280,0 V540 M440,0 V540 M600,0 V540 M760,0 V540 M920,0 V540 M1080,0 V540" />
          </g>
          <circle cx="280" cy="160" r="20" fill="#c23b5a" opacity={0.18} />
          <circle cx="280" cy="160" r="5" fill="#f2789a" />
          <circle cx="600" cy="240" r="26" fill="#c23b5a" opacity={0.16} />
          <circle cx="600" cy="240" r="6" fill="#f2789a" />
          <circle cx="440" cy="320" r="5" fill="#f2789a" opacity={0.8} />
          <circle cx="760" cy="400" r="5" fill="#f2789a" opacity={0.8} />
          <circle cx="920" cy="160" r="22" fill="#1f7a99" opacity={0.18} />
          <circle cx="920" cy="160" r="6" fill="#5fd0ea" />
          <circle cx="1080" cy="320" r="5" fill="#5fd0ea" opacity={0.8} />
          <circle cx="760" cy="80" r="5" fill="#5fd0ea" opacity={0.8} />
          <circle cx="440" cy="80" r="18" fill="#b8892e" opacity={0.18} />
          <circle cx="440" cy="80" r="5" fill="#f0c15e" />
          <circle cx="120" cy="240" r="5" fill="#f0c15e" opacity={0.8} />
          <circle cx="920" cy="400" r="5" fill="#f0c15e" opacity={0.8} />
        </svg>
        <HeroTexture />
        <div className="page-hero-inner rf-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/industries">Industries</Link> <span>/</span> Retail &amp;
            FMCG
          </div>
          <h1>
            <span className="stat">KSh 800bn</span> lost to counterfeits every year. <span className="stat">43%</span>{' '}
            of FMCG sales happen off the map.
          </h1>
          <p>
            GeoClim maps Kenya&apos;s fragmented retail network — outlets, routes, and shelves — turning real-world
            distribution into live data for smarter expansion, sales, and marketing.
          </p>
          <div className="rf-hero-actions">
            <Link className="pill-cta" href="/contact">
              See the market live
            </Link>
            <Link className="ghost-cta" href="/work">
              See the case study →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= THE INVISIBLE HIGH STREET (light, shelf-tag cards) ================= */}
      <section className="rf-light">
        <div className="section-head">
          <div className="kicker">The invisible high street</div>
          <h2>Half of Kenya&apos;s retail trade happens somewhere no spreadsheet can find it.</h2>
        </div>
        <Reveal className="rf-tag-grid">
          <div className="rf-tag gm">
            <div className="rf-tag-hole" />
            <div className="rf-barcode">
              {[100, 70, 100, 45, 90, 60, 100, 30, 80, 55, 100, 40].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="rft-label">Counterfeit drag</div>
            <div className="rft-stat">KSh 800bn/yr</div>
            <p>Lost to the economy annually through counterfeit and grey-market goods, much of it moving through unmapped channels.</p>
            <div className="rft-src">Anti-Counterfeit Authority, 2025</div>
          </div>
          <div className="rf-tag sc">
            <div className="rf-tag-hole" />
            <div className="rf-barcode">
              {[80, 100, 50, 65, 100, 35, 90, 100, 45, 70, 100, 55].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="rft-label">Informal share</div>
            <div className="rft-stat">43%</div>
            <p>Of FMCG purchases happen through dukas, kiosks, hawkers, and open markets — largely outside any formal distribution map.</p>
            <div className="rft-src">GeoPoll FMCG Study</div>
          </div>
          <div className="rf-tag mx">
            <div className="rf-tag-hole" />
            <div className="rf-barcode">
              {[100, 40, 75, 100, 55, 90, 30, 100, 60, 80, 45, 100].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="rft-label">Launch risk</div>
            <div className="rft-stat">80%</div>
            <p>Of new FMCG products disappear from African shelves within 18 months — usually for lack of the data to launch well.</p>
            <div className="rft-src">Retail industry analysis, 2025</div>
          </div>
        </Reveal>
      </section>

      {/* ================= MAP / STOCK / GROW (dark, pin cards) ================= */}
      <section className="rf-flow">
        <div className="section-head">
          <div className="kicker">How GeoClim closes the gap</div>
          <h2>Map it. Stock it. Grow it.</h2>
        </div>
        <div className="rf-stop-grid">
          <Reveal className="rf-stop gm">
            <div className="rf-stop-top">
              <div className="rf-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
              </div>
              <div>
                <h3>Map it</h3>
                <span className="rfs-tools">PENTA-B · SATELLITE/GEOSPATIAL</span>
              </div>
            </div>
            <p>Every outlet, kiosk, and market stall geo-located and classified — the retail landscape as it actually exists.</p>
          </Reveal>
          <Reveal className="rf-stop sc" delay="0.08s">
            <div className="rf-stop-top">
              <div className="rf-stop-ic">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="7" width="13" height="10" rx="1.5" />
                  <path d="M16 10h3l2 3v4h-5z" />
                  <circle cx="7.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </div>
              <div>
                <h3>Stock it</h3>
                <span className="rfs-tools">ROCKEYE · ROUTE-TO-MARKET</span>
              </div>
            </div>
            <p>Distribution routes and stock levels tracked against real demand, so the right product reaches the right shelf.</p>
          </Reveal>
          <Reveal className="rf-stop mx" delay="0.16s">
            <div className="rf-stop-top">
              <div className="rf-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 19V10M10 19V5M16 19v-7M22 19H2" />
                </svg>
              </div>
              <div>
                <h3>Grow it</h3>
                <span className="rfs-tools">ROCKEYE · EXPANSION ANALYTICS</span>
              </div>
            </div>
            <p>White-space and site-selection analysis show exactly where the next outlet, route, or campaign should go.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= THREE PARTS OF THE SHELF (light, header-band cards) ================= */}
      <section className="rf-light">
        <div className="section-head">
          <div className="kicker">Built for how goods reach the shelf</div>
          <h2>Marketing, distribution, and expansion don&apos;t share a template — they share a map.</h2>
        </div>
        <div className="rf-type-grid">
          {TYPES.map((t) => (
            <Reveal className={`rf-type-card ${t.key}`} key={t.key}>
              <div className="rf-tc-head">
                <h3>{t.name}</h3>
                <span className="rf-tc-tag">{t.tag}</span>
              </div>
              <div className="rf-tc-body">
                {t.items.map((it) => (
                  <div className="rf-tc-item" key={it}>
                    <span className="rf-tc-dot" />
                    {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROOF (dark, centered panel) ================= */}
      <section className="rf-proof">
        <Reveal className="rf-proof-card">
          <svg className="rf-proof-spark" viewBox="0 0 220 100" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,70 20,64 40,68 60,54 80,58 100,42 120,46 140,32 160,36 180,22 200,26 220,14"
              fill="none"
              stroke="#5fd0ea"
              strokeWidth={2}
            />
          </svg>
          <div className="kicker">Retail &amp; FMCG · Kenya</div>
          <div className="rf-proof-result">+18%</div>
          <h3>Route-to-market optimization for a regional FMCG distributor</h3>
          <p>
            Outlet mapping and delivery-route data applied across an active distribution network — the same map → stock →
            grow approach outlined above, already running in the region. Methodology and timeframe available on request.
          </p>
          <Link href="/work">Read the engagement →</Link>
        </Reveal>
      </section>

      {/* ================= CTA (light, sitewide component) ================= */}
      <section className="cta-band">
        <h2>Ready to see your market as it actually is?</h2>
        <p>
          A retail visibility assessment shows where your outlets, competitors, and next customers actually are — not
          where the last census said they&apos;d be.
        </p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            See the market live
          </Link>
        </div>
      </section>
    </div>
  );
}
