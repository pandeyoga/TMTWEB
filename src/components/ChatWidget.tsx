'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { waHref } from '@/lib/links'
import { track } from '@/lib/track'
import { Icon } from './Icon'
import { TriNode } from './TriNode'

type Option = {
  label: string
  description?: string | null
  action?: 'whatsapp-services' | 'whatsapp' | 'contact' | 'url' | null
  message?: string | null
  url?: string | null
  id?: string | null
}

export type ChatConfig = {
  buttonLabel?: string | null
  title?: string | null
  responseTime?: string | null
  greeting?: string | null
  days?: string[] | null
  openTime?: string | null
  closeTime?: string | null
  offlineMessage?: string | null
  options?: Option[] | null
}

const DEFAULT_OPTIONS: Option[] = [
  { label: 'Konsultasi layanan baru', description: 'Pilih layanan, lanjut chat WhatsApp', action: 'whatsapp-services', message: 'Halo Tim Triyasa, saya ingin konsultasi tentang {layanan}. (Dari halaman: {halaman})' },
  { label: 'Minta penawaran atau survei lokasi', description: 'Isi form singkat di halaman Kontak', action: 'contact' },
  { label: 'Dukungan teknis pelanggan', description: 'Laporkan kendala layanan', action: 'whatsapp', message: 'Halo Tim Triyasa, saya pelanggan dan butuh dukungan teknis. (Dari halaman: {halaman})' },
]

function isOpenNow(days: string[], open: string, close: string) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const mins = (Number(get('hour')) % 24) * 60 + Number(get('minute'))
  const toMin = (s: string) => {
    const [h, m] = s.split(':').map(Number)
    return (h || 0) * 60 + (m || 0)
  }
  return days.includes(String(wd)) && mins >= toMin(open) && mins < toMin(close)
}

export function ChatWidget({
  config,
  whatsappNumber,
  services,
}: {
  config: ChatConfig
  whatsappNumber?: string | null
  services: { title: string; slug: string }[]
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<'home' | 'services'>('home')
  const [pending, setPending] = useState<Option | null>(null)
  const [online, setOnline] = useState<boolean | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const options = config.options?.length ? config.options : DEFAULT_OPTIONS

  useEffect(() => {
    const check = () => setOnline(isOpenNow(config.days ?? ['1', '2', '3', '4', '5'], config.openTime ?? '08:00', config.closeTime ?? '17:00'))
    check()
    const t = window.setInterval(check, 60_000)
    return () => window.clearInterval(t)
  }, [config.days, config.openTime, config.closeTime])

  useEffect(() => {
    setOpen(false)
    setView('home')
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const pageName = () => {
    if (pathname === '/') return 'Beranda'
    const t = typeof document !== 'undefined' ? document.title.split('|')[0].trim() : ''
    return t || pathname
  }

  const openWhatsApp = (opt: Option, serviceName?: string) => {
    const msg = (opt.message || 'Halo Tim Triyasa, saya ingin konsultasi. (Dari halaman: {halaman})')
      .replaceAll('{layanan}', serviceName || 'layanan Triyasa')
      .replaceAll('{halaman}', pageName())
    track('chat_whatsapp', { option: opt.label, service: serviceName ?? '', page: pathname })
    window.open(waHref(whatsappNumber, msg), '_blank', 'noopener,noreferrer')
  }

  const onOption = (opt: Option) => {
    if (opt.action === 'whatsapp-services') {
      setPending(opt)
      setView('services')
    } else if (opt.action === 'whatsapp') {
      openWhatsApp(opt)
    }
  }

  return (
    <div className="ty-chat">
      {open ? (
        <div className="ty-chat__panel" ref={panelRef} role="dialog" aria-label={config.title ?? 'Chat'} data-lenis-prevent>
          <div className="ty-chat__head">
            <span className="ty-chat__avatar">
              <TriNode size={22} />
            </span>
            <div>
              <div className="ty-chat__title">{config.title || 'Tim Triyasa'}</div>
              <div className={`ty-chat__status${online === false ? ' is-off' : ''}`}>
                {online === false ? <i className="dot" /> : <i className="ty-ping" />}
                {online === false ? 'Di luar jam kerja' : config.responseTime || 'Online'}
              </div>
            </div>
            <button className="ty-chat__close" type="button" aria-label="Tutup chat" onClick={() => setOpen(false)}>
              <Icon name="x" size={18} />
            </button>
          </div>

          <div className="ty-chat__body">
            {view === 'home' ? (
              <>
                <p className="ty-chat__bubble">{config.greeting || 'Halo, ada yang bisa kami bantu?'}</p>
                {online === false && config.offlineMessage ? <p className="ty-chat__offline">{config.offlineMessage}</p> : null}
                <ul className="ty-chat__opts">
                  {options.map((opt, i) => (
                    <li key={opt.id ?? i}>
                      {opt.action === 'contact' || opt.action === 'url' ? (
                        <Link
                          className="ty-chat__opt"
                          href={opt.action === 'contact' ? '/kontak#form' : opt.url || '#'}
                          onClick={() => {
                            track('chat_contact', { option: opt.label, page: pathname })
                            setOpen(false)
                          }}
                        >
                          <strong>{opt.label}</strong>
                          {opt.description ? <small>{opt.description}</small> : null}
                          <Icon name="arrow" />
                        </Link>
                      ) : (
                        <button className="ty-chat__opt" type="button" onClick={() => onOption(opt)}>
                          <strong>{opt.label}</strong>
                          {opt.description ? <small>{opt.description}</small> : null}
                          <Icon name={opt.action === 'whatsapp-services' ? 'arrow' : 'chat'} />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <button className="ty-chat__back" type="button" onClick={() => setView('home')}>
                  <Icon name="chevronLeft" /> Kembali
                </button>
                <p className="ty-chat__bubble">Layanan apa yang ingin Anda konsultasikan?</p>
                <ul className="ty-chat__opts">
                  {[...services, { title: 'Lainnya', slug: 'lainnya' }].map((s) => (
                    <li key={s.slug}>
                      <button className="ty-chat__opt" type="button" onClick={() => pending && openWhatsApp(pending, s.slug === 'lainnya' ? undefined : s.title)}>
                        <strong>{s.title}</strong>
                        <Icon name="chat" />
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="ty-chat__foot">Chat akan dibuka di WhatsApp</div>
        </div>
      ) : null}

      <button
        className="ty-chat__toggle"
        type="button"
        aria-expanded={open}
        aria-label={config.buttonLabel || 'Butuh bantuan?'}
        onClick={() => {
          setOpen((v) => !v)
          setView('home')
          if (!open) track('chat_open', { page: pathname })
        }}
      >
        <span className="ty-wa__icon">
          <Icon name={open ? 'x' : 'chat'} />
        </span>
        <span className="ty-chat__label">{config.buttonLabel || 'Butuh bantuan?'}</span>
      </button>
    </div>
  )
}
