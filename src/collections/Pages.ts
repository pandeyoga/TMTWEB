import type { CollectionConfig } from 'payload'
import { isContentManager, publishedOrLoggedIn } from '../access'
import { pageBlocks } from '../blocks'
import { seoField, slugField } from '../fields'
import { heroField } from '../fields/hero'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { previewPath } from '../lib/preview'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Halaman', plural: 'Halaman' },
  admin: {
    useAsTitle: 'title',
    group: 'Konten',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    description: 'Susun halaman dari blok. Simpan sebagai draft, lihat preview, lalu publish.',
    livePreview: { url: ({ data }) => previewPath('pages', data?.slug as string) },
    preview: (data) => previewPath('pages', data?.slug as string),
  },
  access: {
    read: publishedOrLoggedIn,
    create: isContentManager,
    update: isContentManager,
    delete: isContentManager,
  },
  versions: { drafts: { autosave: { interval: 400 }, schedulePublish: true }, maxPerDoc: 30 },
  hooks: { afterChange: [revalidateAfterChange('pages')], afterDelete: [revalidateAfterDelete('pages')] },
  fields: [
    { name: 'title', label: 'Judul halaman', type: 'text', required: true },
    slugField(),
    {
      type: 'tabs',
      tabs: [
        { label: 'Hero', fields: [heroField] },
        {
          label: 'Isi halaman',
          fields: [
            {
              name: 'layout',
              label: 'Blok',
              type: 'blocks',
              blocks: pageBlocks,
              admin: { initCollapsed: true },
            },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
  ],
}
