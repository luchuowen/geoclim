import Link from 'next/link';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';
import HeroImageCarousel from '@/components/home/HeroImageCarousel';

export default function HomePage() {
  return (
    <>
      <SharedDefs />

      <header className="home-hero has-photo">
        <HeroImageCarousel />
        <HeroTexture />
        <div className="home-hero-inner">
          <h1 className="h1-xl">
            Smart technology
            <br />
            <span className="accent">that turns data into action.</span>
          </h1>
          <p className="home-hero-sub">
            GeoClim East Africa brings geospatial intelligence, enterprise systems, and AI together in one connected
            operational layer — powered by Penta-B and RockEye ERP partnerships across 10 African markets.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="pill-cta" href="/contact">
              Request a consultation
            </Link>
            <Link className="ghost-cta" href="/capabilities">
              See our platforms →
            </Link>
          </div>
          <div className="hero-trust-bar">
            <span>Enterprise GIS</span>
            <span>RockEye ERP</span>
            <span>Penta-B Platforms</span>
            <span>10-Country Delivery</span>
          </div>
        </div>
      </header>

      <div className="facts">
        <div className="facts-inner">
          <div className="fact-item">
            <svg className="fact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
            </svg>
            <b>10</b>
            <span>Countries served</span>
          </div>
          <div className="fact-item">
            <svg className="fact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 12l3 3 5-6" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <b>2</b>
            <span>Technology partners</span>
          </div>
          <div className="fact-item">
            <svg className="fact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1.2" />
              <rect x="14" y="3" width="7" height="7" rx="1.2" />
              <rect x="3" y="14" width="7" height="7" rx="1.2" />
              <rect x="14" y="14" width="7" height="7" rx="1.2" />
            </svg>
            <b>6</b>
            <span>Industries served</span>
          </div>
          <div className="fact-item">
            <svg className="fact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
            <b>4</b>
            <span>Service lines</span>
          </div>
        </div>
      </div>

      <section className="triad">
        <div className="triad-head home-triad-head">
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
          <h2>Maps, workflows, and enterprise data — reconciled, not just displayed side by side.</h2>
          <p>
            Most GIS vendors stop at the map. GeoClim pairs Penta-B&apos;s geo-enabled enterprise platforms with
            RockEye&apos;s intelligent ERP, so a spatial finding becomes a work order, an asset record, or a
            forecast — inside the same system your teams already run on.
          </p>
          <div className="glass-points">
            <div className="glass-point">
              <div className="num">01</div>
              <div>
                <h4>Penta-B Maps &amp; Apps</h4>
                <p>Multi-tenant, multilingual GIS applications built for field and back-office teams alike.</p>
              </div>
            </div>
            <div className="glass-point">
              <div className="num">02</div>
              <div>
                <h4>PBPM</h4>
                <p>Geo-enabled business process automation that turns a map finding into a work order.</p>
              </div>
            </div>
            <div className="glass-point">
              <div className="num">03</div>
              <div>
                <h4>RockEye</h4>
                <p>AI-powered ERP analytics and real-time dashboards on the same operational record.</p>
              </div>
            </div>
          </div>
        </div>
        <Reveal className="stack">
          <div className="layer l1">
            <span>RockEye — Enterprise Data</span>
          </div>
          <div className="layer l2">
            <span>Penta-B — Workflow (PBPM)</span>
          </div>
          <div className="layer l3">
            <span>GIS + Satellite / UAV / IoT</span>
          </div>
        </Reveal>
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
              {/* Nairobi HQ — right-side badge, large pin */}
              <circle cx="590" cy="161" r="7" className="pulse-ring pulse-ring-lg" />
              <circle cx="590" cy="161" r="7" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={2} />
              <rect x="600" y="147" width="130" height="28" rx="14" className="pulse-badge" />
              <rect x="600" y="147" width="3" height="28" rx="1.5" className="pulse-accent" />
              <text x="613" y="166" fontSize="15" className="pulse-label">
                Nairobi HQ
              </text>

              {/* Kampala — right-side badge */}
              <circle cx="396" cy="145" r="5" className="pulse-ring pulse-ring-sm" style={{ animationDelay: '0.3s' }} />
              <circle cx="396" cy="145" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <rect x="406" y="133" width="86" height="24" rx="12" className="pulse-badge" />
              <rect x="406" y="133" width="3" height="24" rx="1.5" className="pulse-accent" />
              <text x="419" y="149" fontSize="13" className="pulse-label">
                Kampala
              </text>

              {/* Dar es Salaam — right-side badge */}
              <circle cx="700" cy="215" r="5" className="pulse-ring pulse-ring-sm" style={{ animationDelay: '0.6s' }} />
              <circle cx="700" cy="215" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <rect x="710" y="203" width="140" height="24" rx="12" className="pulse-badge" />
              <rect x="710" y="203" width="3" height="24" rx="1.5" className="pulse-accent" />
              <text x="723" y="219" fontSize="13" className="pulse-label">
                Dar es Salaam
              </text>

              {/* Kigali — left-side badge */}
              <circle cx="280" cy="168" r="5" className="pulse-ring pulse-ring-sm" style={{ animationDelay: '0.9s' }} />
              <circle cx="280" cy="168" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <rect x="192" y="156" width="78" height="24" rx="12" className="pulse-badge" />
              <rect x="192" y="156" width="3" height="24" rx="1.5" className="pulse-accent" />
              <text x="205" y="172" fontSize="13" className="pulse-label">
                Kigali
              </text>

              {/* Addis Ababa — right-side badge */}
              <circle cx="680" cy="60" r="5" className="pulse-ring pulse-ring-sm" style={{ animationDelay: '1.2s' }} />
              <circle cx="680" cy="60" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <rect x="690" y="48" width="122" height="24" rx="12" className="pulse-badge" />
              <rect x="690" y="48" width="3" height="24" rx="1.5" className="pulse-accent" />
              <text x="703" y="64" fontSize="13" className="pulse-label">
                Addis Ababa
              </text>

              {/* Lusaka — left-side badge */}
              <circle cx="200" cy="300" r="5" className="pulse-ring pulse-ring-sm" style={{ animationDelay: '1.5s' }} />
              <circle cx="200" cy="300" r="5" fill="#6ee7c7" stroke="#0a0c10" strokeWidth={1.5} />
              <rect x="112" y="288" width="78" height="24" rx="12" className="pulse-badge" />
              <rect x="112" y="288" width="3" height="24" rx="1.5" className="pulse-accent" />
              <text x="125" y="304" fontSize="13" className="pulse-label">
                Lusaka
              </text>
            </svg>
          </div>
        </div>
        <p className="slab-cap">
          Regional footprint — Kenya, Uganda, Tanzania, Rwanda, Ethiopia, Zambia, Malawi, DRC,
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
        <Reveal className="case-card ag">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-agriculture.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Agriculture · Kenya</div>
            <h3>Precision agriculture with real-time crop monitoring</h3>
            <div className="cc-result">30%</div>
            <p className="cc-note">
              A 30% lift in yield followed real-time crop monitoring through a full growing season on the
              client&apos;s farms.
            </p>
          </div>
        </Reveal>
        <Reveal className="case-card ut" delay="0.1s">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-utilities.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Utilities · Uganda</div>
            <h3>Smart GIS monitoring for a regional water utility</h3>
            <div className="cc-result">−25%</div>
            <p className="cc-note">
              A 25% cut in water loss followed smart GIS monitoring across the utility&apos;s entire regional
              pipe network.
            </p>
          </div>
        </Reveal>
        <Reveal className="case-card tr" delay="0.2s">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-transport.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Transportation · Tanzania</div>
            <h3>AI-driven traffic planning in pilot corridors</h3>
            <div className="cc-result">↓ congestion</div>
            <p className="cc-note">
              A marked drop in congestion followed AI-driven traffic planning across three pilot corridors in
              Tanzania.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="cta-band">
        <h2>Connect your data. Strengthen your decisions.</h2>
        <p>Let&apos;s explore how geospatial intelligence can work across your organisation.</p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Request a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
