import { socialLinks } from '@/lib/constants/social'
import { cn } from '@/lib/cn'

type SocialLinksProps = {
  className?: string
  /** `icons` is the bare icon row; `labelled` adds the platform name beside each. */
  variant?: 'icons' | 'labelled'
}

/**
 * The one social-profile row. Both the footer and the about page render this
 * instead of each maintaining their own copy of the list and its SVGs.
 */
export default function SocialLinks({ className, variant = 'icons' }: SocialLinksProps) {
  if (variant === 'labelled') {
    return (
      <ul className={cn('flex flex-wrap gap-4 p-0 list-none', className)}>
        {socialLinks.map(({ name, url, Icon }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-hover flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 shadow-sm backdrop-blur-sm hover:shadow"
            >
              <span className="size-5">
                <Icon />
              </span>
              <span className="text-sm">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={cn('flex items-center gap-4 p-0 list-none', className)}>
      {socialLinks.map(({ name, url, Icon }) => (
        <li key={name}>
          <a
            href={url}
            aria-label={name}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative grid size-10 place-items-center rounded-full bg-transparent text-default transition-transform duration-200 ease-in-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span className="absolute inset-0 rounded-full bg-background opacity-0 transition-opacity group-hover:opacity-100 group-hover:shadow-md" />
            <span className="relative z-10 grid size-8 place-items-center transition-transform group-hover:scale-105 group-hover:text-primary">
              <Icon />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
