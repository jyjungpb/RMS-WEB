"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-6 w-6 rounded-full border-2 border-[#007DFA] text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=unchecked]:bg-white hover:bg-[#EBEEF8] disabled:bg-[#F7F7F7] disabled:border-[#E1E1E1]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-[#007DFA]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Radio with Label Component
interface RadioWithLabelProps {
  value: string
  label: string
  disabled?: boolean
  className?: string
}

const RadioWithLabel = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioWithLabelProps
>(({ value, label, disabled = false, className, ...props }, ref) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <RadioGroupItem
        ref={ref}
        value={value}
        disabled={disabled}
        {...props}
      />
      <label
        htmlFor={value}
        className={cn(
          "text-base font-normal leading-[1.5] text-[#4B4B4B] cursor-pointer",
          disabled && "text-[#E1E1E1] cursor-not-allowed"
        )}
      >
        {label}
      </label>
    </div>
  )
})
RadioWithLabel.displayName = "RadioWithLabel"

// Radio Icon Only Component
interface RadioIconOnlyProps {
  value: string
  disabled?: boolean
  className?: string
}

const RadioIconOnly = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioIconOnlyProps
>(({ value, disabled = false, className, ...props }, ref) => {
  return (
    <RadioGroupItem
      ref={ref}
      value={value}
      disabled={disabled}
      className={className}
      {...props}
    />
  )
})
RadioIconOnly.displayName = "RadioIconOnly"

export { 
  RadioGroup, 
  RadioGroupItem, 
  RadioWithLabel, 
  RadioIconOnly 
}
