import type { GlobalConfig } from 'payload'
import { anyone, isContentManager } from '../access'
import { linkField } from '../fields'
import { revalidateGlobal } from '../hooks/revalidate'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Menu Atas',
  admin: { group: 'Pengaturan' },
  access: { read: anyone, update: isContentManager },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'items',
      label: 'Menu',
      type: 'array',
      maxRows: 7,
      fields: [
        linkField('link', 'Link', { required: true }),
        {
          name: 'showServices',
          label: 'Tampilkan daftar layanan sebagai dropdown',
          type: 'checkbox',
        },
      ],
    },
    linkField('cta', 'Tombol kanan (merah)'),
  ],
}

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: { group: 'Pengaturan' },
  access: { read: anyone, update: isContentManager },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    { name: 'about', label: 'Deskripsi singkat', type: 'textarea' },
    {
      name: 'columns',
      label: 'Kolom link',
      type: 'array',
      maxRows: 3,
      fields: [
        { name: 'title', label: 'Judul kolom', type: 'text', required: true },
        { name: 'autoServices', label: 'Isi otomatis dengan semua layanan', type: 'checkbox' },
        { name: 'links', label: 'Link', type: 'array', fields: [linkField('link', 'Link', { required: true })] },
      ],
    },
    { name: 'bottomNote', label: 'Teks kanan bawah', type: 'text', defaultValue: 'Connecting Technology, Empowering Business' },
  ],
}

export const AnnouncementBar: GlobalConfig = {
  slug: 'announcement',
  label: 'Pengumuman (bar atas)',
  admin: { group: 'Pengaturan', description: 'Bar tipis di atas navbar untuk info singkat atau promo.' },
  access: { read: anyone, update: isContentManager },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    { name: 'enabled', label: 'Tampilkan', type: 'checkbox', defaultValue: false },
    { name: 'text', label: 'Teks', type: 'text' },
    linkField('link', 'Link (opsional)'),
    {
      name: 'tone',
      label: 'Warna',
      type: 'select',
      defaultValue: 'navy',
      options: [
        { label: 'Navy', value: 'navy' },
        { label: 'Biru', value: 'accent' },
      ],
    },
  ],
}
