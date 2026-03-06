---
name: pm-review
description: "Multi-perspective review of any PM artifact (PRD, story, sprint, research, press-release). 3 parallel reviewers with selective fix application."
argument-hint: "<artifact-path> [--auto]"
---

# PM Review — Multi-Perspective Artifact Review

Run 3 parallel reviews (Engineering, Business, UX) on any PM artifact, then selectively apply feedback.
**Standalone command** — works independently of kickoff/workflow.

## Modes

| Flag | Behavior |
|------|----------|
| (default) | Interactive — user selects which feedback to apply |
| `--auto` | Auto-apply all critical + high severity feedback |

## Workflow

### Step 1: Load Artifact
- If argument provided: load that file
- If no argument: `AskUserQuestion` to select from `docs/` artifacts (Glob for *.md)
- Output: `✓ Step 1: Loaded [filename]`

### Step 2: Detect Type
- Detect from file path or frontmatter:
  - `docs/prds/*` → PRD
  - `docs/stories/*` → User Story
  - `docs/sprints/*` → Sprint Plan
  - `docs/research/*` → Research Doc
  - Contains "press-release" → Press Release
  - Contains "competitive" → Competitive Brief
- Output: `✓ Step 2: Type [detected-type]`

### Step 3: Parallel Review
- Spawn 3 `Agent tool → pm-reviewer` calls in parallel, each with perspective-specific prompt:
  - **Engineering:** feasibility, technical specs, risks, dependencies, edge cases
  - **Business:** strategic alignment, ROI, success metrics, market fit, prioritization
  - **User Research:** personas, user flows, accessibility, usability, adoption barriers
- Each reviewer references `.claude/skills/pm-prd/references/review-perspectives.md` for checklists
- Output: `✓ Step 3: 3 reviews complete`

### Step 4: Consolidate
- Merge 3 reviews into summary table: issue, severity (critical/high/medium/low), perspective, suggestion
- Present to user

### Step 5: Select Feedback [--auto: auto-select critical+high]
- Interactive: `AskUserQuestion` (multiSelect) — which feedback to address?
- Auto: select all critical and high severity items automatically

### Step 6: Apply & Save
- Edit artifact with selected improvements
- Save updated artifact
- Output: `✓ Step 6: Applied [N] improvements, saved`
