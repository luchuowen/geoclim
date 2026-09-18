---
name: ship
description: Learn, commit, push, and open the PR for the current change. Invoke explicitly as /ship.
disable-model-invocation: true
---

# /ship

Only run after `/verify` is green.

1. Append 0–3 bullets to `.factory/DECISIONS.md` — only facts that are still
   true and expensive to rediscover; nothing narrative. If this pushes
   `DECISIONS.md` over its cap (`.factory/manifest.json#caps`), compact an
   older section into `.factory/history/` first.
2. Fill the artifact's "Learn + Ship" section.
3. Commit the diff together with the artifact file (same commit), following
   the repo's normal git-safety rules — review staged files, never force-push
   or amend, never skip hooks.
4. Push to the current branch (`git push -u origin <branch>`).
5. Open the PR only if the user asked for one. Agents never merge — that is
   always a human action.
