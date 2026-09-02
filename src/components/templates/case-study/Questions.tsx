import React from "react";
import { WhenIllustration, WhereIllustration, WhoIllustration, WhyIllustration } from "@/components/ui/illustrations";

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
      <div className="group bg-transparent mx-auto max-w-300 relative z-32 h-full divide-y divide-mint-600 overflow-hidden rounded-lg shadow">
        <div className="flex flex-col-reverse gap-4 justify-end items-start  group-hover:flex-row  group-hover:justify-between px-4 pt-7 pb-3">

          <p className="m-0 p-0 font-sans font-light text-neutral-400 tracking-wider text-3xl group-hover:text-xl group-hover:m-0">{w}</p>
          <SvgComponent className="w-12 h-12 group-hover:w-6 group-hover:h-6" />
        </div>
        <div className="w-60 flex absolute -bottom-2 right-0 group-hover:hidden">{illustration}</div>

        <div className="group-hover:block hidden px-4 py-3">
          <h3 className="m-0 p-0 items-start text-left font-sans font-medium text-neutral-700 tracking-wide leading-cozy text-xl group-hover:m-0">{question}</h3>
        </div>
        <div className="group-hover:block hidden px-4 py-3">
          <p className="m-0 text-left font-sans font-light tracking-wide leading-tight text-neutral-600 text-xl">{statement}</p>
        </div>
      </div>
    </>
  )
}

export default Questions;