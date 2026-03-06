#!/usr/bin/env node
/**
 * PM Template Validator - Validates PM docs against template structure
 * Used by template-validator.cjs hook
 *
 * Returns: { valid: boolean, errors: string[] }
 */

// parseFrontmatter available from pm-context.cjs if needed for future use

/**
 * Required sections by document type
 */
const REQUIRED_SECTIONS = {
  prd: [
    'Problem Statement',
    'Target Users',
    'Goals & Success Metrics',
    'Proposed Solution',
    'Functional Requirements',
    'Non-Functional Requirements'
  ],
  story: [
    'User Story',
    'Acceptance Criteria'
  ],
  sprint: [
    'Sprint Goal',
    'Committed Stories'
  ]
};

/**
 * Required frontmatter fields by document type
 */
const REQUIRED_FRONTMATTER = {
  prd: ['title', 'status'],
  story: ['id', 'status'],
  sprint: ['sprint', 'start', 'end']
};

/**
 * Detect document type from file path
 * @param {string} filePath
 * @returns {string|null} 'prd' | 'story' | 'sprint' | null
 */
function detectDocType(filePath) {
  if (filePath.includes('/prds/') || filePath.includes('prd-')) return 'prd';
  if (filePath.includes('/stories/') || filePath.includes('story-')) return 'story';
  if (filePath.includes('/sprints/') || filePath.includes('sprint-')) return 'sprint';
  return null;
}

/**
 * Extract section headers from markdown content
 * @param {string} content
 * @returns {string[]} section names (text after ## )
 */
function extractSections(content) {
  const sections = [];
  for (const line of content.split('\n')) {
    const match = line.match(/^#{1,3}\s+(.+)/);
    if (match) sections.push(match[1].trim());
  }
  return sections;
}

/**
 * Validate content against template requirements
 * @param {string} filePath
 * @param {string} content - file content to validate
 * @returns {{ valid: boolean, errors: string[], docType: string|null }}
 */
function validateContent(filePath, content) {
  const docType = detectDocType(filePath);
  if (!docType) return { valid: true, errors: [], docType: null };

  const errors = [];

  // Check frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    errors.push('Missing YAML frontmatter (---)');
  } else {
    const fm = {};
    for (const line of fmMatch[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx > 0) fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
    const reqFields = REQUIRED_FRONTMATTER[docType] || [];
    for (const field of reqFields) {
      if (!fm[field] || fm[field] === '""' || fm[field] === "''") {
        errors.push(`Frontmatter missing: ${field}`);
      }
    }
  }

  // Check required sections
  const sections = extractSections(content);
  const reqSections = REQUIRED_SECTIONS[docType] || [];
  for (const section of reqSections) {
    if (!sections.some(s => s === section)) {
      errors.push(`Missing section: ${section}`);
    }
  }

  return { valid: errors.length === 0, errors, docType };
}

module.exports = { validateContent, detectDocType, extractSections };
