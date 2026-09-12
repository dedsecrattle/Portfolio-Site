import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border-2 border-ink font-bold whitespace-nowrap select-none outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-brand text-on-accent shadow-nb nb-hover",
        outline: "bg-card text-foreground shadow-nb nb-hover hover:bg-nb-yellow hover:text-on-accent",
        inverted: "bg-ink text-background shadow-nb nb-hover",
        ghost: "border-transparent hover:border-ink hover:bg-card",
        link: "border-transparent underline decoration-2 underline-offset-4 hover:bg-brand hover:text-on-accent",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-8 px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 px-5 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
