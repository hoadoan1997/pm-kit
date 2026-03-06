---
name: prd
description: "Write Product Requirements Documents with interactive discovery. Use for PRDs, product specs, feature definitions, requirement documentation."
argument-hint: "[feature or product name]"
---

# PRD Creator

Interactive PRD creation with structured discovery, multi-perspective review, and optional strategic approaches.

## Workflow

### Step 1: Template Selection

Use `AskUserQuestion` to offer template choice:

| Template | Best For | Discovery Rounds |
|----------|----------|-----------------|
| **Minimal** (1-pager) | Early validation, quick pitches | 2 rounds |
| **Standard** (recommended) | Most features and products | 3 rounds |
| **Detailed** (enterprise) | Compliance-heavy, large teams | 4 rounds |

Load selected template from `.claude/templates/`:
- Minimal → `prd-template-minimal.md`
- Standard → `prd-template.md`
- Detailed → `prd-template-detailed.md`

### Step 2: Socratic Discovery

Progressive questions that build on each other. See `references/socratic-questions.md` for full trees.

**Round 1 — Problem Space** (all templates):
Use `AskUserQuestion` (multiSelect):
- What problem? Who has it? How painful? Current workarounds?

**Round 2 — Solution & Scope** (all templates):
Use `AskUserQuestion`:
- Simplest solution? Non-Goals? Technical constraints? Appetite?

**Round 3 — Success & Risk** (Standard + Detailed):
Use `AskUserQuestion`:
- Success metrics? Measurement method? Top 3 risks? Dependencies?

**Round 4 — Timeline & Rollout** (Detailed only):
Use `AskUserQuestion`:
- Launch target? Rollout strategy? Sign-off requirements? Compliance needs?

Each answer maps directly to template sections — see reference for mappings.

### Step 3: Strategic Approaches (Opt-in)

**Skip for:** Minimal template, clear constraints, follow-up PRDs.
**Offer for:** Standard and Detailed templates.

Use `AskUserQuestion`: "Want to explore multiple strategic approaches?"

If yes, see `references/strategic-approaches.md`. Spawn 3 parallel `Agent` calls with `pm-writer` to draft summaries for:
- **MVP** — smallest scope, fastest to market
- **Platform** — API-first, extensibility
- **User-Delight** — best UX, polish over features

Present comparison table. User picks one or combines elements.

### Step 4: Research Phase (Optional)

If user provided competitor/market context in discovery:
- Use `WebSearch` for market data and competitor features
- Summarize findings in Technical Considerations section

### Step 5: Draft Phase

Fill each template section from discovery answers:
- Problem Statement — from Round 1
- Target Users — from Round 1, create persona table
- Non-Goals — from Round 2
- Goals & Success Metrics — from Round 3 (or inferred for Minimal)
- Proposed Solution — synthesize from selected approach or Round 2
- Requirements — derive from solution, mark priorities
- Risks — from Round 3 dependencies and constraints

### Step 6: Multi-Perspective Review

Spawn 3 parallel `Agent` calls as `pm-reviewer` with different lenses.
See `references/review-perspectives.md` for detailed checklists.

**Engineering Review:** Feasibility, technical risks, missing specs
**Business Review:** Strategic alignment, ROI, market timing
**User Research Review:** Persona validation, flow gaps, accessibility

Present consolidated review summary with scores.
Use `AskUserQuestion` (multiSelect): "Which feedback do you want to address?"

### Step 7: Revise

Address selected feedback from Step 6. Update relevant sections.

### Step 8: Save

Write final PRD to `docs/prds/prd-{feature-name}.md`
- Set frontmatter: `status: draft`, `created: {today}`
- Confirm file path with user

## Quality Checklist

Before saving, verify:
- [ ] All required sections filled (not placeholder text)
- [ ] Non-Goals section explicitly states what's out of scope
- [ ] Success metrics are quantifiable
- [ ] Requirements have priority levels (P1/P2/P3)
- [ ] At least one user flow described
- [ ] Risks identified with mitigations

## References

- `references/socratic-questions.md` — Question trees and section mappings
- `references/review-perspectives.md` — Review checklists and output format
- `references/strategic-approaches.md` — Approach definitions and comparison
- `references/prd-workflow.md` — Section guidance and quality gates
