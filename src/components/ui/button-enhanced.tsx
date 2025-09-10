"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      state: {
        // Primary states
        "primary": "bg-[#007DFA] text-white border border-[#007DFA] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] hover:bg-[#0029B1] hover:border-[#0029B1] active:bg-[#0C35E9] active:border-[#0C35E9] active:shadow-inner",
        "primary-disabled": "bg-[#FAFAFA] text-[#C4C4C4] border border-[#E7EAED] cursor-not-allowed",
        
        // Secondary states
        "secondary": "bg-[#0C35E9] text-white border border-[#0C35E9] hover:bg-[#0029B1] hover:border-[#0029B1] active:bg-[#0C35E9] active:border-[#0C35E9] active:shadow-inner",
        "secondary-disabled": "bg-[#FAFAFA] text-[#C4C4C4] border border-[#E7EAED] cursor-not-allowed",
        
        // Outline states
        "outline": "border border-[#007DFA] bg-white text-[#007DFA] hover:bg-[#007DFA] hover:text-white active:bg-[#0C35E9] active:border-[#0C35E9] active:text-white active:shadow-inner",
        "outline-disabled": "border border-[#E7EAED] bg-white text-[#C4C4C4] cursor-not-allowed",
        "outline-gray": "border border-[#90A1B2] bg-white text-[#677888] hover:border-[#001D92] hover:text-[#001D92] active:bg-white active:border-[#0C35E9] active:text-[#0C35E9] active:shadow-inner",
        "no-outline-gray": "border border-transparent bg-white text-[#677888] hover:border-transparent hover:text-[#001D92] active:bg-white active:border-transparent active:text-[#0C35E9] ",

        // Ghost states 
        "ghost": "text-[#007DFA] hover:bg-[#EBEEF8] hover:text-[#007DFA] active:bg-[#0C35E9] active:text-white active:shadow-inner",
        "ghost-disabled": "text-[#C4C4C4] cursor-not-allowed",
        
        // Destructive states
        "destructive": "bg-[#E1E1E1] text-white border border-[#E1E1E1] hover:bg-[#C4C4C4] hover:border-[#C4C4C4] active:bg-[#A8A8A8] active:border-[#A8A8A8] active:shadow-inner",
        "destructive-disabled": "bg-[#FAFAFA] text-[#C4C4C4] border border-[#E7EAED] cursor-not-allowed",
        
        // Link states
        "link": "text-[#007DFA] underline-offset-4 hover:underline active:text-[#0029B1]",
        "link-disabled": "text-[#C4C4C4] cursor-not-allowed",
      }, 
      size: {
        giant: "h-24 px-9 py-6 text-base",
        large: "h-14 px-8 py-4 text-base",
        medium: "h-10 px-6 py-2 text-sm",
        small: "h-8 px-4 py-1 text-xs",
        tiny: "h-6 px-3 py-1 text-xs",
        down: "w-[82px] p-[6px] h-[34px]",
        downLarge: "w-[234px] px-3 py-2 h-[34px]",
        icon: "h-10 w-10",
        "icon-small": "h-[34px] w-[34px]", 
        "icon-tiny": "h-6 w-6",
      },
    },
    defaultVariants: {
      state: "primary",
      size: "medium",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, state, size, asChild = false, leftIcon, rightIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ state, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

// Predefined button components for common use cases
export const PrimaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'state'>>(
  (props, ref) => <Button ref={ref} state="primary" {...props} />
)
PrimaryButton.displayName = "PrimaryButton"

export const SecondaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'state'>>(
  (props, ref) => <Button ref={ref} state="secondary" {...props} />
)
SecondaryButton.displayName = "SecondaryButton"

export const OutlineButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'state'>>(
  (props, ref) => <Button ref={ref} state="outline" {...props} />
)
OutlineButton.displayName = "OutlineButton"

export const GhostButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'state'>>(
  (props, ref) => <Button ref={ref} state="ghost" {...props} />
)
GhostButton.displayName = "GhostButton"

export const DestructiveButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'state'>>(
  (props, ref) => <Button ref={ref} state="destructive" {...props} />
)
DestructiveButton.displayName = "DestructiveButton"

export const LinkButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'state'>>(
  (props, ref) => <Button ref={ref} state="link" {...props} />
)
LinkButton.displayName = "LinkButton"

export { Button, buttonVariants }
