---
name: pm-workflow
description: "Chain user stories and sprint planning from existing PRD. Detects project state, skips completed steps. Requires PRD to exist."
argument-hint: "[--auto|--quick|--from stories|sprint]"
---

# PM Workflow — Story + Sprint Chaining

Orchestrates: pm-user-story → pm-sprint. Requires PRD in docs/prds/.
**Scope:** stories + sprint only. For init/research/PRD, use `/pm-kickoff`.

## Modes

| Flag | Behavior |
|------|----------|
| (default) | Interactive — gates between steps, confirm detection |
| `--auto` | Skip all gates, run to completion |
| `--quick` | Skip detection confirmation, start immediately |
| `--from stories\|sprint` | Force start from specific step (override detection) |

## Workflow

### Step 1: Prerequisite Check
- Verify `docs/prds/*.md` exists
- If missing: error "No PRD found. Run `/pm-kickoff` first." and stop
- Output: `✓ Step 1: PRD found`

### Step 2: Detect State
- Scan docs/ for existing artifacts. See `references/detection-logic.md`
- If `--from` flag: override detection, start from specified step
- Output: `✓ Step 2: Detected [state]`

### Step 3: Confirm [skip if --quick or --auto]
- `AskUserQuestion`: "Detected: [state]. Start from [next step]?"
  - "Proceed" / "Start from stories" / "Start from sprint" / "Abort"

### Step 4: User Stories [skip if detected or --from sprint]
- `AskUserQuestion`: select PRD if multiple exist [skip if --auto, use latest]
- Invoke `Skill tool → pm-user-story` with PRD path
- Output: `✓ Step 4: Stories generated`

### Gate 1 [skip if --auto]
- `AskUserQuestion`: review stories — "Proceed to sprint" / "Revise" / "Stop"

### Step 5: Sprint Planning [skip if detected]
- Invoke `Skill tool → pm-sprint` with stories path
- Output: `✓ Step 5: Sprint plan created`

### Gate 2 [skip if --auto]
- `AskUserQuestion`: review sprint — "Save" / "Revise" / "Abort"

### Step 6: Summary
- List all artifacts created/updated
- Suggest: "Run `/pm-review <artifact>` to get multi-perspective feedback"
- Output: `✓ Step 6: Workflow complete`
