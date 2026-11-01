import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { plain } from '@/components/Highlight'
import { RenderBlocks, type Ctx } from '@/components/blocks'
import type { Page, Service } from '@/payload-types'
import { absoluteUrl, mediaUrl } from './media'
import { getGlobals, getPage, getServices } from './payload'

export async function getCtx(): Promise<Ctx> {
  const [{ settings, shared }, services] = await Promise.all([getGlobals(), getServices()])
  return { settings, shared, services }
}

export async function renderPage(slug: string) {
  const [page, ctx] = await Promise.all([getPage(slug), getCtx()])
  if (!page) notFound()
  const crumbs = slug === 'beranda' ? undefined : [{ href: '/', label: 'Beranda' }, { href: `/${slug}`, label: page.title }]
  return (
    <>
      <Hero hero={page.hero} settings={ctx.settings} title={page.title} breadcrumb={page.hero?.type === 'network' ? undefined : crumbs} />
      <RenderBlocks blocks={page.layout} ctx={ctx} />
    </>
  )
}

export async function docMetadata(doc: Page | Service | null, path: string, fallbackDescription?: string | null): Promise<Metadata> {
  if (!doc) return {}
  const { settings } = await getGlobals()
  const base = settings.siteUrl || process.env.SITE_URL || ''
  const title = doc.meta?.title || (path === '/' ? undefined : doc.title)
  const description = doc.meta?.description || fallbackDescription || plain(doc.hero?.lead) || settings.defaultDescription || undefined
  const img = mediaUrl(doc.meta?.image, 'og') || mediaUrl(settings.ogImage, 'og')
  const home = `${settings.siteName}${settings.tagline ? ` — ${settings.tagline}` : ''}`
  return {
    title: path === '/' ? { absolute: doc.meta?.title || home } : title!,
    description,
    alternates: { canonical: path },
    robots: doc.meta?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: title ?? home,
      description,
      url: path,
      images: img ? [{ url: absoluteUrl(img, base)!, width: 1200, height: 630 }] : undefined,
    },
  }
}
