import type { Metadata } from 'next';
import SharedDefs, { HeroTexture, HeroPhoto, HeroScan } from '@/components/ui/SharedDefs';
import Reveal from '@/components/home/Reveal';

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
      <header className="page-hero has-photo">
        <HeroPhoto src="/images/hero-work.jpg" />
        <HeroScan />
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> Work
          </div>
          <h1>
            Work, <span className="accent">with results.</span>
          </h1>
          <p>
            Three engagements with published outcomes. Client names are confidential, but we&apos;re happy to share
            the timelines, approach, and methodology behind each project on request.
          </p>
        </div>
      </header>

      <section className="work-cases">
        <div className="work-cases-grid">
          <Reveal className="work-case-card ag">
            <div className="wc-visual" style={{ backgroundImage: 'url(/images/card-agriculture.jpg)' }} aria-hidden="true" />
            <div className="wc-body">
              <div className="wc-tag">Agriculture · Kenya</div>
              <h3>Precision agriculture for a commercial agribusiness client</h3>
              <div className="wc-result">30% yield increase</div>
              <p className="wc-note">Real-time monitoring applied across the growing season. Methodology and timeframe available on request.</p>
            </div>
          </Reveal>
          <Reveal className="work-case-card ut" delay="0.1s">
            <div className="wc-visual" style={{ backgroundImage: 'url(/images/card-utilities.jpg)' }} aria-hidden="true" />
            <div className="wc-body">
              <div className="wc-tag">Utilities · Uganda</div>
              <h3>Leak reduction for a regional water utility</h3>
              <div className="wc-result">25% less water loss</div>
              <p className="wc-note">Smart GIS monitoring identified network losses ahead of manual inspection cycles.</p>
            </div>
          </Reveal>
          <Reveal className="work-case-card tr" delay="0.2s">
            <div className="wc-visual" style={{ backgroundImage: 'url(/images/card-transport.jpg)' }} aria-hidden="true" />
            <div className="wc-body">
              <div className="wc-tag">Transportation · Tanzania</div>
              <h3>Traffic planning across pilot corridors</h3>
              <div className="wc-result">Reduced congestion</div>
              <p className="wc-note">AI-driven insight into pilot corridors; full metrics available under NDA.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="work-arc">
        <div className="section-head">
          <div className="kicker">How we work</div>
          <h2>Every engagement follows the same arc</h2>
        </div>
        <div className="work-arc-outer">
          <svg className="work-arc-svg" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M120,60 C 400,0 800,0 1080,60"
              fill="none"
              stroke="#1f7a52"
              strokeWidth={2}
              strokeDasharray="2 8"
              strokeLinecap="round"
              opacity={0.55}
            />
          </svg>
          <div className="work-arc-grid">
            {STEPS.map((s) => (
              <div className="work-arc-step" key={s.num}>
                <div className="work-arc-node-row">
                  <div className="work-arc-node">{s.num}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
