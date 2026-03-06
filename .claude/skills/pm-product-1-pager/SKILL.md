---
name: pm-product-1-pager
description: "Create concise product 1-pagers for early validation and stakeholder alignment. Use for quick briefs, feature pitches, or project kickoff documents."
argument-hint: "[product or feature name]"
---

# Product 1-Pager

Quick product brief for early validation — lighter than a full PRD.

## Workflow

### 1. Discovery

Use `AskUserQuestion` to gather (single round, multiSelect):
- What problem are you solving? Who has it?
- What's the simplest solution?
- Appetite: how much time should this take? (e.g., "2 weeks", "6 weeks")
- What are you explicitly NOT building?

### 2. Template Loading

Read the template: `.claude/templates/prd-template-minimal.md`

### 3. Draft

Fill sections from discovery:
- **Problem** — 2-3 sentences, specific and measurable
- **Target Users** — Who benefits, one sentence
- **Non-Goals** — What's out of scope (prevents scope creep)
- **Proposed Solution** — One paragraph, simplest version
- **Key Metrics** — 2-3 measurable success criteria

### 4. Review

Use `AskUserQuestion`:
- Does this fit on one screen?
- Is the scope right for the appetite?
- Ready to save or iterate?

### 5. Save

Write to `docs/prds/1-pager-{feature-name}.md`
- Set frontmatter: `status: draft`, `appetite: {value}`, `created: {today}`

## Quality Checklist

- [ ] Fits on one screen (no scrolling)
- [ ] Problem is specific, not vague
- [ ] Non-Goals prevent scope creep
- [ ] Metrics are measurable
- [ ] Appetite is defined
