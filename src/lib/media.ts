import type { Media } from '@/payload-types'

type Size = 'thumbnail' | 'card' | 'hero' | 'og'

export const asMedia = (m: unknown): Media | null => (m && typeof m === 'object' && 'url' in (m as object) ? (m as Media) : null)

export const mediaUrl = (m: unknown, size?: Size): string | null => {
  const media = asMedia(m)
  if (!media) return null
  const sized = size ? media.sizes?.[size]?.url : null
  return sized || media.url || null
}

export const srcSet = (m: unknown): string | undefined => {
  const media = asMedia(m)
  if (!media?.sizes) return undefined
  const parts = (['thumbnail', 'card', 'hero'] as const)
    .map((k) => media.sizes?.[k])
    .filter((s): s is NonNullable<typeof s> => Boolean(s?.url && s?.width))
    .map((s) => `${s.url} ${s.width}w`)
  return parts.length ? parts.join(', ') : undefined
}

export const isVideo = (m: unknown) => Boolean(asMedia(m)?.mimeType?.startsWith('video/'))

export const absoluteUrl = (path: string | null | undefined, base?: string | null) => {
  if (!path) return undefined
  if (/^https?:\/\//.test(path)) return path
  const root = (base || process.env.SITE_URL || '').replace(/\/$/, '')
  return `${root}${path}`
}
