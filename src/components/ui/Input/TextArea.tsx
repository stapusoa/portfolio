import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full min-h-[100px] px-4 py-2 rounded bg-white text-black border border-neutral-300 focus:ring-2 focus:ring-ocean-500 focus:outline-none resize-none ${className}`}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;