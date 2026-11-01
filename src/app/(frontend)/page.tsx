import { docMetadata, renderPage } from '@/lib/render'
import { getPage } from '@/lib/payload'

export async function generateMetadata() {
  return docMetadata(await getPage('beranda'), '/')
}

export default function HomePage() {
  return renderPage('beranda')
}
