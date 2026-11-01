'use client'

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

/** Refreshes the page while an editor types in the CMS live preview. */
export function LivePreview() {
  const router = useRouter()
  return (
    <>
      <RefreshRouteOnSave refresh={() => router.refresh()} serverURL={typeof window !== 'undefined' ? window.location.origin : ''} />
      <div style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 50, padding: '6px 12px', borderRadius: 999, background: 'var(--ink)', color: 'var(--surface)', font: '600 12px/16px var(--font-mono)', letterSpacing: '.06em' }}>
        MODE PREVIEW · <a href="/next/exit-preview" style={{ color: 'inherit' }}>KELUAR</a>
      </div>
    </>
  )
}
