import React from "react";
import Section from "@/features/case-study/components/Section";

interface GoalProps {
  image: string[];
  statement: string;
  columns?: number;
}
const Goal: React.FC<GoalProps> = ({ image, statement, columns }) => {
  return (
    <Section
      title={{
        titleFull: true,
        title: "goal"
      }}
      text={{
        isRight: false,
        text: [statement],
      }}
      image={{
        isRight: true,
        isGrid: true,
        columns: columns,
        image: image,
      }}
    />
  );
};
export default Goal;