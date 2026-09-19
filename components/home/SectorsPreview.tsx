import Reveal from './Reveal';
import { SECTORS, SECTORS_PREVIEW } from '../../content/home';

const DELAY_STEP = 0.05;
const DELAY_START = 0.02;

/** Six-card sectors preview — ported verbatim from the reference mockup's
 * `#sectors` section. Card data is hard-coded here pending
 * `content/sectors.ts` (Session 2) — see that file's TODO. */
export default function SectorsPreview() {
  return (
    <div className="wrap hairline" id="sectors">
      <section>
        <span className="eyebrow">{SECTORS_PREVIEW.eyebrow}</span>
        <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '20ch' }}>{SECTORS_PREVIEW.heading}</h2>
        <div className="sector-grid">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.slug} className="sector-card" delay={`${(DELAY_START + i * DELAY_STEP).toFixed(2)}s`}>
              <svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <path d={sector.iconPath} />
              </svg>
              <h3>{sector.name}</h3>
              <p>{sector.description}</p>
              <div className="sector-tags">
                {sector.tags.map((tag) => (
                  <span key={tag} className="seg-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
