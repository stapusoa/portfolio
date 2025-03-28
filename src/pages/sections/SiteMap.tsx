import React from "react";

interface Detail {
  section: string;
  details: string[];
}

interface Page {
  page: string;
  sections: Detail[];
}

interface MapProps {
  pages: Page[];
}

const SiteMap: React.FC<MapProps> = ({ pages }) => (
  <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-12 pb-16 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
    <div className="col-start-1 col-span-8 py-2 text-left">
      <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">site map</h6>
    </div>
    <div className="col-start-1 col-span-8 border-solid border border-grey-200 font-gilroy bg-white overflow-hidden rounded-2 p-6">
      <ul className="grid grid-cols-10 grid-flow-row m-0 p-0 justify-left gap-4">
      {pages.map((page, pageIndex) => (
        <li key={pageIndex} className="relative list-none col-start-1 col-span-10 md:col-span-5 lg:col-span-2 items-center w-full">
          <span
            className="relative flex items-center bg-green rounded-md justify-center text-center text-white font-medium text-3.5 border px-3 py-2 max-w-300"
          >
           {page.page}
            <span
              className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
            ></span>
            <span
              className="absolute h-px w-full bg-black top-[calc(100%+2.25em)]"
            ></span>
          </span>
          <ul className="p-0 w-full">
          {page.sections.map((section, sectionIndex) => (

            <li key={sectionIndex} className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
              {/* Checkbox as the peer */}
              <input id={`toggle-${pageIndex}-${sectionIndex}`}
                    name={`tabs-${pageIndex}`} type="checkbox" className="hidden peer" />
              {/* Label to toggle the checkbox */}
              <label
                htmlFor={`toggle-${pageIndex}-${sectionIndex}`}
                className="relative flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-white text-3.5 px-3 py-2">
                {section.section}
                </span>
              </label>
              {/* Rotating SVG */}
              <span
                className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                style={{ top: "4px" }}
              >
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </span>
              {/* Expandable Content */}
              <div
                className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
              >
                {section.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="p-4 text-sm">
                  {detail}
                </div>
                ))}
              </div>
              <span
                className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
              ></span>
            </li>
            ))}
          </ul>
        </li>
       ))}
      </ul>
    </div>
  </div>
)

export default SiteMap;