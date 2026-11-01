import Link from 'next/link'
import type { Page, SiteSetting } from '@/payload-types'
import { asMedia, isVideo, mediaUrl, srcSet } from '@/lib/media'
import { CoverageMap } from './CoverageMap'
import { CtaRow } from './CtaLinks'
import { Highlight } from './Highlight'
import { NetworkCanvas } from './NetworkCanvas'
import { StatusCard, type StatusCardData } from './StatusCard'
import { Eyebrow } from './TriNode'

type HeroData = Page['hero']

export function Hero({
  hero,
  settings,
  title,
  breadcrumb,
}: {
  hero?: HeroData
  settings?: SiteSetting | null
  title: string
  breadcrumb?: { href: string; label: string }[]
}) {
  const type = hero?.type ?? 'simple'
  if (type === 'none') return null
  const heading = hero?.heading || title
  const cards = (hero?.statusCards ?? []) as StatusCardData[]
  const big = type === 'network'

  const copy = (
    <div className="ty-hero__copy" data-hero-copy>
      {breadcrumb?.length ? (
        <nav aria-label="Breadcrumb">
          <ol className="ty-breadcrumb">
            {breadcrumb.map((b, i) => (
              <li key={b.href}>{i < breadcrumb.length - 1 ? <Link href={b.href}>{b.label}</Link> : <span aria-current="page">{b.label}</span>}</li>
            ))}
          </ol>
        </nav>
      ) : null}
      <div>
        <Eyebrow>{hero?.eyebrow}</Eyebrow>
      </div>
      <h1 className={big ? 'display' : 'heading-1'}>
        <Highlight text={heading} />
      </h1>
      {hero?.lead ? <p className="lead">{hero.lead}</p> : null}
      <CtaRow primary={hero?.primaryCta} secondary={hero?.secondaryCta} settings={settings} />
    </div>
  )

  if (type === 'network') {
    return (
      <section className="ty-hero ty-hero--network" aria-label="Pembuka">
        <NetworkCanvas />
        <div className="ty-container">{copy}</div>
        {cards.length ? (
          <div className="ty-hero__cards">
            {cards.map((c, i) => (
              <StatusCard key={c.id ?? i} card={c} />
            ))}
          </div>
        ) : null}
      </section>
    )
  }

  if (type === 'simple') {
    return (
      <section className="ty-hero ty-hero--simple ty-dotgrid" aria-label="Pembuka">
        <div className="ty-container">{copy}</div>
      </section>
    )
  }

  let visual: React.ReactNode = null
  if (type === 'image') {
    const m = asMedia(hero?.media)
    visual = m ? (
      isVideo(m) ? (
        <video className="ty-hero__media" src={m.url ?? undefined} autoPlay muted loop playsInline />
      ) : (
        <img className="ty-hero__media" src={mediaUrl(m, 'hero') ?? undefined} srcSet={srcSet(m)} sizes="(max-width: 960px) 100vw, 55vw" alt={m.alt ?? ''} />
      )
    ) : (
      <div className="ty-hero__media ty-dotgrid" aria-hidden="true" />
    )
  } else if (type === 'status') {
    visual = (
      <div className="ty-hero__panel ty-dotgrid">
        {cards.map((c, i) => (
          <StatusCard key={c.id ?? i} card={c} delay={-i * 2} />
        ))}
      </div>
    )
  } else if (type === 'coverage') {
    visual = <CoverageMap />
  }

  return (
    <section className="ty-hero ty-hero--split" aria-label="Pembuka">
      <div className="ty-container">
        {copy}
        <div className="ty-hero__visual">{visual}</div>
      </div>
    </section>
  )
}
