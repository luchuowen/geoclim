import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';

export const metadata: Metadata = {
  title: 'Work — GeoClim East Africa',
  description: 'Three engagements with published results across agriculture, utilities, and transportation.',
};

const STEPS = [
  { num: '01', title: 'Scope against real systems', body: "We start from what's already running — your GIS, your ERP, your field process — not a blank slate." },
  { num: '02', title: 'Deploy the platform layer', body: "Penta-B and RockEye configured to your sector, your data, and your team's existing workflow." },
  { num: '03', title: 'Hand over, not just switch on', body: 'Training and managed services until your team owns the system, not just uses it.' },
];

export default function WorkPage() {
  return (
    <>
      <SharedDefs />
      <header className="page-hero">
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> Work
          </div>
          <h1>
            Work, <span className="accent">with the receipts.</span>
          </h1>
          <p>Three engagements with published results. Client names are withheld by confidentiality; timelines and methodology are available on request.</p>
        </div>
      </header>

      <div className="case-grid">
        <div className="case-card">
          <div className="cc-visual">
            <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="210" fill="#233126" />
              <polygon points="150,10 210,40 230,110 200,180 150,205 100,180 70,110 90,40" fill="#3c5c3e" stroke="#6ee7c7" strokeWidth={1} />
              <circle cx="150" cy="110" r="3" fill="#6ee7c7" />
            </svg>
          </div>
          <div className="cc-body">
            <div className="cc-tag">Agriculture · Kenya</div>
            <h3>Precision agriculture for a commercial agribusiness client</h3>
            <div className="cc-result">30% yield increase</div>
            <p className="cc-note">Real-time monitoring applied across the growing season. Methodology and timeframe available on request.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="cc-visual">
            <svg viewBox="0 0 300 210" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="210" fill="#14161c" />
              <g stroke="#6ee7c7" strokeWidth={1} fill="none">
                <path d="M10 170 L60 120 L110 140 L160 70 L200 100" />
              </g>
              <circle cx="60" cy="120" r="3" fill="#6ee7c7" />
            </svg>
          </div>
          <div className="cc-body">
            <div className="cc-tag">Utilities · Uganda</div>
            <h3>Leak reduction for a regional water utility</h3>
            <div className="cc-result">25% less water loss</div>
            <p className="cc-note">Smart GIS monitoring identified network losses ahead of manual inspection cycles.</p>
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
            <h3>Traffic planning across pilot corridors</h3>
            <div className="cc-result">Reduced congestion</div>
            <p className="cc-note">AI-driven insight into pilot corridors; full metrics available under NDA.</p>
          </div>
        </div>
      </div>

      <section className="section-head">
        <div className="kicker">How we work</div>
        <h2>Every engagement follows the same arc</h2>
      </section>
      <div className="grid-cards">
        {STEPS.map((s) => (
          <div className="info-card" key={s.num}>
            <div className="ic-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
