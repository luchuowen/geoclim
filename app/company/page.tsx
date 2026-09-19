import { redirect } from 'next/navigation';

/** Retired route (old "Company" IA, superseded by /about in the
 * "Direction C, Field" rebuild). */
export default function CompanyRedirect() {
  redirect('/about');
}
