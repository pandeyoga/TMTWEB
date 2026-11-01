import type { ReactNode } from 'react'
import { Highlight } from './Highlight'
import { Eyebrow } from './TriNode'

export type Theme = 'light' | 'sunken' | 'navy' | null | undefined

export function Section({
  theme,
  anchor,
  children,
  className = '',
  shift = true,
}: {
  theme?: Theme
  anchor?: string | null
  children: ReactNode
  className?: string
  shift?: boolean
}) {
  const navy = theme === 'navy'
  return (
    <section
      id={anchor || undefined}
      className={`ty-section${theme === 'sunken' ? ' ty-section--sunken' : ''} ${className}`.trim()}
      data-theme={navy ? 'dark' : undefined}
      data-shift={navy && shift ? '' : undefined}
    >
      <div className="ty-container">{children}</div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  heading,
  lead,
  center = false,
  as: Tag = 'h2',
  children,
}: {
  eyebrow?: string | null
  heading?: string | null
  lead?: string | null
  center?: boolean
  as?: 'h1' | 'h2'
  children?: ReactNode
}) {
  if (!eyebrow && !heading && !lead) return null
  return (
    <div className={`ty-heading ty-section__head${center ? ' ty-heading--center' : ''}`} data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      {heading ? (
        <Tag className="heading-2">
          <Highlight text={heading} />
        </Tag>
      ) : null}
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </div>
  )
}
