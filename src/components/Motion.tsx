'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

/**
 * Site-wide motion, following the Motion section of the Triyasa Design System:
 * smooth scroll (Lenis), block reveal, word scrub, Navy section shift, process rail, counters, card spotlight.
 */
export function Motion() {
  const pathname = usePathname()

  // Smooth scroll — desktop pointers only, never with reduced motion.
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = matchMedia('(hover: none)').matches
    if (reduce || touch) return
    const lenis = new Lenis({ lerp: 0.1, anchors: true })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  // Card spotlight follows the pointer.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest?.('.ty-card') as HTMLElement | null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  // Scroll-driven patterns, rebuilt on every route.
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = matchMedia('(max-width: 767px)').matches
    document.body.removeAttribute('data-theme')

    const ctx = gsap.context(() => {
      // Counters (also run with reduced motion: they just show the final value).
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count || 0)
        if (reduce) return
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onStart: () => { el.textContent = '0' },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)) },
        })
      })

      // Process rail.
      gsap.utils.toArray<HTMLElement>('[data-steps]').forEach((list) => {
        const rail = list.querySelector<HTMLElement>('.ty-steps__rail')
        const fill = rail?.querySelector<HTMLElement>('span')
        const steps = list.querySelectorAll<HTMLElement>('.ty-step')
        if (rail) list.style.setProperty('--rail', `${rail.getBoundingClientRect().width}px`)
        if (reduce) {
          steps.forEach((s) => s.classList.add('is-on'))
          return
        }
        ScrollTrigger.create({
          trigger: list,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            if (fill) gsap.fromTo(fill, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: 'power4.out' })
            steps.forEach((s, i) => gsap.delayedCall(0.15 + i * 0.22, () => s.classList.add('is-on')))
            gsap.delayedCall(1.4, () => list.classList.add('is-on'))
          },
        })
      })

      if (reduce) return

      // Hero intro (pattern 1).
      gsap.utils.toArray<HTMLElement>('[data-hero-copy]').forEach((el) => {
        gsap.from(el.children, { y: 16, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, delay: 0.05 })
      })
      gsap.from('.ty-hero__cards .ty-status, .ty-hero__visual', { y: 16, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.15, delay: 0.6 })

      // Block reveal (pattern 2).
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        const targets = el.dataset.reveal === 'group' ? Array.from(el.children) : [el]
        gsap.from(targets, {
          y: 32,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        })
      })

      // Word scrub (pattern 3) — desktop only.
      gsap.utils.toArray<HTMLElement>('[data-scrub]').forEach((el) => {
        if (mobile) {
          gsap.from(el, { y: 32, opacity: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
          return
        }
        const split = SplitText.create(el, { type: 'words' })
        gsap.fromTo(split.words, { opacity: 0.2 }, {
          opacity: 1,
          ease: 'none',
          stagger: 0.5,
          scrollTrigger: { trigger: el, start: 'top 70%', end: 'bottom 45%', scrub: true },
        })
      })

      // Navy section shift (pattern 8) — desktop only.
      if (!mobile) {
        gsap.utils.toArray<HTMLElement>('[data-shift]').forEach((sec) => {
          ScrollTrigger.create({
            trigger: sec,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => {
              if (self.isActive) document.body.setAttribute('data-theme', 'dark')
              else document.body.removeAttribute('data-theme')
            },
          })
        })
      }
    })

    const refresh = () => ScrollTrigger.refresh()
    const id = requestAnimationFrame(refresh)
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('load', refresh)
      ctx.revert()
      document.body.removeAttribute('data-theme')
    }
  }, [pathname])

  return null
}
