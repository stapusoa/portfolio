import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { motion } from "motion/react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/cn"
import { buttonVariants } from "./styles"
import type { ButtonProps } from "./types"

function Button({
  className,
  variant,
  color,
  size,
  loading = false,
  active,
  disabled,
  children,
  motion: motionProps,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-active={active ? "" : undefined}
      aria-pressed={active}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, color, size }), className)}
      render={
        motionProps
          ? <motion.button {...motionProps} />
          : undefined
      }
      {...props}
    >
      {loading && (
        <Loader2
          aria-hidden
          className="size-4 animate-spin"
        />
      )}

      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }