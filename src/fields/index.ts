import type { Field, FieldHook, GroupField, SelectField, TextField } from 'payload'

/* ------------------------------------------------------------------ */
/* Slug                                                                */
/* ------------------------------------------------------------------ */

export const toSlug = (value: string): string =>
  value
    .toString()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/&/g, ' dan ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, data, originalDoc }) => {
    if (typeof value === 'string' && value.length > 0) return toSlug(value)
    const source = data?.[fallback] ?? originalDoc?.[fallback]
    return typeof source === 'string' ? toSlug(source) : value
  }

export const slugField = (fallback = 'title'): TextField => ({
  name: 'slug',
  label: 'Slug (alamat URL)',
  type: 'text',
  index: true,
  unique: true,
  admin: {
    position: 'sidebar',
    description: 'Dibuat otomatis dari judul. Contoh: "tentang-kami" menjadi /tentang-kami. Halaman beranda memakai slug "beranda".',
  },
  hooks: { beforeValidate: [formatSlug(fallback)] },
})

/* ------------------------------------------------------------------ */
/* Icons (Lucide names drawn by the frontend)                          */
/* ------------------------------------------------------------------ */

export const iconOptions = [
  { label: 'Globe (internet)', value: 'globe' },
  { label: 'Activity (pemantauan)', value: 'activity' },
  { label: 'Network (jaringan)', value: 'network' },
  { label: 'Package (pengadaan)', value: 'package' },
  { label: 'Code (software)', value: 'code' },
  { label: 'Scan (RFID)', value: 'scan' },
  { label: 'WiFi', value: 'wifi' },
  { label: 'Server', value: 'server' },
  { label: 'Building (perusahaan)', value: 'building' },
  { label: 'Shield (keamanan)', value: 'shield' },
  { label: 'Users (tim)', value: 'users' },
  { label: 'Handshake (kemitraan)', value: 'handshake' },
  { label: 'Check (kualitas)', value: 'check' },
  { label: 'Ticket (dukungan)', value: 'ticket' },
  { label: 'Sparkles (inovasi)', value: 'sparkles' },
  { label: 'Target (fokus)', value: 'target' },
]

export const iconField = (name = 'icon', label = 'Ikon'): SelectField => ({
  name,
  label,
  type: 'select',
  options: iconOptions,
})

/* ------------------------------------------------------------------ */
/* Link                                                                */
/* ------------------------------------------------------------------ */

export const linkField = (
  name: string,
  label: string,
  opts: { required?: boolean; description?: string } = {},
): GroupField => ({
  name,
  label,
  type: 'group',
  admin: { description: opts.description },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'label', label: 'Teks tombol / link', type: 'text', required: opts.required, admin: { width: '50%' } },
        {
          name: 'type',
          label: 'Tujuan',
          type: 'select',
          defaultValue: 'page',
          admin: { width: '50%' },
          options: [
            { label: 'Halaman', value: 'page' },
            { label: 'Layanan', value: 'service' },
            { label: 'Halaman Kontak', value: 'contact' },
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'URL bebas', value: 'url' },
          ],
        },
      ],
    },
    {
      name: 'page',
      label: 'Halaman',
      type: 'relationship',
      relationTo: 'pages',
      admin: { condition: (_, s) => s?.type === 'page' },
    },
    {
      name: 'service',
      label: 'Layanan',
      type: 'relationship',
      relationTo: 'services',
      admin: { condition: (_, s) => s?.type === 'service' },
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      admin: { condition: (_, s) => s?.type === 'url', description: 'Contoh: /tentang-kami#visi atau https://...' },
    },
    {
      name: 'message',
      label: 'Pesan awal WhatsApp',
      type: 'textarea',
      admin: {
        condition: (_, s) => s?.type === 'whatsapp',
        description: 'Kosongkan untuk memakai pesan default dari Pengaturan Situs. Nomor diambil dari Pengaturan Situs.',
      },
    },
    { name: 'newTab', label: 'Buka di tab baru', type: 'checkbox', admin: { condition: (_, s) => s?.type === 'url' } },
  ],
})

/* ------------------------------------------------------------------ */
/* Section heading + style (shared by blocks)                          */
/* ------------------------------------------------------------------ */

export const headingFields = (opts: { defaultEyebrow?: string } = {}): Field[] => [
  {
    name: 'eyebrow',
    label: 'Eyebrow (label kecil di atas judul)',
    type: 'text',
    defaultValue: opts.defaultEyebrow,
  },
  {
    name: 'heading',
    label: 'Judul',
    type: 'textarea',
    admin: {
      rows: 2,
      description: 'Apit kata kunci dengan bintang untuk memberi warna biru, contoh: Satu mitra untuk *seluruh kebutuhan IT* Anda',
    },
  },
  { name: 'lead', label: 'Paragraf pembuka', type: 'textarea', admin: { rows: 3 } },
]

export const styleFields = (defaultTheme: 'light' | 'sunken' | 'navy' = 'light'): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'theme',
        label: 'Latar section',
        type: 'select',
        defaultValue: defaultTheme,
        admin: { width: '50%' },
        options: [
          { label: 'Terang', value: 'light' },
          { label: 'Terang (abu)', value: 'sunken' },
          { label: 'Navy', value: 'navy' },
        ],
      },
      {
        name: 'anchor',
        label: 'ID anchor (opsional)',
        type: 'text',
        admin: { width: '50%', description: 'Untuk link langsung, contoh: visi → /tentang-kami#visi' },
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* SEO                                                                  */
/* ------------------------------------------------------------------ */

export const seoField: GroupField = {
  name: 'meta',
  label: 'SEO',
  type: 'group',
  admin: { description: 'Judul dan deskripsi untuk Google dan saat link dibagikan. Kosongkan untuk memakai judul halaman.' },
  fields: [
    { name: 'title', label: 'Judul SEO', type: 'text', maxLength: 70 },
    { name: 'description', label: 'Deskripsi SEO', type: 'textarea', maxLength: 170 },
    { name: 'image', label: 'Gambar saat dibagikan (1200×630)', type: 'upload', relationTo: 'media' },
    { name: 'noIndex', label: 'Sembunyikan dari Google', type: 'checkbox' },
  ],
}
