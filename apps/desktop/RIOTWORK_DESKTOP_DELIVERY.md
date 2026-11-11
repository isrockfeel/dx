# RIOTWORK Desktop — Delivery Contract

> **SKANG AND ROLL. PATCH IT.**

This is the delivery contract for the RIOTWORK desktop product. It supplements the [brand contract](../../RIOTWORK_BRAND.md) and the [Desktop engineering reference](README.md). The Electron application is a native shell around the shared dsh runtime; do not fork runtime behavior or invent a second source of truth in the renderer.

## Product bar

RIOTWORK must read as a punk-rock engineering workshop, not a generic AI SaaS dashboard. The interface should use the existing product vocabulary as functional navigation:

- **THE PIT** — live mission state, agent activity, blockers, and runtime signals.
- **THE CREW** — configured providers, agent capabilities, skills, permissions, and lineage.
- **THE STAGE** — mission brief, objectives, constraints, acceptance criteria, and deliverables.
- **THE GARAGE** — experiments, diagnostics, debugging, and repair.
- **THE PATCHBOARD** — proposed changes, diffs, reviews, test evidence, and ship/hold decisions.
- **THE ARCHIVE** — mission history, replay, decisions, and verified outcomes.

These are information-design responsibilities, not a mandate for six redundant pages. Keep the existing shared workspace and navigation architecture. Introduce a room only when it has a real data source and a distinct user job.

## Visual system

- **Identity:** gig-poster / photocopied-zine energy with a premium, controlled engineering surface.
- **Palette:** ink black, warm paper, signal red, acid yellow, restrained steel grey. Reserve high-energy colors for real state and action.
- **Type:** condensed display typography for mission identity; readable sans-serif for controls; mono for logs, diffs, IDs, and telemetry.
- **Composition:** editorial hierarchy, deliberate asymmetry, strong spacing, crisp separators, tactile labels, and selective halftone or stencil texture. Avoid identical card grids and decorative charts.
- **Motion:** event-driven and restrained. No fake agent activity, fake progress, or decorative live indicators.
- **Agent identity:** symbols and concise labels; no generic humanoid/robot avatar dependency.
- **Accessibility:** keyboard-first navigation, visible focus, semantic controls, readable contrast, reduced-motion support, and scalable layout.

Do not replace shared UI primitives or theme tokens with desktop-only duplicates unless an explicit platform constraint requires it. Do not introduce a new component library to restyle existing screens.

## Required user journeys

1. **First launch:** branded Welcome, clear provider/model setup, explicit configuration errors, and a direct path into a workspace.
2. **Returning user:** restore the last valid workspace without a fake loading or success state.
3. **Mission execution:** show actual task/agent lifecycle, ownership, timestamps, tool activity, blockers, and cancellation.
4. **Review and patch:** expose real diff, changed files, test evidence, approval requirements, and a truthful ship/hold status.
5. **Recovery:** explain startup, runtime, network, authentication, and update failures with a safe retry or diagnostic path.
6. **Updates:** show channel/version, download/install progress from real updater events, retry behavior, mandatory policy, and interruption warnings.
7. **Window lifecycle:** native menu, tray, hide/restore, quit confirmation, and keyboard shortcuts must match the documented platform behavior.
8. **Accessibility and localization:** English and Chinese strings remain paired; no hard-coded user-facing strings or inaccessible icon-only actions.

## Engineering boundaries

- Keep Electron main/preload/renderer boundaries explicit. Secrets and host credentials stay out of renderer storage and renderer logs.
- Reuse the shared Host, client UI, settings, and theme contracts. Desktop-specific behavior belongs behind narrow IPC and platform adapters.
- Do not rename the upstream `dsh` package namespace, protocol, data paths, or persistence formats as part of branding.
- A product claim must map to an implemented runtime capability. Planned rooms, automation, agent states, and release controls must be labelled as planned until implemented.
- Keep changes minimal and local. No speculative abstraction, broad dependency additions, duplicate state stores, or decorative telemetry.

## Local quality gates

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm run build:desktop
pnpm run verify-installer-locales
pnpm run verify-locale-metadata
pnpm run verify-client-ui-i18n
pnpm run verify-translation-pairing
```

The Desktop gate workflow runs these checks for relevant changes on `dev` and for pull requests targeting `master`. The repository's broader CI remains authoritative for shared runtime, package, security, and platform checks.

Platform-specific qualification remains separate and must run on the actual target OS:

- Windows x64: NSIS installer UI, install/upgrade/uninstall, tray/window lifecycle, and local updater qualification.
- macOS arm64/x64: bundle identity, signing/notarization, microphone permission, native menu, and update channel qualification.
- Linux: launch, window lifecycle, native dependencies, and packaging target support.

Do not infer a platform pass from a Linux TypeScript build.

## Release acceptance

A release candidate is **not ready** until all applicable items have evidence:

- [ ] Desktop build succeeds from a clean, frozen install.
- [ ] Shared CI and required pull-request checks pass on the exact commit.
- [ ] Welcome, workspace, mission execution, patch review, recovery, and update journeys are exercised.
- [ ] Installer installs, upgrades, launches, preserves user data, and uninstalls cleanly on each published platform.
- [ ] Product name, app ID, protocol ownership, icons, tray assets, installer copy, About panel, and update feed are consistent.
- [ ] Version, changelog, release notes, and artifacts refer to the same commit and release candidate.
- [ ] Signatures, notarization, checksums, and provenance are verified where applicable.
- [ ] Rollback and incident owner are documented.
- [ ] No release claim is based solely on a green UI indicator or an agent's self-report.

## Branch and release discipline

- Development changes land on `dev` through focused commits.
- `master` is protected release/integration history; never push routine development directly to it.
- Every change targeting `master` arrives through a pull request with required checks and review.
- Release publication is a deliberate, tagged, credentialed operation. CI validation and artifact rehearsal do not publish.
- Version bumps and changelog updates must follow the repository's existing release-family tooling. Do not create a second versioning system for the desktop shell.
- A branch name or a draft PR is not proof of merge, release, or production readiness.

## Current qualification status

This document establishes the acceptance bar; it does not assert that the checklist has passed. The GitHub connector can create commits and PRs, but it cannot run the local Electron GUI, install target-platform packages, or verify interactive native behavior. Those results must come from the CI runs and target machines and be reported with their exact commit and artifact links.
