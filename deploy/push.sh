#!/usr/bin/env bash
# Run on YOUR computer: commit all changes, push to git, then (optionally) tell the VPS to pull and redeploy.
#   ./deploy/push.sh "pesan perubahan"            → commit + push
#   ./deploy/push.sh "pesan perubahan" --deploy   → commit + push + update VPS via SSH
set -euo pipefail
cd "$(dirname "$0")/.."
source deploy/config.sh

MSG="${1:-update $(date '+%Y-%m-%d %H:%M')}"
DEPLOY="${2:-}"

if [ ! -d .git ]; then
  echo "→ Inisialisasi repository git"
  git init -b "$BRANCH"
fi
if ! git remote get-url origin >/dev/null 2>&1; then
  if [ -z "$REPO_URL" ]; then
    echo "✗ Remote 'origin' belum ada. Isi REPO_URL di deploy/config.sh atau jalankan: git remote add origin <url>"
    exit 1
  fi
  git remote add origin "$REPO_URL"
fi

git add -A
if git diff --cached --quiet; then
  echo "→ Tidak ada perubahan untuk di-commit"
else
  git commit -m "$MSG"
fi
git push -u origin "$BRANCH"
echo "✓ Push selesai"

if [ "$DEPLOY" = "--deploy" ]; then
  echo "→ Update VPS ${VPS_USER}@${VPS_IP}"
  ssh "${VPS_USER}@${VPS_IP}" "cd '${APP_DIR}' && bash deploy/update.sh"
fi
