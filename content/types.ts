// Shared content-type contracts (Session 0 owns this file). Every shape here
// is flat and uses only primitive/array fields so it maps 1:1 onto a future
// Firestore document — no framework-specific types, no nesting beyond plain
// objects/arrays. Sessions 1–5 write their `content/*.ts` data against these
// interfaces; changing a shape here touches every session downstream, so
// treat edits as a Session 0/6 task, not something a page session does.

/** Evidence tag from the Content Architecture spec (docs/01): whether a
 * piece of copy is verified, a reasonable inference, or needs client
 * confirmation. `[C]` content must ship with a visible StatusMarker, never
 * as a bare claim. */
export type EvidenceStatus = 'VERIFIED' | 'ILLUSTRATIVE · PENDING CONFIRMATION';

/** Status label used on an illustrative DataPanel device (not a content
 * evidence tag — this labels the device itself, e.g. "ILLUS." vs a
 * client-confirmed "VERIFIED" panel). */
export type DataPanelStatus = 'ILLUS.' | 'VERIFIED';

export interface DataPanelSpec {
  /** Deterministic seed passed to mulberry32 — same seed always renders the
   * same blob layout. */
  seed: number;
  caption: string;
  status: DataPanelStatus;
  /** Mono coordinate/date/routing label drawn near the panel's leader line,
   * e.g. "MAR 2026", "ROUTED". */
  coordLabel: string;
}

export interface Sector {
  id: string;
  slug: string;
  name: string;
  /** Short description used in the nav mega-menu dropdown. */
  navDescription: string;
  /** Longer description used on the sector card / sector page. */
  description: string;
  /** Segment chips, e.g. ["ENTERPRISE", "NGO"]. */
  tags: string[];
  /** Key into the shared sector icon set (nav dropdown + sector card share
   * the same icon per sector). */
  iconKey: string;
}

export interface PlatformModule {
  id: string;
  slug: string;
  /** Short product code, e.g. "MNA", "PBPM", "SMART GIS", "PSIM", "ROCKEYE". */
  code: string;
  name: string;
  /** One-sentence outcome statement, verbatim from the approved mockup. */
  outcome: string;
  /** Short description used in the nav mega-menu dropdown. */
  navDescription: string;
  relatedSectorSlugs: string[];
  panel: DataPanelSpec;
}

export interface ProofEntry {
  id: string;
  /** Mono sector label, e.g. "AGRICULTURE". */
  sector: string;
  copy: string;
  status: EvidenceStatus;
}

export interface Region {
  id: string;
  name: string;
  /** True for GeoClim's HQ/hub node (Nairobi); hub nodes render at the
   * globe's centre rather than an orbit position. */
  hub?: boolean;
  /** Degrees, used to position the node on the region globe. */
  angle: number;
  /** 0–1, distance from centre as a fraction of the globe's radius. */
  dist: number;
}
