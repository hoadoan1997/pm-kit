# Strategic Approaches

Generate 2-3 PRD drafts with different strategic angles. User picks or combines.

## Approach Definitions

### MVP Approach

**Optimize for:** Speed to market, hypothesis validation
**Constraints:**
- Smallest possible scope that tests core assumption
- Single persona, single use case
- "Good enough" over "perfect"
- Launch in weeks, not months

**Cut ruthlessly:**
- Secondary features, edge cases, polish
- Multi-platform support
- Admin tooling, reporting dashboards
- Integrations beyond the essential one

### Platform Approach

**Optimize for:** Extensibility, ecosystem, long-term leverage
**Constraints:**
- API-first design, everything is a service
- Third-party developer experience matters
- Data model supports future use cases
- Invest in infrastructure now, features later

**Invest in:**
- API design and documentation
- Authentication, authorization, rate limiting
- Webhooks and event-driven architecture
- Developer portal and SDK

### User-Delight Approach

**Optimize for:** Best possible UX, emotional design, retention
**Constraints:**
- Polish over feature count
- Micro-interactions, animations, empty states
- Onboarding excellence
- Accessibility from day one

**Invest in:**
- User research and testing
- Design system and component library
- Performance (perceived speed)
- Error handling and recovery flows

## Comparison Framework

Each approach produces a summary with:

| Dimension | MVP | Platform | User-Delight |
|-----------|-----|----------|-------------|
| **Scope** | Minimal | Medium | Medium |
| **Timeline** | 2-4 weeks | 8-12 weeks | 6-8 weeks |
| **Risk Level** | Low (cheap to fail) | Medium (infrastructure bet) | Medium (design bet) |
| **Key Tradeoff** | Cuts corners | Slower to user value | Fewer features |
| **Best For** | Validation | Marketplace/ecosystem | Consumer/retention |

## When to Skip

- **Minimal template** — always skip (1-pager doesn't need 3 approaches)
- **Clear constraints** — if timeline/budget dictates approach, skip
- **Follow-up PRD** — if direction already validated, skip

## Custom Approach

User can define their own strategic angle:
- Name the approach
- Define what to optimize for
- List constraints
- Specify what to cut vs invest in
