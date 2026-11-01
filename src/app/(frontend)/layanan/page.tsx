import { docMetadata, renderPage } from '@/lib/render'
import { getPage } from '@/lib/payload'

export async function generateMetadata() {
  return docMetadata(await getPage('layanan'), '/layanan')
}

export default function ServicesIndex() {
  return renderPage('layanan')
}
