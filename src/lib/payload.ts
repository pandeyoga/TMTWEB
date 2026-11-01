import 'server-only'
import config from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import type { Faq, Page, Service } from '@/payload-types'

export const payloadClient = cache(async () => getPayload({ config }))

export const isDraft = cache(async () => (await draftMode()).isEnabled)

export const getGlobals = cache(async () => {
  const payload = await payloadClient()
  const [settings, header, footer, chat, announcement, shared] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', depth: 1 }),
    payload.findGlobal({ slug: 'header', depth: 1 }),
    payload.findGlobal({ slug: 'footer', depth: 1 }),
    payload.findGlobal({ slug: 'chat-widget', depth: 0 }),
    payload.findGlobal({ slug: 'announcement', depth: 1 }),
    payload.findGlobal({ slug: 'shared-sections', depth: 1 }),
  ])
  return { settings, header, footer, chat, announcement, shared }
})

export const getPage = cache(async (slug: string): Promise<Page | null> => {
  const payload = await payloadClient()
  const draft = await isDraft()
  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
    draft,
    overrideAccess: draft,
  })
  return res.docs[0] ?? null
})

export const getService = cache(async (slug: string): Promise<Service | null> => {
  const payload = await payloadClient()
  const draft = await isDraft()
  const res = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
    draft,
    overrideAccess: draft,
  })
  return res.docs[0] ?? null
})

export const getServices = cache(async (): Promise<Service[]> => {
  const payload = await payloadClient()
  const res = await payload.find({ collection: 'services', sort: 'order', depth: 0, limit: 50, where: { _status: { equals: 'published' } } })
  return res.docs
})

export const getLogos = cache(async (collection: 'clients' | 'partners') => {
  const payload = await payloadClient()
  const res = await payload.find({ collection, sort: 'order', depth: 1, limit: 100, where: { visible: { equals: true } } })
  return res.docs
})

export const getGeneralFaqs = cache(async (): Promise<Faq[]> => {
  const payload = await payloadClient()
  const res = await payload.find({ collection: 'faqs', sort: 'order', depth: 0, limit: 50, where: { general: { equals: true } } })
  return res.docs
})
