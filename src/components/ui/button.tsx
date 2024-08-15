import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    "variants": {
      "variant": {
        "primary": "bg-primary-400 text-white hover:bg-primary-500",
        "secondary": "border-2 border-neutral-coolgray-400 text-neutral-coolgray-900 hover:bg-primary-100",
        "tertiary": "border-2 border-primary-400 text-primary-400 hover:bg-primary-200",
        "ghost": "text-primary-400 hover:text-neutral-coolgray-700",
        "primary-negative": "bg-negative-400 text-white hover:bg-negative-500",
        "secondary-negative": "border-2 border-neutral-coolgray-400 text-negative-400 hover:bg-negative-100",
        "tertiary-negative": "border-2 border-negative-400 text-negative-400 hover:bg-negative-100",
        "ghost-negative": "text-negative-400 hover:text-negative-500",
        "link": "text-primary underline-offset-4 hover:underline",
      },
      "size": {
        "xl": "h-fit px-4 py-3.5 text-lg rounded-lg",
        "lg": "h-fit px-6 py-2.5 text-lg rounded-lg",
        "md": "h-fit px-4 py-2.5 text-base rounded-lg",
        "sm": "h-fit px-3 py-1.5 text-sm rounded-lg",
        "xs": "h-fit px-3 py-1 text-sm rounded-lg",
        "icon": "h-10 w-10",
      },
      "disabledStyle": {
        "primary": "border-0 bg-neutral-coolgray-400 text-neutral-coolgray-900 rounded-lg",
        "ghost": "border-0 text-neutral-coolgray-900",
      },
    },
    "defaultVariants": {
      "variant": "primary",
      "size": "sm",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const disabledStyle = disabled ? (variant?.includes('ghost') ? 'ghost' : 'primary') : undefined;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabledStyle, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
