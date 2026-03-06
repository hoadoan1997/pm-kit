---
name: pm-init
description: "Initialize PM workspace with standard directory structure. Use when setting up a new project for PM workflows."
argument-hint: "[project path or current directory]"
---

# PM Workspace Initializer

Set up the standard PM directory structure and project context.

## Workflow

1. **Create directories** — Set up PM artifact folders:
   ```
   docs/prds/
   docs/stories/
   docs/sprints/
   docs/research/
   docs/roadmaps/
   docs/meeting-notes/
   ```

2. **Add .gitkeep** — Place `.gitkeep` in each empty directory so git tracks them.

3. **Gather context** — Use `AskUserQuestion` to collect:
   - Project/product name
   - Product type (SaaS, mobile app, API, platform, etc.)
   - Team size (solo, small team, large team)
   - Current stage (ideation, MVP, growth, mature)

4. **Generate PM context** — Based on answers, suggest next steps:
   - Ideation → Start with `/pm-research` then `/pm-prd`
   - MVP → Start with `/pm-prd` for core features
   - Growth → Start with `/pm-sprint` to organize existing backlog
   - Mature → Start with `/pm-research` for expansion opportunities

5. **Print summary** — Show created directories and recommended next command.

## Important

- Use `Bash` tool with `mkdir -p` to create directories
- Use `Write` tool to create `.gitkeep` files
- Do NOT overwrite existing directories or files
- Keep the interaction brief — 1 round of questions max
