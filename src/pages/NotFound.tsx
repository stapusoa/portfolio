import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'

/**
 * Catch-all route. Reached by any URL that matches no route, including the
 * case-study slugs that used to fall through to a bare "Project not found".
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-28 md:px-14 lg:px-32">
      <p className="font-sans text-label lowercase tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="font-serif text-title lowercase text-default">
        this page doesn&rsquo;t exist
      </h1>
      <p className="max-w-prose text-base text-muted-foreground">
        The link may be out of date, or the page may have moved. The work is all
        still here.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/work" className={buttonVariants({ size: 'lg' })}>
          View the work
        </Link>
        <Link to="/" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
          Back home
        </Link>
      </div>
    </div>
  )
}
