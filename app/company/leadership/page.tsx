import type { Metadata } from 'next';
import '../../../styles/components/company.css';

export const metadata: Metadata = {
  title: 'Leadership | GeoClim East Africa',
  description: "How GeoClim's team is organised.",
};

// Evidence discipline (docs/08, .claude/rules/content-discipline.md): no
// leadership names, titles, bios, or photographs exist in any source
// material reviewed for this build. This page deliberately does not invent
// any of those to look more complete — it states the operating model in
// general terms and marks named profiles as pending. Do not add a stock
// "team" photo grid or a photo of unnamed people standing in for real
// leadership; a visually quiet page is the correct output here.
export default function LeadershipPage() {
  return (
    <main>
      <section>
        <div className="wrap co-quiet">
          <span className="eyebrow">Company</span>
          <h1>Leadership</h1>
          <p>
            GeoClim East Africa is run by a Nairobi-based team with specialists across geospatial engineering,
            software delivery, and the sectors the platform serves — agriculture, infrastructure, government,
            climate, insurance, and transport. Engagements are staffed by the specialists relevant to each project
            rather than a single generalist account team.
          </p>
          <span className="co-marker">Leadership profiles are being finalised.</span>
        </div>
      </section>
    </main>
  );
}
