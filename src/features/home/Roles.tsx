import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const Roles: React.FC = () => {
  const roles = [
    {
      title: "product design",
      description:
        "Creating intuitive and engaging experiences that focus on user problems and meet business goals",
      image: "/images/role-product-illustration.webp",
    },
    {
      title: "user research",
      description:
        "Gathering insights to inform design decisions and ensure solutions are user-centered and effective",
      image: "/images/role-research-illustration.webp",
    },
    {
      title: "design systems",
      description:
        "Building scalable design systems that ensure consistency, efficiency, and cohesive experiences.",
      image: "/images/role-uxd-illustration.webp",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return; // Prevent multiple state updates while transitioning
      setIsTransitioning(true);

      setTimeout(() => {
        if (newIndex < 0) newIndex = roles.length - 1;
        if (newIndex >= roles.length) newIndex = 0;
        setCurrentSlide(newIndex);
        setIsTransitioning(false); // Allow next transition
      }, 400); // Matches CSS transition duration
    },
    [roles.length, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    changeSlide(currentSlide + 1);
  }, [currentSlide, changeSlide]);

  const prevSlide = useCallback(() => {
    changeSlide(currentSlide - 1);
  }, [currentSlide, changeSlide]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      nextSlide();
      resetTimer();
    },
    onSwipedRight: () => {
      prevSlide();
      resetTimer();
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Handle trackpad & mouse wheel horizontal scrolling
  const handleWheel = (event: React.WheelEvent) => {
    if (event.deltaX > 10) {
      nextSlide();
      resetTimer();
    } else if (event.deltaX < -10) {
      prevSlide();
      resetTimer();
    }
  };

  /*
   * These were plain functions rebuilt on every render, so `resetTimer` — a
   * useCallback with an empty dep array — captured the very first render's
   * `startAutoSlide`, and through it the first render's `nextSlide`. After a
   * swipe or wheel gesture the restarted timer advanced from a stale index.
   * Memoising them with honest dependencies keeps the timer pointing at the
   * current slide.
   */
  const stopAutoSlide = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide, stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  // startAutoSlide already clears any running interval first.
  const resetTimer = useCallback(() => {
    startAutoSlide();
  }, [startAutoSlide]);

  return (
    <div
      {...handlers}
      onWheel={handleWheel}
      className="relative lg:max-w-300 mx-auto bg-transparent z-30 pt-28 pb-16 px-6 md:px-14 lg:px-32 overflow-hidden"
    >
      {/* Slide Container */}
      <div className="relative h-150 md:h-96 flex items-center justify-center">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              visibility: index === currentSlide ? "visible" : "hidden", // Prevents flashes
              transitionDelay: index === currentSlide ? "0s" : "200ms", // Delays hiding old slide
            }}
          >
            <div className="flex flex-col items-center gap-14">
              <div className="h-39 w-39 flex items-end justify-center">
                <img loading="lazy" decoding="async" src={role.image} alt={role.title} className="h-33" />
              </div>
              <div className="gap-2 text-center">
                <div className="py-2">
                  <p className="font-sans font-normal text-label text-text tracking-wide m-0">
                    {role.title}
                  </p>
                </div>
                <div className="py-2">
                  <h3 className="font-serif font-normal text-subtitle text-default leading-cozy m-0">
                    {role.description}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {roles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              changeSlide(index);
              resetTimer();
            }}
            className={`h-3 border-0 rounded-full transition-all duration-300 ease-in-out ${
              currentSlide === index ? "border-0 bg-mint-600 w-10 rounded-full" : "border-0 w-3 bg-green/50 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Roles;