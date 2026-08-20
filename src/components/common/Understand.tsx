import React from "react";
import { Section } from "../../lib/types/index";

interface UnderstandProps {
  user: string;
}

const Understand: React.FC<UnderstandProps> = ({ user }) => (
  <Section
  title={{
    titleFull: false,
    title: "understanding the user"
  }}
  text={{
    isRight: true,
    text: [user],
  }}
/>
);

export default Understand;