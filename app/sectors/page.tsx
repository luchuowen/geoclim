import { redirect } from 'next/navigation';

/** Retired route (old "Sectors" IA, superseded by /industries in the
 * "Direction C, Field" rebuild). Left in place as a redirect rather than
 * deleted, per this session's file-safety constraints. */
export default function SectorsRedirect() {
  redirect('/industries');
}
