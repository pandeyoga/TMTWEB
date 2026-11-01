'use server'

import config from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

export type LeadState = { ok: boolean; errors?: Record<string, string>; message?: string }

// Basic in-memory rate limit: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>()
const limited = (ip: string) => {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000)
  list.push(now)
  hits.set(ip, list)
  return list.length > 5
}

const str = (v: FormDataEntryValue | null, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Honeypot and minimum fill time stop simple bots.
  if (str(form.get('website'))) return { ok: true }
  const started = Number(form.get('started') || 0)
  if (started && Date.now() - started < 2500) return { ok: false, message: 'Mohon tunggu sebentar lalu kirim lagi.' }

  const data = {
    name: str(form.get('name'), 120),
    company: str(form.get('company'), 160),
    whatsapp: str(form.get('whatsapp'), 30),
    email: str(form.get('email'), 160),
    service: str(form.get('service'), 120),
    message: str(form.get('message'), 3000),
    sourcePage: str(form.get('sourcePage'), 300),
    consent: form.get('consent') === 'on',
  }

  const errors: Record<string, string> = {}
  if (data.name.length < 2) errors.name = 'Isi nama Anda.'
  if (!/^[0-9+\-\s()]{9,20}$/.test(data.whatsapp)) errors.whatsapp = 'Isi nomor WhatsApp yang valid, contoh 0812-3456-7890.'
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Format email tidak valid.'
  if (!data.service) errors.service = 'Pilih layanan yang dibutuhkan.'
  if (!data.consent) errors.consent = 'Centang persetujuan agar kami bisa menghubungi Anda.'
  if (Object.keys(errors).length) return { ok: false, errors }

  const h = await headers()
  const ip = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || h.get('x-real-ip') || 'local'
  if (limited(ip)) return { ok: false, message: 'Terlalu banyak percobaan. Coba lagi dalam beberapa menit atau hubungi kami lewat WhatsApp.' }

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'leads',
      overrideAccess: true,
      data: { ...data, email: data.email || undefined, status: 'baru' },
    })
    return { ok: true }
  } catch (err) {
    console.error('submitLead failed', err)
    return { ok: false, message: 'Maaf, permintaan belum terkirim. Silakan coba lagi atau hubungi kami lewat WhatsApp.' }
  }
}
