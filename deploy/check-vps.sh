#!/usr/bin/env bash
# READ-ONLY check of the VPS before installing the Triyasa website.
# Installs nothing, changes nothing. Shows what already runs on the server so we can pick a safe setup.
#   curl -fsSL https://raw.githubusercontent.com/pandeyoga/TMTWEB/main/deploy/check-vps.sh | bash
h() { printf '\n\033[1;36m── %s ──\033[0m\n' "$*"; }
has() { command -v "$1" >/dev/null 2>&1; }

listening() {
  # Prints "port process" for every listening TCP port.
  if has ss; then
    ss -ltnpH 2>/dev/null | awk '{n=split($4,a,":"); p=a[n]; proc=$6; gsub(/users:\(\("/,"",proc); gsub(/".*/,"",proc); print p, (proc==""?"-":proc)}'
  elif has netstat; then
    netstat -ltnp 2>/dev/null | awk 'NR>2 {n=split($4,a,":"); split($7,b,"/"); print a[n], (b[2]==""?"-":b[2])}'
  else
    cat /proc/net/tcp /proc/net/tcp6 2>/dev/null | while read -r _ local _ st _; do
      [ "$st" = "0A" ] && echo "$((16#${local##*:})) -"
    done
  fi
}
PORTS="$(listening | sort -n -u)"
used() { echo "$PORTS" | awk -v p="$1" '$1==p {found=1} END {exit !found}'; }
who() { echo "$PORTS" | awk -v p="$1" '$1==p {print $2}' | sort -u | paste -sd, -; }

echo "Pengecekan VPS (read-only) · $(date '+%Y-%m-%d %H:%M')"

h "Server"
. /etc/os-release 2>/dev/null
echo "OS   : ${PRETTY_NAME:-?}   ·   CPU: $(nproc) core"
echo "RAM  : $(free -h | awk '/Mem:/ {print $2 " total, " $7 " tersedia"}')   ·   Swap: $(free -h | awk '/Swap:/ {print $2}')"
echo "Disk : $(df -h / | awk 'NR==2 {print $4 " kosong dari " $2}')"

h "Port 80 / 443"
for p in 80 443; do
  if used "$p"; then echo "Port $p : DIPAKAI oleh $(who $p)"; else echo "Port $p : kosong"; fi
done

h "Semua port yang sedang dipakai"
echo "$PORTS" | awk '{a[$1]=a[$1] (a[$1]==""?"":",") $2} END {for (p in a) print p, a[p]}' | sort -n | awk '{printf "%-6s %s\n", $1, $2}' | head -40

h "Web server & panel"
found=0
has nginx && { echo "nginx   : $(nginx -v 2>&1 | sed 's/.*\///')  ($(systemctl is-active nginx 2>/dev/null))"; found=1; }
has apache2 && { echo "apache  : $(apache2 -v 2>/dev/null | head -1 | sed 's/.*\///')  ($(systemctl is-active apache2 2>/dev/null))"; found=1; }
has httpd && { echo "httpd   : terpasang"; found=1; }
has caddy && { echo "caddy   : $(caddy version 2>/dev/null | cut -d' ' -f1)  ($(systemctl is-active caddy 2>/dev/null))"; found=1; }
has traefik && { echo "traefik : terpasang"; found=1; }
for d in /usr/local/cpanel:cPanel /www/server/panel:aaPanel /home/clp:CloudPanel /etc/easypanel:Easypanel /data/coolify:Coolify /etc/dokploy:Dokploy /usr/local/CyberCP:CyberPanel /usr/local/hestia:HestiaCP /usr/local/lsws:OpenLiteSpeed /opt/webmin:Webmin; do
  [ -e "${d%%:*}" ] && { echo "panel   : ${d##*:}"; found=1; }
done
[ "$found" = 0 ] && echo "tidak ada web server / panel yang terdeteksi"

if has nginx; then
  h "Domain/port di nginx"
  nginx -T 2>/dev/null | grep -E '^\s*(server_name|listen)\s' | sed 's/^\s*//; s/;$//' | sort | uniq -c | sort -rn | head -15
fi

h "Docker"
if has docker; then
  echo "$(docker --version)  ·  compose: $(docker compose version --short 2>/dev/null || echo 'tidak ada')"
  docker ps --format 'table {{.Names}}\t{{.Ports}}' 2>/dev/null | head -20
  echo "Network: $(docker network ls -q 2>/dev/null | wc -l)  ·  Volume: $(docker volume ls -q 2>/dev/null | wc -l)"
else
  echo "Docker belum terpasang"
fi

h "Aplikasi lain di host"
has pm2 && { echo "pm2:"; pm2 jlist 2>/dev/null | grep -o '"name":"[^"]*"' | cut -d'"' -f4 | sed 's/^/  - /' | head -10; }
for s in postgresql mysql mariadb redis-server mongod; do
  [ "$(systemctl is-active $s 2>/dev/null)" = active ] && echo "service aktif: $s"
done
echo "Folder di /opt: $(ls /opt 2>/dev/null | paste -sd' ' -)"
echo "Folder di /var/www: $(ls /var/www 2>/dev/null | paste -sd' ' -)"

h "Firewall"
if has ufw; then ufw status 2>/dev/null | head -12; else echo "ufw tidak terpasang"; fi

h "Website Triyasa"
if [ -d /opt/triyasa-web ]; then
  echo "/opt/triyasa-web SUDAH ADA"
  grep -E '^(APP_PORT|SITE_URL)=' /opt/triyasa-web/.env 2>/dev/null
  docker ps -a --filter "label=com.docker.compose.project=triyasa-web" --format '  {{.Names}}: {{.Status}}' 2>/dev/null
else
  echo "Belum terpasang"
fi

h "Port kosong yang bisa dipakai"
free_list=""; for p in $(seq 8080 8099) $(seq 3000 3010); do used "$p" || free_list="$free_list $p"; done
echo "${free_list:- (tidak ada di 8080-8099 / 3000-3010)}" | xargs -n 10 echo
echo
echo "Selesai. Screenshot atau salin semua output di atas."
