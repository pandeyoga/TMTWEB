import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import type { Faq, Page, Service, SharedSection, SiteSetting } from '@/payload-types'
import { getGeneralFaqs, getLogos, getServices } from '@/lib/payload'
import { serviceHref } from '@/lib/links'
import { asMedia, isVideo, mediaUrl, srcSet } from '@/lib/media'
import { ContactForm } from '../ContactForm'
import { CoverageMap } from '../CoverageMap'
import { CtaLink, CtaRow } from '../CtaLinks'
import { Highlight } from '../Highlight'
import { Arrow, Icon } from '../Icon'
import { Section, SectionHead } from '../Section'
import { Eyebrow } from '../TriNode'
import { BentoArt } from './BentoArt'

type Block = NonNullable<Page['layout']>[number]
type Of<T extends Block['blockType']> = Extract<Block, { blockType: T }>
export type Ctx = { settings: SiteSetting; shared: SharedSection; services: Service[] }

/* ---------------------------------------------------------------- */

export function ServiceCards({ services }: { services: Service[] }) {
  return (
    <div className="ty-grid ty-grid--3" data-reveal="group">
      {services.map((s) => (
        <Link key={s.id} className="ty-card" href={serviceHref(s.slug)}>
          <span className="ty-card__icon">
            <Icon name={s.icon} />
          </span>
          {s.tagline ? <span className="ty-card__tag">{s.tagline}</span> : null}
          <h3 className="ty-card__title">{s.title}</h3>
          <p className="ty-card__text">{s.excerpt}</p>
          <span className="ty-link ty-card__more">
            Pelajari <Arrow />
          </span>
        </Link>
      ))}
    </div>
  )
}

async function ServicesGrid({ b, ctx }: { b: Of<'servicesGrid'>; ctx: Ctx }) {
  const picked = (b.services ?? []).filter((s): s is Service => typeof s === 'object' && s !== null)
  const services = picked.length ? picked : ctx.services
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
      <ServiceCards services={services} />
    </Section>
  )
}

