import React from "react";

interface ProblemProps {
  problem: string;
}

const Problem: React.FC<ProblemProps> = ({ problem }) => (
  <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-16 pb-12 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
    <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
      <h5 className="h3 pb-8 font-600 tracking-wide">problem framing</h5>
    </div>
    <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
      {problem}
    </div>
  </div>
);

export default Problem;