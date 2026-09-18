---
name: verify
description: Run full verification before claiming a change is done, and adversarial review. Invoke explicitly as /verify.
disable-model-invocation: true
---

# /verify

1. Run `bash scripts/factory-check.sh full`. Paste the tail of the output
   (not the whole log) into the open change artifact's "Verify + Review"
   section.
2. If it fails: fix and re-run. Do not proceed to review on red.
3. Dispatch the `reviewer` agent (fresh context) against the diff and the
   artifact's Spec/acceptance checks. For a **critical** change also
   dispatch the matching `<domain>-review` agent (see `.claude/agents/`).
4. Apply fixes for any reported bug, test failure, or misleading result
   (style-only findings are not blocking). Re-run step 1 if the diff
   changed.
5. Record findings and fixes in the artifact, then hand off to `/ship`.
