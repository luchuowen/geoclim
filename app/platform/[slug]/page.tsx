import { redirect } from 'next/navigation';

/** Retired route — see app/platform/page.tsx. */
export default function PlatformSlugRedirect() {
  redirect('/capabilities');
}
