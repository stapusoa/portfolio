import React from "react";

interface GoalProps {
  image: string[];
  statement: string;

}
const Goal: React.FC<GoalProps> = ({ image, statement }) => {
  return (
    <div className="bg-white py-16 px-32 flex flex-col items-start gap-8">
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="py-2 text-left">
          <h5 className="h3 pb-8 font-600 tracking-wide">Goal</h5>
        </div>
        <div className="grid grid-cols-6 grid-flow-row auto-cols-min gap-4 items-start text-left w-full">
          {/* Statement */}
          <div className="m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-1 row-span-4 font-gilroy font-300 text-6 leading-relaxed">
            {statement}
          </div>

          {/* Dynamic Images */}
          {image.map((img, index) => {
            // Dynamically calculate grid positions
            const colStart = index % 2 === 0 ? 5 : 6; // Alternate between columns 5 and 6
            const rowStart = Math.floor(index / 2) + 1; // Increment row after every two images

            return (
              <div
                key={index}
                className={`col-start-${colStart} col-span-1 row-start-${rowStart}`}
              >
                <img
                  src={img}
                  alt={`Dynamic image ${index + 1}`}
                  className="w-45 h-45 items-center justify-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Goal;