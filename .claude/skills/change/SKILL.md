---
name: change
description: Open a new change artifact and size the work. Invoke explicitly as /change <slug>.
disable-model-invocation: true
---

# /change <slug>

1. Read the ask. Ask for every known constraint up front (in Intent), not
   discovered mid-build.
2. Size it from the paths it touches against `.factory/manifest.json`:
   - Touches `critical_paths` → **critical**: copy
     `.factory/changes/TEMPLATE.md` to `.factory/changes/<date>-<slug>.md`,
     enter plan mode, run Intent/Spec/Plan at `/effort high`, plan the
     domain reviewer + property/golden tests the manifest calls for.
   - Touches a `protected` path → stop. Do not size it; tell the owner
     which exact file needs to change and why, and wait.
   - Otherwise, one-sentence diff, no new dependency, no critical path →
     **trivial**: no artifact, go straight to Build, Stop hook gates it.
   - Everything else → **standard**: copy the template, inline plan, default
     effort, `reviewer` agent before Ship.
3. Fill Intent and Spec now. Only use `AskUserQuestion` at a genuine fork —
   otherwise state the assumption and proceed.
4. Hand off to Plan → Build, per playbook §3.
