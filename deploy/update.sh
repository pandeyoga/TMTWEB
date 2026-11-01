#!/usr/bin/env bash
# Run on the VPS after pushing new code: backup → pull → rebuild → health check. Migrations run automatically.
#   cd /opt/triyasa-web && bash deploy/update.sh
set -euo pipefail
cd "$(dirname "$0")/.."
source deploy/config.sh
PORT="$(grep -E '^APP_PORT=' .env | cut -d= -f2-)"
URL="$(grep -E '^SITE_URL=' .env | cut -d= -f2-)"

echo "→ Backup database"
bash deploy/backup.sh --db-only || echo "! Backup gagal, update tetap dilanjutkan"

echo "→ Ambil kode terbaru (${BRANCH})"
git fetch origin "$BRANCH"
git reset --hard "origin/${BRANCH}"
chmod +x deploy/*.sh

echo "→ Build & restart"
docker compose up -d --build --remove-orphans

echo "→ Cek aplikasi"
for i in $(seq 1 60); do
  if curl -fsS -o /dev/null "http://127.0.0.1:${PORT}/api/users/me"; then
    docker image prune -f --filter "label=com.docker.compose.project=triyasa-web" >/dev/null 2>&1 || true
    echo "✓ Website aktif: ${URL}  ·  CMS: ${URL}/admin"
    exit 0
  fi
  sleep 3
done
echo "✗ Aplikasi belum merespons. Lihat: docker compose logs --tail=100 app"
exit 1
