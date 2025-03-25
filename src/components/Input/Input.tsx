import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full px-4 py-2 rounded bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;