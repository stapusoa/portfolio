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
  <div className="bg-transparent mx-auto max-w-300 relative z-32 py-16 px-6 sm:px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="py-2 text-left">
        <h5 className="h3 pb-8 font-600 tracking-wide">insights</h5>
      </div>
      <div className="grid grid-cols-6 grid-flow-row auto-cols-min gap-8 items-start text-left w-full">
        <div className='m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-1 row-span-4 font-gilroy font-300 text-6 leading-relaxed'>
          {description}
        </div>
        <div className='col-start-5 col-span-2 row-start-1 row-span-1'>
          <div className='grid grid-rows-subgrid row-span-2'>
            <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">{point1}</div>
            <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
              {note1}
            </div>
          </div>
        </div>
        <div className='col-start-5 col-span-2 row-start-2 row-span-1'>
          <div className='grid grid-rows-subgrid row-span-2'>
            <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">{point2}</div>
            <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
              {note2}
            </div>
          </div>
        </div>
        <div className='col-start-5 col-span-2 row-start-3 row-span-1'>
          <div className='grid grid-rows-subgrid row-span-2'>
            <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">{point3}</div>
            <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
              {note3}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Insights;