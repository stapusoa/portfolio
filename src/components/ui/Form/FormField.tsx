import React, { useId } from "react";

interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactElement<{ id?: string; "aria-describedby"?: string; "aria-invalid"?: boolean }>;
  className?: string;
}

/**
 * Pairs a label with the control it describes.
 *
 * The label used to be a bare `<label>` with no `htmlFor`, so clicking it did
 * nothing and screen readers announced the input unlabelled. The id is
 * generated here and cloned onto the child, so callers don't have to invent
 * one per field.
 */
const FormField: React.FC<FormFieldProps> = ({ label, error, children, className }) => {
  const id = useId();
  const errorId = `${id}-error`;

  const control = React.cloneElement(children, {
    id,
    "aria-describedby": error ? errorId : undefined,
    "aria-invalid": error ? true : undefined,
  });

  return (
    <div className={`space-y-2 ${className ?? ""}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      {control}
      {error && (
        // role="alert" so the message is announced when it appears
        <p id={errorId} role="alert" className="text-sm font-medium text-cherry-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
