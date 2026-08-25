import { PageBackground, PaperSeparator } from '@/components/layout'
import { HomeHero, Roles, FeaturedCaseStudies } from '@/features/home'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <PageBackground src="/images/bg-home-texture.webp" />

      <HomeHero />

      <div className="relative mt-12 w-full z-20">
        <PaperSeparator />

        {/*
          Decorative texture: empty alt + aria-hidden so screen readers skip it
          instead of announcing "Background pattern for content".
        */}
        <img
          src="/images/bg-texture-dots.webp"
          alt=""
          aria-hidden="true"
          width={1600}
          height={800}
          className="absolute inset-0 bg-cover bg-fixed w-full h-800"
        />

        <section aria-labelledby="roles-heading">
          <h2 id="roles-heading" className="sr-only">
            What I do
          </h2>
          <Roles />
        </section>

        {/* The hero's "view my work" button links to #work; this is its target. */}
        <section id="work" aria-labelledby="work-heading" className="scroll-mt-20">
          <h2 id="work-heading" className="sr-only">
            Selected work
          </h2>
          <FeaturedCaseStudies />
        </section>
      </div>
    </div>
  )
}
