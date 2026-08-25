import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

/**
 * Fades and lifts its children into view the first time they're scrolled to.
 *
 * Previously lived in `lib/hooks/useReducedMotion.tsx` — a filename that
 * promised a hook and a reduced-motion check, while exporting a component and
 * doing neither. `e2e/helpers.ts` documents Playwright's `reducedMotion:
 * 'reduce'` as driving it, which only became true with the guard below.
 */
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (prefersReducedMotion) {
    // Render in the final state: visible, unmoved, no transition.
    return <MotionTag className={className}>{children}</MotionTag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
