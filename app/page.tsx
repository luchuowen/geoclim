import Link from 'next/link';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import HeroCarousel from '@/components/home/HeroCarousel';

export default function HomePage() {
  return (
    <>
      <SharedDefs />

      <header className="home-hero">
        <HeroTexture />
        <div className="badges">
          <span className="badge" style={{ top: '10%', left: '5%' }}>
            <i />
            Enterprise GIS
          </span>
          <span className="badge" style={{ top: '22%', right: '4%' }}>
            <i />
            RockEye ERP
          </span>
          <span className="badge" style={{ bottom: '14%', left: '9%' }}>
            <i />
            Penta-B Platforms
          </span>
          <span className="badge" style={{ bottom: '8%', right: '9%' }}>
            <i />
            10-Country Delivery
          </span>
        </div>
        <div className="home-hero-inner">
          <div className="kicker" style={{ textAlign: 'center' }}>
            Geospatial · Enterprise · AI — East, Central &amp; Southern Africa
          </div>
          <h1 className="h1-xl">
            Intelligent technologies <span className="accent">that bridge data to action.</span>
          </h1>
          <p className="home-hero-sub">
            GeoClim East Africa connects geospatial intelligence, enterprise systems, and AI into one operational
            layer — through named technology partnerships with Penta-B and RockEye ERP, delivered across ten
            African markets.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="pill-cta" href="/contact">
              Request a consultation
            </Link>
            <Link className="ghost-cta" href="/capabilities">
              See our platforms →
            </Link>
          </div>
          <HeroCarousel />
        </div>
      </header>

      <div className="facts">
        <div className="facts-inner">
          <div>
            <b>10</b>
            <span>Countries served</span>
          </div>
          <div>
            <b>2</b>
            <span>Named technology partnerships</span>
          </div>
          <div>
            <b>6</b>
            <span>Industries with dedicated solutions</span>
          </div>
          <div>
            <b>4</b>
            <span>Core service lines</span>
          </div>
        </div>
      </div>

      <section className="triad">
        <div className="triad-head">
          Three disciplines, one platform: spatial intelligence tells you what&apos;s happening, enterprise
          integration tells you what to do about it, and AI makes the read faster each time.
        </div>
        <div className="triad-grid">
          <div className="triad-card">
            <h3>SPATIAL INTELLIGENCE</h3>
            <div className="frame">
              <svg viewBox="0 0 300 230" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="230" fill="#233126" />
                <polygon
                  points="150,10 210,40 230,110 200,180 150,220 100,190 70,120 90,50"
                  fill="#3c5c3e"
                  stroke="#6ee7c7"
                  strokeWidth={1}
                />
                <circle cx="150" cy="120" r="3" fill="#6ee7c7" />
                <circle cx="120" cy="90" r="2" fill="#6ee7c7" />
                <circle cx="175" cy="150" r="2" fill="#6ee7c7" />
              </svg>
            </div>
            <p className="cap">GIS, satellite, UAV &amp; IoT</p>
            <p className="sub">
              Penta-B&apos;s Maps &amp; Apps and SMART Real-Time GIS platforms, plus satellite, drone, and sensor
              monitoring for agriculture and infrastructure.
            </p>
          </div>
          <div className="triad-card">
            <h3>ENTERPRISE INTEGRATION</h3>
            <div className="frame">
              <svg viewBox="0 0 300 230" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="230" fill="#14161c" />
                <g fill="#3a3f52">
                  <rect x="30" y="30" width="60" height="34" />
                  <rect x="100" y="30" width="60" height="34" />
                  <rect x="170" y="30" width="60" height="34" />
                  <rect x="30" y="74" width="60" height="34" />
                  <rect x="100" y="74" width="60" height="34" />
                  <rect x="170" y="74" width="60" height="34" />
                </g>
                <rect x="95" y="65" width="70" height="48" fill="none" stroke="#6ee7c7" strokeWidth={1.4} strokeDasharray="3 3" />
              </svg>
            </div>
            <p className="cap">RockEye ERP + PBPM workflows</p>
            <p className="sub">
              Asset intelligence, predictive maintenance, supply chain optimization, and workflow automation
              running on the same operational record.
            </p>
          </div>
          <div className="triad-card">
            <h3>AI &amp; AUTOMATION</h3>
            <div className="frame">
              <svg viewBox="0 0 300 230" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="230" fill="#fff" />
                <g stroke="#191733" strokeWidth={0.6} opacity={0.25}>
                  <line x1="0" y1="60" x2="300" y2="60" />
                  <line x1="0" y1="120" x2="300" y2="120" />
                  <line x1="0" y1="180" x2="300" y2="180" />
                </g>
                <polyline
                  points="10,150 40,130 70,160 100,110 130,140 160,90 190,120 220,70 250,100 280,60"
                  fill="none"
                  stroke="#2f7d6b"
                  strokeWidth={2.4}
                />
              </svg>
            </div>
            <p className="cap">Predictive analytics &amp; RPA</p>
            <p className="sub">AI-powered ERP analytics and robotic process automation applied to real-time dashboards, not a bolt-on chatbot.</p>
          </div>
        </div>
      </section>

      <section className="glass">
        <div>
          <div className="kicker">Why two named partners, not twenty vague ones</div>
          <h2>Maps, workflows, and enterprise data — reconciled, not just displayed side by side.</h2>
          <p>
            Most GIS vendors stop at the map. GeoClim pairs Penta-B&apos;s geo-enabled enterprise platforms with
            RockEye&apos;s intelligent ERP, so a spatial finding becomes a work order, an asset record, or a
            forecast — inside the same system your teams already run on.
          </p>
          <ul className="glass-list">
            <li>Multi-tenant, multilingual GIS applications (Penta-B Maps &amp; Apps)</li>
            <li>Geo-enabled business process automation (PBPM)</li>
            <li>AI-powered ERP analytics and real-time dashboards (RockEye)</li>
          </ul>
        </div>
        <div className="stack">
          <div className="layer l1">
            <span>RockEye — Enterprise Data</span>
          </div>
          <div className="layer l2">
            <span>Penta-B — Workflow (PBPM)</span>
          </div>
          <div className="layer l3">
            <span>GIS + Satellite / UAV / IoT</span>
          </div>
        </div>
      </section>

      <section className="slab-wrap">
        <div className="slab-head">
          <h2>Ten markets, one delivery team.</h2>
          <p>Headquartered in Nairobi, with active regional delivery across East, Central, and Southern Africa.</p>
        </div>
        <div className="slab">
          <div className="slab-inner">
            <svg viewBox="0 0 1000 380" preserveAspectRatio="xMidYMid slice">
              <rect width="1000" height="380" fill="#cfe0c9" />
              <g stroke="#19173355" strokeWidth={1}>
                <line x1="0" y1="95" x2="1000" y2="95" />
                <line x1="0" y1="190" x2="1000" y2="190" />
                <line x1="0" y1="285" x2="1000" y2="285" />
                <line x1="250" y1="0" x2="250" y2="380" />
                <line x1="500" y1="0" x2="500" y2="380" />
                <line x1="750" y1="0" x2="750" y2="380" />
              </g>
              <circle cx="430" cy="190" r="6" fill="#191733" />
              <text x="444" y="195" fontFamily="IBM Plex Mono" fontSize="15" fill="#191733">
                Nairobi HQ
              </text>
              <circle cx="620" cy="120" r="4" fill="#191733" />
              <text x="632" y="125" fontFamily="IBM Plex Mono" fontSize="13" fill="#191733">
                Kampala
              </text>
              <circle cx="700" cy="260" r="4" fill="#191733" />
              <text x="712" y="265" fontFamily="IBM Plex Mono" fontSize="13" fill="#191733">
                Dar es Salaam
              </text>
              <circle cx="300" cy="230" r="4" fill="#191733" />
              <text x="200" y="235" fontFamily="IBM Plex Mono" fontSize="13" fill="#191733">
                Kigali
              </text>
              <circle cx="560" cy="60" r="4" fill="#191733" />
              <text x="572" y="65" fontFamily="IBM Plex Mono" fontSize="13" fill="#191733">
                Addis Ababa
              </text>
              <circle cx="200" cy="300" r="4" fill="#191733" />
              <text x="70" y="305" fontFamily="IBM Plex Mono" fontSize="13" fill="#191733">
                Lusaka
              </text>
            </svg>
          </div>
        </div>
        <p className="slab-cap">
          Illustrative regional footprint — Kenya, Uganda, Tanzania, Rwanda, Ethiopia, Zambia, Malawi, DRC,
          Mozambique, Zimbabwe
        </p>
      </section>

      <section style={{ padding: '90px var(--gutter) 0', maxWidth: 1300, margin: '0 auto' }}>
        <div className="section-head" style={{ padding: 0 }}>
          <div className="kicker">Published results</div>
          <h2>Recent work</h2>
        </div>
      </section>
      <div className="case-grid">
        <div className="case-card">
          <div className="cc-visual">
            <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="210" fill="#233126" />
              <polygon points="150,10 210,40 230,110 200,180 150,205 100,180 70,110 90,40" fill="#3c5c3e" stroke="#6ee7c7" strokeWidth={1} />
            </svg>
          </div>
          <div className="cc-body">
            <div className="cc-tag">Agriculture · Kenya</div>
            <h3>Precision agriculture with real-time crop monitoring</h3>
            <div className="cc-result">30%</div>
            <p className="cc-note">Reported yield increase, per GeoClim&apos;s published case results.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="cc-visual">
            <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="210" fill="#14161c" />
              <g stroke="#6ee7c7" strokeWidth={1} fill="none">
                <path d="M10 170 L60 120 L110 140 L160 70 L200 100" />
              </g>
            </svg>
          </div>
          <div className="cc-body">
            <div className="cc-tag">Utilities · Uganda</div>
            <h3>Smart GIS monitoring for a regional water utility</h3>
            <div className="cc-result">−25%</div>
            <p className="cc-note">Reported reduction in water loss, per GeoClim&apos;s published case results.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="cc-visual">
            <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="210" fill="#fff" />
              <g stroke="#191733" strokeWidth={0.6} opacity={0.2}>
                <line x1="0" y1="60" x2="300" y2="60" />
                <line x1="0" y1="120" x2="300" y2="120" />
              </g>
              <polyline points="10,140 50,120 90,150 130,90 170,110 210,60 250,90" fill="none" stroke="#2f7d6b" strokeWidth={2.2} />
            </svg>
          </div>
          <div className="cc-body">
            <div className="cc-tag">Transportation · Tanzania</div>
            <h3>AI-driven traffic planning in pilot corridors</h3>
            <div className="cc-result">↓ congestion</div>
            <p className="cc-note">Directional improvement reported in pilot corridors; methodology on request.</p>
          </div>
        </div>
      </div>

      <section className="cta-band">
        <h2>Ready to see what one integrated layer looks like for your operation?</h2>
        <p>Government, utility, agricultural, or enterprise — we&apos;ll scope it against real systems, not a generic demo.</p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Request a consultation
          </Link>
          <Link className="ghost-cta" href="/contact">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
