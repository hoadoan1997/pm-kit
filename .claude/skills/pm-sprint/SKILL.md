---
name: pm-sprint
description: "Plan sprints with estimation, prioritization, and capacity allocation. Use for sprint planning, backlog grooming, velocity tracking."
argument-hint: "[sprint name or backlog path]"
---

# Sprint Planner

Interactive sprint planning with estimation and capacity allocation.

## Workflow

### 1. Load Backlog

- Glob `docs/stories/*.md` for available stories
- Read each story's frontmatter (status, priority, points)
- Filter to stories with status `draft` or `ready`
- Sort by priority (P1 first)

### 2. Gather Sprint Context

Use `AskUserQuestion`:
- Sprint duration? (1 week / 2 weeks / custom)
- Team capacity in story points? (or help estimate)
- Sprint goal? (one sentence describing the outcome)
- Any carry-over stories from previous sprint?

### 3. Prioritization

Present stories sorted by priority. Use `AskUserQuestion` to:
- Confirm P1 stories are correctly prioritized
- Apply MoSCoW if needed (Must/Should/Could/Won't for this sprint)
- Flag dependencies between stories

### 4. Estimation

For unestimated stories, facilitate estimation:
- Present story summary and acceptance criteria count
- Suggest T-shirt size based on complexity signals
- Convert to Fibonacci points (1, 2, 3, 5, 8, 13)
- See `references/estimation-guide.md` for methodology

### 5. Allocation

- Add stories to sprint until capacity reached
- Show running total: committed points vs capacity
- Warn if over-committed (>90% capacity)
- Leave 10-20% buffer for unplanned work

### 6. Generate Sprint Plan

- Load template: `.claude/templates/sprint-plan-template.md`
- Fill committed stories table
- Add risks and dependencies
- Save to `docs/sprints/sprint-{number}-{goal-slug}.md`

## References

See `references/estimation-guide.md` for sizing methodology and velocity tracking.
