import React from 'react';

interface ComingSoonProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

// ✅ Coding icon (</> styled)
const CodingIcon = () => (
  <svg
    className="w-16 h-16 text-primary"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
    />
  </svg>
);

// ✅ iOS-style spinner (Tailwind animated ring)
const Spinner = () => (
  <svg
    className="h-5 w-5 animate-spin text-primary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description = "Currently in development. Check back soon!",
  icon,
}) => {
  return (
    <div className="flex items-center justify-center min-h-[300px] p-6">
      <div className="text-center space-y-4 bg-white/10 backdrop-blur-sm p-8 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="flex justify-center mb-4">
          {icon || <CodingIcon />}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          {description}
        </p>
        <div className="flex justify-center items-center space-x-2">
          <Spinner />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;