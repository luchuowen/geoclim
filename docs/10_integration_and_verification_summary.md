# Integration & Verification Stage — Summary

The full, operative checklist lives inside `session-6-integration-qa.md`, written as a self-contained Claude Code prompt so it can be handed to a session directly. This file is the short-form summary for anyone reviewing the plan without opening every session prompt.

**When it runs**: after Sessions 1–5 (Home, Sectors, Platform, Proof + Regions, Company/Insights/Contact) are all complete and merged to `main`. It is a single session, run alone — not parallelised.

**What it does, in order**:
1. Merges all five feature branches into `main`.
2. Resolves cross-links that couldn't be finalised while sessions were running independently — nav/homepage fallback content replaced with real imports, sector↔platform slug references checked both directions, footer links verified against the real route list.
3. Runs the full verification pass: design-token compliance, responsive behaviour at 400/768/1440px, accessibility (automated + keyboard + reduced-motion), content/evidence compliance against the Content Architecture spec's tagging, and a Lighthouse performance pass on a production build.
4. Produces `PHASE_2_PUNCHLIST.md` — the specific, itemised handoff of everything this phase deliberately deferred (the seven client-confirmation items, the NanoBanana image drop-in, the real contact-form backend, the Firestore/GCP migration path).

**What it explicitly does not do**: deploy anywhere, provision Firestore or any GCP resource, or wire up a real email/CRM backend for the contact form. Those are Phase 2, gated on Owen's review of this build.

**Why this is a separate session and not folded into Session 0 or spread across 1–5**: cross-cutting fixes (a nav link that assumed a slug another session later changed, a shared component two sessions both needed and one had to add) are exactly the kind of change that causes merge conflicts if made inside a page-owning session's branch. Isolating them into one final session, after everything else is done, means every fix is made once, deliberately, against the real merged codebase — not guessed at mid-flight by a session that can't see the others' work.
