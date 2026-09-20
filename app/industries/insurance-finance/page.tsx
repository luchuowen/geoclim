import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';

export const metadata: Metadata = {
  title: 'Insurance & Finance — GeoClim East Africa',
  description:
    'Risk modelling, fraud detection, claims validation, and credit scoring for East Africa — model the risk, flag the fraud, approve on evidence.',
};

const TYPES = [
  {
    key: 'rk',
    name: 'Risk Modelling & Underwriting',
    tag: 'Exposure to premium',
    items: [
      'Property & asset risk scoring',
      'Climate & catastrophe exposure modelling',
      'Geospatial underwriting data',
      'Portfolio concentration analysis',
    ],
  },
  {
    key: 'fr',
    name: 'Fraud & Claims',
    tag: 'Claim to verdict',
    items: [
      'Claims anomaly & fraud detection',
      'Site/asset verification via satellite & UAV',
      'Claims-processing time reduction',
      'Network & collusion-pattern analysis',
    ],
  },
  {
    key: 'cr',
    name: 'Credit & Lending',
    tag: 'Applicant to approval',
    items: [
      'Alternative credit scoring for the unbanked',
      'Collateral & asset verification',
      'Geospatial risk-adjusted lending',
      'Portfolio-at-risk monitoring',
    ],
  },
];

const RISK_GRID_PATHS = [
  { d: 'M20,83 L42,112 L64,63 L86,79 L108,106 L130,53', color: '#5fd99b', opacity: 0.35 },
  { d: 'M170,111 L192,101 L214,47 L236,71 L258,78 L280,63', color: '#e8677a', opacity: 0.16 },
  { d: 'M320,105 L342,109 L364,84 L386,77 L408,42 L430,111', color: '#7c96c9', opacity: 0.21 },
  { d: 'M470,105 L492,99 L514,99 L536,114 L558,54 L580,76', color: '#e8677a', opacity: 0.3 },
  { d: 'M620,92 L642,96 L664,70 L686,94 L708,62 L730,82', color: '#e8677a', opacity: 0.3 },
  { d: 'M770,85 L792,106 L814,92 L836,73 L858,114 L880,45', color: '#7c96c9', opacity: 0.38 },
  { d: 'M920,78 L942,54 L964,91 L986,87 L1008,95 L1030,66', color: '#5fd99b', opacity: 0.25 },
  { d: 'M1070,86 L1092,72 L1114,93 L1136,58 L1158,87 L1180,84', color: '#e8677a', opacity: 0.27 },
  { d: 'M20,203 L42,209 L64,189 L86,212 L108,211 L130,211', color: '#e8677a', opacity: 0.27 },
  { d: 'M170,204 L192,205 L214,224 L236,216 L258,244 L280,241', color: '#7c96c9', opacity: 0.25 },
  { d: 'M320,227 L342,217 L364,232 L386,227 L408,204 L430,246', color: '#e8677a', opacity: 0.35 },
  { d: 'M470,199 L492,209 L514,205 L536,226 L558,189 L580,211', color: '#5fd99b', opacity: 0.22 },
  { d: 'M620,249 L642,191 L664,239 L686,247 L708,219 L730,249', color: '#5fd99b', opacity: 0.27 },
  { d: 'M770,244 L792,200 L814,223 L836,243 L858,234 L880,243', color: '#7c96c9', opacity: 0.35 },
  { d: 'M920,190 L942,238 L964,212 L986,179 L1008,212 L1030,189', color: '#e8677a', opacity: 0.28 },
  { d: 'M1070,233 L1092,249 L1114,232 L1136,236 L1158,215 L1180,196', color: '#5fd99b', opacity: 0.34 },
  { d: 'M20,379 L42,370 L64,326 L86,359 L108,344 L130,349', color: '#7c96c9', opacity: 0.38 },
  { d: 'M170,368 L192,356 L214,325 L236,376 L258,327 L280,317', color: '#5fd99b', opacity: 0.25 },
  { d: 'M320,364 L342,337 L364,315 L386,331 L408,384 L430,342', color: '#7c96c9', opacity: 0.25 },
  { d: 'M470,315 L492,348 L514,337 L536,357 L558,329 L580,353', color: '#5fd99b', opacity: 0.4 },
  { d: 'M620,320 L642,340 L664,363 L686,353 L708,348 L730,342', color: '#5fd99b', opacity: 0.33 },
  { d: 'M770,338 L792,343 L814,368 L836,333 L858,373 L880,331', color: '#7c96c9', opacity: 0.17 },
  { d: 'M920,333 L942,325 L964,348 L986,350 L1008,347 L1030,325', color: '#e8677a', opacity: 0.26 },
  { d: 'M1070,336 L1092,369 L1114,314 L1136,362 L1158,315 L1180,371', color: '#7c96c9', opacity: 0.2 },
  { d: 'M20,484 L42,500 L64,474 L86,499 L108,487 L130,459', color: '#e8677a', opacity: 0.3 },
  { d: 'M170,504 L192,516 L214,484 L236,451 L258,507 L280,514', color: '#7c96c9', opacity: 0.22 },
  { d: 'M320,469 L342,519 L364,452 L386,516 L408,510 L430,450', color: '#e8677a', opacity: 0.23 },
  { d: 'M470,465 L492,447 L514,496 L536,458 L558,491 L580,464', color: '#e8677a', opacity: 0.4 },
  { d: 'M620,511 L642,506 L664,485 L686,451 L708,472 L730,469', color: '#e8677a', opacity: 0.36 },
  { d: 'M770,465 L792,482 L814,450 L836,467 L858,502 L880,506', color: '#7c96c9', opacity: 0.16 },
  { d: 'M920,480 L942,513 L964,472 L986,468 L1008,465 L1030,477', color: '#7c96c9', opacity: 0.33 },
  { d: 'M1070,500 L1092,453 L1114,490 L1136,464 L1158,492 L1180,482', color: '#7c96c9', opacity: 0.21 },
];

