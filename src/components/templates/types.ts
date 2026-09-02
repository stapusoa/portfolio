/**
 * Types for the case-study feature.
 *
 * This file used to also carry an e-commerce domain — `Product`,
 * `ProductWithQuantity`, `FeatureProps` with `onAddToCart`/`onCardClick`, a
 * `GalleryProps`/`HeroProps`/`OverlayProps` chain, `WorkProps`, and
 * `CaseStudyProps` — none of which had a single consumer, and whose `any`s
 * accounted for every `no-explicit-any` error in the project. (`Hero.tsx`
 * declares its own local `HeroProps`; it never imported the one here.)
 */

export interface CaseStudyDesignSystem {
  colors: { name: string; hex: string; usage: string }[]
  typography: {
    name: string
    size: string
    weight: string
    lineHeight: string
    usage: string
  }[]
  spacing?: { name: string; value: string; usage: string }[]
  components: {
    name: string
    description: string
    variants: string[]
    states?: string[]
    sizes?: string[]
    features?: string[]
    props: { name: string; type: string; description: string }[]
    code?: string
  }[]
}

export interface CaseStudyProcess {
  phase: string
  description: string
  deliverables: string[]
  pages?: {
    page: string
    sections: {
      section: string
      details: string[]
    }[]
  }[]
  children?: React.ReactNode
}

export interface CaseStudySummary {
  id: string
  title: string
  description: string
  image: string
  href: string
  category?: string
  align?: "right" | "left" | "center"
}

export interface CaseStudy {
  /** URL slug. Must match the `href` used in `lib/constants/routes.ts`. */
  summary: CaseStudySummary
  duration: string
  team: string[] | React.ReactNode
  role: string[] | React.ReactNode
  challenge: string
  solution: string
  impact: string[]
  tag?: string
  process: CaseStudyProcess[]
  designSystem?: CaseStudyDesignSystem
  designSystemLink: string
  /** Carried for a future prototype route; nothing links to it today. */
  prototypeId: string
}

export interface PhaseCardProps {
  phaseNumber: number
  title: string
  description: string
  children?: React.ReactNode
}

export interface ProjectCardProps {
  project: CaseStudy
  onNavigate?: (id: string) => void
}
