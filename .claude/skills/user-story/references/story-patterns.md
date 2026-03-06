# User Story Patterns

## Splitting Strategies

When a story is too large (>8 points), split using these patterns:

### By Workflow Step
Original: "User can manage their account"
Split into:
- User can create account
- User can update profile
- User can change password
- User can delete account

### By Data Variation
Original: "User can export reports"
Split into:
- User can export as CSV
- User can export as PDF
- User can export with date filters

### By User Role
Original: "Users can manage content"
Split into:
- Admin can create and publish content
- Editor can draft and submit content
- Viewer can read published content

### By Happy Path vs Edge Cases
Original: "User can upload files"
Split into:
- User can upload valid image files (happy path)
- System rejects files exceeding size limit
- System handles upload interruption gracefully

## Common Story Patterns

### CRUD Stories
- Create: "As a [role], I want to create [entity], so that [value]"
- Read: "As a [role], I want to view [entity], so that [value]"
- Update: "As a [role], I want to edit [entity], so that [value]"
- Delete: "As a [role], I want to remove [entity], so that [value]"

### Integration Stories
- "As a [role], I want [system A] to sync with [system B], so that [value]"

### Notification Stories
- "As a [role], I want to be notified when [event], so that [value]"

## Acceptance Criteria Patterns

### Positive (Happy Path)
Given [valid state], When [action], Then [success outcome]

### Negative (Error Handling)
Given [invalid state], When [action], Then [error message/recovery]

### Boundary
Given [edge condition], When [action], Then [defined behavior]

## Estimation Reference

| Size | Points | Characteristics |
|------|--------|-----------------|
| XS | 1 | Config change, copy update |
| S | 2 | Single component, well-understood |
| M | 3-5 | Multiple components, some unknowns |
| L | 8 | Cross-cutting, requires research |
| XL | 13+ | Split required — too large for one sprint |
