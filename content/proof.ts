// Proof data (Session 4 — docs/07). Every entry here is `[C]` — needs
// client confirmation — until a real, cleared engagement replaces it, so
// every one of these ships marked `ILLUSTRATIVE · PENDING CONFIRMATION`
// (see .claude/rules/content-discipline.md). Do not upgrade a `status` to
// `VERIFIED` without a real client-confirmed case behind it.

import type { ProofEntry as ProofEntryBase } from './types';

/**
 * Extends the shared `ProofEntry` contract (content/types.ts — Session 0,
 * read-only) with optional fields for the case detail a real, confirmed
 * engagement will eventually carry. These stay `undefined` until that
 * detail exists — this is a schema decision, not something to populate
 * speculatively now. An array typed `ProofEntry[]` here still satisfies
 * the shared `ProofEntry` interface everywhere that type is expected.
 */
export interface ProofEntry extends ProofEntryBase {
  /** Client organisation name, once cleared for public use. */
  clientName?: string;
  /** Longer engagement narrative — feeds a future "read the engagement"
   * expansion (see components/proof/ProofItem.tsx). Not built yet. */
  fullNarrative?: string;
  /** ISO date the figures on this entry were client-confirmed. */
  verifiedDate?: string;
}

export const PROOF_ENTRIES: ProofEntry[] = [
  {
    id: 'agriculture-precision-ag',
    sector: 'AGRICULTURE',
    copy: 'Crop-yield monitoring across a multi-county precision-agriculture engagement.',
    status: 'ILLUSTRATIVE · PENDING CONFIRMATION',
  },
  {
    id: 'utilities-water-loss',
    sector: 'UTILITIES',
    copy: "Water-network loss mapping supporting an infrastructure operator's reduction programme.",
    status: 'ILLUSTRATIVE · PENDING CONFIRMATION',
  },
  {
    id: 'transport-corridor-congestion',
    sector: 'TRANSPORT',
    copy: 'Corridor congestion analysis informing a regional transport-planning study.',
    status: 'ILLUSTRATIVE · PENDING CONFIRMATION',
  },
];
