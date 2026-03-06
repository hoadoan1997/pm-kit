---
name: pm-kickoff
description: "Project kickoff: init workspace, research market, write PRD in one guided session. Use for new projects."
argument-hint: "[project-name] --auto|--quick"
---

# PM Kickoff — Project Kickoff Flow

Orchestrates: pm-init → pm-analyst → pm-writer with interactive gates.
**Scope:** init + research + PRD only. For stories/sprint, use `/pm-workflow`.

## Modes

| Flag | Behavior |
|------|----------|
| (default) | Interactive — gates between every step |
| `--auto` | Skip all gates, run to completion |
| `--quick` | Skip research, go straight to PRD |

## Workflow

### Step 1: Discovery
- `AskUserQuestion`: gather project name, domain, target audience, key problem
- Parse `--auto` or `--quick` from arguments

### Step 2: Init Workspace
- Invoke `Skill tool → pm-init` to create docs/ directory structure
- Output: `✓ Step 2: Workspace initialized`

### Step 3: Market Research [skip if --quick]
- Spawn `Agent tool → pm-analyst` with discovery context
- Save output to `docs/research/research-{project-name}.md`
- Output: `✓ Step 3: Research complete`

### Gate 1 [skip if --auto]
- `AskUserQuestion`: present research summary
  - "Proceed to PRD" / "Revise research" / "Stop here"

### Step 4: PRD Creation
- `AskUserQuestion`: select template (minimal/standard/detailed) [skip if --auto, use standard]
- Spawn `Agent tool → pm-writer` with:
  - Research file path (or discovery context if --quick)
  - Selected template from `.claude/templates/`
- Save to `docs/prds/prd-{project-name}.md`
- Output: `✓ Step 4: PRD drafted`

### Gate 2 [skip if --auto]
- `AskUserQuestion`: review PRD
  - "Save as-is" / "Revise PRD" / "Change template"

### Step 5: Finalize
- Save final PRD with status `draft` in frontmatter
- Output: `✓ Step 5: PRD saved to docs/prds/`
- Suggest next: "Run `/pm-workflow` to generate user stories and sprint plan"
