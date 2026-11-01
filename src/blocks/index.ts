import type { Block } from 'payload'
import { headingFields, iconField, linkField, styleFields } from '../fields'

export const ServicesGridBlock: Block = {
  slug: 'servicesGrid',
  labels: { singular: 'Grid Layanan', plural: 'Grid Layanan' },
  fields: [
    ...headingFields({ defaultEyebrow: 'Layanan Kami' }),
    {
      name: 'services',
      label: 'Layanan yang ditampilkan',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: { description: 'Kosongkan untuk menampilkan semua layanan sesuai urutan.' },
    },
    ...styleFields('sunken'),
  ],
}

export const BentoBlock: Block = {
  slug: 'bento',
  labels: { singular: 'Bento (panel 2×2)', plural: 'Bento' },
  fields: [
    ...headingFields({ defaultEyebrow: 'Solusi' }),
    {
      name: 'items',
      label: 'Panel',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: 'tag', label: 'Label kecil', type: 'text' },
        { name: 'title', label: 'Judul', type: 'text', required: true },
        { name: 'text', label: 'Teks', type: 'textarea' },
        {
          type: 'row',
          fields: [
            {
              name: 'variant',
              label: 'Warna panel',
              type: 'select',
              defaultValue: 'default',
              admin: { width: '50%' },
              options: [
                { label: 'Putih', value: 'default' },
                { label: 'Biru (accent)', value: 'accent' },
                { label: 'Navy', value: 'navy' },
              ],
            },
            {
              name: 'art',
              label: 'Ilustrasi',
              type: 'select',
              defaultValue: 'none',
              admin: { width: '50%' },
              options: [
                { label: 'Tanpa ilustrasi', value: 'none' },
                { label: 'Perusahaan (sistem terhubung)', value: 'corporate' },
                { label: 'Multi-cabang (tiga lokasi)', value: 'branch' },
                { label: 'Infrastruktur (rack)', value: 'infra' },
                { label: 'Managed (daftar status)', value: 'managed' },
              ],
            },
          ],
        },
      ],
    },
    ...styleFields('navy'),
  ],
}

export const StatementBlock: Block = {
  slug: 'statement',
  labels: { singular: 'Kalimat besar (statement)', plural: 'Statement' },
  fields: [
    { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
    {
      name: 'text',
      label: 'Kalimat',
      type: 'textarea',
      required: true,
      admin: { description: 'Satu atau dua kalimat. Kata-kata muncul bertahap saat pengunjung scroll.' },
    },
    ...styleFields('light'),
  ],
}

export const StatsBlock: Block = {
  slug: 'stats',
  labels: { singular: 'Angka / statistik', plural: 'Statistik' },
  fields: [
    ...headingFields(),
    {
      name: 'items',
      label: 'Angka',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      admin: { description: 'Hanya angka nyata yang bisa dibuktikan.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'value', label: 'Angka', type: 'number', required: true, admin: { width: '30%' } },
            { name: 'suffix', label: 'Satuan', type: 'text', admin: { width: '20%', description: 'hari, +, %' } },
            { name: 'label', label: 'Keterangan', type: 'text', required: true, admin: { width: '50%' } },
          ],
        },
      ],
    },
    ...styleFields('light'),
  ],
}

export const LogoStripBlock: Block = {
  slug: 'logoStrip',
  labels: { singular: 'Strip logo klien/mitra', plural: 'Strip logo' },
  fields: [
    {
      name: 'source',
      label: 'Sumber logo',
      type: 'select',
      defaultValue: 'clients',
      options: [
        { label: 'Klien', value: 'clients' },
        { label: 'Mitra', value: 'partners' },
      ],
    },
    {
      name: 'display',
      label: 'Tampilan',
      type: 'select',
      defaultValue: 'marquee',
      options: [
        { label: 'Berjalan (marquee)', value: 'marquee' },
        { label: 'Grid', value: 'grid' },
      ],
    },
    ...headingFields(),
    ...styleFields('light'),
  ],
}

