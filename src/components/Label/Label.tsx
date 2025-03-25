import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className = "", ...props }) => (
  <label
    className={`text-sm font-medium text-white block mb-1 ${className}`}
    {...props}
  />
);

export default Label;