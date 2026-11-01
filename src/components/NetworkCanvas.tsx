'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; hub?: 'signal' | 'accent' | 'ink'; label: string }

const N: Record<string, Node> = {
  hubT: { x: 0.7, y: 0.3, hub: 'signal', label: 'KONEKTIVITAS' },
  hubL: { x: 0.58, y: 0.7, hub: 'accent', label: 'INFRASTRUKTUR' },
  hubR: { x: 0.86, y: 0.66, hub: 'ink', label: 'MANAGED SERVICES' },
  hq: { x: 0.55, y: 0.16, label: 'KANTOR PUSAT' },
  dc: { x: 0.965, y: 0.3, label: 'DATA CENTER' },
  br: { x: 0.965, y: 0.5, label: 'CABANG' },
  wh: { x: 0.53, y: 0.52, label: 'GUDANG' },
  fa: { x: 0.47, y: 0.88, label: 'PABRIK' },
  ap: { x: 0.72, y: 0.92, label: 'AP OUTDOOR' },
  rf: { x: 0.97, y: 0.88, label: 'RFID' },
}
const E: [string, string][] = [
  ['hubT', 'hubL'], ['hubL', 'hubR'], ['hubR', 'hubT'], ['hq', 'hubT'], ['dc', 'hubT'], ['br', 'hubR'],
  ['wh', 'hubL'], ['fa', 'hubL'], ['ap', 'hubL'], ['rf', 'hubR'], ['dc', 'br'],
]
type Pt = { x: number; y: number }

