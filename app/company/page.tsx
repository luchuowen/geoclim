import type { Metadata } from 'next';
import '../../styles/components/company.css';
import { VISION, MISSION, CAPABILITY_AREAS, COMPANY_SUB_NAV } from '@/content/company';
import CapabilityList from '@/components/company/CapabilityList';
import SubNavCard from '@/components/company/SubNavCard';
import ImageSlot from '@/components/company/ImageSlot';

export const metadata: Metadata = {
  title: 'About GeoClim | GeoClim East Africa',
  description: "GeoClim's vision, mission, and how the company is organised.",
};

export default function CompanyPage() {
  return (
    <main>
      <section>
        <div className="wrap">
          <div className="co-header">
            <span className="eyebrow">Company</span>
            <h1>About GeoClim</h1>
            <p className="co-lead">
              GeoClim East Africa builds geo-intelligence and AI-powered software for industries and communities
              across the region.
            </p>
          </div>

          <div className="company-statement">
            <div>
              <span className="eyebrow">Vision</span>
              <p>{VISION}</p>
            </div>
            <div>
              <span className="eyebrow">Mission</span>
              <p>{MISSION}</p>
            </div>
          </div>

          <ImageSlot futureSrc="/images/company-about-01.jpg" alt="GeoClim's Nairobi operations space" />
        </div>
      </section>

      <section className="hairline">
        <div className="wrap">
          <div className="co-header">
            <span className="eyebrow">How we work</span>
            <p className="co-lead" style={{ marginTop: 12 }}>
              Beneath the sectors and platform buyers see, GeoClim&rsquo;s work is organised into four capability
              areas — how services are structured and delivered, not a menu of products to choose between.
            </p>
          </div>
          <CapabilityList areas={CAPABILITY_AREAS} />
        </div>
      </section>

      <section className="hairline">
        <div className="wrap">
          <span className="eyebrow">More about GeoClim</span>
          <div className="subnav-grid">
            {COMPANY_SUB_NAV.map((card) => (
              <SubNavCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
