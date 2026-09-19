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
            Work, <span className="accent">with the receipts.</span>
          </h1>
          <p>Three engagements with published results. Client names are withheld by confidentiality; timelines and methodology are available on request.</p>
        </div>
      </header>

      <div className="case-grid">
        <Reveal className="case-card">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-agriculture.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Agriculture · Kenya</div>
            <h3>Precision agriculture for a commercial agribusiness client</h3>
            <div className="cc-result">30% yield increase</div>
            <p className="cc-note">Real-time monitoring applied across the growing season. Methodology and timeframe available on request.</p>
          </div>
        </Reveal>
        <Reveal className="case-card" delay="0.1s">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-utilities.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Utilities · Uganda</div>
            <h3>Leak reduction for a regional water utility</h3>
            <div className="cc-result">25% less water loss</div>
            <p className="cc-note">Smart GIS monitoring identified network losses ahead of manual inspection cycles.</p>
          </div>
        </Reveal>
        <Reveal className="case-card" delay="0.2s">
          <div className="cc-visual cc-photo" style={{ backgroundImage: 'url(/images/card-transport.jpg)' }} aria-hidden="true" />
          <div className="cc-body">
            <div className="cc-tag">Transportation · Tanzania</div>
            <h3>Traffic planning across pilot corridors</h3>
            <div className="cc-result">Reduced congestion</div>
            <p className="cc-note">AI-driven insight into pilot corridors; full metrics available under NDA.</p>
          </div>
        </Reveal>
      </div>

      <section className="section-head">
        <div className="kicker">How we work</div>
        <h2>Every engagement follows the same arc</h2>
      </section>
      <div className="grid-cards cards-3">
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
