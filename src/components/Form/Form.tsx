import React from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="space-y-6" {...props}>
      {children}
    </form>
  );
};

export default Form;