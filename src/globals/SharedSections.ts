import type { GlobalConfig } from 'payload'
import { anyone, isContentManager } from '../access'
import { headingFields, linkField } from '../fields'
import { revalidateGlobal } from '../hooks/revalidate'

export const SharedSections: GlobalConfig = {
  slug: 'shared-sections',
  label: 'Bagian Bersama',
  admin: { group: 'Pengaturan', description: 'Isi yang dipakai di banyak halaman: alur kerja standar, CTA penutup, dan teks form.' },
  access: { read: anyone, update: isContentManager },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'process',
      label: 'Alur kerja standar',
      type: 'array',
      maxRows: 6,
      fields: [
        { name: 'title', label: 'Judul', type: 'text', required: true },
        { name: 'text', label: 'Keterangan', type: 'textarea' },
      ],
    },
    {
      name: 'cta',
      label: 'CTA penutup standar',
      type: 'group',
      fields: [...headingFields({ defaultEyebrow: 'Mulai Konsultasi' }), linkField('primaryCta', 'Tombol utama'), linkField('secondaryCta', 'Tombol kedua')],
    },
    {
      name: 'form',
      label: 'Teks form konsultasi',
      type: 'group',
      fields: [
        { name: 'submitLabel', label: 'Teks tombol kirim', type: 'text', defaultValue: 'Kirim Permintaan' },
        {
          name: 'successMessage',
          label: 'Pesan setelah terkirim',
          type: 'textarea',
          defaultValue: 'Terima kasih, tim kami akan menghubungi Anda melalui WhatsApp pada jam kerja berikutnya.',
        },
        {
          name: 'consentText',
          label: 'Teks persetujuan',
          type: 'text',
          defaultValue: 'Saya setuju data ini dipakai untuk menghubungi saya sesuai Kebijakan Privasi.',
        },
      ],
    },
  ],
}
