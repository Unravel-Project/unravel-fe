import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tagVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-neutral-100 text-foreground hover:bg-neutral-100/80",
                primary: "border-transparent bg-primary-500 text-white hover:bg-primary-500/80",
                secondary: "border-transparent bg-secondary-500 text-white hover:bg-secondary-500/80",
                negative: "border-transparent bg-negative-500 text-white hover:bg-negative-500/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface TagProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> { }

function Tag({ className, variant, ...props }: TagProps) {
    return (
        <div className={cn(tagVariants({ variant }), className)} {...props} style={{ cursor: props.onClick ? 'pointer' : undefined }} />
    )
}

export { Tag, tagVariants }
