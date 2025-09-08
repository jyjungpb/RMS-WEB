"use client"

import React, { useState } from "react"
import { RadioGroup, RadioWithLabel, RadioIconOnly } from "@/components/ui/radio"

export function RadioExample() {
  const [value, setValue] = useState("option1")
  const [iconValue, setIconValue] = useState("icon1")

  return (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Radio with Label</h3>
        <RadioGroup value={value} onValueChange={setValue} className="space-y-3">
          <RadioWithLabel value="option1" label="Option 1" />
          <RadioWithLabel value="option2" label="Option 2" />
          <RadioWithLabel value="option3" label="Option 3" disabled />
        </RadioGroup>
        <p className="mt-2 text-sm text-gray-600">Selected: {value}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Radio Icon Only</h3>
        <RadioGroup value={iconValue} onValueChange={setIconValue} className="flex gap-4">
          <RadioIconOnly value="icon1" />
          <RadioIconOnly value="icon2" />
          <RadioIconOnly value="icon3" disabled />
        </RadioGroup>
        <p className="mt-2 text-sm text-gray-600">Selected: {iconValue}</p>
      </div>
    </div>
  )
}
