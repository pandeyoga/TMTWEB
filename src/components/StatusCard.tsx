import { Icon } from './Icon'

export type StatusCardData = {
  icon?: string | null
  title: string
  meta?: string | null
  status?: string | null
  tone?: 'ok' | 'info' | null
  id?: string | null
}

export function StatusCard({ card, float = true, delay }: { card: StatusCardData; float?: boolean; delay?: number }) {
  const tone = card.tone ?? 'ok'
  return (
    <div className={`ty-status${float ? ' ty-status--float' : ''}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      <span className="ty-status__icon">
        <Icon name={card.icon ?? 'wifi'} />
      </span>
      <div>
        <div className="ty-status__title">{card.title}</div>
        {card.meta ? <div className="ty-status__meta">{card.meta}</div> : null}
      </div>
      {card.status ? (
        <span className={`ty-pill ty-pill--${tone}`}>
          {tone === 'ok' ? <i className="ty-ping" /> : null}
          {card.status}
        </span>
      ) : null}
    </div>
  )
}
