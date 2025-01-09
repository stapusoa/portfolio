import React, { useState } from "react";

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % roles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + roles.length) % roles.length);
  };

  return (
    <div className="bg-transparent mx-auto max-w-300 relative z-30 pt-28 pb-16 sm:px-6 md:px-14 lg:px-32">
      {/* Desktop layout */}
      <div className="hidden lg:flex items-center justify-center gap-16">
        {roles.map((role, index) => (
          <div key={index} className="flex flex-col items-center gap-14">
            <div className="h-39 w-39 flex items-end justify-center">
              <img src={role.image} alt={role.title} className="h-33" />
            </div>
            <div className="gap-2 text-center">
              <div className="py-2">
                <h6 className="font-gilroy font-300 tracking-wide text-grey-800 text-7 m-0">
                  {role.title}
                </h6>
              </div>
              <div className="py-2">
                <h6 className="font-gilroy font-500 text-8 text-grey-900 leading-tight m-0">
                  {role.description}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <div className="relative overflow-hidden">
          {/* Slides */}
          {roles.map((role, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              } absolute top-0 left-0 w-full flex flex-col items-center gap-14`}
            >
              <div className="h-39 w-39 flex items-end justify-center">
                <img src={role.image} alt={role.title} className="h-33" />
              </div>
              <div className="gap-2 text-center">
                <div className="py-2">
                  <h6 className="font-gilroy font-300 tracking-wide text-grey-800 text-7 m-0">
                    {role.title}
                  </h6>
                </div>
                <div className="py-2">
                  <h6 className="font-gilroy font-500 text-8 text-grey-900 leading-tight m-0">
                    {role.description}
                  </h6>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 focus:outline-none"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 focus:outline-none"
          >
            ▶
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {roles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;