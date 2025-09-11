"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface FormInputProps {
  // 기본 props
  id?: string;
  name?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  
  // Label 관련
  label?: string;
  showLabel?: boolean;
  
  // 상태
  state?: "default" | "hover" | "focus" | "enabled" | "disabled" | "error";
  
  // 사이즈
  size?: "sm" | "md" | "lg" | "xl";
  
  // 에러 관련
  errorMessage?: string;
  hasError?: boolean;
  
  // 기타
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  
  // 커스터마이징
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  
  // 이벤트
  onStateChange?: (state: FormInputProps["state"]) => void;
}

export function FormInput({
  id,
  name,
  type = "text",
  placeholder = "Text Input",
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  label,
  showLabel = true,
  state = "default",
  size = "md",
  errorMessage,
  hasError = false,
  disabled = false,
  required = false,
  autoComplete,
  className,
  inputClassName,
  labelClassName,
  errorClassName,
  onStateChange,
}: FormInputProps) {
  const [internalState, setInternalState] = React.useState<FormInputProps["state"]>(state);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  // 상태 결정 로직 수정 - Focus 상태 우선순위 높임
  const getCurrentState = (): FormInputProps["state"] => {
    if (disabled) return "disabled";
    if (hasError) return "error";
    if (isFocused) return "focus"; // Focus 상태를 우선으로
    if (hasValue) return "enabled";
    if (isHovered) return "hover";
    return "default";
  };

  const currentState = getCurrentState();

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          container: "w-[100px]",
          input: "h-[26px] px-3 py-1 text-xs",
          label: "text-xs",
        };
      case "md":
        return {
          container: "w-[234px]",
          input: "h-[34px] px-3 py-2 text-sm",
          label: "text-sm",
        };
      case "lg":
        return {
          container: "w-[424px]",
          input: "h-[34px] px-3 py-2 text-sm",
          label: "text-sm",
        };
      case "xl":
        return {
          container: "w-[750px]",
          input: "h-[34px] px-3 py-2 text-sm",
          label: "text-sm",
        };
      default:
        return {
          container: "w-[234px]",
          input: "h-[34px] px-3 py-2 text-sm",
          label: "text-sm",
        };
    }
  };

  const getStateStyles = () => {
    switch (currentState) {
      case "hover":
        return {
          input: "border-[#0026D2] text-[#90A1B2] bg-white focus:outline-none focus:ring-0",
          label: "text-[#3A4753]",
        };
      case "focus":
        return {
          input: "border-[#5633CC] text-[#3A4753] bg-white  focus:outline-none focus:ring-0 ",
          label: "text-[#3A4753]",
        };
      case "enabled":
        return {
          input: "border-[#007BF7] text-[#3A4753] bg-white focus:outline-none focus:ring-0",
          label: "text-[#3A4753]",
        };
      case "disabled":
        return {
          input: "border-[#E7EAED] text-[#DDDFE2] bg-[#FAFAFA] cursor-not-allowed focus:outline-none focus:ring-0",
          label: "text-[#3A4753]",
        };
      case "error":
        return {
          input: "border-[#E02B1D] text-[#3A4753] bg-white focus:outline-none focus:ring-0",
          label: "text-[#3A4753]",
        };
      default:
        return {
          input: "border-[#D3DDE7] text-[#798CA0] bg-white focus:outline-none focus:ring-0",
          label: "text-[#3A4753]",
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const stateStyles = getStateStyles();

  const handleMouseEnter = () => {
    if (!disabled && !isFocused && !hasValue) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsFocused(true);
      setIsHovered(false);
    }
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsFocused(false);
    }
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setHasValue(newValue.length > 0);
    onChange?.(e);
  };

  // 상태 변화 감지
  React.useEffect(() => {
    onStateChange?.(currentState);
  }, [currentState, onStateChange]);

  const inputId = id || `input-${name || Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn("flex flex-col gap-1.5", sizeStyles.container, className)}>
      {/* Label */}
      {showLabel && label && (
        <Label
          htmlFor={inputId}
          className={cn(
            "text-[16px] font-normal leading-[1.32] text-[#3A4753]",
            stateStyles.label,
            sizeStyles.label,
            labelClassName
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}

      {/* Input */}
      <Input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        className={cn(
          "rounded-[8px] border-[1px] transition-all duration-200",
          sizeStyles.input,
          stateStyles.input,
          inputClassName
        )}
      />

      {/* Error Message */}
      {hasError && errorMessage && (
        <div className={cn(
          "text-xs text-[#E02B1D] mt-1",
          errorClassName
        )}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

// 사용 예시를 위한 헬퍼 함수들
export function createFormInputProps(
  baseProps: Partial<FormInputProps> = {}
): FormInputProps {
  return {
    placeholder: "Text Input",
    showLabel: true,
    state: "default",
    size: "md",
    disabled: false,
    required: false,
    ...baseProps,
  };
}

export function createSizeVariants(): FormInputProps[] {
  return [
    { size: "sm", placeholder: "Small Input" },
    { size: "md", placeholder: "Medium Input" },
    { size: "lg", placeholder: "Large Input" },
    { size: "xl", placeholder: "Extra Large Input" },
  ];
}

export function createStateVariants(): FormInputProps[] {
  return [
    { state: "default", placeholder: "Default State" },
    { state: "hover", placeholder: "Hover State" },
    { state: "focus", placeholder: "Focus State" },
    { state: "enabled", placeholder: "Enabled State" },
    { state: "disabled", placeholder: "Disabled State" },
    { state: "error", placeholder: "Error State", hasError: true, errorMessage: "This field is required" },
  ];
}

export default FormInput;
