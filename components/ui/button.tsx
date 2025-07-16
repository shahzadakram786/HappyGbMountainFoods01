import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * 🎨 BUTTON VARIANTS
 *
 * Defines different button styles using class-variance-authority
 * Creates consistent button appearances across the app
 */
const buttonVariants = cva(
  // 🎯 BASE STYLES (applied to all buttons)
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // 🎨 VISUAL VARIANTS
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // 📏 SIZE VARIANTS
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    // 🎯 DEFAULT VALUES
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

/**
 * 🔘 BUTTON COMPONENT
 *
 * Flexible button component with multiple variants and sizes
 * Can render as button or any other element using asChild
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean // Render as child element instead of button
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // 🔄 CONDITIONAL RENDERING
    const Comp = asChild ? Slot : "button"

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

/* 
📝 EXPLANATION:
- cva() creates variant-based styling system
- Slot allows button to render as different elements
- forwardRef enables ref passing for form libraries
- cn() utility merges classes intelligently
- TypeScript interfaces ensure type safety
- All variants use your brand colors (primary = teal)
*/
