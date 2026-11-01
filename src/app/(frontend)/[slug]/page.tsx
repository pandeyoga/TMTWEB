import { docMetadata, renderPage } from '@/lib/render'
import { getPage } from '@/lib/payload'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  return docMetadata(await getPage(slug), `/${slug}`)
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  return renderPage(slug)
}
