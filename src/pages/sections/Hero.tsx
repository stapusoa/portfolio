import React from "react";

interface HeroProps {
  product: string;
  tagline: string;
  primary: string;
  secondary: string;
}

const Hero: React.FC<HeroProps> = ({ product, tagline, primary, secondary }) => {

  return (
      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
        <div className="left max-w-2xl px-32 py-28 sm:py-36 lg:py-48">
          <div className="text-left">
            <h1 className="mb-2 hover:drop-shadow-sm relative text-balance font-gilroy text-8 font-300 tracking-tight text-green">
              {product}
            </h1>
            <h1 className="h1 mt-0 mb-8">
              {tagline}
            </h1>
            <div className="flex items-left justify-left gap-x-4">
              <a
                href="#"
                className="btn-primary w-16"
              >
                {primary}
              </a>
              <a href="#" className="btn-outline w-16">
                {secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero;