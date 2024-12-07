import { useState, useEffect } from 'react';

const roles = ['designer', 'engineer', 'architect'];

const HomeHero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
  <>
  <img
          alt="Background image for About page"
          src="/portfolio/images/lg_bg-home-hero.webp" // Default (large screen)
          className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-[-1] inset-0 hidden lg:block"
        />
        <img
          alt="Background image for About page - tablet"
          src="/portfolio/images/md_bg-home-hero.webp" // Tablet
          className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-[-1] inset-0 hidden md:block lg:hidden"
        />
        <img
          alt="Background image for About page - mobile"
          src="/portfolio/images/sm_bg-home-hero.jpg" // Mobile
          className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-[-1] inset-0 block md:hidden"
        />
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
          <div className="left max-w-2xl px-32 py-28 sm:py-36 lg:py-48">
            <div className="text-left">
              <h1 className="mb-2 hover:drop-shadow-sm relative text-balance font-gilroy text-8 font-300 tracking-tight text-green">
                product{' '}
                <span className="transition-opacity duration-500 ease opacity-100">
                  {roles[currentRole]}
                </span>
              </h1>
              <h1 className="mt-0 mb-8 text-16 font-gilroy font-700 leading-16 text-blue">
                designing for users, <br />
                not just pixels.
              </h1>
              <div className="flex items-left justify-left gap-x-4">
                <a
                  href="#"
                  className="btn-primary w-16"
                >
                  projects
                </a>
                <a href="#" className="btn-outline w-16">
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default HomeHero;