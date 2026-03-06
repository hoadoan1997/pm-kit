# Multi-Perspective Review

After PRD draft, spawn 3 reviewer agents with different lenses. Each produces structured feedback.

## Engineering Perspective

**Focus:** Feasibility, technical risks, implementation clarity

**Checklist:**
- Are requirements specific enough to estimate?
- Missing API specs or data model details?
- Any technical risks not addressed?
- Performance/scalability requirements realistic?
- Dependencies on other teams or systems identified?
- Security implications considered?

**Output format:**
```
## Engineering Review
**Score:** X/10
**Feasibility:** High/Medium/Low
### Issues
1. [Issue] — [Severity: Critical/Major/Minor]
### Suggestions
1. [Suggestion]
### Missing Specs
- [What's missing]
```

## Executive/Business Perspective

**Focus:** Strategic alignment, ROI clarity, market timing

**Checklist:**
- Clear connection to company strategy/OKRs?
- ROI or business case articulated?
- Market timing justified (why now)?
- Success metrics tied to business outcomes?
- Resource ask proportional to expected impact?
- Competitive positioning considered?

**Output format:**
```
## Business Review
**Score:** X/10
**Strategic Alignment:** High/Medium/Low
### Issues
1. [Issue] — [Severity: Critical/Major/Minor]
### Suggestions
1. [Suggestion]
### Missing Context
- [What's missing]
```

## User Research Perspective

**Focus:** Persona validation, user flow gaps, accessibility

**Checklist:**
- Personas based on research or assumptions?
- User flows cover error states and edge cases?
- Accessibility requirements defined?
- User onboarding/learning curve addressed?
- Feedback/support channels considered?
- Emotional journey mapped (frustration points)?

**Output format:**
```
## User Research Review
**Score:** X/10
**User-Centricity:** High/Medium/Low
### Issues
1. [Issue] — [Severity: Critical/Major/Minor]
### Suggestions
1. [Suggestion]
### Missing Research
- [What's missing]
```

## Consolidated Review Summary

After collecting all 3 reviews, present to user:

```
## PRD Review Summary

| Perspective | Score | Top Issue |
|-------------|-------|-----------|
| Engineering | X/10 | [issue] |
| Business | X/10 | [issue] |
| User Research | X/10 | [issue] |

### Critical Issues (address before approval)
1. ...

### Recommended Improvements (nice to have)
1. ...
```

Then use `AskUserQuestion` with multiSelect:
- "Which feedback do you want to address?"
- List each issue as a selectable option
