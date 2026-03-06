---
name: pm-press-release
description: "Write Amazon-style press releases using Working Backwards method. Use for product vision, feature announcements, or validating product direction before building."
argument-hint: "[product or feature name]"
---

# Press Release — Working Backwards

Write a press release BEFORE building. Forces clarity on customer benefit, not technical details.

## Workflow

### 1. Discovery

Use `AskUserQuestion` to gather:
- Product or feature name
- Target customer (who benefits most?)
- Single biggest benefit (one sentence)
- What problem does this eliminate?

### 2. Template Loading

Read the template: `.claude/templates/press-release-template.md`

### 3. Draft

Fill each section from discovery answers:
- **Headline** — Max benefit in one sentence, customer-focused
- **Subheadline** — Who it's for and what it does
- **Opening paragraph** — Customer, problem, solution in 3 sentences
- **Problem** — Paint the current pain vividly
- **Solution** — How the product solves it (no jargon)
- **Leadership Quote** — Vision and why now
- **How It Works** — 3-5 steps, simple language
- **Customer Quote** — Fictional satisfied customer testimonial
- **Getting Started** — Clear call to action
- **Internal FAQ** — Questions stakeholders will ask, with answers

### 4. Review

Use `AskUserQuestion` to present draft and ask:
- Does the headline pass the "would I click?" test?
- Is the customer benefit clear to a non-technical reader?
- Any FAQ questions missing?

### 5. Save

Write to `docs/prds/press-release-{feature-name}.md`
- Set frontmatter: `status: draft`, `created: {today}`

## Quality Checklist

- [ ] Headline is benefit-driven, not feature-driven
- [ ] No technical jargon in first 3 paragraphs
- [ ] Customer quote sounds authentic
- [ ] Internal FAQ addresses top 5 stakeholder concerns
- [ ] Could be published externally as-is

## References

See `references/working-backwards.md` for Amazon's Working Backwards methodology.
