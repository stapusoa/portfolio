import { Link } from "react-router-dom";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "fishbowl go",
      description:
        "Simplifying inventory management in the warehouse and in the office.",
      image: "/images/fbprod-project-image.jpg",
      link: "/projects/project1",
      align: "left",
    },
    {
      title: "haven massage",
      description:
        "Providing professional therapeutic services through easy booking.",
      image: "/images/project-image-hm.jpg",
      link: "/projects/project2",
      align: "right",
    },
    {
      title: "travelpass",
      description:
        "Providing the explorer at heart unforgettable adventures.",
      image: "/images/project-image-tpg.jpg",
      link: "/projects/project3",
      align: "left",
    },
  ];

  return (
    <>
      {caseStudies.map((caseStudy, index) => {
        const isTextLeft = caseStudy.align === "left";
        return (
          <div
            key={index}
            className={`bg-transparent mx-auto max-w-300 relative z-32 py-16 px-6 sm:px-6 md:px-14 lg:px-32 flex flex-col md:flex-row ${
              isTextLeft ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8`}
          >
            {/* Text Section */}
            <div
              className={`flex flex-col w-full md:w-1/2 gap-4 px-6 md:px-16 ${
                isTextLeft
                  ? "text-left md:pr-16 md:pl-0"
                  : "text-right md:pl-16 md:pr-0"
              }`}
            >
              <div>
                <h6 className="font-gilroy font-300 text-7 text-grey-800 m-0 tracking-wide">
                  {caseStudy.title}
                </h6>
              </div>
              <div>
                <h6 className="font-gilroy font-500 text-10 text-grey-900 m-0 leading-cozy">
                  {caseStudy.description}
                </h6>
              </div>
              <div className={`flex flex-row items-center gap-2 mt-4 ${
                isTextLeft ? "justify-start" : "justify-end" }`
              }>
                <Link
                  to={caseStudy.link}
                  className="link hover:text-blue hover:border-blue"
                >
                  case study
                </Link>
                <div className="flex items-center">
                  {/* Pulsing SVG Icons */}
                  {[0, 0.3, 0.6].map((delay) => (
                    <svg
                      key={delay}
                      className="text-green group-hover:text-blue animate-pulse"
                      style={{ animationDelay: `${delay}s` }}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-80 md:h-150 overflow-hidden rounded-3xl shadow-md">
              <img
                alt={`Case Study: ${caseStudy.title}`}
                src={caseStudy.image}
                className="object-cover w-full h-full"
              />
              {/* Inner Overlay */}
              <div className="absolute inset-3 p-3 border-solid border-3 border-green opacity-40 rounded-3xl"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CaseStudies;