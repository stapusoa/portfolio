
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const roles = [
  'designer',
  'engineer',
  'strategist',
] as const;

const currentRole = 0;

function HomeHeroContent() {
    const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax layers move at different speeds as you scroll.
  const artY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <section
      ref={ref}
      className="bg-transparent relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* floating accent shape, parallaxed */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-24 top-10 -z-0 size-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8 justify-start align-start shrink-0">
        <motion.div style={{ y: copyY, opacity: fade}} className='flex flex-col justify-start shrink-0'>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex self-center md:self-start rounded-full bg-foreground px-3 py-1 text-xs font-semibold uppercase tracking-widest text-background justify-center"
          >
            UX Engineer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl text-center md:text-left"
          >
            designing for users,{' '}
            <span className="text-primary">not just pixels.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-center md:text-left"
          >
            6+ years designing and developing user-centered solutions for inventory
            management, travel, real estate, healthcare, and enterprise software. Based in
            Utah, working with teams worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: artY, scale: artScale }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <img
              src="/images/bg-home.webp"
              alt="Hand-drawn sketch of a rocket launching from a computer, surrounded by lightbulbs, gears and creative tools"
              className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* torn-paper bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-background"
        style={{
          clipPath:
            'polygon(0 60%, 4% 50%, 9% 62%, 15% 48%, 22% 60%, 30% 46%, 38% 58%, 47% 44%, 55% 58%, 63% 46%, 72% 60%, 80% 48%, 88% 62%, 95% 50%, 100% 60%, 100% 100%, 0 100%)',
        }}
      />
    </section>
  );
}

export default HomeHeroContent;