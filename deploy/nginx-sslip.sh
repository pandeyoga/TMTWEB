#!/usr/bin/env bash
# OPTIONAL — serve the site through the nginx that already runs on port 80, without opening any extra port.
# Uses a free wildcard DNS name that always points to this IP: triyasa.148-230-102-29.sslip.io
# Adds ONE new nginx site file (triyasa-web). Never edits other sites; rolls back if `nginx -t` fails.
#   cd /opt/triyasa-web && bash deploy/nginx-sslip.sh
set -euo pipefail
cd "$(dirname "$0")/.."
source deploy/config.sh
[ "$(id -u)" -eq 0 ] || { echo "Jalankan sebagai root."; exit 1; }
command -v nginx >/dev/null 2>&1 || { echo "nginx tidak ditemukan di server ini."; exit 1; }

PORT="$(grep -E '^APP_PORT=' .env | cut -d= -f2-)"
HOST="triyasa.${VPS_IP//./-}.sslip.io"
if [ -d /etc/nginx/sites-available ]; then
  CONF=/etc/nginx/sites-available/triyasa-web; LINK=/etc/nginx/sites-enabled/triyasa-web
else
  CONF=/etc/nginx/conf.d/triyasa-web.conf; LINK=""
fi

echo "→ Menulis ${CONF} untuk ${HOST} → 127.0.0.1:${PORT}"
cat > "$CONF" <<NGINX
# Triyasa website (added by deploy/nginx-sslip.sh)
server {
    listen 80;
    listen [::]:80;
    server_name ${HOST};
    client_max_body_size 30M;

    location / {
        proxy_pass http://127.0.0.1:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGINX
[ -n "$LINK" ] && ln -sf "$CONF" "$LINK"

if ! nginx -t; then
  echo "✗ Konfigurasi nginx tidak valid → dibatalkan, file dihapus. Situs lain tidak terpengaruh."
  rm -f "$CONF"; [ -n "$LINK" ] && rm -f "$LINK"
  exit 1
fi
systemctl reload nginx
echo "✓ nginx dimuat ulang"

echo "→ Set SITE_URL=http://${HOST}"
sed -i "s|^SITE_URL=.*|SITE_URL=http://${HOST}|" .env
docker compose up -d app
for i in $(seq 1 40); do
  curl -fs -o /dev/null "http://127.0.0.1:${PORT}/api/users/me" 2>/dev/null && break
  sleep 3
done

echo
echo "✓ Website : http://${HOST}"
echo "  CMS     : http://${HOST}/admin"
echo "  HTTPS (opsional): certbot --nginx -d ${HOST}  lalu ubah SITE_URL di .env ke https:// dan jalankan: docker compose up -d app"
echo "  Batalkan: rm ${CONF} ${LINK} && systemctl reload nginx"
