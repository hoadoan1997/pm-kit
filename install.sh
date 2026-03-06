#!/usr/bin/env bash
# PM Kit Installer - Copies PM Kit files into target project's .claude/ directory
# Usage: ./install.sh [target-dir]
# Idempotent: safe to run multiple times

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/.claude"
TARGET_DIR="${1:-.}"
TARGET_CLAUDE="$TARGET_DIR/.claude"

# Colors
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'

info() { echo -e "${GREEN}[PM Kit]${NC} $1"; }
warn() { echo -e "${YELLOW}[PM Kit]${NC} $1"; }
err() { echo -e "${RED}[PM Kit]${NC} $1" >&2; }

# Check Node.js >= 18
check_node() {
  if ! command -v node &>/dev/null; then
    err "Node.js is required but not installed. Install Node.js >= 18."
    exit 1
  fi
  local ver
  ver=$(node -e "console.log(process.versions.node.split('.')[0])")
  if [ "$ver" -lt 18 ]; then
    err "Node.js >= 18 required (found v$(node -v))"
    exit 1
  fi
}

# Copy directory contents without overwriting existing files
copy_dir() {
  local src="$1" dest="$2" name="$3"
  local count=0
  if [ ! -d "$src" ]; then return; fi
  mkdir -p "$dest"
  # Use rsync if available (better no-clobber), fallback to cp
  if command -v rsync &>/dev/null; then
    count=$(rsync -r --ignore-existing --out-format='%n' "$src/" "$dest/" | wc -l | tr -d ' ')
  else
    # Manual copy with no-clobber
    while IFS= read -r -d '' file; do
      local rel="${file#$src/}"
      local target="$dest/$rel"
      mkdir -p "$(dirname "$target")"
      if [ ! -e "$target" ]; then
        cp "$file" "$target"
        count=$((count + 1))
      fi
    done < <(find "$src" -type f -print0)
  fi
  info "$name: $count new file(s) installed"
}

# Merge settings.json hooks (append PM Kit hooks, preserve existing)
merge_settings() {
  local source_settings="$SOURCE_DIR/settings.json"
  local target_settings="$TARGET_CLAUDE/settings.json"

  if [ ! -f "$source_settings" ]; then return; fi

  if [ ! -f "$target_settings" ]; then
    cp "$source_settings" "$target_settings"
    info "settings.json: created with PM Kit hooks"
    return
  fi

  # Use Node.js for JSON merge (paths passed via argv to avoid shell injection)
  node -e "
    const fs = require('fs');
    const [srcPath, tgtPath] = process.argv.slice(1);
    const src = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
    const tgt = JSON.parse(fs.readFileSync(tgtPath, 'utf8'));
    tgt.hooks = tgt.hooks || {};
    for (const [event, srcEntries] of Object.entries(src.hooks || {})) {
      tgt.hooks[event] = tgt.hooks[event] || [];
      for (const srcEntry of srcEntries) {
        const cmds = (srcEntry.hooks || []).map(h => h.command || '');
        const allExist = cmds.every(cmd =>
          tgt.hooks[event].some(e => (e.hooks || []).some(h => h.command === cmd))
        );
        if (!allExist) {
          tgt.hooks[event].push(srcEntry);
        }
      }
    }
    fs.writeFileSync(tgtPath, JSON.stringify(tgt, null, 2) + '\n');
  " "$source_settings" "$target_settings"
  info "settings.json: merged PM Kit hooks (existing hooks preserved)"
}

# Main
main() {
  echo ""
  echo "========================================="
  echo "  PM Kit Installer"
  echo "========================================="
  echo ""

  check_node

  if [ ! -d "$TARGET_DIR" ]; then
    err "Target directory does not exist: $TARGET_DIR"
    exit 1
  fi

  TARGET_DIR="$(cd "$TARGET_DIR" && pwd)"
  TARGET_CLAUDE="$TARGET_DIR/.claude"

  info "Installing to: $TARGET_DIR"
  mkdir -p "$TARGET_CLAUDE"

  # Copy each component
  copy_dir "$SOURCE_DIR/skills" "$TARGET_CLAUDE/skills" "Skills"
  copy_dir "$SOURCE_DIR/agents" "$TARGET_CLAUDE/agents" "Agents"
  copy_dir "$SOURCE_DIR/hooks" "$TARGET_CLAUDE/hooks" "Hooks"
  copy_dir "$SOURCE_DIR/rules" "$TARGET_CLAUDE/rules" "Rules"
  copy_dir "$SOURCE_DIR/templates" "$TARGET_CLAUDE/templates" "Templates"

  # Copy CLAUDE.md if not exists
  if [ ! -f "$TARGET_CLAUDE/CLAUDE.md" ]; then
    cp "$SOURCE_DIR/CLAUDE.md" "$TARGET_CLAUDE/CLAUDE.md"
    info "CLAUDE.md: installed"
  else
    warn "CLAUDE.md: already exists, skipped (review $SOURCE_DIR/CLAUDE.md for PM additions)"
  fi

  # Merge settings.json
  merge_settings

  echo ""
  info "Installation complete!"
  echo ""
  echo "  Quick start:"
  echo "    1. Open your project in Claude Code"
  echo "    2. Type /pm-help to see available commands"
  echo "    3. Type /pm-init to set up PM workspace"
  echo "    4. Type /prd to create your first PRD"
  echo ""
}

main "$@"
