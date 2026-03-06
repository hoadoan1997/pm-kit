# PM Kit — Product Management for Claude Code

A self-contained Product Management toolkit for [Claude Code](https://claude.ai/code). Includes skills, agents, hooks, rules, and templates for PRD creation, user story writing, sprint planning, and market research.

## Quick Install

```bash
# Clone and install into your project
git clone <repo-url> pm-kit
cd pm-kit && ./install.sh /path/to/your/project

# Or install into current directory's parent
./install.sh ..
```

The installer copies PM Kit files into your project's `.claude/` directory. Existing hooks and settings are preserved.

## Skills

| Command | Description |
|---------|-------------|
| `/pm-help` | List all PM Kit commands and capabilities |
| `/pm-init` | Initialize PM workspace with standard directories |
| `/pm-prd` | Create PRDs (3 templates, Socratic discovery, multi-perspective review) |
| `/pm-press-release` | Amazon Working Backwards press releases |
| `/pm-product-1-pager` | Quick product briefs for early validation |
| `/pm-competitive-brief` | Focused competitive analysis with feature matrices |
| `/pm-user-story` | Generate user stories from PRDs or descriptions |
| `/pm-sprint` | Plan sprints with estimation and capacity allocation |
| `/pm-research` | Market research, competitive analysis, user personas |
| `/pm-kickoff` | Project kickoff: init → research → PRD in one guided session |
| `/pm-workflow` | Chain stories + sprint from existing PRD (auto-detects state) |
| `/pm-review` | Multi-perspective review of any PM artifact (3 parallel reviewers) |

## Agents

| Agent | Role | Model |
|-------|------|-------|
| `pm-analyst` | Market research and competitive intelligence | Sonnet |
| `pm-writer` | Draft PRDs, specs, and product docs | Sonnet |
| `pm-reviewer` | Review PM docs against quality standards (read-only) | Haiku |
| `stakeholder-reporter` | Generate status reports from project artifacts | Haiku |

## Hooks

| Hook | Event | Behavior |
|------|-------|----------|
| `session-init` | SessionStart | Shows PM artifact summary |
| `pm-context-inject` | UserPromptSubmit | Injects sprint/PRD context (throttled) |
| `template-validator` | PreToolUse:Write | Warns on incomplete PM documents |

All hooks fail-open — errors never block your workflow.

## Architecture

```
.claude/
├── CLAUDE.md              # PM-oriented project instructions
├── settings.json          # Hook configuration
├── skills/
│   ├── pm-help/           # Skill catalog
│   ├── pm-init/           # Workspace initializer
│   ├── prd/               # PRD creation (3 templates, Socratic, multi-review)
│   ├── press-release/     # Amazon Working Backwards
│   ├── product-1-pager/   # Quick validation briefs
│   ├── competitive-brief/ # Competitive analysis
│   ├── user-story/        # Story generation
│   ├── sprint/            # Sprint planning
│   ├── pm-research/       # Market research
│   ├── pm-kickoff/        # Orchestration: init→research→PRD
│   ├── pm-workflow/       # Orchestration: stories→sprint
│   └── pm-review/         # Orchestration: multi-perspective review
├── agents/
│   ├── pm-analyst.md      # Market research agent
│   ├── pm-writer.md       # Document writing agent
│   ├── pm-reviewer.md     # Quality review agent (read-only)
│   └── stakeholder-reporter.md
├── hooks/
│   ├── session-init.cjs
│   ├── pm-context-inject.cjs
│   ├── template-validator.cjs
│   └── lib/               # Shared hook utilities
├── rules/
│   ├── pm-workflow.md     # PM process rules
│   └── writing-standards.md
└── templates/
    ├── prd-template-minimal.md
    ├── prd-template.md
    ├── prd-template-detailed.md
    ├── press-release-template.md
    ├── competitive-brief-template.md
    ├── user-story-template.md
    └── sprint-plan-template.md
```

## Getting Started

1. Install PM Kit into your project
2. Run `/pm-kickoff` for guided project setup (init → research → PRD)
3. Run `/pm-workflow` to generate stories + sprint plan from your PRD
4. Run `/pm-review docs/prds/your-prd.md` for multi-perspective feedback

See [docs/getting-started.md](docs/getting-started.md) for a detailed walkthrough.

## Requirements

- Claude Code CLI
- Node.js >= 18
- macOS or Linux

## License

MIT
