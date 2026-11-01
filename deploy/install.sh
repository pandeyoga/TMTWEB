#!/usr/bin/env bash
# One command on the VPS (as root) — installs git, clones or updates the repo in /opt/triyasa-web, then runs setup:
#   curl -fsSL https://raw.githubusercontent.com/pandeyoga/TMTWEB/main/deploy/install.sh | ADMIN_PASSWORD='...' bash
set -euo pipefail
REPO_URL="${REPO_URL:-https://github.com/pandeyoga/TMTWEB.git}"
APP_DIR="${APP_DIR:-/opt/triyasa-web}"
BRANCH="${BRANCH:-main}"

if [ "$(id -u)" -ne 0 ]; then echo "Jalankan sebagai root (sudo -i)."; exit 1; fi
command -v git >/dev/null 2>&1 || { apt-get update -y && apt-get install -y git; }

if [ -d "$APP_DIR/.git" ]; then
  echo "→ $APP_DIR sudah ada, ambil versi terbaru"
  git -C "$APP_DIR" fetch origin "$BRANCH" && git -C "$APP_DIR" reset --hard "origin/$BRANCH"
elif [ -e "$APP_DIR" ] && [ -n "$(ls -A "$APP_DIR" 2>/dev/null)" ]; then
  echo "✗ $APP_DIR sudah berisi file lain. Pindahkan dulu atau set APP_DIR=/path/lain."; exit 1
else
  git clone -b "$BRANCH" "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"
ADMIN_PASSWORD="${ADMIN_PASSWORD:-}" bash deploy/setup-vps.sh </dev/null
