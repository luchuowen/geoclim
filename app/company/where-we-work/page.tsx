import { redirect } from 'next/navigation';

/** Retired route — see app/company/page.tsx. */
export default function WhereWeWorkRedirect() {
  redirect('/about');
}
