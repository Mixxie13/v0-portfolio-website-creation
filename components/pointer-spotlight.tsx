'use client'

import { useEffect } from 'react'

/**
 * Mounted once globally. Tracks the pointer and writes --mx/--my (in px,
 * relative to the hovered element) onto the nearest `.spotlight` ancestor,
 * powering the radial highlight defined in globals.css.
 */
export function PointerSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    let pending: { el: HTMLElement; x: number; y: number } | null = null

    const flush = () => {
      frame = 0
      if (!pending) return
      pending.el.style.setProperty('--mx', `${pending.x}px`)
      pending.el.style.setProperty('--my', `${pending.y}px`)
      pending = null
    }

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      const el = target?.closest<HTMLElement>('.spotlight')
      if (!el) return
      const rect = el.getBoundingClientRect()
      pending = { el, x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (!frame) frame = requestAnimationFrame(flush)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
