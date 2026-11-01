import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'
import type { ReactNode } from 'react'
import '@/styles/tokens.css'
import '@/styles/components.css'
import '@/styles/site.css'
import { Announcement } from '@/components/Announcement'
import { ChatWidget, type ChatConfig } from '@/components/ChatWidget'
import { SiteFooter } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import { Motion } from '@/components/Motion'
import { Navbar, type NavItem } from '@/components/Navbar'
import { LivePreview } from '@/components/LivePreview'
import { resolveLink } from '@/lib/links'
import { absoluteUrl, mediaUrl } from '@/lib/media'
import { getGlobals, getServices } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await getGlobals()
  const base = settings.siteUrl || process.env.SITE_URL || 'http://localhost:3000'
  return {
    metadataBase: new URL(base),
    title: { default: `${settings.siteName} — ${settings.tagline ?? ''}`, template: `%s | ${settings.siteName}` },
    description: settings.defaultDescription ?? undefined,
    openGraph: {
      siteName: settings.siteName,
      locale: 'id_ID',
      type: 'website',
      images: mediaUrl(settings.ogImage, 'og') ? [{ url: absoluteUrl(mediaUrl(settings.ogImage, 'og'), base)!, width: 1200, height: 630 }] : undefined,
    },
  }
}

export const viewport: Viewport = { themeColor: '#0e3060', width: 'device-width', initialScale: 1 }

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  const [{ settings, header, footer, chat, announcement }, services, draft] = await Promise.all([getGlobals(), getServices(), draftMode()])

  const items: NavItem[] = []
  for (const it of header.items ?? []) {
    const r = resolveLink(it.link, settings)
    if (r) items.push({ href: r.href, label: r.label, external: r.external, showServices: Boolean(it.showServices) })
  }
  const cta = resolveLink(header.cta, settings)
  const ann = announcement.enabled && announcement.text ? announcement : null
  const annLink = ann ? resolveLink(ann.link, settings) : null
  const base = settings.siteUrl || process.env.SITE_URL || ''

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings.siteName,
    url: base || undefined,
    logo: absoluteUrl(mediaUrl(settings.logo), base),
    email: settings.email || undefined,
    telephone: settings.phone || undefined,
    address: settings.address ? { '@type': 'PostalAddress', streetAddress: settings.address, addressCountry: 'ID' } : undefined,
    sameAs: (settings.socials ?? []).map((s) => s.url).filter(Boolean),
  }

  return (
    <html lang="id">
      <head>
        <link rel="preload" href="/fonts/PlusJakartaSans-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/JetBrainsMono-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <a className="ty-skip" href="#konten">Lewati ke konten</a>
        {ann ? <Announcement id={String(announcement.updatedAt ?? '')} text={ann.text!} href={annLink?.href} label={annLink?.label} tone={ann.tone} /> : null}
        <Navbar
          logo={<Logo logo={settings.logo} name={settings.siteName} height={settings.logoHeight ?? 40} />}
          items={items}
          services={services.map((s) => ({ title: s.title, slug: s.slug!, tagline: s.tagline, icon: s.icon }))}
          cta={cta ? { href: cta.href, label: cta.label, external: cta.external } : null}
        />
        <main id="konten">{children}</main>
        <SiteFooter footer={footer} settings={settings} services={services} />
        {chat.enabled ? (
          <ChatWidget config={chat as ChatConfig} whatsappNumber={settings.whatsappNumber} services={services.map((s) => ({ title: s.title, slug: s.slug! }))} />
        ) : null}
        <Motion />
        {draft.isEnabled ? <LivePreview /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  )
}
