import type { CollectionConfig } from 'payload'
import { isAdmin, isLeadHandler } from '../access'
import { notifyNewLead } from '../hooks/notifyNewLead'

export const leadServiceOptions = [
  'Internet Service Provider',
  'Managed Services',
  'Network & IT Infrastructure',
  'Pengadaan Barang & Jasa Teknologi',
  'Software Development',
  'RFID Solutions',
  'Lainnya',
]

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: { singular: 'Lead', plural: 'Leads (Permintaan Konsultasi)' },
  admin: {
    useAsTitle: 'name',
    group: 'Penjualan',
    defaultColumns: ['name', 'company', 'service', 'status', 'createdAt'],
    description: 'Semua kiriman form dari website. Ubah status setelah dihubungi.',
    listSearchableFields: ['name', 'company', 'whatsapp', 'email'],
  },
  defaultSort: '-createdAt',
  access: {
    // Created only by the server action with overrideAccess.
    create: isAdmin,
    read: isLeadHandler,
    update: isLeadHandler,
    delete: isAdmin,
  },
  hooks: { afterChange: [notifyNewLead] },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', label: 'Nama', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'company', label: 'Perusahaan', type: 'text', admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'whatsapp', label: 'Nomor WhatsApp', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'email', label: 'Email', type: 'email', admin: { width: '50%' } },
      ],
    },
    { name: 'service', label: 'Kebutuhan', type: 'text' },
    { name: 'message', label: 'Pesan', type: 'textarea' },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      defaultValue: 'baru',
      admin: { position: 'sidebar' },
      options: [
        { label: 'Baru', value: 'baru' },
        { label: 'Sudah dihubungi', value: 'dihubungi' },
        { label: 'Penawaran dikirim', value: 'penawaran' },
        { label: 'Deal', value: 'deal' },
        { label: 'Tidak lanjut', value: 'batal' },
      ],
    },
    { name: 'notes', label: 'Catatan internal', type: 'textarea', admin: { position: 'sidebar' } },
    { name: 'sourcePage', label: 'Halaman asal', type: 'text', admin: { readOnly: true, position: 'sidebar' } },
    { name: 'consent', label: 'Setuju kebijakan privasi', type: 'checkbox', admin: { readOnly: true, position: 'sidebar' } },
  ],
}
