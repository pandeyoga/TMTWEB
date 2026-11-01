'use client'

import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function Announcement({ text, href, label, tone, id }: { text: string; href?: string; label?: string; tone?: string | null; id: string }) {
  const key = `ty-announce-${id}`
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    try {
      if (sessionStorage.getItem(key) === '1') setHidden(true)
    } catch {}
  }, [key])
  if (hidden) return null
  return (
    <div className={`ty-announce${tone === 'accent' ? ' ty-announce--accent' : ''}`} data-theme={tone === 'accent' ? undefined : 'dark'}>
      <span>{text}</span>
      {href ? <a href={href}>{label || 'Selengkapnya'}</a> : null}
      <button
        className="ty-announce__close"
        type="button"
        aria-label="Tutup pengumuman"
        onClick={() => {
          setHidden(true)
          try {
            sessionStorage.setItem(key, '1')
          } catch {}
        }}
      >
        <Icon name="x" size={16} />
      </button>
    </div>
  )
}
