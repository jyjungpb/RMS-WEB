"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface FilterSelectOption {
  value: string;
  label: string;
}

export interface FilterSelectProps {
  // 기본 props
  placeholder?: string;
  options: FilterSelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  
  // 상태별 스타일링
  variant?: "default" | "hover" | "focus" | "selected";
  
  // 기능 옵션
  showCounter?: boolean;
  counterValue?: number;
  showIcon?: boolean;
  
  // 커스터마이징
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  
  // 이벤트
  onOpenChange?: (open: boolean) => void;
}

export function FilterSelect({
  placeholder = "필터 검색",
  options,
  value,
  onValueChange,
  disabled = false,
  variant = "default",
  showCounter = false,
  counterValue = 0,
  showIcon = true,
  className,
  triggerClassName,
  contentClassName,
  onOpenChange,
}: FilterSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "hover":
        return {
          trigger: "bg-[#F5F9FF] border-[#D3DDE7] text-[#515C67]",
          icon: "text-[#94989C]",
          counter: "bg-[#4EA7FF] text-white",
        };
      case "focus":
        return {
          trigger: "bg-[#F5F9FF] border-[#4EA7FF] text-[#515C67] ring-2 ring-[#4EA7FF]/20",
          icon: "text-[#94989C]",
          counter: "bg-[#4EA7FF] text-white",
        };
      case "selected":
        return {
          trigger: "bg-[#007BF7] border-[#007BF7] text-white",
          icon: "text-white",
          counter: "bg-white text-[#4EA7FF]",
        };
      default:
        return {
          trigger: "bg-white border-[#D3DDE7] text-[#515C67]",
          icon: "text-[#94989C]",
          counter: "bg-[#4EA7FF] text-white",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={cn("inline-block", className)}>
      <Select
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        onOpenChange={handleOpenChange}
      >
        <SelectTrigger
          className={cn(
            // 기본 스타일
            "h-auto min-h-[32px] px-3 py-2 gap-2 rounded-md border transition-all duration-200",
            "focus:outline-none focus:ring-0",
            // 상태별 스타일
            styles.trigger,
            // 패딩 조정 (counter가 있을 때)
            showCounter && "pl-3 pr-2",
            !showCounter && "px-3",
            triggerClassName
          )}
        >
          <div className="flex items-center gap-2 flex-1">
            <SelectValue placeholder={placeholder} />
            
            {/* Counter */}
            {showCounter && counterValue > 0 && (
              <div
                className={cn(
                  "flex items-center justify-center w-[18px] h-[18px] rounded-full text-xs font-semibold",
                  styles.counter
                )}
              >
                {counterValue}
              </div>
            )}
          </div>

          {/* Icon */}
          {showIcon && (
            <div className="flex items-center justify-center w-4 h-4">
              {isOpen ? (
                <ChevronUpIcon className={cn("w-4 h-4 transition-transform", styles.icon)} />
              ) : (
                <ChevronDownIcon className={cn("w-4 h-4 transition-transform", styles.icon)} />
              )}
            </div>
          )}
        </SelectTrigger>

        <SelectContent
          className={cn(
            "min-w-[200px] max-h-[300px] overflow-y-auto",
            contentClassName
          )}
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// 사용 예시를 위한 헬퍼 함수
export function createFilterOptions(options: string[]): FilterSelectOption[] {
  return options.map((option) => ({
    value: option.toLowerCase().replace(/\s+/g, "-"),
    label: option,
  }));
}

export default FilterSelect;
