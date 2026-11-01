/** Small line illustrations for Bento panels (design system: BentoCard). */
export function BentoArt({ art }: { art: string }) {
  if (art === 'corporate')
    return (
      <svg viewBox="0 0 320 96" aria-hidden="true">
        <g fill="none" stroke="var(--line-strong)" strokeWidth="1.2">
          <rect x="8" y="10" width="120" height="22" rx="4" />
          <rect x="8" y="40" width="120" height="22" rx="4" />
          <rect x="8" y="70" width="120" height="22" rx="4" />
          <path d="M128 21h60M128 51h60M128 81h60M188 21v60M188 51h56" />
        </g>
        <circle cx="252" cy="51" r="9" fill="var(--accent)" />
        <circle cx="252" cy="51" r="16" fill="none" stroke="var(--accent)" strokeOpacity=".35" />
        <g fill="var(--success)"><circle cx="22" cy="21" r="3" /><circle cx="22" cy="51" r="3" /><circle cx="22" cy="81" r="3" /></g>
        <g fill="var(--line-strong)"><rect x="34" y="19" width="40" height="4" rx="2" /><rect x="34" y="49" width="56" height="4" rx="2" /><rect x="34" y="79" width="32" height="4" rx="2" /></g>
      </svg>
    )
  if (art === 'branch')
    return (
      <svg viewBox="0 0 320 122" aria-hidden="true">
        <g stroke="currentColor" strokeOpacity=".55" strokeWidth="1.2" fill="none"><path d="M160 18 60 92M160 18l100 74M60 92h200" /></g>
        <circle r="3.5" fill="currentColor"><animateMotion dur="3.2s" repeatCount="indefinite" path="M160 18 60 92" /></circle>
        <circle r="3.5" fill="currentColor"><animateMotion dur="3.2s" begin="1.1s" repeatCount="indefinite" path="M260 92H60" /></circle>
        <g fill="var(--accent)" stroke="currentColor" strokeWidth="2"><circle cx="160" cy="18" r="10" /><circle cx="60" cy="92" r="8" /><circle cx="260" cy="92" r="8" /></g>
        <g fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" letterSpacing=".6"><text x="178" y="22">PUSAT</text><text x="30" y="118">CABANG A</text><text x="230" y="118">CABANG B</text></g>
      </svg>
    )
  if (art === 'infra')
    return (
      <svg viewBox="0 0 320 96" aria-hidden="true">
        <g fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.2"><rect x="8" y="6" width="200" height="24" rx="3" /><rect x="8" y="36" width="200" height="24" rx="3" /><rect x="8" y="66" width="200" height="24" rx="3" /></g>
        <g fill="var(--accent)">
          {[20, 32, 44, 56].map((x) => <rect key={`a${x}`} x={x} y="14" width="8" height="8" rx="1.5" />)}
          {[20, 32, 44].map((x) => <rect key={`b${x}`} x={x} y="44" width="8" height="8" rx="1.5" />)}
        </g>
        <g fill="var(--line-strong)">{[20, 32].map((x) => <rect key={`c${x}`} x={x} y="74" width="8" height="8" rx="1.5" />)}</g>
        <g fill="var(--success)"><circle cx="194" cy="18" r="3" /><circle cx="194" cy="48" r="3" /><circle cx="194" cy="78" r="3" /></g>
        <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-muted)" letterSpacing=".6"><text x="224" y="22">CORE SW</text><text x="224" y="52">POE SW</text><text x="224" y="82">UPS</text></g>
      </svg>
    )
  if (art === 'managed')
    return (
      <div className="ty-mini">
        <div className="ty-mini__row"><span>Link utama</span><span className="ty-pill ty-pill--ok"><i className="ty-ping" />Online</span></div>
        <div className="ty-mini__row"><span>Link cadangan</span><span className="ty-pill ty-pill--info">Siaga</span></div>
        <div className="ty-mini__row"><span>Tiket #2041</span><span className="ty-pill ty-pill--ok">Selesai</span></div>
      </div>
    )
  return null
}
