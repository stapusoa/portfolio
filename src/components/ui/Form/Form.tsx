import React from "react";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="space-y-6" {...props}>
      {children}
    </form>
  );
};

export default Form;