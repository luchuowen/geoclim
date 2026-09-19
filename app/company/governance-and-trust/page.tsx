import type { Metadata } from 'next';
import '../../../styles/components/company.css';

export const metadata: Metadata = {
  title: 'Governance & Trust | GeoClim East Africa',
  description: "GeoClim's approach to data governance and client engagements.",
};

// Evidence discipline (docs/08, .claude/rules/content-discipline.md): no
// certification (ISO, data-security standard, or otherwise) is evidenced
// anywhere in source material for this build. This page states GeoClim's
// approach to data handling, engagement, and methodology in general terms
// and does not claim any specific certification.
export default function GovernanceAndTrustPage() {
  return (
    <main>
      <section>
        <div className="wrap co-quiet">
          <span className="eyebrow">Company</span>
          <h1>Governance &amp; Trust</h1>
          <p>
            GeoClim treats client data as confidential by default: data supplied for an engagement is used only for
            the purposes agreed with the client, access is limited to the team members working on that engagement,
            and nothing is shared with a third party without the client&rsquo;s consent.
          </p>

          <ul className="co-gov-list">
            <li>
              <h3>Data handling</h3>
              <p>
                Client data is scoped, stored, and accessed only as needed for the agreed engagement, with access
                limited to the team delivering it.
              </p>
            </li>
            <li>
              <h3>Engagement model</h3>
              <p>
                Work proceeds through scoping, delivery, and handover: requirements and outputs are agreed up front,
                work is delivered against that scope, and the client receives the data, methodology, and outputs
                needed to use the results independently.
              </p>
            </li>
            <li>
              <h3>Methodology</h3>
              <p>
                GeoClim is transparent about how an analysis was produced — data sources, methods, and known
                limitations are documented and shared with the client alongside the results, not held back as a
                black box.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
