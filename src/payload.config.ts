import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from '@payloadcms/translations/languages/en'
import { id } from '@payloadcms/translations/languages/id'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Clients } from './collections/Clients'
import { Faqs } from './collections/Faqs'
import { Leads } from './collections/Leads'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Partners } from './collections/Partners'
import { Services } from './collections/Services'
import { Users } from './collections/Users'
import { ChatWidget } from './globals/ChatWidget'
import { AnnouncementBar, Footer, Header } from './globals/Navigation'
import { SharedSections } from './globals/SharedSections'
import { SiteSettings } from './globals/SiteSettings'
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const smtpConfigured = Boolean(process.env.SMTP_HOST)

export default buildConfig({
  serverURL: process.env.SITE_URL || '',
  admin: {
    user: Users.slug,
    meta: { titleSuffix: ' · CMS Triyasa' },
    importMap: { baseDir: path.resolve(dirname) },
    livePreview: {
      breakpoints: [
        { label: 'Ponsel', name: 'mobile', width: 390, height: 844 },
        { label: 'Tablet', name: 'tablet', width: 820, height: 1180 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  i18n: {
    supportedLanguages: { id, en },
    fallbackLanguage: 'id',
  },
  collections: [Pages, Services, Media, Clients, Partners, Faqs, Leads, Users],
  globals: [SiteSettings, Header, Footer, ChatWidget, AnnouncementBar, SharedSections],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
    // Dev pushes schema changes automatically; production runs the committed migrations on boot.
    prodMigrations: migrations,
  }),
  email: smtpConfigured
    ? nodemailerAdapter({
        defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'no-reply@example.com',
        defaultFromName: process.env.SMTP_FROM_NAME || 'Website Triyasa',
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === 'true',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        },
      })
    : undefined,
  sharp,
  upload: { limits: { fileSize: 25_000_000 } }, // 25 MB per file
  graphQL: { disable: true },
})
