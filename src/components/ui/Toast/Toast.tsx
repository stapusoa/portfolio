import React, { useEffect } from "react";
import { Icon } from "../Icon/index";

interface ToastProps {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  variant = "default",
  duration = 4000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`group relative flex w-full max-w-sm items-start justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all
        ${variant === "destructive"
          ? "border-red-500 bg-red-100 text-red-800"
          : "border border-gray-200 bg-white text-gray-800"
        }`}
    >
      <div className="flex-1 space-y-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </div>

      <button
        onClick={onClose}
        className="absolute top-2 right-2 rounded-md p-1 text-gray-500 transition-opacity hover:text-black focus:outline-none focus:ring-2"
      >
        <Icon name="close" size="medium" />
      </button>
    </div>
  );
};

export default Toast;