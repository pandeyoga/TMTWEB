import type { MetadataRoute } from 'next'
import { getGlobals, payloadClient } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await payloadClient()
  const { settings } = await getGlobals()
  const base = (settings.siteUrl || process.env.SITE_URL || '').replace(/\/$/, '')
  const [pages, services] = await Promise.all([
    payload.find({ collection: 'pages', where: { _status: { equals: 'published' } }, limit: 200, depth: 0 }),
    payload.find({ collection: 'services', where: { _status: { equals: 'published' } }, limit: 200, depth: 0 }),
  ])
  return [
    ...pages.docs.filter((p) => !p.meta?.noIndex).map((p) => ({ url: `${base}${p.slug === 'beranda' ? '/' : `/${p.slug}`}`, lastModified: p.updatedAt })),
    ...services.docs.filter((s) => !s.meta?.noIndex).map((s) => ({ url: `${base}/layanan/${s.slug}`, lastModified: s.updatedAt })),
  ]
}
