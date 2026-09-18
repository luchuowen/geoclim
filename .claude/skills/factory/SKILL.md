---
name: factory
description: Manage the Software Factory install itself — migrate an existing repo onto a newer playbook version, init a new project, or print factory status. Invoke explicitly as /factory migrate|init|status.
disable-model-invocation: true
---

# /factory

Arguments: `migrate` | `init <name>` | `status`

## `migrate`

Read `docs/Software_Factory_Playbook.md` §6. Compare
`.factory/manifest.json#playbook_version` (absent ⇒ version 0) against the
playbook's current version. Apply only the `## Migration from` entries after
the installed version, in order:

1. Inspect: `manifest.json`, `CLAUDE.md`, `.claude/**`, `.factory/DECISIONS.md`,
   CI config, package scripts. One-screen inventory of prose vs mechanised vs
   stale.
2. Preserve: every still-true, expensive-to-rediscover fact → `DECISIONS.md`;
   supersede the original into `.factory/history/`.
3. Mechanise: for each remaining prose rule, ask whether a hook, permission,
   gate, lint, or test can enforce it instead. Wire it, delete the prose.
4. Install: write missing factory files; overwrite factory-owned files
   (`hooks/*.sh`, `skills/factory|change|verify|ship`, `agents/reviewer.md`,
   `scripts/factory-check.sh`, `changes/TEMPLATE.md`); merge project-owned
   files, never overwrite them wholesale.
5. Rewrite `CLAUDE.md` to the §8 template, ≤ 80 lines.
6. Validate: `bash scripts/factory-check.sh full`; prove each hook fires by
   piping representative tool-call JSON into it; append the version to
   `applied_migrations`; write a change artifact for the migration itself.

## `init <name>`

Follow playbook §7: interview into `specifications.md` (data model, money/
auth surfaces, device floor, out of scope, end-to-end proof), pick the
smallest stack that keeps verification cheap, install the factory with
`critical_paths`/`gates` derived from the spec, then build a walking
skeleton as the first change through the full loop.

## `status`

Print: `playbook_version`, any unapplied `## Migration from` entries in the
playbook past that version, the current `CLAUDE.md` / `DECISIONS.md` line
counts against their caps, and the result of `bash scripts/factory-check.sh
gates`.
