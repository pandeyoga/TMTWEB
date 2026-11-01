import type { CollectionConfig } from 'payload'
import { adminOrSelf, isAdmin, isAdminField } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Pengguna', plural: 'Pengguna' },
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
    group: 'Pengaturan',
  },
  access: {
    read: adminOrSelf,
    create: isAdmin,
    update: adminOrSelf,
    delete: isAdmin,
    admin: ({ req }) => Boolean(req.user),
  },
  hooks: {
    beforeChange: [
      async ({ req, operation, data }) => {
        if (operation === 'create') {
          const { totalDocs } = await req.payload.count({ collection: 'users', overrideAccess: true })
          if (totalDocs === 0) data.role = 'admin'
        }
        return data
      },
    ],
  },
  fields: [
    { name: 'name', label: 'Nama', type: 'text' },
    {
      name: 'role',
      label: 'Peran',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      access: { update: isAdminField },
      options: [
        { label: 'Admin (semua akses)', value: 'admin' },
        { label: 'Editor (konten & media)', value: 'editor' },
        { label: 'Sales (lihat & kelola leads)', value: 'sales' },
      ],
      admin: { description: 'Pengguna pertama otomatis menjadi Admin.' },
    },
  ],
}