function Bento({ b }: { b: Of<'bento'> }) {
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
      <div className="ty-bento-grid" data-reveal="group">
        {(b.items ?? []).map((it, i) => (
          <article
            key={it.id ?? i}
            className={`ty-bento${it.variant === 'accent' ? ' ty-bento--accent' : ''}`}
            data-theme={it.variant === 'navy' ? 'dark' : b.theme === 'navy' ? 'light' : undefined}
          >
            {it.tag ? <span className="ty-card__tag">{it.tag}</span> : null}
            <h3 className="ty-bento__title">{it.title}</h3>
            {it.text ? <p className="ty-bento__text">{it.text}</p> : null}
            {it.art && it.art !== 'none' ? (
              <div className="ty-bento__art">
                <BentoArt art={it.art} />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}

function Statement({ b }: { b: Of<'statement'> }) {
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <div className="ty-stack">
        <Eyebrow>{b.eyebrow}</Eyebrow>
        <p className="heading-1 ty-statement" data-scrub>
          {b.text}
        </p>
      </div>
    </Section>
  )
}

function Stats({ b }: { b: Of<'stats'> }) {
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
      <div className="ty-stats">
        {(b.items ?? []).map((it, i) => (
          <div key={it.id ?? i} className="ty-stat">
            <span className="numeral">
              <span data-count={it.value}>{it.value}</span>
              {it.suffix ? <small>{it.suffix}</small> : null}
            </span>
            <p>{it.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

async function LogoStrip({ b }: { b: Of<'logoStrip'> }) {
  const docs = await getLogos(b.source === 'partners' ? 'partners' : 'clients')
  const logos = docs.map((d) => ({ name: d.name, src: mediaUrl(d.logo), square: (() => { const m = asMedia(d.logo); return m?.width && m?.height ? m.width / m.height < 1.6 : false })() })).filter((l) => l.src)
  if (!logos.length) return null
  if (b.display === 'grid') {
    return (
      <Section theme={b.theme} anchor={b.anchor}>
        <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
        <div className="ty-logo-grid" data-reveal="group">
          {logos.map((l) => (
            <div key={l.name} className="ty-logo-grid__item">
              <img src={l.src!} alt={l.name} className={l.square ? 'is-square' : undefined} loading="lazy" />
            </div>
          ))}
        </div>
      </Section>
    )
  }
  const reps = logos.length < 6 ? 3 : 2
  const row = Array.from({ length: reps }, () => logos).flat()
  return (
    <section className={`ty-section${b.theme === 'sunken' ? ' ty-section--sunken' : ''}`} data-theme={b.theme === 'navy' ? 'dark' : undefined} id={b.anchor || undefined} style={{ paddingBlock: 'var(--space-8)' }}>
      <div className="ty-container" style={{ marginBottom: 'var(--space-5)' }}>
        <Eyebrow>{b.eyebrow}</Eyebrow>
      </div>
      <div className="ty-logos">
        <div className="ty-logos__track">
          {[...row, ...row].map((l, i) => (
            <img
              key={i}
              src={l.src!}
              alt={i < logos.length ? l.name : ''}
              aria-hidden={i < logos.length ? undefined : true}
              className={[l.square ? 'is-square' : '', i >= logos.length ? 'is-dup' : ''].join(' ').trim() || undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSteps({ steps }: { steps: { title: string; text?: string | null; id?: string | null }[] }) {
  if (!steps.length) return null
  return (
    <div style={{ position: 'relative', ['--steps' as string]: steps.length }} data-steps>
      <div className="ty-steps__rail" aria-hidden="true">
        <span />
        <i className="ty-steps__packet" />
      </div>
      <ol className="ty-steps" style={{ ['--steps' as string]: steps.length }}>
        {steps.map((s, i) => (
          <li key={s.id ?? i} className="ty-step">
            <span className="ty-step__node">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="ty-step__title">{s.title}</h3>
            {s.text ? <p className="ty-step__text">{s.text}</p> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function Process({ b, ctx }: { b: Of<'process'>; ctx: Ctx }) {
  const steps = b.useShared ? ctx.shared.process ?? [] : b.steps ?? []
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
      <ProcessSteps steps={steps} />
    </Section>
  )
}

export function FeatureList({ items, columns = '3', numbered }: { items: { icon?: string | null; title: string; text?: string | null; id?: string | null }[]; columns?: string | null; numbered?: boolean | null }) {
  return (
    <div className={`ty-grid ty-grid--${columns === '2' ? '2' : '3'}`} data-reveal="group">
      {items.map((it, i) => (
        <div key={it.id ?? i} className="ty-feature">
          {numbered ? (
            <span className="ty-feature__num">{String(i + 1).padStart(2, '0')}</span>
          ) : it.icon ? (
            <span className="ty-feature__icon">
              <Icon name={it.icon} />
            </span>
          ) : null}
          <h3>{it.title}</h3>
          {it.text ? <p>{it.text}</p> : null}
        </div>
      ))}
    </div>
  )
}

function Features({ b }: { b: Of<'features'> }) {
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
      <FeatureList items={b.items ?? []} columns={b.columns} numbered={b.numbered} />
    </Section>
  )
}

function Split({ b, ctx }: { b: Of<'split'>; ctx: Ctx }) {
  const m = asMedia(b.media)
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <div className={`ty-split${b.reverse ? ' ty-split--reverse' : ''}`}>
        <div className="ty-stack" data-reveal>
          <Eyebrow>{b.eyebrow}</Eyebrow>
          {b.heading ? (
            <h2 className="heading-2">
              <Highlight text={b.heading} />
            </h2>
          ) : null}
          {b.lead ? <p className="lead ty-muted" style={{ margin: 0 }}>{b.lead}</p> : null}
          {b.body ? (
            <div className="ty-prose">
              <RichText data={b.body} />
            </div>
          ) : null}
          <div>
            <CtaLink link={b.cta} settings={ctx.settings} variant="link" />
          </div>
        </div>
        {m ? (
          <div className="ty-split__media" data-reveal>
            <img src={mediaUrl(m, 'card') ?? undefined} srcSet={srcSet(m)} sizes="(max-width: 860px) 100vw, 50vw" alt={m.alt ?? ''} loading="lazy" />
          </div>
        ) : null}
      </div>
    </Section>
  )
}

function MediaBlock({ b }: { b: Of<'mediaBlock'> }) {
  const m = asMedia(b.media)
  if (!m) return null
  const el = isVideo(m) ? (
    <video src={m.url ?? undefined} controls playsInline preload="metadata" />
  ) : (
    <img src={mediaUrl(m, 'hero') ?? undefined} srcSet={srcSet(m)} sizes="100vw" alt={m.alt ?? ''} loading="lazy" />
  )
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <figure className="ty-figure" data-reveal style={b.size === 'full' ? { marginInline: 'calc(clamp(20px, 5vw, 64px) * -1)' } : undefined}>
        {el}
        {b.caption ? <figcaption>{b.caption}</figcaption> : null}
      </figure>
    </Section>
  )
}

function CoverageMapBlock({ b }: { b: Of<'coverageMap'> }) {
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
      <CoverageMap />
    </Section>
  )
}

function Banner({ b, ctx }: { b: Of<'banner'>; ctx: Ctx }) {
  const m = asMedia(b.media)
  return (
    <section className="ty-section" style={{ paddingBlock: 'var(--space-8)' }}>
      <div className="ty-container">
        <div className={`ty-banner${b.tone === 'accent' ? ' ty-banner--accent' : b.tone === 'light' ? ' ty-banner--light' : ''}`} data-theme={b.tone === 'navy' ? 'dark' : undefined} data-reveal>
          {m ? <img className="ty-banner__bg" src={mediaUrl(m, 'hero') ?? undefined} alt="" /> : null}
          <Eyebrow>{b.eyebrow}</Eyebrow>
          {b.heading ? (
            <h2 className="heading-2">
              <Highlight text={b.heading} />
            </h2>
          ) : null}
          {b.lead ? <p className="lead">{b.lead}</p> : null}
          <CtaLink link={b.cta} settings={ctx.settings} />
        </div>
      </div>
    </section>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }
  return (
    <>
      <div className="ty-faq" data-reveal>
        {faqs.map((f, i) => (
          <details key={f.id} open={i === 0}>
            <summary>
              {f.question}
              <span className="ty-faq__icon" aria-hidden="true" />
            </summary>
            <div className="ty-faq__body">{f.answer}</div>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
    </>
  )
}

async function FaqBlock({ b }: { b: Of<'faq'> }) {
  const picked = (b.faqs ?? []).filter((f): f is Faq => typeof f === 'object' && f !== null)
  const faqs = picked.length ? picked : await getGeneralFaqs()
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <div className="ty-split" style={{ alignItems: 'start' }}>
        <SectionHead eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
        <FaqList faqs={faqs} />
      </div>
    </Section>
  )
}

function RichTextBlock({ b }: { b: Of<'richText'> }) {
  return (
    <Section theme={b.theme} anchor={b.anchor}>
      <div className={`ty-prose${b.width === 'wide' ? ' ty-prose--wide' : ''}`}>
        <RichText data={b.content} />
      </div>
    </Section>
  )
}

export function ContactPanel({ ctx, eyebrow, heading, lead, as = 'h2' }: { ctx: Ctx; eyebrow?: string | null; heading?: string | null; lead?: string | null; as?: 'h1' | 'h2' }) {
  const s = ctx.settings
  const facts = [
    s.address ? { icon: 'mapPin', label: 'Alamat', value: s.address, href: s.mapsUrl || undefined } : null,
    s.phone ? { icon: 'phone', label: 'Telepon', value: s.phone, href: `tel:${s.phone.replace(/[^0-9+]/g, '')}` } : null,
    s.email ? { icon: 'mail', label: 'Email', value: s.email, href: `mailto:${s.email}` } : null,
    s.hours ? { icon: 'clock', label: 'Jam layanan', value: s.hours } : null,
  ].filter(Boolean) as { icon: string; label: string; value: string; href?: string }[]
  const Tag = as
  return (
    <div className="ty-contact">
      <div>
        <div className="ty-heading" data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          {heading ? (
            <Tag className="heading-2">
              <Highlight text={heading} />
            </Tag>
          ) : null}
          {lead ? <p className="lead">{lead}</p> : null}
        </div>
        <div className="ty-contact__facts">
          {facts.map((f) => (
            <div key={f.label} className="ty-fact">
              <span className="ty-fact__icon">
                <Icon name={f.icon} />
              </span>
              <div>
                <strong>{f.label}</strong>
                {f.href ? (
                  <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ whiteSpace: 'pre-line' }}>
                    {f.value}
                  </a>
                ) : (
                  <span style={{ whiteSpace: 'pre-line' }}>{f.value}</span>
                )}
              </div>
            </div>
          ))}
          {s.whatsappNumber ? (
            <div>
              <CtaLink link={{ label: 'Chat WhatsApp', type: 'whatsapp' }} settings={s} variant="secondary" />
            </div>
          ) : null}
        </div>
      </div>
      <div className="ty-form-card" id="form" data-theme="light">
        <ContactForm
          services={ctx.services.map((x) => x.title)}
          submitLabel={ctx.shared.form?.submitLabel}
          successMessage={ctx.shared.form?.successMessage}
          consentText={ctx.shared.form?.consentText}
        />
      </div>
    </div>
  )
}

function ContactBlock({ b, ctx }: { b: Of<'contact'>; ctx: Ctx }) {
  return (
    <Section theme={b.theme} anchor={b.anchor} shift={false}>
      <ContactPanel ctx={ctx} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} />
    </Section>
  )
}

export function CtaSection({ b, ctx }: { b: Partial<Of<'cta'>>; ctx: Ctx }) {
  const src = b.useShared !== false ? ctx.shared.cta ?? {} : b
  return (
    <Section theme={b.theme ?? 'navy'} anchor={b.anchor} shift={false} className="ty-cta-section">
      {b.showForm ? (
        <ContactPanel ctx={ctx} eyebrow={src.eyebrow} heading={src.heading} lead={src.lead} />
      ) : (
        <div className="ty-cta ty-cta--center" data-reveal>
          <Eyebrow>{src.eyebrow}</Eyebrow>
          {src.heading ? (
            <h2 className="heading-2" style={{ maxWidth: '20ch' }}>
              <Highlight text={src.heading} />
            </h2>
          ) : null}
          {src.lead ? <p className="lead ty-muted" style={{ margin: 0, maxWidth: '52ch' }}>{src.lead}</p> : null}
          <CtaRow primary={src.primaryCta} secondary={src.secondaryCta} settings={ctx.settings} />
        </div>
      )}
    </Section>
  )
}

/* ---------------------------------------------------------------- */

export async function RenderBlocks({ blocks, ctx }: { blocks?: Block[] | null; ctx: Ctx }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((b, i) => {
        const key = b.id ?? `${b.blockType}-${i}`
        switch (b.blockType) {
          case 'servicesGrid': return <ServicesGrid key={key} b={b} ctx={ctx} />
          case 'bento': return <Bento key={key} b={b} />
          case 'statement': return <Statement key={key} b={b} />
          case 'stats': return <Stats key={key} b={b} />
          case 'logoStrip': return <LogoStrip key={key} b={b} />
          case 'process': return <Process key={key} b={b} ctx={ctx} />
          case 'features': return <Features key={key} b={b} />
          case 'split': return <Split key={key} b={b} ctx={ctx} />
          case 'mediaBlock': return <MediaBlock key={key} b={b} />
          case 'coverageMap': return <CoverageMapBlock key={key} b={b} />
          case 'banner': return <Banner key={key} b={b} ctx={ctx} />
          case 'faq': return <FaqBlock key={key} b={b} />
          case 'richText': return <RichTextBlock key={key} b={b} />
          case 'contact': return <ContactBlock key={key} b={b} ctx={ctx} />
          case 'cta': return <CtaSection key={key} b={b} ctx={ctx} />
          default: return null
        }
      })}
    </>
  )
}

export { getServices }
