# RIOTWORK — Brand and Product Contract

> **SKANG AND ROLL. PATCH IT.**

This document defines the independent RIOTWORK product identity layered over the DeepSeek Harness runtime in this repository. It is the source of truth for product naming, voice, visual direction, and the user-facing metaphors used by future RIOTWORK experiences.

## Brand hierarchy

- **IsRockFeel** is the creative and product umbrella.
- **RIOTWORK** is the product identity: a punk-rock engineering environment for coordinating AI agents and shipping verified software changes.
- **DeepSeek Harness (`dsh`)** is the underlying agent runtime and codebase represented in this repository. The name is used descriptively and for accurate attribution only.

RIOTWORK is an independent project identity. It is not an official DeepSeek product and is not affiliated with, sponsored by, or endorsed by DeepSeek. Do not use DeepSeek logos, wordmarks, official artwork, or visual assets in a way that suggests approval or partnership. Follow the upstream [brand asset usage guidelines](BRAND_GUIDELINES.md), license, and third-party notices.

## Product promise

**Less talk. More patches. Real work.**

RIOTWORK turns complex software work into observable missions carried out by a capable agent crew. People set the direction and constraints; agents investigate, build, test, review, and propose changes. The system must make the work inspectable and the result verifiable.

RIOTWORK is not another generic agent dashboard, a fake AI company org chart, or a chat window surrounded by animated avatars. It is an engineering playground with a strong identity and real execution underneath.

This contract describes the intended product experience. A named room or capability below is a design concept unless the implementation and runtime expose it; documentation and UI must never present planned behavior as shipped functionality.

## Brand line

**RIOTWORK** names the workshop and the crew.

**SKANG AND ROLL.** carries the rhythm: energetic, collaborative, playful, restless, and unapologetically hands-on. Preserve the spelling **SKANG** exactly; do not silently normalize it to another word.

**PATCH IT.** is the delivery rule. A finding is not done until the problem is understood, a change is proposed, the change is tested, and its outcome is reported honestly.

## Workspace vocabulary

| Name | Purpose |
|---|---|
| **THE PIT** | Live view of the active mission, agent activity, blockers, and runtime signals |
| **THE CREW** | Agent identities, capabilities, providers, skills, permissions, and lineage |
| **THE STAGE** | The mission brief, objective, constraints, acceptance criteria, and deliverables |
| **THE GARAGE** | Experiments, debugging, alternate approaches, and repair work |
| **THE PATCHBOARD** | Proposed changes, diffs, reviews, test evidence, and ready-to-ship patches |
| **THE ARCHIVE** | Mission history, event replay, decisions, and verified outcomes |

These names are product vocabulary, not a requirement to create six separate dashboard pages. The interface should give each space a distinct job and visual character.

## The working loop

1. **BRIEF** — define the objective, constraints, budget, and acceptance criteria.
2. **ASSEMBLE** — form a crew from available agent providers and capabilities.
3. **RUN** — delegate work and execute through the configured runtime.
4. **INSPECT** — observe actual events, tool calls, messages, outputs, and blockers.
5. **CHALLENGE** — review claims, test assumptions, and seek independent counter-evidence.
6. **PATCH** — prepare a concrete change with a readable diff.
7. **VERIFY** — run relevant checks and preserve their results.
8. **SHIP OR HOLD** — publish only after the required approval and verification.
9. **ARCHIVE** — retain the mission trace and its final outcome.

## Visual direction

RIOTWORK should feel like an underground ska-punk workshop translated into a premium engineering interface: raw, kinetic, tactile, intelligent, and highly legible.

- **Visual references:** gig posters, photocopied zines, screen-print layers, torn-paper edges, halftone fields, stencil marks, rehearsal-room stickers, patch labels, and industrial workshop signage.
- **Core palette:** ink black, warm paper, signal red, high-visibility acid yellow, and restrained steel grey. Use colors as functional signals, not decoration.
- **Typography:** condensed or heavy display typography for identity and mission headlines; highly readable sans-serif or mono typography for code, telemetry, logs, and technical detail.
- **Composition:** bold editorial hierarchy, asymmetry with purpose, strong negative space, crisp panels, and layered surfaces. Avoid the endless grid of identical SaaS cards.
- **Motion:** purposeful and event-driven. A node changes because a real agent or task event changed, never to imply activity that did not happen.
- **Agent identity:** use symbols, labels, marks, or distinctive silhouettes. Do not depend on cartoon robot faces or generic humanoid avatars.

Do not imitate a specific band's logo, album artwork, poster, or protected visual identity. Borrow the energy of the scene, not another artist's recognizable assets.

## Voice and microcopy

Write like a direct, sharp, helpful crew member: confident but not arrogant, playful but not unserious, technical without corporate filler.

Prefer:
- “Mission ready.”
- “Crew assigned.”
- “Review the patch.”
- “Tests failed. Here's the evidence.”
- “Blocked: approval required.”
- “Patch verified.”

Avoid:
- “Revolutionary autonomous intelligence synergy.”
- “100% successful” without verifiable evidence.
- Fake live, thinking, working, or completed states.
- Corporate role-play that adds no operational value.

Keep **SKANG AND ROLL. PATCH IT.** as the canonical brand line. Do not replace it with generic slogans.

## Truth and trust contract

- Runtime state comes from the runtime and durable events, not animation or local UI guesses.
- A task is not complete merely because an agent says it is complete.
- Show evidence, test results, and uncertainty alongside claims.
- Preserve ownership, lineage, provider identity, tool activity, and relevant timestamps.
- Enforce permissions and resource limits at the execution boundary; a visual approval prompt is not a security sandbox.
- Keep credentials isolated and use least privilege.
- Treat the current DeepSeek Harness developer-preview and safety notices as binding constraints until a separately audited deployment says otherwise.

## Anti-goals

- No generic AI SaaS dashboard.
- No fake CEO/CTO/HR theater.
- No decorative swarm graph with no runtime meaning.
- No agent-count or token-count vanity metrics as the definition of success.
- No consensus-by-vote in place of independent evidence.
- No claim of self-evolution when only a prompt or label changed.
- No hidden completion, silent failure, or green status without proof.

## Source and attribution

The runtime is based on DeepSeek Harness and its Cordis plugin architecture. Preserve the original license, notices, and source attribution. RIOTWORK branding must remain clearly independent and must not imply DeepSeek endorsement. See [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md), [SAFETY.md](SAFETY.md), and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