export default function InsuranceFinanceIndustryPage() {
  return (
    <div className="if-page">
      <SharedDefs />

      {/* ================= HERO ================= */}
      <header className="page-hero">
        <svg className="if-hero-grid" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {RISK_GRID_PATHS.map((p, i) => (
            <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={1.3} opacity={p.opacity} />
          ))}
        </svg>
        <HeroTexture />
        <div className="page-hero-inner if-hero-inner">
          <h1>
            Kenya insures <span className="stat">2.63%</span> of its GDP. <span className="stat">1 in 7</span> adults
            still don&apos;t exist to a lender at all.
          </h1>
          <p>
            Risk, fraud, and creditworthiness in East Africa are still assessed the way they were a decade ago — on
            paper, on trust, and on whoever showed up last. GeoClim turns location, asset, and behavioural data into a
            real risk picture, before the policy is underwritten, the claim is paid, or the loan is approved.
          </p>
          <div className="if-hero-actions">
            <Link className="pill-cta" href="/contact">
              See the risk picture live
            </Link>
            <Link className="ghost-cta" href="/work">
              See the case study →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= THE TRUST GAP (light, chart-stat cards) ================= */}
      <section className="if-light">
        <div className="section-head">
          <div className="kicker">The trust gap</div>
          <h2>Every policy, claim, and loan is still a bet on incomplete information.</h2>
        </div>
        <Reveal className="if-stat-grid">
          <div className="if-stat-card rk">
            <svg className="if-spark" viewBox="0 0 200 44" preserveAspectRatio="none">
              <path
                d="M0,30 25,34 50,18 75,26 100,10 125,22 150,8 175,16 200,4"
                fill="none"
                stroke="#2c3e5c"
                strokeWidth={2}
              />
            </svg>
            <div className="ifs-label">Insurance penetration</div>
            <div className="ifs-stat">2.63%</div>
            <p>
              Of GDP — a decade high for Kenya, and still a fraction of what&apos;s actually at risk across property,
              health, and agriculture.
            </p>
            <div className="ifs-src">IRA / Business Daily, 2025</div>
          </div>
          <div className="if-stat-card fr">
            <svg className="if-spark" viewBox="0 0 200 44" preserveAspectRatio="none">
              <path
                d="M0,36 25,32 50,34 75,20 100,24 125,10 150,14 175,6 200,2"
                fill="none"
                stroke="#a8293a"
                strokeWidth={2}
              />
            </svg>
            <div className="ifs-label">Fraud surge</div>
            <div className="ifs-stat">+49%</div>
            <p>
              Rise in reported insurance fraud cases in a single quarter — most of it caught only after the claim was
              already paid.
            </p>
            <div className="ifs-src">Insurance Fraud Investigation Unit</div>
          </div>
          <div className="if-stat-card cr">
            <svg className="if-spark" viewBox="0 0 200 44" preserveAspectRatio="none">
              <path
                d="M0,10 25,16 50,12 75,24 100,20 125,30 150,26 175,36 200,32"
                fill="none"
                stroke="#1f7a52"
                strokeWidth={2}
              />
            </svg>
            <div className="ifs-label">Financially invisible</div>
            <div className="ifs-stat">1 in 7</div>
            <p>Kenyan adults remain fully excluded from formal financial services — invisible to any lender&apos;s risk model.</p>
            <div className="ifs-src">CBK FinAccess, 2024</div>
          </div>
        </Reveal>
      </section>

      {/* ================= MODEL / FLAG / APPROVE (dark, top-rule cards) ================= */}
      <section className="if-flow">
        <div className="section-head">
          <div className="kicker">How GeoClim closes the gap</div>
          <h2>Model it. Flag it. Approve it.</h2>
        </div>
        <div className="if-stop-grid">
          <Reveal className="if-stop rk">
            <div className="if-stop-top">
              <div className="if-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 4 6v6c0 5.5 3.8 9.7 8 10 4.2-.3 8-4.5 8-10V6l-8-4z" />
                </svg>
              </div>
              <div>
                <h3>Model it</h3>
                <span className="ifs-tools">PENTA-B · GEOSPATIAL/ASSET DATA</span>
              </div>
            </div>
            <p>Every asset, address, and applicant scored against real location and exposure data — not a postcode-level guess.</p>
          </Reveal>
          <Reveal className="if-stop fr" delay="0.08s">
            <div className="if-stop-top">
              <div className="if-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.3 3.9 2.7 17.1A2 2 0 0 0 4.4 20h15.2a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
              </div>
              <div>
                <h3>Flag it</h3>
                <span className="ifs-tools">ROCKEYE · ANOMALY DETECTION</span>
              </div>
            </div>
            <p>Claims and applications checked against patterns no single adjuster could see, catching fraud before it&apos;s paid out.</p>
          </Reveal>
          <Reveal className="if-stop cr" delay="0.16s">
            <div className="if-stop-top">
              <div className="if-stop-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <h3>Approve it</h3>
                <span className="ifs-tools">ROCKEYE · CREDIT &amp; UNDERWRITING</span>
              </div>
            </div>
            <p>Risk scores reach underwriting and lending decisions in minutes, backed by evidence — not a guess or a gut call.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= THREE MOMENTS OF RISK (light, header-band cards) ================= */}
      <section className="if-light">
        <div className="section-head">
          <div className="kicker">Built for three moments of risk</div>
          <h2>A policy, a claim, and a loan don&apos;t share a template — they share a risk picture.</h2>
        </div>
        <div className="if-type-grid">
          {TYPES.map((t) => (
            <Reveal className={`if-type-card ${t.key}`} key={t.key}>
              <div className="if-tc-head">
                <h3>{t.name}</h3>
                <span className="if-tc-tag">{t.tag}</span>
              </div>
              <div className="if-tc-body">
                {t.items.map((it) => (
                  <div className="if-tc-item" key={it}>
                    <span className="if-tc-dot" />
                    {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROOF (dark, centered panel) ================= */}
      <section className="if-proof">
        <Reveal className="if-proof-card">
          <svg className="if-proof-spark" viewBox="0 0 220 100" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,80 20,72 40,76 60,58 80,64 100,42 120,48 140,26 160,32 180,16 200,20 220,8"
              fill="none"
              stroke="#e8677a"
              strokeWidth={2}
            />
          </svg>
          <div className="kicker">Insurance &amp; Finance · Kenya</div>
          <div className="if-proof-result">-40%</div>
          <h3>Claims verification and fraud detection for a regional insurer</h3>
          <p>
            Satellite and geospatial verification applied across active claims — the same model → flag → approve
            approach outlined above, already running in the region. Methodology and timeframe available on request.
          </p>
          <Link href="/work">Read the engagement →</Link>
        </Reveal>
      </section>

      {/* ================= CTA (light, sitewide component) ================= */}
      <section className="cta-band">
        <h2>Ready to see the real risk?</h2>
        <p>
          A risk visibility assessment shows what&apos;s actually being insured, financed, or claimed — not what the
          application says.
        </p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            See the risk picture live
          </Link>
        </div>
      </section>
    </div>
  );
}
