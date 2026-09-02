import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom' // or next/router if using Next.js
import { ArrowRight } from 'lucide-react'
import type { ProjectCardProps } from '@/features/case-study/types'
import { Button } from '@/components/ui/button/button'

/**
 * Class presets for this card. These lived in a top-level `lib/styles.ts`
 * described as "shared across the case-study/work UI", but ProjectCard was the
 * only file that ever imported them.
 */
const cardStyles = {
  base: 'group cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all hover:shadow-lg',
  imageWrapper: 'relative w-full aspect-[4/3] overflow-hidden',
  image: 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
  content: 'flex flex-col gap-2 p-6',
  title: 'text-xl font-semibold lowercase',
  subtitle: 'text-muted-foreground',
  footer: 'mt-4 flex items-center justify-between',
  tag: 'text-sm text-muted-foreground',
} as const

export function ProjectCard({ project, onNavigate }: ProjectCardProps ) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onNavigate) onNavigate(project.id)
    else navigate(`/work/${project.id}`)
  }

  return (
    <Card
      onClick={handleClick}
      className={
        cardStyles.base}
    >
      <div className={cardStyles.imageWrapper}>
        <img
          loading="lazy"
          decoding="async"
          src={project.image}
          alt={project.title}
          className={cardStyles.image}
        />
      </div>

      <div className={cardStyles.content}>
        <Badge variant="default" color="neutral">{project.category}</Badge>
        <h3 className={cardStyles.title}>{project.title}</h3>
        <p className={cardStyles.subtitle}>{project.subtitle}</p>

        <div className={cardStyles.footer}>
          <p className={cardStyles.tag}>{project.tag}</p>
          <Button size="sm" variant="ghost">
            View Case Study
            <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary" />
          </Button>
        </div>
      </div>
    </Card>
  )
}