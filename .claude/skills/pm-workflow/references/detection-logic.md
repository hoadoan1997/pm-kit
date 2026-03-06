# Detection Logic

## Artifact Detection Rules

Scan docs/ directory for existing PM artifacts using file existence checks.

| Check | Path Pattern | If exists |
|-------|-------------|-----------|
| PRD | `docs/prds/*.md` | Required prerequisite |
| Stories | `docs/stories/*.md` | Skip story generation |
| Sprint | `docs/sprints/*.md` | Skip sprint planning |

## State Matrix

| PRD | Stories | Sprint | Detected State | Next Step |
|-----|---------|--------|----------------|-----------|
| No | - | - | "No PRD" | Error: run /pm-kickoff |
| Yes | No | No | "PRD ready" | Start from stories |
| Yes | Yes | No | "Stories done" | Start from sprint |
| Yes | Yes | Yes | "All complete" | Suggest /pm-review |

## Override

- `--from stories` — force start from story generation (ignore detection)
- `--from sprint` — force start from sprint planning (ignore detection)
- `--quick` — skip confirmation gate, use detected state as-is
- `--auto` — skip all gates including confirmation

## Display Format

Present detected state to user:
```
Detected project state:
  PRD:     docs/prds/prd-auth.md (approved)
  Stories: docs/stories/ (3 files)
  Sprint:  (none)

Next step: Sprint Planning
```
