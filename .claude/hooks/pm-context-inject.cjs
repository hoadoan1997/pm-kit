#!/usr/bin/env node
/**
 * PM Context Inject Hook (UserPromptSubmit)
 * Injects current sprint/PRD context into each prompt.
 * Throttled: skips if last injection was < 5 prompts ago.
 * Exit 0 always (fail-open).
 */
try {
  const fs = require('fs');
  const path = require('path');
  const { detectPmContext } = require('./lib/pm-context.cjs');

  // Consume stdin (required by hook protocol)
  fs.readFileSync(0, 'utf-8');
  const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

  // Throttle: track injection count via temp file
  const stateFile = path.join(__dirname, '.logs', 'inject-state.json');
  let state = { count: 0 };
  try {
    if (fs.existsSync(stateFile)) {
      state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    }
  } catch { /* ignore */ }

  state.count = (state.count || 0) + 1;

  // Only inject every 5 prompts
  if (state.count % 5 !== 1) {
    const logDir = path.dirname(stateFile);
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    fs.writeFileSync(stateFile, JSON.stringify(state));
    process.exit(0);
  }

  // Save state
  const logDir = path.dirname(stateFile);
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
  fs.writeFileSync(stateFile, JSON.stringify(state));

  const ctx = detectPmContext(projectDir);

  // Build concise context line
  const parts = [];

  if (ctx.currentSprint) {
    const done = ctx.storyStats.done || 0;
    const total = ctx.storyStats.total || 0;
    parts.push(`Sprint "${ctx.currentSprint.name}" active (ends ${ctx.currentSprint.end}). ${done}/${total} stories done.`);
  }

  if (ctx.activePrds.length > 0) {
    const inReview = ctx.activePrds.filter(p => p.status === 'review');
    if (inReview.length > 0) {
      parts.push(`PRD "${inReview[0].name}" in review.`);
    }
  }

  if (parts.length > 0) {
    console.log(`[PM Context] ${parts.join(' ')}`);
  }

  process.exit(0);
} catch (e) {
  try {
    const fs = require('fs');
    const p = require('path');
    const logDir = p.join(__dirname, '.logs');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    fs.appendFileSync(p.join(logDir, 'hook-log.jsonl'),
      JSON.stringify({ ts: new Date().toISOString(), hook: 'pm-context-inject', error: e.message }) + '\n');
  } catch (_) {}
  process.exit(0);
}
