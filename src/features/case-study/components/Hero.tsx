import React from "react";

interface HeroProps {
  product: string;
  tagline: string;
  primary?: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
  target?: string;
  rel?: string;
  wip?: boolean;
}

const Hero: React.FC<HeroProps> = ({ product, tagline, primary, secondary, primaryHref, secondaryHref }) => {

  const showButtons = primary || secondary;

  return (
    <div className="relative isolate pt-20 h-screen">
      <div className="left mx-auto max-w-300 px-6 sm:px-6 md:px-14 lg:px-32 py-28 sm:py-36 lg:pt-58 lg:pb-20">
        <div className="text-left">
          <p className="mb-2 hover:drop-shadow-sm relative text-balance font-sans text-2xl md:text-3xl lg:text-3xl font-light tracking-tight text-mint-600">
            {product}
          </p>
          <h1 className="mx-0 mt-0 mb-8 pr-6 md:pr-24 lg:pr-54 font-sans text-4xl md:text-title lg:text-hero leading-none text-ocean-500 font-bold">
            {tagline}
          </h1>

          <div className="flex items-start justify-start gap-x-4">
            {showButtons ? (
              <>
                {primary && (
                  <a
                    href={primaryHref}
                    className="btn-primary w-16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primary}
                  </a>
                )}
                {secondary && (
                  <a
                    href={secondaryHref}
                    className="btn-outline w-16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondary}
                  </a>
                )}
              </>
            ) : (
              <button
                disabled
                className="btn-primary w-20 opacity-60 cursor-not-allowed flex items-center gap-2"
              >
                <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;