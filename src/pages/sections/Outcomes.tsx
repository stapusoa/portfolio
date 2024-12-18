import React from 'react';

interface Point {
  label: string;
  details: string;
}

interface Section {
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  points: Point[];
}

interface OutcomesProps {
  sections: Section[];
}

const Outcomes: React.FC<OutcomesProps> = ({ sections }) => {
  return (
  <div className="bg-white py-16 px-32 flex flex-col items-start gap-8">
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="py-2 text-left">
        <h5 className="h3 pb-8 font-600 tracking-wide">outcomes</h5>
      </div>
      {sections.map((section, sectionIndex) => (
      <div key={sectionIndex} className="grid grid-cols-6 grid-flow-row auto-cols-min gap-4 items-start text-left w-full">
        <div className='m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-1 row-span-1 font-gilroy font-300 text-6 gap-8 leading-relaxed'>
          <div className='flex flex-col gap-8'></div>
          {section.description}
          <a
            href={section.link}
            className="btn-primary w-16 font-gilroy leading-relaxed my-8"
          >
            {section.linkLabel}
          </a>
        </div>
        <img
          className='m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-2 row-span-2 w-5/6'
          src={section.image}
        />
                {section.points.map((point, pointIndex) => (

        <div key={pointIndex} className='col-start-5 col-span-2 row-span-1'>

          <div  className='grid grid-rows-subgrid row-span-2'>
            <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">{point.label}
            </div>
            <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
              {point.details}
            </div>
          </div>
        
        </div>
        ))}
       
      </div>
      ))}
    </div>
  </div>
  )
}

export default Outcomes;