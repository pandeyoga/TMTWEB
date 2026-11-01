import type { CollectionConfig } from 'payload'
import { anyone, isContentManager } from '../access'
import { revalidateAll } from '../hooks/revalidate'

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  labels: { singular: 'FAQ', plural: 'FAQ' },
  admin: { useAsTitle: 'question', group: 'Konten', defaultColumns: ['question', 'general', 'order'] },
  defaultSort: 'order',
  access: { read: anyone, create: isContentManager, update: isContentManager, delete: isContentManager },
  hooks: { afterChange: [revalidateAll], afterDelete: [revalidateAll] },
  fields: [
    { name: 'question', label: 'Pertanyaan', type: 'text', required: true },
    { name: 'answer', label: 'Jawaban', type: 'textarea', required: true, admin: { rows: 4 } },
    {
      type: 'row',
      fields: [
        { name: 'general', label: 'FAQ umum (tampil di Beranda)', type: 'checkbox', defaultValue: true, admin: { width: '50%' } },
        { name: 'order', label: 'Urutan', type: 'number', defaultValue: 10, admin: { width: '50%' } },
      ],
    },
  ],
}
