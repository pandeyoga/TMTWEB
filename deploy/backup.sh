#!/usr/bin/env bash
# Run on the VPS: back up the database (and media) to /opt/triyasa-backups, keeping 14 days.
#   bash deploy/backup.sh            → database + media
#   bash deploy/backup.sh --db-only  → database only
# Daily at 02:30 (crontab -e):  30 2 * * * cd /opt/triyasa-web && bash deploy/backup.sh >> /var/log/triyasa-backup.log 2>&1
set -euo pipefail
cd "$(dirname "$0")/.."
DIR="/opt/triyasa-backups"
STAMP="$(date +%F-%H%M)"
mkdir -p "$DIR"

if docker compose ps --status running db | grep -q db; then
  docker compose exec -T db pg_dump -U triyasa triyasa | gzip > "$DIR/db-$STAMP.sql.gz"
  echo "✓ Database → $DIR/db-$STAMP.sql.gz"
else
  echo "- Database belum berjalan, lewati"
fi

if [ "${1:-}" != "--db-only" ]; then
  docker run --rm -v triyasa-web_media:/m:ro -v "$DIR":/b alpine tar czf "/b/media-$STAMP.tar.gz" -C /m .
  echo "✓ Media → $DIR/media-$STAMP.tar.gz"
fi

find "$DIR" -name '*.gz' -mtime +14 -delete
