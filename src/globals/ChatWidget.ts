import type { GlobalConfig } from 'payload'
import { anyone, isContentManager } from '../access'
import { revalidateGlobal } from '../hooks/revalidate'

export const ChatWidget: GlobalConfig = {
  slug: 'chat-widget',
  label: 'Widget Chat',
  admin: {
    group: 'Pengaturan',
    description: 'Tombol "Butuh bantuan?" di kanan bawah. Nomor WhatsApp diambil dari Pengaturan Situs → Kontak.',
  },
  access: { read: anyone, update: isContentManager },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    { name: 'enabled', label: 'Aktifkan widget', type: 'checkbox', defaultValue: true },
    {
      type: 'row',
      fields: [
        { name: 'buttonLabel', label: 'Teks tombol', type: 'text', defaultValue: 'Butuh bantuan?', admin: { width: '50%' } },
        { name: 'title', label: 'Judul panel', type: 'text', defaultValue: 'Tim Triyasa', admin: { width: '50%' } },
      ],
    },
    { name: 'responseTime', label: 'Keterangan waktu balas', type: 'text', defaultValue: 'Biasanya membalas dalam 1 jam kerja' },
    { name: 'greeting', label: 'Sapaan', type: 'textarea', defaultValue: 'Halo, ada yang bisa kami bantu?' },
    {
      type: 'collapsible',
      label: 'Jam layanan',
      fields: [
        {
          name: 'days',
          label: 'Hari kerja',
          type: 'select',
          hasMany: true,
          defaultValue: ['1', '2', '3', '4', '5'],
          options: [
            { label: 'Senin', value: '1' },
            { label: 'Selasa', value: '2' },
            { label: 'Rabu', value: '3' },
            { label: 'Kamis', value: '4' },
            { label: 'Jumat', value: '5' },
            { label: 'Sabtu', value: '6' },
            { label: 'Minggu', value: '0' },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'openTime', label: 'Buka (WIB)', type: 'text', defaultValue: '08:00', admin: { width: '50%' } },
            { name: 'closeTime', label: 'Tutup (WIB)', type: 'text', defaultValue: '17:00', admin: { width: '50%' } },
          ],
        },
        {
          name: 'offlineMessage',
          label: 'Pesan di luar jam kerja',
          type: 'textarea',
          defaultValue: 'Kami sedang di luar jam kerja. Pesan Anda tetap kami balas pada jam kerja berikutnya.',
        },
      ],
    },
    {
      name: 'options',
      label: 'Pilihan di panel',
      type: 'array',
      maxRows: 5,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', label: 'Judul pilihan', type: 'text', required: true, admin: { width: '50%' } },
            {
              name: 'action',
              label: 'Aksi',
              type: 'select',
              defaultValue: 'whatsapp',
              admin: { width: '50%' },
              options: [
                { label: 'WhatsApp + pilih layanan dulu', value: 'whatsapp-services' },
                { label: 'Langsung WhatsApp', value: 'whatsapp' },
                { label: 'Ke halaman Kontak', value: 'contact' },
                { label: 'Ke URL', value: 'url' },
              ],
            },
          ],
        },
        { name: 'description', label: 'Keterangan', type: 'text' },
        {
          name: 'message',
          label: 'Template pesan WhatsApp',
          type: 'textarea',
          admin: {
            condition: (_, s) => s?.action === 'whatsapp' || s?.action === 'whatsapp-services',
            description: 'Gunakan {layanan} dan {halaman}. Contoh: Halo Tim Triyasa, saya ingin konsultasi tentang {layanan}. (Dari halaman: {halaman})',
          },
        },
        { name: 'url', label: 'URL', type: 'text', admin: { condition: (_, s) => s?.action === 'url' } },
      ],
    },
  ],
}
