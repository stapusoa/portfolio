import { cva } from "class-variance-authority"

export const navigationLinkStyles = cva(
  [
    "relative inline-flex items-center",
    "font-medium",
    "transition-colors",
    "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5",
    "after:origin-left after:scale-x-0 after:bg-primary",
    "after:transition-transform after:duration-300 after:ease-out",
    "motion-reduce:after:transition-none",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2",
    "rounded-sm",
  ],
  {
    variants: {
      active: {
        true: "text-primary after:scale-x-100",
        false: "text-default hover:text-primary hover:after:scale-x-100",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const mobileNavigationLinkStyles = cva(
  [
    "flex w-full items-center",
    "px-6 py-3 md:px-14",
    "font-medium",
    "transition-colors duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-default",
  ],
  {
    variants: {
      active: {
        true: "bg-primary/10 text-primary",
        false: "text-default hover:bg-primary/10 hover:text-primary",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const menuTriggerStyles = cva([
  "relative inline-flex items-center gap-1",
  "font-medium text-default",
  "transition-colors",
  "hover:text-primary",
  "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5",
  "after:origin-left after:scale-x-0 after:bg-primary",
  "after:transition-transform after:duration-300 after:ease-out",
  "hover:after:scale-x-100",
  "data-[popup-open]:text-primary",
  "data-[popup-open]:after:scale-x-100",
  "motion-reduce:after:transition-none",
  "focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2",
  "rounded-sm",
])

export const menuPopupStyles = cva([
  "z-50",
  "min-w-54",
  "rounded-xl",
  "border border-default/10",
  "bg-background",
  "p-2",
  "shadow-xl overflow-visible",
  "origin-top",
  "transition-[opacity,transform] duration-150 ease-out",
])

export const menuPopupItemStyles = cva(
  [
    "flex w-full items-center",
    "rounded-lg",
    "px-3 py-2.5",
    "text-sm font-medium",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-default",
  ],
  {
    variants: {
      active: {
        true: "bg-primary/10 text-primary",
        false: "text-default hover:bg-primary/10 hover:text-primary",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)