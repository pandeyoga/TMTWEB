import type { CollectionConfig } from 'payload'
import { anyone, isContentManager } from '../access'
import { revalidateAll } from '../hooks/revalidate'

export const makeLogoCollection = (slug: 'clients' | 'partners', singular: string, plural: string, extra: CollectionConfig['fields'] = []): CollectionConfig => ({
  slug,
  labels: { singular, plural },
  admin: { useAsTitle: 'name', group: 'Konten', defaultColumns: ['name', 'visible', 'order'] },
  defaultSort: 'order',
  access: { read: anyone, create: isContentManager, update: isContentManager, delete: isContentManager },
  hooks: { afterChange: [revalidateAll], afterDelete: [revalidateAll] },
  fields: [
    { name: 'name', label: 'Nama', type: 'text', required: true },
    { name: 'logo', label: 'Logo (PNG/SVG transparan)', type: 'upload', relationTo: 'media' },
    {
      type: 'row',
      fields: [
        { name: 'website', label: 'Website', type: 'text', admin: { width: '50%' } },
        { name: 'order', label: 'Urutan', type: 'number', defaultValue: 10, admin: { width: '25%' } },
        { name: 'visible', label: 'Tampilkan di website', type: 'checkbox', defaultValue: true, admin: { width: '25%' } },
      ],
    },
    ...extra,
  ],
})

export const Clients = makeLogoCollection('clients', 'Klien', 'Klien', [
  {
    name: 'permission',
    label: 'Klien sudah mengizinkan logonya ditampilkan',
    type: 'checkbox',
    admin: { description: 'Catatan internal untuk tim. Tidak tampil di website.' },
  },
  { name: 'industry', label: 'Industri', type: 'text' },
])
