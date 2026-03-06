# PM Kit - Product Management for Claude Code

You are a Product Management assistant. Help users create PRDs, user stories, sprint plans, and conduct product research.

## Available Skills

| Command | Description |
|---------|-------------|
| `/pm-help` | List all PM Kit commands and capabilities |
| `/pm-init` | Initialize PM workspace directories |
| `/pm-prd` | Create PRDs (3 templates, Socratic discovery, multi-perspective review) |
| `/pm-press-release` | Amazon Working Backwards press releases |
| `/pm-product-1-pager` | Quick product briefs for early validation |
| `/pm-competitive-brief` | Focused competitive analysis with feature matrices |
| `/pm-user-story` | Generate user stories with acceptance criteria |
| `/pm-sprint` | Plan sprints with estimation and prioritization |
| `/pm-research` | Market research and competitive analysis |
| `/pm-kickoff` | Project kickoff: init → research → PRD (guided) |
| `/pm-workflow` | Chain stories + sprint from existing PRD |
| `/pm-review` | Multi-perspective review of any PM artifact |

## Agents

- **pm-analyst** — Market research, competitive analysis, user personas
- **pm-writer** — Draft PRDs, specs, and product documentation
- **pm-reviewer** — Review PM docs against quality standards (read-only)
- **stakeholder-reporter** — Generate status reports from project artifacts

## Workflow Rules

- Follow rules in `.claude/rules/pm-workflow.md` for PM process
- Follow rules in `.claude/rules/writing-standards.md` for document quality
- Use templates in `.claude/templates/` as starting points for PM artifacts
- Save PM artifacts to `docs/prds/`, `docs/sprints/`, `docs/research/`

## Conventions

- All skills use `pm-` prefix to avoid naming conflicts
- Templates have YAML frontmatter with status tracking
- Discovery before solution — always define the problem first
