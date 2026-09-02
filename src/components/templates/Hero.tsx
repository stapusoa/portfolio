import React from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

interface HeroProps {
  product: string;
  tagline: string;
  image?: string;
  /** Optional pill above the product name (e.g. the case-study category). */
  category?: string;
  /**
   * Primary in-app action — e.g. advance to the next case study. When
   * provided, the hero renders navigation buttons instead of external links.
   */
  onNext?: () => void;
  nextLabel?: string;
  /**
   * Secondary in-app action — e.g. return to the work index. Also powers the
   * top "Back to Projects" link when set; otherwise that link falls back to
   * navigating to /work.
   */
  onBack?: () => void;
  backLabel?: string;
  // External-link mode: used when the hero fronts a live product/prototype.
  primary?: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
  target?: string;
  rel?: string;
  wip?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  product,
  tagline,
  image,
  category,
  onNext,
  nextLabel = "Next case study",
  onBack,
  backLabel = "All case studies",
  primary,
  secondary,
  primaryHref,
  secondaryHref,
}) => {

  const navigate = useNavigate()
  const hasActions = Boolean(onNext || onBack);
  const showButtons = primary || secondary;

  const handleBackToProjects = () => {
    if (onBack) {
      onBack()
      return
    }
    navigate("/work")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative isolate h-screen w-full">
      <img alt={product} src={image} className="fixed inset-0 w-full h-full object-cover object-top-right hidden lg:block z-0" />
      <div className="relative isolate flex flex-col justify-end pb-6 min-h-[calc(100dvh-64px)] left mx-auto max-w-300 px-6 sm:px-6 md:px-14 lg:px-32">
        <div className="text-left flex flex-col gap-2 items-start">
          <Button
              variant="ghost"
              onClick={handleBackToProjects}
              className="mb-8 p-0 h-auto"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Button>
          {category && (
            <Badge variant="secondary" className="mb-4">
              {category}
            </Badge>
          )}
          <p className="mb-2 hover:drop-shadow-sm relative text-balance font-sans lowercase text-label md:text-subheader md:text-3xl lg:text-3xl font-light tracking-tight text-primary">
            {product}
          </p>
          <h1 className="mx-0 mt-0 mb-8 pr-6 md:pr-24 lg:pr-54 font-serif lowercase text-4xl md:text-title lg:text-hero leading-none text-accent font-semibold">
            {tagline}
          </h1>

          <div className="flex items-start justify-start gap-x-4">
            {hasActions ? (
              <>
                {onNext && (
                  <Button variant="default" size="lg" onClick={onNext}>
                    {nextLabel}
                  </Button>
                )}
                {onBack && (
                  <Button variant="outline" size="lg" onClick={onBack}>
                    {backLabel}
                  </Button>
                )}
              </>
            ) : showButtons ? (
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
