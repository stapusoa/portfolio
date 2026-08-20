
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Camera, Feather, Globe, MessageCircle } from 'lucide-react'
import { Reveal } from '@/lib/hooks/useReducedMotion'

export function Footer() {
  const [sent, setSent] = useState(false)

  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              let&apos;s work together
            </p>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl">
              Reach out if you&apos;d like to collaborate on your next big idea.
            </h2>
            <div className="mt-8 flex items-center gap-4">
              {[Globe, MessageCircle, Camera].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-10 place-items-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-0.5"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <input
                required
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                rows={4}
                placeholder="Tell me about your project"
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="w-fit rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {sent ? 'Thanks — I’ll be in touch!' : 'Submit'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <Link to="/" className="flex items-center gap-2 font-serif font-semibold text-foreground">
            <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
              <Feather className="size-3.5" />
            </span>
            sara tapusoa
          </Link>
          <p>© 2026 Sara Tapusoa. All rights reserved.</p>
          <nav className="flex items-center gap-6" aria-label="Footer">
            <a href="#" className="transition-colors hover:text-foreground">about</a>
            <a href="#contact" className="transition-colors hover:text-foreground">contact</a>
            <a href="#" className="transition-colors hover:text-foreground">linkedin</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
