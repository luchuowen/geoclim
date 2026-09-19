import { redirect } from 'next/navigation';

/** Retired route (old "Platform" IA, superseded by /capabilities in the
 * "Direction C, Field" rebuild). */
export default function PlatformRedirect() {
  redirect('/capabilities');
}
