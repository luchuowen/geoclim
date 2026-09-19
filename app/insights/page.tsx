import { redirect } from 'next/navigation';

/** Retired route (old "Insights" IA — no equivalent in the "Direction C,
 * Field" approved structure, so this redirects to Work). */
export default function InsightsRedirect() {
  redirect('/work');
}
