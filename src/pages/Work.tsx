import { caseStudies, ProjectCard } from '@/features/case-study'

export default function Work() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-14 lg:px-32 py-28 lg:py-36">
      <h1 className="text-title font-serif text-default lowercase mb-12">work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
