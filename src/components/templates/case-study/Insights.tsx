import React from "react";

interface InsightsProps {
  description: string;
  point1: string;
  note1: string;
  point2: string;
  note2: string;
  point3: string;
  note3: string;
}

const Insights: React.FC<InsightsProps> = ({ description, point1, note1, point2, note2, point3, note3 }) => (
  <div className="bg-transparent mx-auto max-w-300 relative z-32 py-16 px-6 sm:px-6 md:px-14 lg:px-32 items-start grid grid-cols-8 gap-8 w-fit">
    <div className="col-span-8 py-2 text-left">
      <h2 className="text-3xl pb-8 font-semibold tracking-wide">insights</h2>
    </div>
    <div className="col-span-8 md:col-span-4 m-0 py-0 font-sans font-light text-left text-2xl leading-relaxed">
      {description}
    </div>
    {/* Insights Section - Stacked below description on mobile, placed to the right on desktop */}
    <div className="col-span-8 md:col-span-4 grid grid-cols-1 gap-8">

      {/* Insight 1 */}
      <div className="grid grid-cols-1 gap-2">
        <div className="m-0 font-sans text-left font-light text-2xl text-neutral-800 tracking-wide">
          {point1}
        </div>
        <div className="m-0 font-sans text-left font-light text-2xl leading-relaxed">
          {note1}
        </div>
      </div>

      {/* Insight 2 */}
      <div className="grid grid-cols-1 gap-2">
        <div className="m-0 font-sans text-left font-light text-2xl text-neutral-800 tracking-wide">
          {point2}
        </div>
        <div className="m-0 font-sans text-left font-light text-2xl leading-relaxed">
          {note2}
        </div>
      </div>

      {/* Insight 3 */}
      <div className="grid grid-cols-1 gap-2">
        <div className="m-0 font-sans text-left font-light text-2xl text-neutral-800 tracking-wide">
          {point3}
        </div>
        <div className="m-0 font-sans text-left font-light text-2xl leading-relaxed">
          {note3}
        </div>
      </div>

    </div>
  </div>
);

export default Insights;