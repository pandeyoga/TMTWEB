#!/usr/bin/env bash
# Quick status on the VPS: containers, URL, and the last log lines.
cd "$(dirname "$0")/.."
docker compose ps
echo
echo "URL: $(grep -E '^SITE_URL=' .env | cut -d= -f2-)"
echo
docker compose logs --tail=30 app
