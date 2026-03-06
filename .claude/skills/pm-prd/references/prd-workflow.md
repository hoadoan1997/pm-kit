# PRD Workflow Reference

## Socratic Discovery — Question-to-Section Mapping

### Round 1: Problem Space → Problem Statement, Target Users
- What specific problem are you solving?
- How do users currently work around this problem?
- What is the cost of not solving it? (time, money, churn)
- Who is affected? (role, technical level, frequency)

### Round 2: Solution & Scope → Proposed Solution, Non-Goals, Technical
- What's the simplest version that solves the core problem?
- What's explicitly out of scope? (Non-Goals)
- Are there technical constraints? (platform, stack, integrations)
- What's the appetite? (time budget: "2 weeks", "6 weeks")

### Round 3: Success & Risk → Goals, Metrics, Risks
- What does success look like? (quantified)
- How will you measure it? (data source, instrumentation)
- Top 3 risks that could derail this?
- External dependencies? (APIs, vendors, other teams)

### Round 4: Timeline & Rollout → Timeline, Rollback, Compliance
- Target launch date or sprint?
- Phased rollout or big bang? Feature flags?
- Who needs to sign off?
- Compliance or regulatory considerations?

## Section-by-Section Guidance

### Problem Statement
- 2-3 sentences max
- Include: who, what problem, what impact
- Avoid: solution language in the problem statement

### Non-Goals
- Explicitly state what you're NOT building
- Prevents scope creep during implementation
- Revisit each sprint to confirm they're still non-goals

### Goals & Success Metrics
Use SMART criteria:
- **S**pecific — "Reduce checkout abandonment" not "Improve UX"
- **M**easurable — "by 15%" not "significantly"
- **A**chievable — within team capacity and timeline
- **R**elevant — tied to business objectives
- **T**ime-bound — "within 3 months of launch"

### Functional Requirements
- One requirement per row
- Use MoSCoW priorities: Must/Should/Could/Won't
- Format: "The system must [verb] [object] [condition]"

### Non-Functional Requirements
Categories: Performance, Security, Scalability, Accessibility, Compliance
- Include specific targets: "Page load < 2s on 3G", "Support 10K concurrent users"

### User Flows
- Start with happy path (most common journey)
- Add error/edge paths after
- Use numbered steps, not paragraphs

### Risks & Dependencies
- External dependencies (APIs, vendors, regulatory)
- Technical risks (new technology, scale challenges)
- Business risks (market timing, competitive response)
- Include mitigation for each risk

## Quality Gate Checklist

A PRD is ready for review when:
1. Problem is validated (not assumed)
2. Non-Goals are explicitly stated
3. At least 2 success metrics defined
4. All P1 requirements have acceptance criteria
5. User flow covers happy path + 1 error path
6. Top 3 risks identified with mitigations
7. Timeline is realistic given team capacity

## Template Selection Guide

| Signal | Recommended Template |
|--------|---------------------|
| "Quick idea", "early stage", "validate" | Minimal |
| Most features and products | Standard |
| "Enterprise", "compliance", "regulated" | Detailed |
| "Pitch", "stakeholder alignment" | Minimal |
| "Large team", "cross-functional" | Detailed |
