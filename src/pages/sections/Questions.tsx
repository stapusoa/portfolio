import React from "react";
import { WhenIllustration, WhereIllustration, WhoIllustration, WhyIllustration } from "../../components/illustrations/index";

const Illustrations = {
  who: <WhoIllustration />, // These are JSX elements
  when: <WhenIllustration />,
  where: <WhereIllustration />,
  why: <WhyIllustration />,
};

interface QuestionsProps {
  w: string;
  SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>; // Type for an inline SVG component
  illustrationKey: keyof typeof Illustrations; // Key to select illustration dynamically
  question: string;
  statement: string;
}

const Questions: React.FC<QuestionsProps> = ({ w, SvgComponent, illustrationKey, question, statement }) => {
  const illustration = Illustrations[illustrationKey]; // Retrieve the correct illustration dynamically

  if (!illustration) {
    console.error(`Invalid illustrationKey: "${illustrationKey}"`);
    return null;
  }

  return (
    <>
      <div className="group bg-transparent mx-auto max-w-300 relative z-32 h-full divide-y divide-green overflow-hidden rounded-lg shadow">
        <div className="flex  flex-col-reverse gap-4 group-hover:gap-auto justify-end items-start  group-hover:flex-row  group-hover:justify-between px-4 pt-7 pb-3">

          <h6 className="m-0 p-0 font-gilroy font-300 text-gray-400 tracking-wider text-8 group-hover:text-5 group-hover:m-0">{w}</h6>
          <SvgComponent className="w-12 h-12 group-hover:w-6 group-hover:h-6" />
        </div>
        <div className="w-60 flex absolute -bottom-2 right-0 group-hover:hidden">{illustration}</div>

        <div className="group-hover:block hidden px-4 py-3">
          <h6 className="m-0 p-0 items-start text-left font-gilroy font-500 text-gray-700 tracking-wide leading-cozy text-5 group-hover:m-0">{question}</h6>
        </div>
        <div className="group-hover:block hidden px-4 py-3">
          <p className="m-0 text-left font-gilroy font-300 tracking-wide leading-tight text-gray-600 text-5">{statement}</p>
        </div>
      </div>
    </>
  )
}

export default Questions;