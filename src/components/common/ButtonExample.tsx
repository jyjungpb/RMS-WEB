"use client"

import React from "react"
import { 
  Button, 
  PrimaryButton, 
  SecondaryButton, 
  OutlineButton, 
  GhostButton, 
  DestructiveButton,
  LinkButton
} from "@/components/ui/button-enhanced"
import { Plus, Download, Settings } from "lucide-react"

export function ButtonExample() {
  return (
    <div className="space-y-8 p-6">
      {/* All Button Types */}
      <div>
        <h3 className="text-lg font-semibold mb-4">All Button Types (with hover/active effects)</h3>
        <div className="flex flex-wrap gap-4">
          <Button state="primary">Primary</Button>
          <Button state="secondary">Secondary</Button>
          <Button state="outline">Outline</Button>
          <Button state="ghost">Ghost</Button>
          <Button state="destructive">Destructive</Button>
          <Button state="link">Link</Button>
        </div>
      </div>

      {/* Disabled States */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled States</h3>
        <div className="flex flex-wrap gap-4">
          <Button state="primary-disabled">Primary Disabled</Button>
          <Button state="outline-disabled">Outline Disabled</Button>
          <Button state="ghost-disabled">Ghost Disabled</Button>
          <Button state="destructive-disabled">Destructive Disabled</Button>
          <Button state="link-disabled">Link Disabled</Button>
        </div>
      </div>

      {/* Predefined Components */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Predefined Components</h3>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton>Primary</PrimaryButton>
          <SecondaryButton>Secondary</SecondaryButton>
          <OutlineButton>Outline</OutlineButton>
          <GhostButton>Ghost</GhostButton>
          <DestructiveButton>Destructive</DestructiveButton>
          <LinkButton>Link</LinkButton>
        </div>
      </div>

      {/* Buttons with Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button state="primary" leftIcon={<Plus />}>Add Item</Button>
          <Button state="outline" rightIcon={<Download />}>Download</Button>
          <Button state="ghost" leftIcon={<Settings />} rightIcon={<Plus />}>Settings</Button>
        </div>
      </div>

      {/* Icon Only Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Only Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button state="primary" size="icon" leftIcon={<Plus />} />
          <Button state="outline" size="icon-small" leftIcon={<Settings />} />
          <Button state="ghost" size="icon-tiny" leftIcon={<Download />} />
        </div>
      </div>

      {/* All Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">All Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button state="primary" size="giant">Giant</Button>
          <Button state="primary" size="large">Large</Button>
          <Button state="primary" size="medium">Medium</Button>
          <Button state="primary" size="small">Small</Button>
          <Button state="primary" size="tiny">Tiny</Button>
        </div>
      </div>
    </div>
  )
}
