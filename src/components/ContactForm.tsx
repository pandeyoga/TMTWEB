'use client'

import Link from 'next/link'
import { useActionState, useEffect, useRef, useState } from 'react'
import { submitLead, type LeadState } from '@/app/(frontend)/actions'
import { track } from '@/lib/track'
import { Arrow, Icon } from './Icon'

export function ContactForm({
  services,
  submitLabel,
  successMessage,
  consentText,
}: {
  services: string[]
  submitLabel?: string | null
  successMessage?: string | null
  consentText?: string | null
}) {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, { ok: false })
  const [started, setStarted] = useState(0)
  const [preset, setPreset] = useState('')
  const [source, setSource] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setStarted(Date.now())
    setSource(window.location.pathname)
    const q = new URLSearchParams(window.location.search).get('layanan')
    if (q) {
      const match = services.find((s) => s.toLowerCase().includes(q.toLowerCase().replace(/-/g, ' ')))
      if (match) setPreset(match)
    }
  }, [services])

  useEffect(() => {
    if (state.ok) track('generate_lead', { form: 'konsultasi', page: source })
    if (state.errors) {
      const first = Object.keys(state.errors)[0]
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
    }
  }, [state, source])

  if (state.ok) {
    return (
      <p className="ty-form__done" role="status">
        <Icon name="check" />
        <span>{successMessage || 'Terima kasih, tim kami akan segera menghubungi Anda.'}</span>
      </p>
    )
  }

  const err = (k: string) =>
    state.errors?.[k] ? (
      <p className="ty-field__error" id={`f-${k}-err`}>
        <Icon name="alert" size={16} />
        <span>{state.errors[k]}</span>
      </p>
    ) : null
  const inv = (k: string) => (state.errors?.[k] ? { 'aria-invalid': true as const, 'aria-describedby': `f-${k}-err` } : {})

  return (
    <form ref={formRef} className="ty-form" action={action} noValidate>
      <div className="ty-hp" aria-hidden="true">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="started" value={started} />
      <input type="hidden" name="sourcePage" value={source} />
      <div className="ty-form__row">
        <div className="ty-field">
          <label htmlFor="f-name">Nama</label>
          <input className="ty-input" id="f-name" name="name" autoComplete="name" required placeholder="Nama lengkap" {...inv('name')} />
          {err('name')}
        </div>
        <div className="ty-field">
          <label htmlFor="f-company">Perusahaan <span>(opsional)</span></label>
          <input className="ty-input" id="f-company" name="company" autoComplete="organization" placeholder="Nama perusahaan" />
        </div>
      </div>
      <div className="ty-form__row">
        <div className="ty-field">
          <label htmlFor="f-whatsapp">Nomor WhatsApp</label>
          <input className="ty-input" id="f-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required placeholder="08xx-xxxx-xxxx" {...inv('whatsapp')} />
          {err('whatsapp')}
        </div>
        <div className="ty-field">
          <label htmlFor="f-email">Email <span>(opsional)</span></label>
          <input className="ty-input" id="f-email" name="email" type="email" autoComplete="email" placeholder="nama@perusahaan.co.id" {...inv('email')} />
          {err('email')}
        </div>
      </div>
      <div className="ty-field">
        <label htmlFor="f-service">Kebutuhan</label>
        <select className="ty-input" id="f-service" name="service" required key={preset} defaultValue={preset} {...inv('service')}>
          <option value="">Pilih layanan</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
          <option>Lainnya</option>
        </select>
        {err('service')}
      </div>
      <div className="ty-field">
        <label htmlFor="f-message">Pesan <span>(opsional)</span></label>
        <textarea className="ty-input" id="f-message" name="message" placeholder="Contoh: butuh WiFi untuk 3 gudang dan koneksi ke server pusat" />
      </div>
      <label className="ty-check">
        <input type="checkbox" name="consent" {...inv('consent')} />
        <span>
          {consentText || 'Saya setuju data ini dipakai untuk menghubungi saya.'} <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
        </span>
      </label>
      {err('consent')}
      {state.message ? <p className="ty-form__error" role="alert">{state.message}</p> : null}
      <div>
        <button className="ty-btn" type="submit" disabled={pending}>
          {pending ? 'Mengirim…' : submitLabel || 'Kirim Permintaan'} <Arrow />
        </button>
      </div>
    </form>
  )
}
