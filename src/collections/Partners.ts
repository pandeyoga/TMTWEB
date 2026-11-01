import { makeLogoCollection } from './Clients'

export const Partners = makeLogoCollection('partners', 'Mitra', 'Mitra', [
  {
    name: 'official',
    label: 'Partner resmi (bersertifikat)',
    type: 'checkbox',
    admin: { description: 'Centang hanya jika Triyasa memiliki status partner resmi.' },
  },
])
