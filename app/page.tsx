import Hero from '../components/home/Hero';
import Thesis from '../components/home/Thesis';
import Reveal from '../components/home/Reveal';
import SectorsPreview from '../components/home/SectorsPreview';
import ProofPreview from '../components/home/ProofPreview';
import RegionSummary from '../components/home/RegionSummary';
import DataPanel from '../components/ui/DataPanel';
import CtaBand from '../components/ui/CtaBand';
import '../components/home/home.css';
import { CTA_BAND, PLATFORM_MODULES, PLATFORM_SUMMARY, SEE_UNDERSTAND_ACT, SIU_PANELS, STATEMENT_BAND } from '../content/home';

const MODULE_DELAY_START = 0.02;
const MODULE_DELAY_STEP = 0.06;
const SIU_DELAY_START = 0.02;
const SIU_DELAY_STEP = 0.1;

export default function Home() {
  return (
    <main>
      <Hero />
      <Thesis />

      <div className="wrap hairline" id="platform">
        <section>
          <span className="eyebrow">{PLATFORM_SUMMARY.eyebrow}</span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '20ch' }}>{PLATFORM_SUMMARY.heading}</h2>
          <div className="modules">
            {PLATFORM_MODULES.map((mod, i) => (
              <Reveal
                key={mod.code}
                className="module-row"
                delay={`${(MODULE_DELAY_START + i * MODULE_DELAY_STEP).toFixed(2)}s`}
              >
                <span className="module-code">{mod.code}</span>
                <div className="module-body">
                  <h3>{mod.name}</h3>
                  <p>{mod.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <div className="wrap hairline">
        <section>
          <span className="eyebrow">{SEE_UNDERSTAND_ACT.eyebrow}</span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '22ch' }}>{SEE_UNDERSTAND_ACT.heading}</h2>
          <div className="siu-grid">
            {SIU_PANELS.map((item, i) => (
              <Reveal key={item.label} className="siu-item" delay={`${(SIU_DELAY_START + i * SIU_DELAY_STEP).toFixed(2)}s`}>
                <span className="siu-label">{item.label}</span>
                <DataPanel
                  seed={item.panel.seed}
                  caption={item.panel.caption}
                  status={item.panel.status}
                  coordLabel={item.panel.coordLabel}
                />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <SectorsPreview />

      <section className="statement-band">
        <Reveal className="wrap">
          <span className="eyebrow">{STATEMENT_BAND.eyebrow}</span>
          <h2>
            {STATEMENT_BAND.headingMain} <span className="dim">{STATEMENT_BAND.headingDim}</span>
          </h2>
        </Reveal>
      </section>

      <ProofPreview />
      <RegionSummary />

      <CtaBand
        eyebrow={CTA_BAND.eyebrow}
        heading={CTA_BAND.heading}
        sub={CTA_BAND.sub}
        buttons={CTA_BAND.buttons}
      />
    </main>
  );
}
