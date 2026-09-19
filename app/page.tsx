import Link from 'next/link';
import SharedDefs, { HeroTexture, HeroPhoto, HeroScan } from '@/components/ui/SharedDefs';
import HeroCarousel from '@/components/home/HeroCarousel';

export default function HomePage() {
  return (
    <>
      <SharedDefs />

      <header className="home-hero has-photo">
        <HeroPhoto src="/images/hero-home.jpg" />
        <HeroScan />
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
            <div className="frame frame-photo" style={{ backgroundImage: 'url(/images/triad-spatial-intelligence.jpg)' }} />
            <p className="cap">GIS, satellite, UAV &amp; IoT</p>
            <p className="sub">
              Penta-B&apos;s Maps &amp; Apps and SMART Real-Time GIS platforms, plus satellite, drone, and sensor
              monitoring for agriculture and infrastructure.
            </p>
          </div>
          <div className="triad-card">
            <h3>ENTERPRISE INTEGRATION</h3>
            <div className="frame frame-photo" style={{ backgroundImage: 'url(/images/triad-enterprise-integration.jpg)' }} />
            <p className="cap">RockEye ERP + PBPM workflows</p>
            <p className="sub">
              Asset intelligence, predictive maintenance, supply chain optimization, and workflow automation
              running on the same operational record.
            </p>
          </div>
          <div className="triad-card">
            <h3>AI &amp; AUTOMATION</h3>
            <div className="frame frame-photo" style={{ backgroundImage: 'url(/images/triad-ai-automation.jpg)' }} />
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
              <defs>
                <clipPath id="slabClip">
                  <rect width="1000" height="380" />
                </clipPath>
              </defs>
              <g clipPath="url(#slabClip)">
                <image href="/images/slab-map.jpg" x="0" y="0" width="1000" height="380" preserveAspectRatio="xMidYMid slice" />
                <rect width="1000" height="380" fill="#0a0c10" opacity="0.16" />
              </g>
              <g stroke="#6ee7c799" strokeWidth={1}>
                <line x1="0" y1="95" x2="1000" y2="95" />
                <line x1="0" y1="190" x2="1000" y2="190" />
                <line x1="0" y1="285" x2="1000" y2="285" />
                <line x1="250" y1="0" x2="250" y2="380" />
                <line x1="500" y1="0" x2="500" y2="380" />
                <line x1="750" y1="0" x2="750" y2="380" />
              </g>
              <circle cx="430" cy="190" r="7" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={2} />
              <text
                x="444"
                y="195"
                fontFamily="IBM Plex Mono"
                fontSize="15"
                fill="#f4f4fa"
                stroke="#0a0c10"
                strokeWidth={3}
                paintOrder="stroke"
              >
                Nairobi HQ
              </text>
              <circle cx="620" cy="120" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <text
                x="632"
                y="125"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fill="#f4f4fa"
                stroke="#0a0c10"
                strokeWidth={3}
                paintOrder="stroke"
              >
                Kampala
              </text>
              <circle cx="700" cy="260" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <text
                x="712"
                y="265"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fill="#f4f4fa"
                stroke="#0a0c10"
                strokeWidth={3}
                paintOrder="stroke"
              >
                Dar es Salaam
              </text>
              <circle cx="300" cy="230" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <text
                x="200"
                y="235"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fill="#f4f4fa"
                stroke="#0a0c10"
                strokeWidth={3}
                paintOrder="stroke"
              >
                Kigali
              </text>
              <circle cx="560" cy="60" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <text
                x="572"
                y="65"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fill="#f4f4fa"
                stroke="#0a0c10"
                strokeWidth={3}
                paintOrder="stroke"
              >
                Addis Ababa
              </text>
              <circle cx="200" cy="300" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <text
                x="70"
                y="305"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fill="#f4f4fa"
                stroke="#0a0c10"
                strokeWidth={3}
                paintOrder="stroke"
              >
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
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-agriculture.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Agriculture · Kenya</div>
            <h3>Precision agriculture with real-time crop monitoring</h3>
            <div className="cc-result">30%</div>
            <p className="cc-note">Reported yield increase, per GeoClim&apos;s published case results.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-utilities.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Utilities · Uganda</div>
            <h3>Smart GIS monitoring for a regional water utility</h3>
            <div className="cc-result">−25%</div>
            <p className="cc-note">Reported reduction in water loss, per GeoClim&apos;s published case results.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-transport.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Transportation · Tanzania</div>
            <h3>AI-driven traffic planning in pilot corridors</h3>
            <div className="cc-result">↓ congestion</div>
            <p className="cc-note">Directional improvement reported in pilot corridors; methodology on request.</p>
          </div>
        </div>
      </div>

      <section className="cta-band">
        <h2>Connect your data. Strengthen your decisions.</h2>
        <p>Let&apos;s explore how geospatial intelligence can work across your organisation.</p>
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
