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
export { default as Hero } from './components/Hero'
export { default as Overview } from './components/Overview'
export { default as Problem } from './components/Problem'
export { default as Insights } from './components/Insights'
export { default as Outcomes } from './components/Outcomes'
export { default as Understand } from './components/Understand'
export { default as Questions } from './components/Questions'
export { default as Section } from './components/Section'
export { default as BlogCard } from './components/BlogCard'
export { default as SprintImg } from './components/Sprint'

/** The narrative "goal" section. Distinct from `GoalNotes` below. */
export { default as Goal } from './components/Goal'

// Cards
export { PhaseCard } from './components/cards/ExpandCard'
export { ProjectCard } from './components/cards/ProjectCard'
export { default as PersonaCard } from './components/cards/PersonaCard'
export { default as QuestionCard } from './components/cards/QuestionCard'
export { default as SprintCard } from './components/cards/SprintCard'

// Process artefacts
export { default as Journey } from './components/process/Journey'
export { default as PainPoints } from './components/process/PainPoints'
export { default as SiteMap } from './components/process/SiteMap'
export { Understanding } from './components/process/UnderstandingQs'
export { UserPersonas } from './components/process/UserPersonas'
export { Whiteboard } from './components/process/Whiteboard'

/**
 * Sticky-note grid of project goals. Exported under a distinct name because
 * `process/Goals.tsx` and `components/Goal.tsx` both export a `Goal` — two
 * unrelated components that collided once they shared a barrel.
 */
export { Goal as GoalNotes } from './components/process/Goals'
