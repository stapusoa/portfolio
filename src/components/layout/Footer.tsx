import { useState } from 'react'
import { Link } from 'react-router-dom'

import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'
import { Reveal } from '@/components/ui/Reveal'
import { useContactForm } from '@/lib/hooks/useContactForm'

const LOGO = '/logo.svg'

const FIELD_CLASS =
  'w-full rounded-lg border border-input bg-input px-4 py-3.5 text-base text-default outline-none transition-colors placeholder:text-input-placeholder focus:border-primary'

export function Footer() {
  const { submit, status, error, isSending } = useContactForm()
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await submit(fields)
    if (ok) setFields({ name: '', email: '', message: '' })
  }

  return (
    <footer id="contact" className="relative z-100 border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-8xl flex-col px-6 py-20 md:px-14 md:py-28 lg:px-30">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="flex flex-col justify-start">
            <p className="text-left font-sans text-label font-normal lowercase tracking-widest text-muted-foreground">
              let&apos;s work together
            </p>
            <h2 className="mt-3 max-w-md text-balance text-left font-serif text-3xl font-semibold leading-tight text-default md:text-4xl">
              Reach out if you&apos;d like to collaborate on your next big idea.
            </h2>

            <SocialLinks className="mt-8" />
          </Reveal>

          <Reveal delay={0.1}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/*
                Labels are visually hidden rather than absent: a placeholder
                disappears as soon as you type and is not a label to begin with.
              */}
              <label htmlFor="footer-name" className="sr-only">
                Name
              </label>
              <input
                id="footer-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Name"
                value={fields.name}
                onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                className={FIELD_CLASS}
              />

              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                value={fields.email}
                onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                className={FIELD_CLASS}
              />

              <label htmlFor="footer-message" className="sr-only">
                Tell me about your project
              </label>
              <textarea
                id="footer-message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project"
                value={fields.message}
                onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                className={`${FIELD_CLASS} resize-none`}
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-fit rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? 'Sending…' : 'Submit'}
              </button>

              {/* Announced when it appears, not just shown. */}
              <p role="status" aria-live="polite" className="min-h-5 text-sm">
                {status === 'sent' && (
                  <span className="text-mint-600">Thanks — I&rsquo;ll be in touch!</span>
                )}
                {status === 'error' && <span className="text-cherry-500">{error}</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-8xl flex-col gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-14 lg:px-30">
          <Link to="/" className="flex items-center gap-2 font-serif font-semibold text-foreground">
            <img
              src={LOGO}
              alt="Sara Tapusoa — home"
              width={96}
              height={16}
              loading="lazy"
              decoding="async"
              className="h-4 w-auto"
            />
          </Link>
          <p>© 2026 Sara Tapusoa. All rights reserved.</p>
          <nav className="flex items-center gap-6" aria-label="Footer">
            <Link to="/about" className="transition-colors hover:text-foreground">
              about
            </Link>
            <Link to="/work" className="transition-colors hover:text-foreground">
              work
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
