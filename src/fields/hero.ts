import type { GroupField } from 'payload'
import { linkField } from './index'

export const heroField: GroupField = {
  name: 'hero',
  label: 'Banner atas (Hero)',
  type: 'group',
  fields: [
    {
      name: 'type',
      label: 'Jenis hero',
      type: 'select',
      defaultValue: 'simple',
      options: [
        { label: 'Peta jaringan animasi (untuk Beranda)', value: 'network' },
        { label: 'Teks + foto/video', value: 'image' },
        { label: 'Teks + kartu status', value: 'status' },
        { label: 'Teks + denah jangkauan (RFID/WiFi)', value: 'coverage' },
        { label: 'Teks saja', value: 'simple' },
        { label: 'Tanpa hero', value: 'none' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Teks hero',
      admin: { condition: (_, s) => s?.type !== 'none' },
      fields: [
        { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
        {
          name: 'heading',
          label: 'Judul besar',
          type: 'textarea',
          admin: { rows: 2, description: 'Apit 2–4 kata kunci dengan bintang agar berwarna biru: Infrastruktur IT yang *siap tumbuh* bersama Anda' },
        },
        { name: 'lead', label: 'Kalimat pendukung', type: 'textarea', admin: { rows: 2 } },
        linkField('primaryCta', 'Tombol utama (merah)'),
        linkField('secondaryCta', 'Tombol kedua (garis)'),
      ],
    },
    {
      name: 'media',
      label: 'Foto atau video hero',
      type: 'upload',
      relationTo: 'media',
      admin: { condition: (_, s) => s?.type === 'image', description: 'Foto proyek asli, rasio 4:3 atau 16:10. Video MP4 diputar tanpa suara.' },
    },
    {
      name: 'statusCards',
      label: 'Kartu status melayang',
      type: 'array',
      maxRows: 3,
      admin: {
        condition: (_, s) => s?.type === 'network' || s?.type === 'status',
        description: 'Contoh tampilan layanan yang berjalan (bukan klaim kinerja).',
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'icon',
              label: 'Ikon',
              type: 'select',
              defaultValue: 'wifi',
              admin: { width: '25%' },
              options: [
                { label: 'WiFi', value: 'wifi' },
                { label: 'Internet', value: 'globe' },
                { label: 'Server', value: 'server' },
                { label: 'Tiket', value: 'ticket' },
                { label: 'RFID', value: 'scan' },
                { label: 'Jaringan', value: 'network' },
                { label: 'Pemantauan', value: 'activity' },
              ],
            },
            { name: 'title', label: 'Judul', type: 'text', required: true, admin: { width: '35%' } },
            { name: 'meta', label: 'Detail teknis', type: 'text', admin: { width: '40%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'status', label: 'Status', type: 'text', defaultValue: 'Online', admin: { width: '50%' } },
            {
              name: 'tone',
              label: 'Warna status',
              type: 'select',
              defaultValue: 'ok',
              admin: { width: '50%' },
              options: [
                { label: 'Hijau (online/aktif/selesai)', value: 'ok' },
                { label: 'Biru (siaga/info)', value: 'info' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
