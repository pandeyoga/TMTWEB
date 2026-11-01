import path from 'path'
import type { CollectionConfig } from 'payload'
import { anyone, isContentManager } from '../access'

// Local storage. In Docker this folder is a mounted volume (see docker-compose.yml).
const mediaDir = process.env.MEDIA_DIR || path.resolve(process.cwd(), 'media')

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media' },
  admin: {
    group: 'Konten',
    description: 'Foto, video, logo, dan PDF. Gambar otomatis dibuat dalam beberapa ukuran WebP.',
    defaultColumns: ['filename', 'alt', 'mimeType', 'updatedAt'],
  },
  access: {
    read: anyone,
    create: isContentManager,
    update: isContentManager,
    delete: isContentManager,
  },
  fields: [
    {
      name: 'alt',
      label: 'Teks alternatif (alt)',
      type: 'text',
      admin: { description: 'Jelaskan isi gambar untuk Google dan pembaca layar. Contoh: "Teknisi memasang access point di gudang".' },
      validate: (value: unknown, { siblingData }: { siblingData: { mimeType?: string } }) => {
        const isImage = typeof siblingData?.mimeType === 'string' && siblingData.mimeType.startsWith('image/')
        if (isImage && !value) return 'Teks alternatif wajib diisi untuk gambar.'
        return true
      },
    },
    { name: 'caption', label: 'Keterangan', type: 'text' },
  ],
  upload: {
    staticDir: mediaDir,
    mimeTypes: ['image/*', 'video/mp4', 'video/webm', 'application/pdf'],
    focalPoint: true,
    adminThumbnail: 'thumbnail',
    imageSizes: [
      { name: 'thumbnail', width: 400, formatOptions: { format: 'webp', options: { quality: 80 } } },
      { name: 'card', width: 900, formatOptions: { format: 'webp', options: { quality: 80 } } },
      { name: 'hero', width: 1800, formatOptions: { format: 'webp', options: { quality: 80 } } },
      { name: 'og', width: 1200, height: 630, position: 'centre', formatOptions: { format: 'jpeg', options: { quality: 85 } } },
    ],
  },
}
