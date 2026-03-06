# Socratic Question Trees

Progressive discovery questions that build on each other. Each round maps to specific PRD template sections.

## Round 1: Problem Space

**Maps to:** Problem Statement, Target Users

Ask via `AskUserQuestion` (multiSelect where helpful):
- What specific problem are you solving?
- Who experiences this problem? (role, context, frequency)
- How painful is it? What do they do today as a workaround?
- What happens if we don't solve it? (cost of inaction)

**Template mapping:**
- Answer 1 → Problem Statement
- Answer 2 → Target Users persona table
- Answer 3 → Problem Statement (current state)
- Answer 4 → Goals rationale

## Round 2: Solution & Scope

**Maps to:** Proposed Solution, Non-Goals, Technical Considerations

Ask via `AskUserQuestion`:
- What's the simplest version that solves the core problem?
- What are you explicitly NOT building? (Non-Goals)
- Any technical constraints? (platform, stack, integrations, timeline)
- What's the appetite — how much time should this take?

**Template mapping:**
- Answer 1 → Proposed Solution, Key Features
- Answer 2 → Non-Goals section
- Answer 3 → Technical Considerations, Dependencies
- Answer 4 → Timeline frontmatter

## Round 3: Success & Risk

**Maps to:** Goals & Success Metrics, Dependencies & Risks

Ask via `AskUserQuestion`:
- What does success look like? (quantifiable metrics)
- How will you measure it? (instrumentation, data sources)
- Top 3 risks that could derail this?
- Any external dependencies? (APIs, vendors, other teams)

**Template mapping:**
- Answer 1-2 → Goals & Success Metrics table
- Answer 3 → Dependencies & Risks table
- Answer 4 → Dependencies & Risks table

## Round 4: Timeline & Rollout (Standard + Detailed only)

**Maps to:** Timeline & Milestones, Rollback Strategy

Ask via `AskUserQuestion`:
- Target launch date or sprint?
- Phased rollout or big bang? Feature flags?
- Who needs to sign off before launch?
- Any compliance or regulatory considerations?

**Template mapping:**
- Answer 1 → Timeline & Milestones
- Answer 2 → Rollback Strategy (Detailed template)
- Answer 3 → Stakeholder Sign-off (Detailed template)
- Answer 4 → Compliance & Regulatory (Detailed template)

## Template-Specific Round Mapping

| Template | Rounds | Notes |
|----------|--------|-------|
| Minimal | 1 + 2 | Skip Rounds 3-4, infer metrics from answers |
| Standard | 1 + 2 + 3 | Skip Round 4 unless user wants timeline detail |
| Detailed | 1 + 2 + 3 + 4 | All rounds + compliance questions |

## Bonus: Compliance Round (Detailed only)

Ask if Round 4 answers indicate regulatory needs:
- Data privacy requirements? (GDPR, CCPA, HIPAA)
- Accessibility level? (WCAG AA, AAA)
- Industry-specific compliance? (PCI, SOC2, FedRAMP)
