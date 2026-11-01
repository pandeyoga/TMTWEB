import type { Media } from '@/payload-types'
import { mediaUrl } from '@/lib/media'

/**
 * Site logo. Until a logo is uploaded in CMS (Pengaturan Situs → Logo), a typographic placeholder is shown.
 */
export function Logo({
  logo,
  name,
  height = 40,
  onDark = false,
}: {
  logo?: number | Media | null
  name: string
  height?: number
  onDark?: boolean
}) {
  const src = mediaUrl(logo)
  if (src) {
    return (
      <span className="ty-logo">
        <img src={src} alt={name} style={{ height, filter: onDark ? 'brightness(0) invert(1)' : undefined }} />
      </span>
    )
  }
  const mark = Math.round(height * 0.8)
  return (
    <span className="ty-logo" aria-label={name} role="img">
      <svg width={mark} height={mark} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 6 26 24H6Z" fill="none" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="16" cy="6" r="4.6" fill="var(--signal)" />
        <circle cx="6" cy="24" r="4.6" fill="var(--accent)" />
        <circle cx="26" cy="24" r="4.6" fill="var(--ink)" />
      </svg>
      <span className="ty-logo__text" aria-hidden="true">
        <span className="ty-logo__name">TRIYASA</span>
        <span className="ty-logo__sub">MITRA TEKNOLOGI</span>
      </span>
    </span>
  )
}
