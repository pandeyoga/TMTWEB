'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'

const RACKS: [number, number, number, number][] = [[48, 70, 4, 5], [48, 262, 4, 4], [452, 70, 4, 5]]
const APS: [number, number, string][] = [[92, 120, 'AP-B1'], [214, 160, 'AP-B2'], [120, 318, 'AP-C1'], [228, 340, 'AP-C2'], [336, 216, 'AP-T1'], [492, 118, 'AP-D1'], [612, 168, 'AP-D2'], [560, 330, 'AP-R1']]
const RFID: [number, number, number][] = [[306, 120, 1], [306, 330, 1], [452, 398, 1], [668, 250, -1]]
const FIBER = ['M372 404 V 236 H 260 V 160', 'M372 236 V 340 H 228', 'M372 236 H 560 V 168', 'M560 236 V 330']

/** Illustrative warehouse floor plan with access points, RFID readers, fibre runs, and signal coverage. */
export function CoverageMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [showCov, setShowCov] = useState(true)
  const played = useRef(false)

  const play = () => {
    const svg = svgRef.current
    if (!svg || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
    svg.querySelectorAll('.fiber').forEach((f, i) => f.animate([{ strokeDashoffset: 300, opacity: 0 }, { strokeDashoffset: 0, opacity: 1 }], { duration: 600, delay: i * 150, easing: ease, fill: 'backwards' }))
    svg.querySelectorAll('.ap').forEach((a, i) => a.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 500 + i * 80, easing: ease, fill: 'backwards' }))
    svg.querySelectorAll('.rf').forEach((r, i) => r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 900 + i * 80, fill: 'backwards' }))
    svg.querySelectorAll('.cov').forEach((c, i) => c.animate([{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 1000, delay: 1000 + i * 80, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' }))
  }

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !played.current) {
        played.current = true
        play()
        io.disconnect()
      }
    }, { threshold: 0.35 })
    io.observe(svg)
    return () => io.disconnect()
  }, [])

  let racks: React.ReactNode[] = []
  RACKS.forEach(([x0, y0, cols, rows]) => {
    for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) racks.push(<rect key={`${x0}-${y0}-${c}-${r}`} className="rack" x={x0 + c * 58} y={y0 + r * 30} width="44" height="14" rx="2" />)
  })

  return (
    <div className="ty-map__wrap">
      <div className="ty-map__stage">
        <svg ref={svgRef} className={`ty-map__svg${showCov ? '' : ' no-cov'}`} viewBox="0 0 720 440" role="img" aria-label="Denah gudang ilustrasi dengan titik akses WiFi, reader RFID, jalur fiber optic, dan jangkauan sinyal">
          <defs>
            <radialGradient id="ty-cov">
              <stop offset="0" className="g0" />
              <stop offset=".55" className="g1" />
              <stop offset="1" className="g2" />
            </radialGradient>
            <clipPath id="ty-bld">
              <rect x="24" y="40" width="672" height="380" rx="6" />
            </clipPath>
          </defs>
          <rect className="floor" x="24" y="40" width="672" height="380" rx="6" />
          <g clipPath="url(#ty-bld)">
            {APS.map(([x, y], i) => (
              <circle key={i} className="cov" cx={x} cy={y} r="96" fill="url(#ty-cov)" />
            ))}
          </g>
          <g>{racks}</g>
          <g className="walls">
            <rect x="24" y="40" width="672" height="380" rx="6" />
            <path d="M24 240 H 290 M290 40 V 210 M290 270 V 420 M430 40 V 220 M430 280 V 420 M430 280 H 696 M330 380 H 414 V 420" />
          </g>
          <g>{FIBER.map((d) => <path key={d} className="fiber" d={d} />)}</g>
          {RFID.map(([x, y, side]) => (
            <g key={`${x}-${y}`} className="rf">
              <rect x={x - 6} y={y - 6} width="12" height="12" rx="2" />
              <text x={side > 0 ? x + 11 : x - 11} y={y + 4} className="lbl" textAnchor={side > 0 ? 'start' : 'end'}>RFID</text>
            </g>
          ))}
          <g className="srv">
            <rect x="354" y="388" width="36" height="24" rx="3" />
            <text x="372" y="403" textAnchor="middle" className="lbl srv-l">SRV</text>
          </g>
          {APS.map(([x, y, l]) => (
            <g key={l} className="ap">
              <circle cx={x} cy={y} r="9" className="ap-ring" />
              <circle cx={x} cy={y} r="4.5" className="ap-dot" />
              <text x={x + 13} y={y - 9} className="lbl">{l}</text>
            </g>
          ))}
          <g className="rooms">
            <text x="40" y="60">GUDANG B</text>
            <text x="40" y="258">GUDANG C</text>
            <text x="306" y="60">TRANSIT</text>
            <text x="446" y="60">GUDANG D</text>
            <text x="446" y="298">RETUR &amp; INSPEKSI</text>
            <text x="336" y="374">RUANG SERVER</text>
          </g>
        </svg>
      </div>
      <div className="ty-map__controls">
        <ul className="ty-map__legend">
          <li><span className="ty-map__k ty-map__k--ap" />Titik akses (AP)</li>
          <li><span className="ty-map__k ty-map__k--rf" />Reader RFID</li>
          <li><span className="ty-map__k ty-map__k--fb" />Jalur fiber optic</li>
          <li><span className="ty-map__k ty-map__k--cv" />Jangkauan sinyal</li>
        </ul>
        <div className="ty-map__btns">
          <button className="ty-btn ty-btn--secondary ty-btn--sm" type="button" aria-pressed={showCov} onClick={() => setShowCov((v) => !v)}>
            {showCov ? 'Sembunyikan jangkauan' : 'Tampilkan jangkauan'}
          </button>
          <button className="ty-btn ty-btn--secondary ty-btn--sm" type="button" onClick={play}>
            <Icon name="replay" size={16} /> Putar ulang
          </button>
        </div>
        <p className="ty-map__note">DENAH ILUSTRASI</p>
      </div>
    </div>
  )
}
