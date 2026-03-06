---
name: pm-help
description: "List all PM Kit commands, agents, and capabilities. Use when asking about available PM tools, skill catalog, or kit overview."
---

# PM Kit Help

Display the complete PM Kit catalog when activated.

## Output

### Skills (Slash Commands)

| Command | Description | Use When |
|---------|-------------|----------|
| `/pm-help` | Show this catalog | Need PM Kit overview |
| `/pm-init` | Initialize PM workspace | Setting up new project for PM |
| `/pm-prd` | Create PRD (3 templates, Socratic discovery, multi-review) | Writing product requirements |
| `/pm-press-release` | Amazon Working Backwards press release | Product vision, direction validation |
| `/pm-product-1-pager` | Quick product brief for validation | Early-stage pitches, kickoff docs |
| `/pm-competitive-brief` | Focused competitive analysis | Competitor comparison, positioning |
| `/pm-user-story` | Generate user stories | Breaking down requirements into stories |
| `/pm-sprint` | Plan a sprint | Organizing work into sprints |
| `/pm-research` | Market/competitive research | Researching market, competitors, users |

### Agents

| Agent | Role | Model | Capabilities |
|-------|------|-------|-------------|
| `pm-analyst` | Market research & analysis | sonnet | WebSearch, data synthesis |
| `pm-writer` | Draft PM documents | sonnet | Template-based writing |
| `pm-reviewer` | Review PM doc quality | haiku | Read-only quality checks |
| `stakeholder-reporter` | Status reports | haiku | Project artifact scanning |

### Templates

Located in `.claude/templates/`:
- `prd-template-minimal.md` — 1-Pager PRD (quick validation)
- `prd-template.md` — Standard PRD (recommended)
- `prd-template-detailed.md` — Detailed/Enterprise PRD (compliance-heavy)
- `press-release-template.md` — Amazon Working Backwards format
- `competitive-brief-template.md` — Competitive analysis brief
- `user-story-template.md` — User Story with acceptance criteria
- `sprint-plan-template.md` — Sprint plan with capacity tracking

### Rules (Always Active)

- `pm-workflow.md` — PM process, handoffs, quality gates
- `writing-standards.md` — Voice, tone, requirement quality standards

### Quick Start

1. Run `/pm-init` to create workspace directories
2. Run `/pm-prd` to create your first PRD
3. Run `/pm-user-story path/to/prd.md` to generate stories from PRD
4. Run `/pm-sprint` to plan a sprint with your stories

### Artifact Locations

```
docs/
├── prds/        # Product Requirements Documents
├── stories/     # User Stories
├── sprints/     # Sprint Plans
├── research/    # Market & competitive research
├── roadmaps/    # Product roadmaps
└── meeting-notes/
```
