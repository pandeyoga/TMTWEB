# Website + CMS PT Triyasa Mitra Teknologi — production image (Next.js standalone).
FROM node:22.17.0-alpine AS base
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# 1. Dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# 2. Build (no database needed). This stage also runs the seed script (docker compose run seed).
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG PAYLOAD_SECRET=build-only-placeholder-secret-not-used-at-runtime
ARG DATABASE_URL=postgres://build:build@localhost:5432/build
RUN corepack enable pnpm && PAYLOAD_SECRET=$PAYLOAD_SECRET DATABASE_URL=$DATABASE_URL pnpm build

# 3. Runtime
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    MEDIA_DIR=/app/media
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN mkdir -p /app/media && chown -R nextjs:nodejs /app/media
USER nextjs
EXPOSE 3000
# Docker overrides HOSTNAME with the container id, so set it at start. Migrations run automatically on boot.
CMD ["sh", "-c", "HOSTNAME=0.0.0.0 exec node server.js"]
