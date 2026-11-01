const prefix: Record<string, string> = { pages: '', services: '/layanan' }

/** Relative URL that enables Next.js draft mode and redirects to the document. */
export const previewPath = (collection: 'pages' | 'services', slug?: string | null): string => {
  const s = slug || ''
  const path = collection === 'pages' && (s === 'beranda' || s === '') ? '/' : `${prefix[collection]}/${s}`
  const params = new URLSearchParams({
    collection,
    slug: s,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })
  return `/next/preview?${params.toString()}`
}