export const ProcessBlock: Block = {
  slug: 'process',
  labels: { singular: 'Alur kerja', plural: 'Alur kerja' },
  fields: [
    ...headingFields({ defaultEyebrow: 'Cara Kami Bekerja' }),
    {
      name: 'useShared',
      label: 'Pakai langkah standar (dari Bagian Bersama)',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'steps',
      label: 'Langkah',
      type: 'array',
      maxRows: 6,
      admin: { condition: (_, s) => !s?.useShared },
      fields: [
        { name: 'title', label: 'Judul', type: 'text', required: true },
        { name: 'text', label: 'Keterangan', type: 'textarea' },
      ],
    },
    ...styleFields('navy'),
  ],
}

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Daftar poin (fitur/nilai/alasan)', plural: 'Daftar poin' },
  fields: [
    ...headingFields(),
    {
      name: 'columns',
      label: 'Kolom',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 kolom', value: '2' },
        { label: '3 kolom', value: '3' },
      ],
    },
    {
      name: 'numbered',
      label: 'Beri nomor (hanya jika urutan penting)',
      type: 'checkbox',
    },
    {
      name: 'items',
      label: 'Poin',
      type: 'array',
      minRows: 1,
      fields: [
        iconField(),
        { name: 'title', label: 'Judul', type: 'text', required: true },
        { name: 'text', label: 'Teks', type: 'textarea' },
      ],
    },
    ...styleFields('light'),
  ],
}

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQ' },
  fields: [
    ...headingFields({ defaultEyebrow: 'Pertanyaan Umum' }),
    {
      name: 'faqs',
      label: 'Pertanyaan',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
      admin: { description: 'Kosongkan untuk menampilkan semua FAQ umum.' },
    },
    ...styleFields('light'),
  ],
}

export const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'Ajakan (CTA)', plural: 'CTA' },
  fields: [
    {
      name: 'useShared',
      label: 'Pakai CTA standar (dari Bagian Bersama)',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      type: 'collapsible',
      label: 'Isi CTA khusus',
      admin: { condition: (_, s) => !s?.useShared },
      fields: [...headingFields(), linkField('primaryCta', 'Tombol utama'), linkField('secondaryCta', 'Tombol kedua')],
    },
    { name: 'showForm', label: 'Tampilkan form konsultasi', type: 'checkbox', defaultValue: true },
    ...styleFields('navy'),
  ],
}

export const RichTextBlock: Block = {
  slug: 'richText',
  labels: { singular: 'Teks bebas', plural: 'Teks bebas' },
  fields: [
    { name: 'content', label: 'Isi', type: 'richText', required: true },
    {
      name: 'width',
      label: 'Lebar',
      type: 'select',
      defaultValue: 'narrow',
      options: [
        { label: 'Sempit (artikel/kebijakan)', value: 'narrow' },
        { label: 'Lebar', value: 'wide' },
      ],
    },
    ...styleFields('light'),
  ],
}

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  labels: { singular: 'Foto / video', plural: 'Foto / video' },
  fields: [
    { name: 'media', label: 'File', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', label: 'Keterangan', type: 'text' },
    {
      name: 'size',
      label: 'Ukuran',
      type: 'select',
      defaultValue: 'contained',
      options: [
        { label: 'Dalam container', value: 'contained' },
        { label: 'Penuh selebar layar', value: 'full' },
      ],
    },
    ...styleFields('light'),
  ],
}

export const SplitBlock: Block = {
  slug: 'split',
  labels: { singular: 'Teks + gambar', plural: 'Teks + gambar' },
  fields: [
    ...headingFields(),
    { name: 'body', label: 'Isi', type: 'richText' },
    linkField('cta', 'Link / tombol'),
    { name: 'media', label: 'Gambar', type: 'upload', relationTo: 'media' },
    { name: 'reverse', label: 'Gambar di kiri', type: 'checkbox' },
    ...styleFields('light'),
  ],
}

export const CoverageMapBlock: Block = {
  slug: 'coverageMap',
  labels: { singular: 'Denah jangkauan WiFi/RFID', plural: 'Denah jangkauan' },
  fields: [...headingFields({ defaultEyebrow: 'RFID Solutions' }), ...styleFields('sunken')],
}

export const BannerBlock: Block = {
  slug: 'banner',
  labels: { singular: 'Banner promo', plural: 'Banner promo' },
  fields: [
    ...headingFields(),
    { name: 'media', label: 'Gambar latar (opsional)', type: 'upload', relationTo: 'media' },
    linkField('cta', 'Tombol'),
    {
      name: 'tone',
      label: 'Warna',
      type: 'select',
      defaultValue: 'navy',
      options: [
        { label: 'Navy', value: 'navy' },
        { label: 'Biru', value: 'accent' },
        { label: 'Terang', value: 'light' },
      ],
    },
  ],
}

export const ContactBlock: Block = {
  slug: 'contact',
  labels: { singular: 'Kontak + form', plural: 'Kontak + form' },
  fields: [...headingFields({ defaultEyebrow: 'Hubungi Kami' }), ...styleFields('light')],
}

export const pageBlocks: Block[] = [
  ServicesGridBlock,
  BentoBlock,
  StatementBlock,
  StatsBlock,
  LogoStripBlock,
  ProcessBlock,
  FeaturesBlock,
  SplitBlock,
  MediaBlock,
  CoverageMapBlock,
  BannerBlock,
  FaqBlock,
  RichTextBlock,
  ContactBlock,
  CtaBlock,
]
