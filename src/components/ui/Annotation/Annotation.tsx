import React, { useState, useEffect, useRef } from "react";

interface AnnotationProps {
  page: string;
  image: string;
  step: string;
  explanation: string;
  imgTranslateX: number; // Image translation X position
  imgTranslateY: number; // Image translation Y position
  imgScale: number; // Image scaling factor
  svgContainerX: number;
  svgContainerY: number;
  ringWidth: number;
  ringHeight: number;
  svgWidth: number;
  svgHeight: number;
  svgPath: string;
  delay: number;
  isVisible: boolean;
}

const Annotation: React.FC<AnnotationProps> = ({
  page,
  image,
  step,
  explanation,
  imgTranslateX,
  imgTranslateY,
  imgScale,
  svgContainerX,
  svgContainerY,
  ringWidth,
  ringHeight,
  svgWidth,
  svgHeight,
  svgPath,
  delay,
  isVisible
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    // Captured now: by the time cleanup runs, containerRef.current may already
    // point somewhere else (or be null), so unobserve would target the wrong node.
    const element = containerRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const shouldAnimate = isInView && isVisible;


  return (
    <div
      ref={containerRef}
      className={`relative bg-neutral-300 border-solid border-4 border-neutral-300 rounded-[2rem] w-300 h-220 flex items-center justify-center delay-${delay} overflow-hidden`}

   >
      <img
        loading="lazy"
        decoding="async"
        alt={`Wireframe: ${page}`}
        src={image}
        className="w-250 transition-transform duration-1000 delay-2000 ease-in-out"
        style={{
          transform: isInView
            ? `translate(${imgTranslateX}px, ${imgTranslateY}px) scale(${imgScale / 100})`
            : "translate(0px, 0px) scale(1)",
        }}
      />
      
      <div
        className={`bg-white w-120 h-full top-0 p-16 flex flex-col gap-3 absolute -left-120 transition-transform duration-1000 ease-in-out ${
          shouldAnimate ? "translate-x-120" : "-translate-x-[150px]"
        }`}
      >
        <div className="font-sans font-light text-mint-600 text-2xl leading-relaxed">
          {step}
        </div>
        <div className="font-sans font-light text-neutral-800 text-2xl leading-relaxed">
          {explanation}

        </div>
      </div>
      
      <div className="absolute right-0 top-0 overflow-visible"
      style={{
        paddingRight: `${svgContainerX}px`,
        paddingTop: `${svgContainerY}px`,
      }}>
        <div className="flex items-center justify-center">
          <div 
          style={{
            width: `${ringWidth}px`,
            height: `${ringHeight}px` }}
            className={`relative ring-mint-600/50 ring-10 ring-offset-0 rounded-xl ${
              shouldAnimate ? "opacity-100 scale-100 ring-pulse-animation" : "opacity-0 scale-0"
            }`}
             />
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute bg-white rounded-2xl border-solid border-4 border-mint-600 duration-1000 ${
              shouldAnimate ? "opacity-100 scale-100" : "opacity-0 scale-80"
            }`}
            dangerouslySetInnerHTML={{ __html: svgPath }}
          />
        </div>
      </div>
      {/* this div should animate in sliding from the left after a delay of 2s and pushes the image to the right */}
      <style>
        {`
        @keyframes slideText {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slideImage {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100px);
          }
        }
          .ring-pulse-animation {
            animation: pulse 2s infinite;
          }
        `}
      </style>
    </div>

  );
};

export default Annotation;