/**
 * Creates (or updates) the super admin account.
 *
 *   ADMIN_EMAIL=admin@triyasa.co.id ADMIN_PASSWORD=... pnpm create-admin
 *   ... pnpm create-admin --reset-password     → also reset the password of an existing account
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const email = (process.env.ADMIN_EMAIL || '').trim().toLowerCase()
  const password = process.env.ADMIN_PASSWORD || ''
  const name = process.env.ADMIN_NAME || 'Super Admin'
  if (!email || !password) {
    console.error('ADMIN_EMAIL dan ADMIN_PASSWORD wajib diisi.')
    process.exit(1)
  }

  const payload = await getPayload({ config })
  const found = await payload.find({ collection: 'users', where: { email: { equals: email } }, limit: 1, overrideAccess: true })

  if (found.docs[0]) {
    const data: Record<string, unknown> = { role: 'admin', name: found.docs[0].name || name }
    if (process.argv.includes('--reset-password')) data.password = password
    await payload.update({ collection: 'users', id: found.docs[0].id, data, overrideAccess: true })
    payload.logger.info(`Akun ${email} sudah ada → dipastikan berperan Admin${data.password ? ' dan password direset' : ''}.`)
  } else {
    await payload.create({ collection: 'users', data: { email, password, name, role: 'admin' }, overrideAccess: true })
    payload.logger.info(`Akun super admin dibuat: ${email}`)
  }
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
