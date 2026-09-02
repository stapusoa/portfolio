import type { ReactNode } from "react"
import type { Button as ButtonPrimitive } from "@base-ui/react/button"
import type { VariantProps } from "class-variance-authority"
import type { MotionProps } from "motion/react"
import type { ButtonSize, ButtonColor, ButtonVariant } from "./constants"
import { buttonVariants } from "./styles"

export interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  /** Visual treatment. @default "filled" */
  variant?: ButtonVariant

  /** Color role. @default "primary" */
  color?: ButtonColor

  /** @default "md" */
  size?: ButtonSize

  /** Shows a spinner and disables the button while an action is in flight. */
  loading?: boolean

  /** Pressed/current look for toggle-style buttons; sets aria-pressed. */
  active?: boolean

  /** Motion animation props. */
  motion?: MotionProps
}

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  "aria-label": string
  icon: ReactNode
}