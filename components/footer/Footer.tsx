import Link from 'next/link';

/** Four-column footer, ported from the reference mockup's footer markup.
 * Links point at the site's real routes rather than the mockup's
 * placeholder "#" anchors. */
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="wordmark" style={{ fontSize: 17 }}>
              Geo<span>Clim</span>
            </div>
            <p style={{ marginTop: 14, maxWidth: '32ch', color: 'var(--muted)', fontSize: 14 }}>
              Geospatial intelligence for East Africa. Nairobi, Kenya.
            </p>
          </div>
          <div>
            <h4>Platform</h4>
            <ul className="foot-links">
              <li>
                <Link href="/sectors">Sectors</Link>
              </li>
              <li>
                <Link href="/platform">Platform</Link>
              </li>
              <li>
                <Link href="/proof">Proof</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="foot-links">
              <li>
                <Link href="/company">About</Link>
              </li>
              <li>
                <Link href="/company/governance-and-trust">Governance &amp; Trust</Link>
              </li>
              <li>
                <Link href="/company/where-we-work">Where we work</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="foot-links">
              <li>
                <Link href="/contact">General enquiries</Link>
              </li>
              <li>
                <Link href="/contact">Government &amp; Public Sector</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© GEOCLIM EAST AFRICA, 2026</span>
          <span>NAIROBI · KAMPALA · DAR ES SALAAM · KIGALI +6</span>
        </div>
      </div>
    </footer>
  );
}
