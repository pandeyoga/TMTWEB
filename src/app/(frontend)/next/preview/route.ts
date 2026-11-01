import config from '@payload-config'
import { draftMode, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

/** Enables draft mode for logged-in CMS users, then redirects to the page being edited. */
export async function GET(req: Request) {
  const url = new URL(req.url)
  const path = url.searchParams.get('path') || '/'
  const secret = url.searchParams.get('previewSecret')
  if (!secret || secret !== process.env.PREVIEW_SECRET) return new Response('Preview tidak diizinkan', { status: 403 })
  if (!path.startsWith('/')) return new Response('Path tidak valid', { status: 400 })

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: await headers() })
  if (!user) return new Response('Silakan login ke CMS terlebih dahulu', { status: 403 })

  ;(await draftMode()).enable()
  redirect(path)
}
