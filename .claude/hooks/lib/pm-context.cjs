#!/usr/bin/env node
/**
 * PM Context Detection - Scans project for PM artifacts
 * Shared by session-init.cjs and pm-context-inject.cjs
 *
 * Returns: { activePrds, currentSprint, storyStats }
 */

const fs = require('fs');
const path = require('path');

/**
 * Parse YAML frontmatter from markdown file
 * @param {string} filePath
 * @returns {object} frontmatter key-value pairs
 */
function parseFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const fm = {};
    for (const line of match[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx > 0) {
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        fm[key] = val;
      }
    }
    return fm;
  } catch { return {}; }
}

/**
 * Glob-like file finder (no external deps)
 * @param {string} dir - directory to search
 * @param {string} ext - file extension filter
 * @returns {string[]} matching file paths
 */
function findFiles(dir, ext) {
  const results = [];
  try {
    if (!fs.existsSync(dir)) return results;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(ext)) {
        results.push(path.join(dir, entry.name));
      }
    }
  } catch { /* ignore */ }
  return results;
}

/**
 * Detect PM artifacts in project
 * @param {string} projectDir - project root directory
 * @returns {{ activePrds: object[], currentSprint: object|null, storyStats: object }}
 */
function detectPmContext(projectDir) {
  const docsDir = path.join(projectDir, 'docs');

  // Scan PRDs
  const prdFiles = findFiles(path.join(docsDir, 'prds'), '.md');
  const activePrds = [];
  for (const f of prdFiles) {
    const fm = parseFrontmatter(f);
    if (fm.status && fm.status !== 'archived') {
      activePrds.push({
        name: fm.title || path.basename(f, '.md'),
        status: fm.status,
        file: path.basename(f)
      });
    }
  }

  // Scan sprints - find current by date range
  const sprintFiles = findFiles(path.join(docsDir, 'sprints'), '.md');
  let currentSprint = null;
  const today = new Date().toISOString().split('T')[0];
  for (const f of sprintFiles) {
    const fm = parseFrontmatter(f);
    if (fm.start && fm.end && fm.start <= today && fm.end >= today) {
      currentSprint = {
        name: fm.sprint || path.basename(f, '.md'),
        goal: fm.goal || '',
        end: fm.end,
        file: path.basename(f)
      };
      break;
    }
  }

  // Scan stories - count by status
  const storyFiles = findFiles(path.join(docsDir, 'stories'), '.md');
  const storyStats = { total: 0, draft: 0, ready: 0, 'in-progress': 0, done: 0 };
  for (const f of storyFiles) {
    const fm = parseFrontmatter(f);
    storyStats.total++;
    const status = fm.status || 'draft';
    if (storyStats[status] !== undefined) storyStats[status]++;
  }

  return { activePrds, currentSprint, storyStats };
}

/**
 * Format PM context as concise summary string
 */
function formatSummary(ctx) {
  const parts = [];

  if (ctx.activePrds.length > 0) {
    const byStatus = {};
    for (const p of ctx.activePrds) {
      byStatus[p.status] = (byStatus[p.status] || 0) + 1;
    }
    const statusParts = Object.entries(byStatus).map(([s, c]) => `${c} ${s}`);
    parts.push(`PRDs: ${ctx.activePrds.length} (${statusParts.join(', ')})`);
  }

  if (ctx.currentSprint) {
    const inProg = ctx.storyStats['in-progress'] || 0;
    const done = ctx.storyStats.done || 0;
    const total = ctx.storyStats.total || 0;
    parts.push(`Sprint: "${ctx.currentSprint.name}" (${done}/${total} stories done, ends ${ctx.currentSprint.end})`);
  } else if (ctx.storyStats.total > 0) {
    parts.push(`Stories: ${ctx.storyStats.total} (${ctx.storyStats.ready || 0} ready, ${ctx.storyStats['in-progress'] || 0} in-progress)`);
  }

  if (parts.length === 0) {
    return 'No PM artifacts detected. Run /pm-init to set up workspace.';
  }

  return `PM Kit active. ${parts.join('. ')}.`;
}

module.exports = { detectPmContext, formatSummary, parseFrontmatter, findFiles };
