import { cva } from 'class-variance-authority';

export const navigationLinkStyles = cva(
  [
    'relative inline-flex items-center',
    'font-medium',
    'transition-colors',
    // Animated underline: a full-width bar under the link that scales in from
    // the left. transform-based so it animates on the GPU, and it collapses
    // to no transition when the user prefers reduced motion.
    'after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px]',
    'after:origin-left after:scale-x-0 after:bg-primary',
    'after:transition-transform after:duration-300 after:ease-out',
    'motion-reduce:after:transition-none',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-default',
    'focus-visible:ring-offset-2 rounded',
  ],
  {
    variants: {
      active: {
        true: 'text-primary after:scale-x-100',
        false: 'text-default hover:text-primary hover:after:scale-x-100',
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
    'font-medium text-primary',
    'transition-colors',
    'hover:border-primary hover:bg-default hover:text-primary',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-default',
    'focus-visible:ring-offset-2 rounded',
  ],
  {
    variants: {
      active: {
        true: 'border-primary text-primary',
        false: 'text-default',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const menuTriggerStyles = cva([
  'relative inline-flex items-center gap-1',
  'font-medium',
  'text-default',
  'transition-colors',
  'hover:text-primary',
  // Match the navlink animated underline so the whole top row behaves alike.
  'after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px]',
  'after:origin-left after:scale-x-0 after:bg-primary',
  'after:transition-transform after:duration-300 after:ease-out',
  'hover:after:scale-x-100',
  'motion-reduce:after:transition-none',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-default',
  'focus-visible:ring-offset-2 rounded',
]);