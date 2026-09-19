import Link from 'next/link';
import type { CompanySubNavCard } from '@/content/company';

/** One card in the `/company` sub-navigation grid, linking to Leadership,
 * Partnerships, Where We Work, or Governance & Trust. Purely navigational —
 * carries no claim about the linked page's content. */
export default function SubNavCard({ card }: { card: CompanySubNavCard }) {
  return (
    <Link href={card.href} className="subnav-card">
      <span className="subnav-card-title">{card.title}</span>
      <span className="subnav-card-desc">{card.description}</span>
      <span className="subnav-card-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
