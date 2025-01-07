import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./annotation.css";

const ArrowAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect(); // Disconnect after triggering once
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  const triggerAnimation = () => {
    const targetElement = document.querySelector(".target-element");
    const annotation = document.querySelector(".annotation");
    const arrowPath = document.getElementById("arrow-path");

    if (targetElement && annotation && arrowPath) {
      // Create and append the animated circle
      const circle = document.createElement("div");
      circle.classList.add("circle");
      targetElement.appendChild(circle);

      // Trigger the arrow animation
      gsap.to(arrowPath, {
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          // Show annotation after arrow animation completes
          annotation.classList.add("show-annotation");
        },
      });
    }
  };

  return (
    <div ref={containerRef} className="container">
      <div className="target-element">Target</div>

      {/* Hand-Drawn Circle */}
      <svg
        className="hand-drawn-circle"
        width="54"
        height="57"
        viewBox="-10 -10 64 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_953_30306)">
          <path
            className="path"
            d="M10.6938 28.158C8.02714 22.8247 5.62919 12.7504 11.1938 7.15802C17.9269 0.391296 43.8367 -3.19761 50.6928 19.158C57.5489 41.5137 42.6928 49.6582 32.1928 52.6577C32.1928 52.6577 10.6936 56.6582 3.69304 35.6577C3.69304 35.6577 1.19141 28.158 5.69286 20.6574C11.6939 10.6581 18.193 6.65862 21.193 7.15802"
            stroke="#DE5B3E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_953_30306"
            x="-10"
            y="-10"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.870588 0 0 0 0 0.356863 0 0 0 0 0.243137 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_953_30306"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_953_30306"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* Arrow */}
      <svg
        className="arrow"
        id="arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 133 22"
        width="133"
        height="22"
        fill="none"
      >
        <path
          id="arrow-path"
          className="draw-arrow"
          d="M131.5 11H2.5"
          stroke="#DE5B3E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="400"
          strokeDashoffset="400"
        />
        <path
          id="tail-1"
          className="draw-arrow tail-1"
          d="M11.5 1.5L2 11"
          stroke="#DE5B3E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="400"
          strokeDashoffset="400"
        />
        <path
          id="tail-2"
          className="draw-arrow tail-2"
          d="M2 11L11.5 20.5"
          stroke="#DE5B3E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="400"
          strokeDashoffset="400"
        />
      </svg>

      {/* Annotation */}
      <div className="annotation">
        <p>This is the annotation text.</p>
      </div>
    </div>
  );
};

export default ArrowAnimation;