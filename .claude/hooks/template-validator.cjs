#!/usr/bin/env node
/**
 * PM Template Validator Hook (PreToolUse:Write)
 * Validates PM documents against template structure before writing.
 * Warn-only mode: outputs warnings but never blocks (exit 0).
 */
try {
  const fs = require('fs');
  const { validateContent, detectDocType } = require('./lib/pm-validator.cjs');

  const stdin = fs.readFileSync(0, 'utf-8').trim();
  const data = stdin ? JSON.parse(stdin) : {};

  // Only validate Write tool calls
  const toolInput = data.tool_input || {};
  const filePath = toolInput.file_path || '';
  const content = toolInput.content || '';

  // Skip if not a PM document path
  const docType = detectDocType(filePath);
  if (!docType) {
    process.exit(0);
  }

  // Validate content
  const result = validateContent(filePath, content);

  if (!result.valid && result.errors.length > 0) {
    const typeLabel = docType.toUpperCase();
    console.log(`[PM Template Warning] ${typeLabel} missing: ${result.errors.join(', ')}`);
  }

  process.exit(0);
} catch (e) {
  // Fail-open
  try {
    const fs = require('fs');
    const p = require('path');
    const logDir = p.join(__dirname, '.logs');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    fs.appendFileSync(p.join(logDir, 'hook-log.jsonl'),
      JSON.stringify({ ts: new Date().toISOString(), hook: 'template-validator', error: e.message }) + '\n');
  } catch (_) {}
  process.exit(0);
}
