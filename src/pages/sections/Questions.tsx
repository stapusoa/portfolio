import React from "react";

interface QuestionsProps {
  w: string;
  SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>; // Type for an inline SVG component
  question: string;
  statement: string;
}

const Questions: React.FC<QuestionsProps> = ({ w, SvgComponent, question, statement }) => (
  <>
    <div className="group h-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="flex flex-col-reverse justify-end items-start  group-hover:flex-row  group-hover:justify-between group-hover:space-x-6 px-4 pt-7 pb-3">
        <h6 className="m-0 p-0 font-gilroy font-300 text-gray-400 tracking-wider text-8 group-hover:text-5">{w}</h6>
        <SvgComponent className="w-8 h-8 group-hover:w-6 group-hover:h-6" />
      </div>
      <div className="group-hover:block hidden px-4 py-3">
        <h6 className="m-0 p-0 items-start text-left font-gilroy font-500 text-gray-700 tracking-wide leading-cozy text-5">{question}</h6>
      </div>
      <div className="group-hover:block hidden px-4 py-3">
        <p className="m-0 text-left font-gilroy font-300 tracking-wide leading-tight text-gray-600 text-5">{statement}</p>
      </div>
    </div>
  </>
)

export default Questions;