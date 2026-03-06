# PM Writing Standards

## Voice & Tone

- Active voice, present tense ("Users upload files" not "Files are uploaded by users")
- Lead with user impact, not technical detail
- Be specific — avoid "fast", "easy", "simple" without quantification
- Write for the audience: executives get summaries, engineers get details

## Requirements Quality

- Every requirement must be **testable** (measurable acceptance criteria)
- Use "must", "should", "may" per RFC 2119 for priority clarity
- One requirement per line — no compound requirements
- Include boundary conditions: min, max, error states

## User Stories

Follow **INVEST** criteria:
- **I**ndependent — no implicit ordering between stories
- **N**egotiable — detail level appropriate for discussion
- **V**aluable — delivers user or business value
- **E**stimable — team can size it with confidence
- **S**mall — completable within one sprint
- **T**estable — clear pass/fail acceptance criteria

## Document Structure

- YAML frontmatter required (title, status, created date minimum)
- Use tables for structured data (requirements, risks, metrics)
- Section headers match template structure
- Mark optional sections explicitly; never leave required sections empty

## Naming Conventions

- PRD files: `prd-{feature-name}.md` (e.g., `prd-user-authentication.md`)
- Story files: `story-{id}-{short-name}.md` (e.g., `story-042-login-flow.md`)
- Sprint files: `sprint-{number}-{goal}.md` (e.g., `sprint-03-auth-mvp.md`)
