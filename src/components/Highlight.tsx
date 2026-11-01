import { Fragment } from 'react'

/** Renders text where *words* become <em> (accent colour). */
export function Highlight({ text }: { text?: string | null }) {
  if (!text) return null
  const parts = text.split(/(\*[^*]+\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('*') && p.endsWith('*') && p.length > 2 ? <em key={i}>{p.slice(1, -1)}</em> : <Fragment key={i}>{p}</Fragment>,
      )}
    </>
  )
}

export const plain = (text?: string | null) => (text ?? '').replace(/\*/g, '')
