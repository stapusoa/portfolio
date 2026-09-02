import { cva } from "class-variance-authority"

/**
 * Shared reset + focus/disabled handling for both Button and IconButton.
 *
 * Colors are driven by two custom properties set on the `color` variant:
 *   --btn     the button's own color (bg for filled, text/border otherwise)
 *   --btn-fg  the foreground used on top of a filled --btn
 * The `variant` then decides how those are applied. This keeps us to
 * 5 colors + 4 variants instead of a 20-entry compound-variant matrix.
 */
const sharedBase =
  "group inline-flex shrink-0 items-center justify-center font-sans font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,border-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"

const skin = {
  variant: {
    filled: "border border-transparent bg-(--btn) text-(--btn-fg) hover:bg-(--btn)/90",
    outlined: "border border-(--btn) bg-transparent text-(--btn) hover:bg-(--btn)/10",
    ghost: "border border-transparent bg-transparent text-(--btn) hover:bg-(--btn)/10",
    link: "border-0 bg-transparent text-(--btn) underline-offset-4 hover:underline",
  },
  color: {
    primary: "[--btn:var(--color-primary)] [--btn-fg:var(--color-contrast)]",
    secondary: "[--btn:var(--color-secondary)] [--btn-fg:var(--color-contrast)]",
    contrast: "[--btn:var(--color-contrast)] [--btn-fg:var(--color-default)]",
    critical: "[--btn:var(--color-critical)] [--btn-fg:var(--color-white)]",
    neutral: "[--btn:var(--color-default)] [--btn-fg:var(--color-background)]",
  },
} as const

/**
 * Text buttons. `lowercase` + the hover lift match the site's CTAs
 * (see HomeHero / Header). The `link` variant opts out of the box model
 * and the lift so it reads as inline text.
 */
export const buttonVariants = cva(
  `${sharedBase} lowercase rounded-xl hover:-translate-y-0.5 active:translate-y-px [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      ...skin,
      size: {
        sm: "h-8 gap-1.5 px-3 text-sm rounded-lg",
        md: "h-10 gap-2 px-5 text-base rounded-lg",
        lg: "h-12 gap-2 px-7 text-base",
      },
    },
    compoundVariants: [
      // Links are inline text: drop the height/padding/lift the sizes add.
      { variant: "link", class: "h-auto rounded-none px-0 py-0 hover:translate-y-0 active:translate-y-0" },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
    },
  }
)

/** Square, icon-only buttons. Same skins, different geometry. */
export const iconButtonVariants = cva(
  `${sharedBase} rounded-lg p-0 [&_svg:not([class*='size-'])]:size-5`,
  {
    variants: {
      ...skin,
      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-12 [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "ghost",
      color: "neutral",
      size: "md",
    },
  }
)
