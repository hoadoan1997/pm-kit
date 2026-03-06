#!/usr/bin/env node
/**
 * PM Kit Session Init Hook (SessionStart)
 * Detects PM artifacts and outputs context summary on session start.
 * Exit 0 always (fail-open).
 */
try {
  const fs = require('fs');
  const { detectPmContext, formatSummary } = require('./lib/pm-context.cjs');

  // Consume stdin (required by hook protocol)
  fs.readFileSync(0, 'utf-8');
  const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

  const ctx = detectPmContext(projectDir);
  const summary = formatSummary(ctx);

  console.log(summary);
  process.exit(0);
} catch (e) {
  // Fail-open: log error, don't break workflow
  try {
    const fs = require('fs');
    const p = require('path');
    const logDir = p.join(__dirname, '.logs');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    fs.appendFileSync(p.join(logDir, 'hook-log.jsonl'),
      JSON.stringify({ ts: new Date().toISOString(), hook: 'session-init', error: e.message }) + '\n');
  } catch (_) {}
  process.exit(0);
}
