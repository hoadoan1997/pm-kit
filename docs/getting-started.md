# Getting Started with PM Kit

## Installation

1. Clone or download PM Kit
2. Run the installer pointing at your project:

```bash
./install.sh /path/to/your/project
```

The installer:
- Copies skills, agents, hooks, rules, and templates to `.claude/`
- Merges hooks into existing `settings.json` (preserves your hooks)
- Never overwrites existing files

## First-Time Setup

Open your project in Claude Code and run:

```
/pm-init
```

This creates the PM workspace directories:

```
docs/
├── prds/           # Product Requirements Documents
├── stories/        # User Stories
├── sprints/        # Sprint Plans
├── research/       # Market & competitive research
├── roadmaps/       # Product roadmaps
└── meeting-notes/  # Meeting notes with action items
```

## Creating Your First PRD

Run the PRD skill:

```
/prd "User Authentication"
```

The skill walks you through:
1. **Discovery** — Asks about the problem, users, goals, constraints
2. **Drafting** — Fills the PRD template with your answers
3. **Review** — Asks for feedback and iterations
4. **Save** — Writes to `docs/prds/prd-user-authentication.md`

## Generating User Stories

From a PRD:
```
/user-story docs/prds/prd-user-authentication.md
```

From a description:
```
/user-story "Shopping cart checkout flow"
```

Stories are saved to `docs/stories/` with acceptance criteria and estimates.

## Sprint Planning

```
/sprint
```

The sprint planner:
1. Loads your backlog from `docs/stories/`
2. Asks for sprint duration and capacity
3. Helps prioritize and estimate
4. Generates a sprint plan in `docs/sprints/`

## Market Research

```
/pm-research "project management tools market"
```

Produces competitive analysis, market sizing, and user personas saved to `docs/research/`.

## Using Agents

Agents activate automatically based on your request:
- Ask "research the CRM market" → `pm-analyst` activates
- Ask "write a PRD for notifications" → `pm-writer` activates
- Ask "review my PRD" → `pm-reviewer` activates
- Ask "create a sprint status report" → `stakeholder-reporter` activates

## Hooks (Automatic)

After installation, hooks run automatically:
- **Session start**: Shows your PM artifact summary
- **Every 5th prompt**: Injects current sprint context
- **On file write**: Warns if PM docs are missing required sections

All hooks are non-blocking — they never prevent your work.
