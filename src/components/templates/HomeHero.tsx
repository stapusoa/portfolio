
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge.tsx'
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/cn"

function HomeHero() {
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
    <>
      <section
        ref={ref}
        className="bg-transparent relative min-h-[85dvh] md:min-h-screen overflow-hidden flex flex-col justify-end pt-24 pb-4 md:pt-20 lg:pt-32 md:pb-40"
      >
        <motion.div
          aria-hidden
          style={{ y: blobY }}
          className="pointer-events-none absolute -right-24 top-10 -z-0 size-72 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative mx-auto grid w-full flex-1 content-end md:content-normal lg:max-w-8xl px-6 md:grid-cols-2 md:px-14 lg:px-30">
          <motion.div style={{ y: copyY, opacity: fade }} className='relative z-40 flex flex-col w-full lg:w-fit pb-4 md:pb-0'>
            <Badge
              variant="secondary"
              render={
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              }
            >
              UX Engineer
            </Badge>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-accent text-balance text-shadow-md sm:text-5xl md:text-6xl text-left"
            >
              designing for users,{' '}<br />
              <span className="text-primary">not just pixels.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-md text-base leading-relaxed text-default text-left"
            >
              6+ years designing and developing user-centered solutions for inventory
              management, travel, real estate, healthcare, and enterprise software. Based in
              Utah, working with teams worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center w-full md:w-fit gap-3"
            >
              <a
                href="#work"
                className={cn(
                  buttonVariants({ variant: "filled", color: "primary", size: "lg" }),
                  "w-full md:w-fit transition-transform hover:-translate-y-0.5"
                )}
              >
                View my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "filled", color: "secondary", size: "lg" }),
                  "w-full md:w-fit transition-transform hover:-translate-y-0.5"
                )}
              >
                Learn more
              </a>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: artY, scale: artScale }} className="absolute -right-12 top-0 md:static md:right-0 -mt-24 md:-mt-8 lg:-mt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mx-auto aspect-square w-full max-w-6xl min-w-xs md:min-w-lg overflow-hidden"
            >
              <img
                src="/images/bg-home.webp"
                alt="Hand-drawn sketch of a rocket launching from a computer, surrounded by lightbulbs, gears and creative tools"
                className="absolute inset-0 size-full object-cover mask-l-from-25% mask-l-to-90% md:mask-none scale-110 mix-blend-multiply"
              />
            </motion.div>
          </motion.div>
        </div>


      </section>
    </>
  );
}

export default HomeHero;