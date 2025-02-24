import React from "react";

interface HeroProps {
  product: string;
  tagline: string;
  primary: string;
  secondary: string;
  primaryHref: string;
  secondaryHref: string;
}

const Hero: React.FC<HeroProps> = ({ product, tagline, primary, secondary, primaryHref, secondaryHref }) => {

  return (
      <div className="relative isolate pt-20 h-screen">
        <div className="left mx-auto max-w-300 px-6 sm:px-6 md:px-14 lg:px-32 py-28 sm:py-36 lg:pt-58 lg:pb-20">
          <div className="text-left">
            <h1 className="mb-2 hover:drop-shadow-sm relative text-balance font-gilroy text-6 md:text-7 lg:text-8 font-300 tracking-tight text-green">
              {product}
            </h1>
            <h1 className="mx-0 mt-0 mb-8 pr-6 md:pr-24 lg:pr-54 font-gilroy text-9 md:text-14 lg:text-16 leading-none text-blue font-bold">
              {tagline}
            </h1>
            <div className="flex items-left justify-left gap-x-4">
              <a
                href={primaryHref}
                className="btn-primary w-16"
              >
                {primary}
              </a>
              <a href={secondaryHref} className="btn-outline w-16">
                {secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero;