---
name: pm-research
description: "Conduct product research including competitive analysis, market sizing, user personas. Use for market research, competitor analysis, user research, TAM/SAM/SOM."
argument-hint: "[product/market/competitor to research]"
---

# Product Research

Structured product research with competitive analysis, market sizing, and user personas.

## Workflow

### 1. Research Scoping

Use `AskUserQuestion` to determine scope:
- What product/market to research?
- Research type: competitive analysis, market sizing, user personas, or all?
- Any known competitors or reference products?
- Target market geography?

### 2. Competitive Analysis

Use `WebSearch` and `WebFetch` to gather:
- Direct competitors (same problem, same audience)
- Indirect competitors (different approach, same audience)
- Feature comparison matrix
- Pricing models and positioning
- Strengths and weaknesses

Output as comparison table with features, pricing, and positioning.

### 3. Market Sizing (TAM/SAM/SOM)

- **TAM** (Total Addressable Market) — Total market demand
- **SAM** (Serviceable Addressable Market) — Segment you can reach
- **SOM** (Serviceable Obtainable Market) — Realistic capture target

Use WebSearch for market reports, industry data, growth rates.

### 4. User Personas

For each identified persona:
- Demographics and role
- Goals and motivations
- Pain points and frustrations
- Current solutions and workarounds
- Decision-making factors

### 5. Synthesis

Combine findings into research report:
- Executive summary (3-5 key insights)
- Competitive landscape
- Market opportunity
- Target personas
- Strategic recommendations
- Sources cited

### 6. Save

Write report to `docs/research/research-{topic}.md`
- Include date and sources
- Flag data freshness concerns

## References

See `references/research-methods.md` for frameworks and methodology.
