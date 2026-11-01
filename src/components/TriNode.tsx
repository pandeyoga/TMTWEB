export function TriNode({ size = 16, className = 'ty-trinode' }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path className="t-edge" d="M8 3.2 12.8 12 3.2 12Z" fill="none" strokeWidth="1.2" strokeLinejoin="round" />
      <circle className="t-top" cx="8" cy="3.2" r="2.2" />
      <circle className="t-left" cx="3.2" cy="12" r="2.2" />
      <circle className="t-right" cx="12.8" cy="12" r="2.2" />
    </svg>
  )
}

export function Eyebrow({ children }: { children?: React.ReactNode }) {
  if (!children) return null
  return (
    <span className="ty-eyebrow">
      <TriNode />
      {children}
    </span>
  )
}
