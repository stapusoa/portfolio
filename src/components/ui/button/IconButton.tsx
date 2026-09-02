import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cn } from "@/lib/cn"
import { iconButtonVariants } from "./styles"
import type { IconButtonProps } from "./types"

/**
 * Icon-only button. Separate from <Button> so the type system can require an
 * `aria-label` (an icon has no text to name it). Shares the same variant/color
 * skins as Button; defaults to a bare ghost treatment like the header icons.
 */
function IconButton({
  className,
  variant,
  color,
  size,
  icon,
  active,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="icon-button"
      data-active={active ? "" : undefined}
      aria-pressed={active}
      disabled={disabled}
      className={cn(iconButtonVariants({ variant, color, size }), className)}
      {...props}
    >
      {icon}
    </ButtonPrimitive>
  )
}

export { IconButton, iconButtonVariants }
