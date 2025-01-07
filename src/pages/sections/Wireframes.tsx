import React from "react";
import "../../components/Annotation/annotation.css";

interface Wireframes {
  initial: string;
  explanation: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
  notes: string;
  more: string;
}

interface WireframeProps {
  section: Wireframes
}

const Wireframes: React.FC<WireframeProps> = ({ section }) => {
  const {
    initial,
    explanation,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    notes,
    more,
  } = section;

  return (
    <div className="bg-white pt-12 pb-16 sm:px-6 md:px-14 lg:px-32 grid grid-cols-4 grid-flow-row items-start gap-8 text-left">
      <h6 className="col-start-1 col-span-4 row-start-1 row-span-1 m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">digital wireframes</h6>
      <img
        alt="Digital wireframe for Case Study"
        src={initial}
        className="w-full col-start-1 col-span-3 row-start-2"
      />
      <div className='col-start-4 col-span-1 row-start-2 m-0 p-0 text-left font-gilroy font-300 text-7 leading-relaxed'>
        {explanation}
      </div>
      <img
        src={second}
        className="w-full col-start-1 col-span-2 row-start-3 row-span-1"
      />
      <img
        src={third}
        className="w-full col-start-2 col-span-2 row-start-3 row-span-1"
      />
      <img
        src={fourth}
        className="w-full col-start-2 col-span-2 row-start-3 row-span-1"
      />
      <div className='col-start-4 col-span-1 row-start-2 m-0 p-0 text-left font-gilroy font-300 text-7 leading-relaxed'>
        {notes}
      </div>
      <img
        src={fifth}
        className="w-full col-start-2 col-span-2 row-start-3 row-span-1" />
      <div className='col-start-4 col-span-1 row-start-2 m-0 p-0 text-left font-gilroy font-300 text-7 leading-relaxed'>
        {more}
      </div>
      <img
        src={sixth}
        className="w-full col-start-2 col-span-2 row-start-3 row-span-1" />
      <img
        src={seventh}
        className="w-full col-start-2 col-span-2 row-start-3 row-span-1" />
    </div >
  )
}

export default Wireframes;