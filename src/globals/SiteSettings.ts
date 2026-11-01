import type { GlobalConfig } from 'payload'
import { anyone, isContentManager } from '../access'
import { revalidateGlobal } from '../hooks/revalidate'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Pengaturan Situs',
  admin: { group: 'Pengaturan', description: 'Identitas, logo, kontak, dan SEO default. Nilai bertanda PLACEHOLDER harus diganti sebelum rilis.' },
  access: { read: anyone, update: isContentManager },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identitas',
          fields: [
            { name: 'siteName', label: 'Nama perusahaan', type: 'text', required: true, defaultValue: 'PT Triyasa Mitra Teknologi' },
            { name: 'tagline', label: 'Tagline', type: 'text', defaultValue: 'Connecting Technology, Empowering Business' },
            {
              name: 'logo',
              label: 'Logo (untuk latar terang)',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Kosongkan untuk memakai logo placeholder. Disarankan SVG atau PNG transparan, versi mendatar.' },
            },
            {
              name: 'logoOnDark',
              label: 'Logo untuk latar navy (opsional)',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Jika kosong, logo utama ditampilkan putih satu warna di footer.' },
            },
            { name: 'logoHeight', label: 'Tinggi logo di navbar (px)', type: 'number', defaultValue: 40, min: 24, max: 64 },
          ],
        },
        {
          label: 'Kontak',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'whatsappNumber',
                  label: 'Nomor WhatsApp',
                  type: 'text',
                  admin: { width: '50%', description: 'Format internasional tanpa + dan spasi, contoh 6281234567890.' },
                },
                { name: 'phone', label: 'Telepon (tampilan)', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              name: 'whatsappMessage',
              label: 'Pesan awal WhatsApp (default)',
              type: 'textarea',
              defaultValue: 'Halo Tim Triyasa, saya ingin konsultasi kebutuhan IT perusahaan kami.',
            },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'address', label: 'Alamat', type: 'textarea' },
            { name: 'mapsUrl', label: 'Link Google Maps', type: 'text' },
            { name: 'hours', label: 'Jam layanan (tampilan)', type: 'text', defaultValue: 'Senin–Jumat, 08.00–17.00 WIB' },
            {
              name: 'socials',
              label: 'Media sosial',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'platform',
                      label: 'Platform',
                      type: 'select',
                      admin: { width: '30%' },
                      options: ['LinkedIn', 'Instagram', 'Facebook', 'YouTube', 'TikTok', 'X'].map((p) => ({ label: p, value: p.toLowerCase() })),
                    },
                    { name: 'url', label: 'URL', type: 'text', admin: { width: '70%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO default',
          fields: [
            { name: 'siteUrl', label: 'Alamat website', type: 'text', admin: { description: 'Contoh https://triyasa.co.id (isi setelah domain aktif).' } },
            { name: 'defaultDescription', label: 'Deskripsi default', type: 'textarea' },
            { name: 'ogImage', label: 'Gambar share default (1200×630)', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
}
