import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 border-2 border-ink px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-brand text-on-accent",
        blue: "bg-nb-blue text-on-accent",
        pink: "bg-nb-pink text-on-accent",
        yellow: "bg-nb-yellow text-on-accent",
        purple: "bg-nb-purple text-on-accent",
        orange: "bg-nb-orange text-on-accent",
        inverted: "bg-ink text-background",
        outline: "bg-card text-foreground",
      },
      shadow: {
        none: "",
        sm: "shadow-nb-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "none",
    },
  }
)

function Badge({
  className,
  variant = "default",
  shadow = "none",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, shadow }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
