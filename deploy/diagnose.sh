#!/usr/bin/env bash
# Collects everything needed to troubleshoot the Triyasa website on the VPS. Prints no secrets.
#   curl -fsSL https://raw.githubusercontent.com/pandeyoga/TMTWEB/main/deploy/diagnose.sh | bash
APP_DIR="${APP_DIR:-/opt/triyasa-web}"
h() { printf '\n===== %s =====\n' "$*"; }

h "Server"
date; uptime
free -h | head -2
df -h / | tail -1

h "Folder aplikasi"
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR" && git log -1 --oneline
else
  echo "✗ $APP_DIR belum ada → instalasi belum berjalan / gagal di awal"; exit 0
fi

h ".env (tanpa secret)"
if [ -f .env ]; then grep -E '^(APP_PORT|APP_BIND|SITE_URL|SITE_ADDRESS|COMPOSE_PROFILES)=' .env; else echo "✗ .env belum ada"; fi
PORT="$(grep -E '^APP_PORT=' .env 2>/dev/null | cut -d= -f2-)"; PORT="${PORT:-8080}"

h "Docker"
docker --version 2>&1; docker compose version 2>&1
echo; docker compose ps -a 2>&1
echo; docker images --format '{{.Repository}}:{{.Tag}}  {{.CreatedSince}}  {{.Size}}' 2>/dev/null | grep -i triyasa || echo "✗ Image triyasa belum ada → build belum selesai / gagal"

h "Port yang dipakai (80, 443, $PORT)"
if command -v ss >/dev/null 2>&1; then ss -ltnp | grep -E ":(80|443|$PORT)\b" || echo "tidak ada yang listen"; fi

h "Tes dari dalam VPS"
for u in "http://127.0.0.1:${PORT}/api/users/me" "http://127.0.0.1:${PORT}/" "http://127.0.0.1/"; do
  printf '%s → ' "$u"; curl -sS -o /dev/null -w '%{http_code} (%{time_total}s)\n' --max-time 20 "$u" 2>&1 | tail -1
done

h "Firewall"
command -v ufw >/dev/null 2>&1 && ufw status 2>&1 | head -15 || echo "ufw tidak terpasang"

h "Log aplikasi (80 baris terakhir)"
docker compose logs --no-color --tail=80 app 2>&1

h "Log database (20 baris terakhir)"
docker compose logs --no-color --tail=20 db 2>&1

h "Selesai — salin semua output di atas"
