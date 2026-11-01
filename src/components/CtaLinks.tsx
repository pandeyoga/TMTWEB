import Link from 'next/link'
import type { SiteSetting } from '@/payload-types'
import { resolveLink, type LinkValue } from '@/lib/links'
import { Arrow } from './Icon'

export function CtaLink({ link, settings, variant = 'primary' }: { link: LinkValue; settings?: SiteSetting | null; variant?: 'primary' | 'secondary' | 'link' }) {
  const r = resolveLink(link, settings)
  if (!r) return null
  const cls = variant === 'link' ? 'ty-link' : variant === 'secondary' ? 'ty-btn ty-btn--secondary' : 'ty-btn'
  const ext = r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link className={cls} href={r.href} {...ext} data-track={r.isWhatsApp ? 'whatsapp' : undefined}>
      {r.label}
      {variant !== 'secondary' ? <Arrow /> : null}
    </Link>
  )
}

export function CtaRow({ primary, secondary, settings }: { primary?: LinkValue; secondary?: LinkValue; settings?: SiteSetting | null }) {
  if (!primary?.label && !secondary?.label) return null
  return (
    <div className="ty-hero__cta">
      <CtaLink link={primary} settings={settings} />
      <CtaLink link={secondary} settings={settings} variant="secondary" />
    </div>
  )
}
