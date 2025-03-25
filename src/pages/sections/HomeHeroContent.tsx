import React from "react";

interface HomeHeroContentProps {
  roles: string[];
  currentRole: number;
}

const HomeHeroContent: React.FC<HomeHeroContentProps> = ({ roles, currentRole }) => (
  <div className="relative isolate pt-20 h-screen">
    <div className="left mx-auto lg:max-w-300 px-6 sm:px-6 md:px-14 lg:px-32 py-28 sm:py-36 lg:pt-58 lg:pb-20">
      <div className="text-left">
        <h1 className="mb-2 hover:drop-shadow-sm relative text-balance font-gilroy text-6 sm:text-6 md:text-7 lg:text-8 font-300 tracking-tight text-green">
          product{' '}
          <span className="transition-opacity duration-500 ease opacity-100">
            {roles[currentRole]}
          </span>
        </h1>
        <h1 className="mt-0 mb-6 md:mb-8 text-9 sm:text-9 md:text-14 lg:text-16 font-gilroy font-700 leading-10 md:leading-16 text-blue">
          designing for users, <br />
          not just pixels.
        </h1>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-min items-left justify-left md:gap-x-4">
          <a href="https://www.figma.com/@tapt" className="btn-primary md:w-16">
            figma
          </a>
          <a href="https://github.com/stapusoa" className="btn-outline md:w-16">
            github
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomeHeroContent;