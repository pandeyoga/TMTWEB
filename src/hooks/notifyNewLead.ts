import type { CollectionAfterChangeHook } from 'payload'

const esc = (s: unknown) =>
  String(s ?? '-').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)

/** Email the sales inbox when a new lead arrives (only when LEAD_NOTIFY_EMAIL and SMTP are configured). */
export const notifyNewLead: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  const to = process.env.LEAD_NOTIFY_EMAIL
  if (operation !== 'create' || !to) return doc
  try {
    await req.payload.sendEmail({
      to,
      subject: `Lead baru: ${doc.name}${doc.company ? ` (${doc.company})` : ''}`,
      html: `<h2>Permintaan konsultasi baru</h2>
        <p><b>Nama:</b> ${esc(doc.name)}<br><b>Perusahaan:</b> ${esc(doc.company)}<br>
        <b>WhatsApp:</b> ${esc(doc.whatsapp)}<br><b>Email:</b> ${esc(doc.email)}<br>
        <b>Kebutuhan:</b> ${esc(doc.service)}<br><b>Halaman asal:</b> ${esc(doc.sourcePage)}</p>
        <p><b>Pesan:</b><br>${esc(doc.message)}</p>`,
    })
  } catch (err) {
    req.payload.logger.error({ err }, 'Gagal mengirim notifikasi lead')
  }
  return doc
}
