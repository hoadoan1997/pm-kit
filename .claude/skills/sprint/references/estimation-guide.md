# Sprint Estimation Guide

## T-Shirt Sizing

Quick complexity assessment before assigning points:

| Size | Effort | Unknowns | Dependencies | Points |
|------|--------|----------|--------------|--------|
| XS | Hours | None | None | 1 |
| S | 1 day | Minimal | None | 2 |
| M | 2-3 days | Some | 1-2 | 3-5 |
| L | 1 week | Significant | Multiple | 8 |
| XL | >1 week | High | Complex | 13+ (split!) |

## Fibonacci Scale

Use Fibonacci numbers (1, 2, 3, 5, 8, 13, 21) because:
- Larger stories have more uncertainty
- Gaps between numbers force clear distinctions
- 13+ signals "too large, needs splitting"

## Velocity Calculation

```
Velocity = Average points completed per sprint (last 3 sprints)

Sprint 1: 18 pts completed
Sprint 2: 22 pts completed
Sprint 3: 20 pts completed
Velocity = (18 + 22 + 20) / 3 = 20 pts/sprint
```

## Capacity Planning

```
Available capacity = Velocity * (1 - Buffer%)

Buffer guidelines:
- New team: 30% buffer
- Established team: 15-20% buffer
- Bug-heavy period: 25-30% buffer

Example: Velocity 20, 20% buffer = 16 pts committable
```

## Complexity Signals

Indicators that increase story size:
- Multiple API endpoints or data models
- New third-party integration
- Cross-team coordination required
- Security/compliance requirements
- UI with complex state management
- Performance requirements with specific targets

## Sprint Health Indicators

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| Commitment vs Capacity | 70-90% | 90-100% | >100% |
| Carry-over rate | <10% | 10-20% | >20% |
| Scope changes mid-sprint | 0-1 | 2-3 | >3 |
| Stories completed | >80% | 60-80% | <60% |
