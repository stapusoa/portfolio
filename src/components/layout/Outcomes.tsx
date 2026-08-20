import React from 'react';
import { Section } from "../../helpers/index";

interface Point {
  label: string;
  details: string;
}

interface SectionData {
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  points: Point[];
}

interface OutcomesProps {
  sections: SectionData[];
}

const Outcomes: React.FC<OutcomesProps> = ({ sections }) => {
  return (
<>

        {/* ✅ Map Sections into `Section` */}
        {sections.map((section, sectionIndex) => (
          <Section
            key={sectionIndex}
            title={{
              titleFull: true,
              title: "outcomes",
            }}
            text={{
              isRight: false, // ✅ Text stays on the left (4 columns)
              isLeft: true,
              text: [section.description],
            }}
            image={{
              isRight: false, // ✅ Image on the right
              isFull: false,
              isLeft: true,
              image: [section.image],
            }}
            button={
              <a href={section.link} className="btn-primary w-16 font-gilroy leading-relaxed my-8">
                {section.linkLabel}
              </a>
            }
            keynotes={section.points} // ✅ Directly passing keynotes
          />
        ))}
</>
  );
};

export default Outcomes;