/** Animated network map behind the home hero. Mirrors the NetworkHero component of the design system. */
export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const host = cv.parentElement as HTMLElement
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = matchMedia('(max-width: 960px)').matches
    const C: Record<string, string> = {}
    const readColors = () => {
      const s = getComputedStyle(host)
      for (const k of ['line', 'line-strong', 'accent', 'signal', 'ink', 'ink-muted', 'surface-raised']) C[k] = s.getPropertyValue(`--${k}`).trim()
    }
    let W = 0, H = 0
    let paths: Pt[][] = [], lens: number[] = []
    const P = (id: string): Pt => {
      const n = N[id]
      // On narrow screens the map lives in the lower part of the hero.
      return mobile ? { x: (0.08 + (n.x - 0.45) * 1.65) * W, y: (0.62 + n.y * 0.36) * H } : { x: n.x * W, y: n.y * H }
    }
    const snap = (v: number) => Math.round(v / 24) * 24 + 0.5
    const path = (e: [string, string]): Pt[] => {
      const a = P(e[0]), b = P(e[1])
      const A = { x: snap(a.x), y: snap(a.y) }, B = { x: snap(b.x), y: snap(b.y) }
      return N[e[0]].hub && N[e[1]].hub ? [A, B] : [A, { x: B.x, y: A.y }, B]
    }
    const plen = (p: Pt[]) => p.slice(1).reduce((s, q, i) => s + Math.hypot(q.x - p[i].x, q.y - p[i].y), 0)
    const at = (p: Pt[], d: number): Pt => {
      for (let i = 1; i < p.length; i++) {
        const s = Math.hypot(p[i].x - p[i - 1].x, p[i].y - p[i - 1].y)
        if (d <= s) { const t = s ? d / s : 0; return { x: p[i - 1].x + (p[i].x - p[i - 1].x) * t, y: p[i - 1].y + (p[i].y - p[i - 1].y) * t } }
        d -= s
      }
      return p[p.length - 1]
    }
    const layout = () => {
      const r = host.getBoundingClientRect()
      W = r.width; H = r.height
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      cv.width = W * dpr; cv.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paths = E.map(path); lens = paths.map(plen)
    }
    const packets = Array.from({ length: mobile ? 3 : 6 }, (_, i) => ({ e: (i * 2) % E.length, d: Math.random(), dir: i % 2 ? 1 : -1, speed: 90 + Math.random() * 50 }))
    const pulses: Record<string, number> = {}
    const ease = (t: number) => 1 - Math.pow(1 - t, 4)
    let t0 = performance.now(), raf = 0, visible = true

    const draw = (ts: number) => {
      const t = (ts - t0) / 1000
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = C['line']
      for (let x = 12; x < W; x += 24) for (let y = 12; y < H; y += 24) { ctx.beginPath(); ctx.arc(x + 0.5, y + 0.5, 1, 0, 6.283); ctx.fill() }
      paths.forEach((p, i) => {
        const pr = reduce ? 1 : Math.max(0, Math.min(1, (t - (0.25 + i * 0.07)) / 0.9))
        if (pr <= 0) return
        const hubEdge = N[E[i][0]].hub && N[E[i][1]].hub
        ctx.strokeStyle = hubEdge ? C['accent'] : C['line-strong']
        ctx.globalAlpha = hubEdge ? 0.55 : 0.7
        ctx.lineWidth = hubEdge ? 1.5 : 1.2
        const L = lens[i] * ease(pr)
        let acc = 0
        ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y)
        for (let k = 1; k < p.length; k++) {
          const s = Math.hypot(p[k].x - p[k - 1].x, p[k].y - p[k - 1].y)
          if (acc + s >= L) { const q = at(p, L); ctx.lineTo(q.x, q.y); break }
          ctx.lineTo(p[k].x, p[k].y); acc += s
        }
        ctx.stroke(); ctx.globalAlpha = 1
      })
      if (!reduce && t > 1.6) {
        for (const k of packets) {
          k.d += (k.dir * k.speed) / lens[k.e] / 60
          if (k.d > 1 || k.d < 0) {
            const end = k.d > 1 ? E[k.e][1] : E[k.e][0]
            pulses[end] = t
            const next = E.map((e, j) => (j !== k.e && (e[0] === end || e[1] === end) ? j : -1)).filter((j) => j >= 0)
            if (next.length) k.e = next[Math.floor(Math.random() * next.length)]
            k.dir = E[k.e][0] === end ? 1 : -1
            k.d = k.dir > 0 ? 0 : 1
          }
          const q = at(paths[k.e], lens[k.e] * k.d)
          ctx.fillStyle = C['accent']; ctx.shadowColor = C['accent']; ctx.shadowBlur = 10
          ctx.beginPath(); ctx.arc(q.x, q.y, 2.6, 0, 6.283); ctx.fill(); ctx.shadowBlur = 0
        }
      }
      Object.keys(N).forEach((id, i) => {
        const n = N[id], p = P(id), x = snap(p.x), y = snap(p.y)
        const a = reduce ? 1 : Math.max(0, Math.min(1, (t - (0.15 + i * 0.05)) / 0.6))
        if (a <= 0) return
        ctx.globalAlpha = a
        if (n.hub) {
          const col = C[n.hub]
          const pt = pulses[id] != null ? Math.min(1, (t - pulses[id]) / 0.9) : 1
          ctx.strokeStyle = col; ctx.globalAlpha = a * 0.35 * (1 - pt); ctx.lineWidth = 1.5
          ctx.beginPath(); ctx.arc(x, y, 12 + pt * 18, 0, 6.283); ctx.stroke()
          ctx.globalAlpha = a; ctx.fillStyle = C['surface-raised']
          ctx.beginPath(); ctx.arc(x, y, 13, 0, 6.283); ctx.fill(); ctx.strokeStyle = C['line-strong']; ctx.lineWidth = 1; ctx.stroke()
          ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 6, 0, 6.283); ctx.fill()
        } else {
          ctx.fillStyle = C['surface-raised']; ctx.strokeStyle = C['line-strong']; ctx.lineWidth = 1.5
          ctx.beginPath(); ctx.arc(x, y, 4.5, 0, 6.283); ctx.fill(); ctx.stroke()
        }
        if (mobile && !n.hub) { ctx.globalAlpha = 1; return }
        ctx.fillStyle = C['ink-muted']; ctx.font = '500 10px "JetBrains Mono", ui-monospace, monospace'; ctx.textBaseline = 'middle'
        let lx = x + (n.hub ? 20 : 10)
        if (lx + ctx.measureText(n.label).width > W - 8) { ctx.textAlign = 'right'; lx = x - (n.hub ? 20 : 10) } else ctx.textAlign = 'left'
        ctx.fillText(n.label, lx, y)
        ctx.globalAlpha = 1
      })
      if (!reduce && visible) raf = requestAnimationFrame(draw)
    }

    const start = () => { cancelAnimationFrame(raf); readColors(); layout(); t0 = performance.now(); raf = requestAnimationFrame(draw) }
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw) } })
    io.observe(host)
    const onVis = () => { visible = !document.hidden; if (visible && !reduce) raf = requestAnimationFrame(draw) }
    document.addEventListener('visibilitychange', onVis)
    const ro = new ResizeObserver(() => { layout(); if (reduce) draw(performance.now()) })
    ro.observe(host)
    const mo = new MutationObserver(() => { readColors(); if (reduce) draw(performance.now()) })
    mo.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })
    if (document.fonts?.ready) document.fonts.ready.then(start)
    else start()
    if (!reduce) cv.animate([{ opacity: 0, transform: 'scale(1.025)' }, { opacity: 1, transform: 'none' }], { duration: 1400, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' })

    return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); mo.disconnect(); document.removeEventListener('visibilitychange', onVis) }
  }, [])

  return <canvas ref={ref} aria-hidden="true" />
}
