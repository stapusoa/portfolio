import React from "react";
import { Section } from "../../helpers/index";

interface GoalProps {
  image: string[];
  statement: string;

}
const Goal: React.FC<GoalProps> = ({ image, statement }) => {
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
        image: image
      }}
    />
  );
};
export default Goal;