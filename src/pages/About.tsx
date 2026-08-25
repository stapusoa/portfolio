
import { Link } from 'react-router-dom'
import { PageBackground } from '@/components/layout'

const images = {
  mobileSrc: '/images/bg-about-hero_sm.webp',
  tabletSrc: '/images/bg-about-hero_md.webp',
  desktopSrc: '/images/bg-about-hero_lg.webp',
};

const About = () => {

  return (
    <>

      <div className="relative w-full">
        <PageBackground src={images.mobileSrc}
          tabletSrc={images.tabletSrc}
          desktopSrc={images.desktopSrc} />
        <div className="relative isolate min-h-screen px-6 pt-14 lg:px-8">
          <div className="max-w-2xl px-6 py-28 md:px-14 sm:py-36 lg:px-32 lg:py-48">

            <div className="text-left">
              <p className="mb-2 hover:drop-shadow-sm relative text-balance font-sans text-3xl font-light tracking-tight text-mint-600">
                about me
              </p>
              <h1 className="mt-0 mb-8 text-hero font-sans font-bold leading-16 text-ocean-500">
                Combining design, research, and frontend to build impactful, user-driven systems
              </h1>
              <div className="flex items-start justify-start gap-x-4">
                <Link to="/work" className="btn-primary w-16">
                  projects
                </Link>
                <a
                  href="https://github.com/stapusoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-16"
                >
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-white w-full">
          <div className="relative z-10 flex flex-col w-full">
            <div className="bg-white pt-28 pb-16 px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="py-2 text-left">
                  <h2 className="m-0 font-sans font-light text-3xl text-neutral-800 tracking-wide">skills</h2>
                </div>

                {/* Skills List */}
                <div className="flex flex-row items-start gap-8 text-left w-full">
                  {/* Left Column Skills */}
                  <ul className="p-0 list-disc list-inside space-y-2 w-1/2">
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      UX design principles & processes
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      User research and statistics
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      UI & graphic design
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Prototyping
                    </li>
                  </ul>

                  {/* Right Column Skills */}
                  <ul className="p-0 list-disc list-inside space-y-2 w-1/2">
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Design systems
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Frontend engineering
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Frontend architecture
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Organization & processes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white pt-28 pb-16 px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="py-2 text-left">
                  <h2 className="m-0 font-sans font-light text-3xl text-neutral-800 tracking-wide">tools</h2>
                </div>

                {/* Skills List */}
                <div className="flex flex-row items-start gap-8 text-left w-full">
                  {/* Left Column Skills */}
                  <ul className="p-0 list-disc list-inside space-y-2 w-1/2">
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Figma
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Procreate for sketching
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Linear for tickets
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Google forms & excel for research
                    </li>
                  </ul>

                  {/* Right Column Skills */}
                  <ul className="p-0 list-disc list-inside space-y-2 w-1/2">
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Google Analytics & Hotjar
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      Git/Github for version control
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      VS code & Xcode
                    </li>
                    <li className="text-neutral-900 font-sans font-medium text-3xl leading-tight">
                      React and React Native
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white pt-28 pb-16 px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="py-2 text-left">
                  <h2 className="m-0 font-sans font-light text-3xl text-neutral-800 tracking-wide">my approach to design</h2>
                </div>

                <div className="flex flex-col items-start gap-8 text-left w-full">
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    My approach to user-centered design begins with deep competitive research and a clear understanding of the problem. I start by identifying common pain points, formulating a problem statement, and then diving into the UX process—whether that’s a design sprint or another structured approach. Every UX journey, for me, centers on the user’s goals and challenges.
                  </p>
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    Since UX is an ever-evolving, iterative process, research and testing are essential. Without these, we can’t truly understand what’s working (and what’s not) for our users, nor can we accurately define the problem. This clarity is the foundation of my work.
                  </p>
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    In my design philosophy, aesthetics are important, but I’m pragmatic. My first priority is always: “Does this solution solve the problem?” Once I’m confident it does, I focus on refining the UI, but without altering core functionality. Too much focus on visual style can sometimes introduce new issues; after all, UI is often subjective.
                  </p>

                </div>
              </div>
            </div>
            <div className="bg-white pt-28 pb-16 px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="py-2 text-left">
                  <h2 className="m-0 font-sans font-light text-3xl text-neutral-800 tracking-wide">my journey</h2>
                </div>

                <div className="flex flex-col items-start gap-8 text-left w-full">
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    My journey into UX began, like many, with graphic design. But designing purely for aesthetics didn’t feel like enough of a challenge. I was drawn to UX for its focus on research, problem-solving, and iteration. Yet, even UX alone didn’t feel like the full picture—I wanted to complete the puzzle, and that’s what led me to learn to code and eventually discover my love for building design systems.                 </p>
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    Today, while I still enjoy UI, UX design, and research, my true passion lies in creating cohesive design systems. I’m dedicated to developing frameworks that empower teams to design with consistency and flexibility, making every user interaction meaningful and intentional.                 </p>
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    When balancing user needs with business goals, I keep the focus on impact. At the end of the day, it’s about aligning design decisions with both user value and business success—a balance I achieve through close collaboration with stakeholders.                 </p>

                </div>
              </div>
            </div>
            <div className="bg-white pt-28 pb-16 px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="py-2 text-left">
                  <h2 className="m-0 font-sans font-light text-3xl text-neutral-800 tracking-wide">fun facts</h2>
                </div>

                <div className="flex flex-col items-start gap-8 text-left w-full">
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    Beyond design and development, I’m passionate about puzzles and problem-solving. This mindset fuels my approach to UX, but it’s also at the heart of other interests, like climbing—especially bouldering. Although I’ve taken a break since having two little ones, I’m motivated to get back into shape for climbing soon.                  </p>
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    I’m also a gamer at heart, whether it’s video games, board games, card games, or a round of poker or blackjack. In addition, I play a few instruments and enjoy watching anime (but I’m not a “weeaboo,” as friends joke!). I’m part Japanese, though you wouldn’t guess by looking at me—fun fact: my husband, daughters, and I are all the same amount of Japanese.                 </p>
                  <p className='m-0 font-sans font-medium text-3xl leading-relaxed text-neutral-900'>
                    I speak Malay and a bit of Japanese, though English is technically my native language, despite often misusing it! My friends once gave me the nickname “Goldfish” for my memory. Thankfully, technology, especially Apple and Google Maps, keeps me on track. Without them, I’d be getting lost all the time.                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
