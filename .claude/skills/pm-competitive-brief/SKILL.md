---
name: pm-competitive-brief
description: "Create focused competitive analysis briefs with feature matrices and positioning maps. Use for competitor comparison, market positioning, or strategic planning."
argument-hint: "[market or competitor names]"
---

# Competitive Brief

Focused competitive analysis — lighter than full `/pm-research`, produces actionable comparison.

## Workflow

### 1. Discovery

Use `AskUserQuestion` to gather:
- Your product/feature name and category
- 2-4 competitors to analyze
- Key comparison criteria (features, pricing, UX, integrations)
- What decision does this brief support? (build vs buy, positioning, pricing)

### 2. Research

Use `WebSearch` to gather competitor data:
- Product pages, pricing, feature lists
- Recent announcements, funding, market position
- User reviews and common complaints

### 3. Template Loading

Read the template: `.claude/templates/competitive-brief-template.md`

### 4. Analysis

Fill sections from research:
- **Feature Comparison Matrix** — Side-by-side feature table with ratings
- **Positioning Map** — Describe where each product sits (e.g., price vs breadth)
- **SWOT Analysis** — Your product vs the competitive field
- **Key Differentiators** — What makes each competitor unique
- **Strategic Recommendations** — 3-5 actionable bullets

### 5. Review

Use `AskUserQuestion`:
- Any competitors missing?
- Are the differentiators accurate?
- Ready to save or add more detail?

### 6. Save

Write to `docs/research/competitive-brief-{market}.md`
- Set frontmatter: `status: draft`, `created: {today}`

## Quality Checklist

- [ ] At least 3 competitors analyzed
- [ ] Feature matrix has consistent rating criteria
- [ ] SWOT is honest (real weaknesses, not just strengths)
- [ ] Recommendations are specific and actionable
- [ ] Sources cited for key claims

## References

See `references/analysis-framework.md` for competitive analysis frameworks.
