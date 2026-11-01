import type { Page, Service, SiteSetting } from '@/payload-types'

export type LinkValue = {
  label?: string | null
  type?: 'page' | 'service' | 'contact' | 'whatsapp' | 'url' | null
  page?: (number | null) | Page
  service?: (number | null) | Service
  url?: string | null
  message?: string | null
  newTab?: boolean | null
} | null | undefined

export const pageHref = (slug?: string | null) => (!slug || slug === 'beranda' ? '/' : `/${slug}`)
export const serviceHref = (slug?: string | null) => `/layanan/${slug ?? ''}`

export const waHref = (number?: string | null, message?: string | null) => {
  const n = (number ?? '').replace(/[^0-9]/g, '')
  const q = message ? `?text=${encodeURIComponent(message)}` : ''
  return n ? `https://wa.me/${n}${q}` : `https://wa.me/${q}`
}

export const resolveLink = (link: LinkValue, settings?: Pick<SiteSetting, 'whatsappNumber' | 'whatsappMessage'> | null) => {
  if (!link || !link.label) return null
  let href = '#'
  let external = false
  switch (link.type) {
    case 'page':
      href = typeof link.page === 'object' && link.page ? pageHref(link.page.slug) : '/'
      break
    case 'service':
      href = typeof link.service === 'object' && link.service ? serviceHref(link.service.slug) : '/layanan'
      break
    case 'contact':
      href = '/kontak'
      break
    case 'whatsapp':
      href = waHref(settings?.whatsappNumber, link.message || settings?.whatsappMessage)
      external = true
      break
    case 'url':
      href = link.url || '#'
      external = Boolean(link.newTab) || /^https?:\/\//.test(href)
      break
  }
  return { href, label: link.label, external, isWhatsApp: link.type === 'whatsapp' }
}
