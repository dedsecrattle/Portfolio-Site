import * as React from "react"

import { cn } from "@/lib/utils"

// Bordered paper card with a hard offset shadow. Composable: Card > CardBar? > CardHeader > CardContent > CardFooter

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("flex flex-col border-2 border-ink bg-card text-foreground shadow-nb", className)}
      {...props}
    />
  )
}

// Coloured strip along the top of a card (title bar / accent block).
function CardBar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-bar"
      className={cn(
        "flex items-center gap-2 border-b-2 border-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-on-accent",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("flex flex-col gap-1 p-5 pb-0", className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("text-base leading-snug font-bold", className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("p-5", className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("mt-auto flex items-center gap-2 border-t-2 border-ink bg-muted px-5 py-3", className)}
      {...props}
    />
  )
}

export { Card, CardBar, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
