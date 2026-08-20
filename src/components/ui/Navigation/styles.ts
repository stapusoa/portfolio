import { cva } from 'class-variance-authority';

export const navigationLinkStyles = cva(
  [
    'inline-flex items-center',
    'font-medium',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
  ],
  {
    variants: {
      active: {
        true: 'text-green',
        false: 'text-gray-500 hover:text-green',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const mobileNavigationLinkStyles = cva(
  [
    'block w-full',
    'border-l-4 border-transparent',
    'px-6 py-2 md:px-14',
    'font-medium',
    'transition-colors',
    'hover:border-green hover:bg-grey-200 hover:text-green',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-inset',
  ],
  {
    variants: {
      active: {
        true: 'border-green text-green',
        false: 'text-gray-500',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const menuTriggerStyles = cva([
  'inline-flex items-center gap-1',
  'font-medium',
  'text-gray-500',
  'transition-colors',
  'hover:text-green',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
]);