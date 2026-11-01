import type { CollectionConfig } from 'payload'
import { isContentManager, publishedOrLoggedIn } from '../access'
import { pageBlocks } from '../blocks'
import { headingFields, iconField, seoField, slugField } from '../fields'
import { heroField } from '../fields/hero'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { previewPath } from '../lib/preview'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Layanan', plural: 'Layanan' },
  admin: {
    useAsTitle: 'title',
    group: 'Konten',
    defaultColumns: ['title', 'tagline', 'order', '_status'],
    description: 'Enam lini layanan. Urutan tampil mengikuti kolom "Urutan".',
    livePreview: { url: ({ data }) => previewPath('services', data?.slug as string) },
    preview: (data) => previewPath('services', data?.slug as string),
  },
  defaultSort: 'order',
  access: {
    read: publishedOrLoggedIn,
    create: isContentManager,
    update: isContentManager,
    delete: isContentManager,
  },
  versions: { drafts: { autosave: { interval: 400 } }, maxPerDoc: 30 },
  hooks: { afterChange: [revalidateAfterChange('services')], afterDelete: [revalidateAfterDelete('services')] },
  fields: [
    { name: 'title', label: 'Nama layanan', type: 'text', required: true },
    slugField(),
    {
      type: 'row',
      fields: [
        { name: 'tagline', label: 'Tagline (label kecil, boleh bahasa Inggris)', type: 'text', admin: { width: '50%' } },
        { ...iconField(), admin: { width: '25%' } },
        { name: 'order', label: 'Urutan', type: 'number', defaultValue: 10, admin: { width: '25%' } },
      ],
    },
    {
      name: 'excerpt',
      label: 'Ringkasan (untuk kartu)',
      type: 'textarea',
      required: true,
      admin: { rows: 2, description: 'Satu kalimat manfaat, maksimal ±140 karakter.' },
    },
    {
      type: 'tabs',
      tabs: [
        { label: 'Hero', fields: [heroField] },
        {
          label: 'Cakupan layanan',
          fields: [
            {
              name: 'scope',
              label: 'Cakupan',
              type: 'group',
              fields: [
                ...headingFields({ defaultEyebrow: 'Cakupan Layanan' }),
                {
                  name: 'items',
                  label: 'Sub-layanan',
                  type: 'array',
                  fields: [iconField(), { name: 'title', label: 'Judul', type: 'text', required: true }, { name: 'text', label: 'Keterangan', type: 'textarea' }],
                },
              ],
            },
            {
              name: 'industries',
              label: 'Cocok untuk',
              type: 'group',
              fields: [
                ...headingFields({ defaultEyebrow: 'Cocok Untuk' }),
                {
                  name: 'items',
                  label: 'Industri / situasi',
                  type: 'array',
                  maxRows: 4,
                  fields: [iconField(), { name: 'title', label: 'Judul', type: 'text', required: true }, { name: 'text', label: 'Keterangan', type: 'textarea' }],
                },
              ],
            },
          ],
        },
        {
          label: 'Blok tambahan',
          fields: [
            {
              name: 'layout',
              label: 'Blok tambahan (opsional)',
              type: 'blocks',
              blocks: pageBlocks,
              admin: { initCollapsed: true, description: 'Tampil setelah Cakupan dan Cocok untuk, sebelum Alur kerja dan FAQ.' },
            },
            {
              name: 'faqs',
              label: 'FAQ layanan ini',
              type: 'relationship',
              relationTo: 'faqs',
              hasMany: true,
            },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
  ],
}
