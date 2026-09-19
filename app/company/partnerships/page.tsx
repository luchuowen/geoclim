import { redirect } from 'next/navigation';

/** Retired route — superseded by /partners in the "Direction C, Field" rebuild. */
export default function PartnershipsRedirect() {
  redirect('/partners');
}
