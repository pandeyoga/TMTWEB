import { notFound } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { FaqList, FeatureList, ProcessSteps, RenderBlocks, CtaSection } from '@/components/blocks'
import { Section, SectionHead } from '@/components/Section'
import type { Faq } from '@/payload-types'
import { getService } from '@/lib/payload'
import { docMetadata, getCtx } from '@/lib/render'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const s = await getService(slug)
  return docMetadata(s, `/layanan/${slug}`, s?.excerpt)
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const [service, ctx] = await Promise.all([getService(slug), getCtx()])
  if (!service) notFound()

  const hero = { ...service.hero, eyebrow: service.hero?.eyebrow || service.tagline, heading: service.hero?.heading || service.title, lead: service.hero?.lead || service.excerpt }
  const scope = service.scope
  const industries = service.industries
  const faqs = (service.faqs ?? []).filter((f): f is Faq => typeof f === 'object' && f !== null)
  const others = ctx.services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Hero
        hero={hero}
        settings={ctx.settings}
        title={service.title}
        breadcrumb={[{ href: '/', label: 'Beranda' }, { href: '/layanan', label: 'Layanan' }, { href: `/layanan/${slug}`, label: service.title }]}
      />
      {scope?.items?.length ? (
        <Section theme="sunken">
          <SectionHead eyebrow={scope.eyebrow} heading={scope.heading} lead={scope.lead} />
          <FeatureList items={scope.items} columns={scope.items.length === 4 || scope.items.length === 2 ? '2' : '3'} />
        </Section>
      ) : null}
      {industries?.items?.length ? (
        <Section theme="light">
          <SectionHead eyebrow={industries.eyebrow} heading={industries.heading} lead={industries.lead} />
          <FeatureList items={industries.items} columns={industries.items.length === 4 || industries.items.length === 2 ? '2' : '3'} />
        </Section>
      ) : null}
      <RenderBlocks blocks={service.layout} ctx={ctx} />
      {ctx.shared.process?.length ? (
        <Section theme="navy">
          <SectionHead eyebrow="Cara Kami Bekerja" heading="Dari konsultasi *sampai maintenance*" />
          <ProcessSteps steps={ctx.shared.process} />
        </Section>
      ) : null}
      {faqs.length ? (
        <Section theme="light">
          <div className="ty-split" style={{ alignItems: 'start' }}>
            <SectionHead eyebrow="Pertanyaan Umum" heading={`Seputar ${service.title}`} />
            <FaqList faqs={faqs} />
          </div>
        </Section>
      ) : null}
      {others.length ? (
        <Section theme="sunken">
          <SectionHead eyebrow="Layanan Lain" heading="Lengkapi kebutuhan IT Anda" />
          <div className="ty-grid ty-grid--3" data-reveal="group">
            {others.slice(0, 3).map((s) => (
              <a key={s.id} className="ty-card" href={`/layanan/${s.slug}`}>
                <span className="ty-card__tag">{s.tagline}</span>
                <h3 className="ty-card__title">{s.title}</h3>
                <p className="ty-card__text">{s.excerpt}</p>
              </a>
            ))}
          </div>
        </Section>
      ) : null}
      <CtaSection b={{ useShared: true, showForm: true, theme: 'navy' }} ctx={ctx} />
    </>
  )
}
