'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from './Icon'

export type NavItem = { href: string; label: string; external?: boolean; showServices?: boolean }
export type NavService = { title: string; slug: string; tagline?: string | null; icon?: string | null }

export function Navbar({
  logo,
  items,
  services,
  cta,
}: {
  logo: ReactNode
  items: NavItem[]
  services: NavService[]
  cta?: { href: string; label: string; external?: boolean } | null
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const dropRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDrop(false)
  }, [pathname])

  useEffect(() => {
    if (!open && !drop) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setDrop(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (drop && dropRef.current && !dropRef.current.contains(e.target as Node)) setDrop(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
      document.body.style.overflow = ''
    }
  }, [open, drop])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="ty-header">
      <nav className={`ty-nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Navigasi utama">
        <Link className="ty-nav__logo" href="/" aria-label="Beranda">
          {logo}
        </Link>
        <ul className="ty-nav__links">
          {items.map((item) =>
            item.showServices && services.length ? (
              <li key={item.label} className="ty-nav__item" ref={dropRef}>
                <button type="button" aria-expanded={drop} aria-haspopup="true" onClick={() => setDrop((v) => !v)}>
                  {item.label}
                  <Icon name="chevronDown" />
                </button>
                {drop ? (
                  <div className="ty-dropdown" role="menu">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/layanan/${s.slug}`} role="menuitem">
                        <span className="ty-dropdown__icon">
                          <Icon name={s.icon} />
                        </span>
                        <strong>{s.title}</strong>
                        {s.tagline ? <small>{s.tagline}</small> : null}
                      </Link>
                    ))}
                    <Link className="ty-dropdown__all" href={item.href} role="menuitem">
                      Lihat semua layanan <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                ) : null}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        {cta ? (
          <Link className="ty-btn ty-btn--sm ty-nav__cta" href={cta.href} target={cta.external ? '_blank' : undefined} rel={cta.external ? 'noopener noreferrer' : undefined}>
            {cta.label}
          </Link>
        ) : null}
        <button className="ty-nav__menu" type="button" aria-label="Buka menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Icon name="menu" size={20} />
        </button>
      </nav>

      {open ? (
        <div className="ty-mobile" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="ty-mobile__top">
            <Link className="ty-nav__logo" href="/" onClick={() => setOpen(false)}>
              {logo}
            </Link>
            <button className="ty-nav__menu" style={{ display: 'grid' }} type="button" aria-label="Tutup menu" onClick={() => setOpen(false)} autoFocus>
              <Icon name="x" size={20} />
            </button>
          </div>
          <nav aria-label="Menu ponsel">
            {items.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.showServices
                  ? services.map((s) => (
                      <Link key={s.slug} className="sub" href={`/layanan/${s.slug}`} onClick={() => setOpen(false)}>
                        {s.title}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
          </nav>
          {cta ? (
            <Link className="ty-btn" href={cta.href} onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
