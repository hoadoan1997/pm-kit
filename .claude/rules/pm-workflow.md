# PM Workflow Rules

## Process

1. **Discovery first** — Define the problem before proposing solutions
2. **PRD before implementation** — No coding without approved requirements
3. **Stories from PRDs** — User stories derive from PRD functional requirements
4. **Sprint planning uses velocity** — Commit based on historical capacity, not wishful thinking
5. **Document decisions** — Record rationale, not just outcomes

## Artifact Locations

- PRDs: `docs/prds/`
- User Stories: `docs/stories/`
- Sprint Plans: `docs/sprints/`
- Research: `docs/research/`
- Press Releases: `docs/prds/` (press-release-*.md)
- Competitive Briefs: `docs/research/` (competitive-brief-*.md)
- Roadmaps: `docs/roadmaps/`

## Status Lifecycle

```
draft → review → approved → in-progress → done → archived
```

## Handoffs

- PRD approved → Generate user stories (`/pm:user-story`)
- Stories estimated → Sprint planning (`/pm:sprint`)
- Sprint complete → Stakeholder report (`stakeholder-reporter` agent)

## Quality Gates

- PRD: All required sections filled, success metrics defined, risks identified
- User Story: Follows INVEST criteria, has acceptance criteria with Given/When/Then
- Sprint Plan: Total points <= team capacity, goal clearly stated

## Templates

Always start PM artifacts from templates in `.claude/templates/`:
- `prd-template-minimal.md` for 1-Pager PRDs
- `prd-template.md` for Standard PRDs
- `prd-template-detailed.md` for Detailed/Enterprise PRDs
- `press-release-template.md` for Working Backwards press releases
- `competitive-brief-template.md` for competitive analysis briefs
- `user-story-template.md` for stories
- `sprint-plan-template.md` for sprint plans
