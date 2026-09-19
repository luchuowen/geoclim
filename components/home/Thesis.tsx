import Reveal from './Reveal';
import { THESIS } from '../../content/home';

/** "What we do" statement — ported verbatim from the reference mockup's
 * `.thesis` section. */
export default function Thesis() {
  return (
    <div className="wrap hairline">
      <Reveal className="thesis">
        <span className="eyebrow">{THESIS.eyebrow}</span>
        <h2>{THESIS.heading}</h2>
        <p className="lead">{THESIS.lead}</p>
      </Reveal>
    </div>
  );
}
