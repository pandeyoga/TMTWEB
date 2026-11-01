import Link from 'next/link'
import type { Footer as FooterT, Service, SiteSetting } from '@/payload-types'
import { resolveLink, serviceHref } from '@/lib/links'
import { Logo } from './Logo'

export function SiteFooter({ footer, settings, services }: { footer: FooterT; settings: SiteSetting; services: Service[] }) {
  const year = new Date().getFullYear()
  return (
    <footer className="ty-footer" data-theme="dark">
      <div className="ty-container">
        <div className="ty-footer__grid">
          <div>
            <Logo logo={settings.logoOnDark || settings.logo} name={settings.siteName} height={44} onDark={!settings.logoOnDark && Boolean(settings.logo)} />
            {footer.about ? <p className="ty-muted" style={{ margin: '18px 0 0', fontSize: 14, lineHeight: '22px', maxWidth: '34ch' }}>{footer.about}</p> : null}
          </div>
          {(footer.columns ?? []).map((col, i) => (
            <div key={col.id ?? i}>
              <h4>{col.title}</h4>
              <ul>
                {col.autoServices
                  ? services.map((s) => (
                      <li key={s.id}>
                        <Link href={serviceHref(s.slug)}>{s.title}</Link>
                      </li>
                    ))
                  : (col.links ?? []).map((l, j) => {
                      const r = resolveLink(l.link, settings)
                      return r ? (
                        <li key={l.id ?? j}>
                          <Link href={r.href} target={r.external ? '_blank' : undefined} rel={r.external ? 'noopener noreferrer' : undefined}>
                            {r.label}
                          </Link>
                        </li>
                      ) : null
                    })}
              </ul>
            </div>
          ))}
          <div>
            <h4>Kontak</h4>
            <ul>
              {settings.address ? <li><address style={{ whiteSpace: 'pre-line' }}>{settings.address}</address></li> : null}
              {settings.phone ? <li><a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}>{settings.phone}</a></li> : null}
              {settings.email ? <li><a href={`mailto:${settings.email}`}>{settings.email}</a></li> : null}
              {(settings.socials ?? []).map((s, i) =>
                s.url ? (
                  <li key={s.id ?? i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ textTransform: 'capitalize' }}>
                      {s.platform}
                    </a>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </div>
        <div className="ty-footer__base">
          <span>© {year} {settings.siteName}</span>
          <span className="ty-mono" style={{ letterSpacing: '.06em', textTransform: 'uppercase' }}>{footer.bottomNote}</span>
        </div>
      </div>
    </footer>
  )
}
