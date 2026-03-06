---
name: pm-user-story
description: "Generate user stories with acceptance criteria from PRDs or descriptions. Use for story writing, backlog creation, requirement breakdown."
argument-hint: "[PRD path or feature description]"
---

# User Story Generator

Create well-structured user stories from PRDs or freeform input.

## Workflow

### 1. Input Detection

- **If argument is a file path** → Read the PRD, extract Functional Requirements section
- **If argument is text** → Use `AskUserQuestion` to gather:
  - Who is the user persona?
  - What capability do they need?
  - What constraints or edge cases exist?

### 2. Story Generation

For each requirement or feature:
1. Write story in format: "As a [persona], I want [action], so that [benefit]"
2. Generate 3+ acceptance criteria using Given/When/Then
3. Identify edge cases
4. Add technical notes if obvious
5. Estimate complexity: Small (1-2pts), Medium (3-5pts), Large (8pts)

### 3. Story Validation

Check each story against INVEST criteria:
- **I**ndependent — Can be developed without other stories
- **N**egotiable — Detail level allows discussion
- **V**aluable — Delivers clear user/business value
- **E**stimable — Team can size with confidence
- **S**mall — Fits within one sprint
- **T**estable — Clear pass/fail criteria

If a story is too large, split it using patterns from `references/story-patterns.md`.

### 4. Output

- Save each story to `docs/stories/story-{id}-{short-name}.md`
- Use template from `.claude/templates/user-story-template.md`
- Set frontmatter: `status: draft`, `priority: P1/P2/P3`
- Print summary table of all generated stories

## References

See `references/story-patterns.md` for splitting strategies and common patterns.
