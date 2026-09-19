import { redirect } from 'next/navigation';

/** Retired route — see app/sectors/page.tsx. */
export default function SectorSlugRedirect() {
  redirect('/industries');
}
