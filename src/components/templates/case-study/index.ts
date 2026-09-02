/**
 * Public API of the case-study feature.
 *
 * Pages import from here; nothing outside the feature should reach into
 * `./components/*` or `./data/*` directly. Keeping the surface explicit is what
 * lets the feature stay lazy-loadable — see the route split in `src/App.tsx`.
 */

export { caseStudies } from './data/case-studies'
export type * from './types'

// Page-level sections
export { default as Hero } from '@/components/templates/Hero'
export { default as Overview } from './Overview'
export { default as Problem } from './Problem'
export { default as Insights } from './Insights'
export { default as Outcomes } from './Outcomes'
export { default as Understand } from './Understand'
export { default as Questions } from './Questions'
export { default as Section } from './Section'
export { default as BlogCard } from './BlogCard'
export { default as SprintImg } from './Sprint'

/** The narrative "goal" section. Distinct from `GoalNotes` below. */
export { default as Goal } from './Goal'

// Cards
export { PhaseCard } from './cards/ExpandCard'
export { ProjectCard } from './cards/ProjectCard'
export { default as PersonaCard } from './cards/PersonaCard'
export { default as QuestionCard } from './cards/QuestionCard'
export { default as SprintCard } from './cards/SprintCard'

// Process artefacts
export { default as Journey } from './process/Journey'
export { default as PainPoints } from './process/PainPoints'
export { default as SiteMap } from './process/SiteMap'
export { Understanding } from './process/UnderstandingQs'
export { UserPersonas } from './process/UserPersonas'
export { Whiteboard } from './process/Whiteboard'

/**
 * Sticky-note grid of project goals. Exported under a distinct name because
 * `process/Goals.tsx` and `components/Goal.tsx` both export a `Goal` — two
 * unrelated components that collided once they shared a barrel.
 */
export { Goal as GoalNotes } from './process/Goals'
