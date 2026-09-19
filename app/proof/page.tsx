import { redirect } from 'next/navigation';

/** Retired route (old "Proof" IA, superseded by /work in the
 * "Direction C, Field" rebuild). */
export default function ProofRedirect() {
  redirect('/work');
}
