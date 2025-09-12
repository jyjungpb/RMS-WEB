"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonEnhancedProps {
  // 기본 props
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  // 상태 (외부에서 컨트롤하려면 변경 시 반영됨)
  state?: "default" | "enabled" | "hover" | "pressed" | "disabled";

  // 콘텐츠 타입
  content?: "left-icon" | "right-icon" | "only-text" | "only-icon";

  // 사이즈
  size?: "giant" | "large" | "medium" | "small" | "tiny";

  // 스타일
  style?: "filled" | "outline" | "text";

  // 아이콘
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;

  // 텍스트
  text?: string;

  // 기타
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  autoFocus?: boolean;
}

export const ButtonEnhanced = React.forwardRef<
  HTMLButtonElement,
  ButtonEnhancedProps
>(
  (
    {
      children,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      state = "default",
      content = "only-text",
      size = "medium",
      style = "filled",
      leftIcon,
      rightIcon,
      icon,
      text,
      disabled = false,
      className,
      type = "button",
      autoFocus = false,
      ...props
    },
    ref
  ) => {
    // 내부 상태
    const [internalState, setInternalState] =
      React.useState<ButtonEnhancedProps["state"]>(state);
    const [isPressed, setIsPressed] = React.useState(false);

    // 외부 state 변경 시 동기화 (controlled-like)
    React.useEffect(() => {
      setInternalState(state);
    }, [state]);

    // disabled가 true가 되면 안전하게 pressed 해제
    React.useEffect(() => {
      if (disabled) setIsPressed(false);
    }, [disabled]);

    // 현재 상태 계산
    const getCurrentState = (): NonNullable<ButtonEnhancedProps["state"]> => {
      if (disabled) return "disabled";
      if (isPressed) return "pressed";
      if (internalState === "hover") return "hover";
      if (internalState === "enabled") return "enabled";
      return "default";
    };
    const currentState = getCurrentState();

    // 사이즈별 스타일
    const getSizeStyles = () => {
      switch (size) {
        case "giant":
          return {
            padding: "px-8 py-4",
            fontSize: "text-lg",
            height: "h-[96px]",
            iconSize: "w-6 h-6",
            gap: "gap-3",
          };
        case "large":
          return {
            padding: "px-6 py-3",
            fontSize: "text-base",
            height: "h-[56px]",
            iconSize: "w-5 h-5",
            gap: "gap-2",
          };
        case "medium":
          return {
            padding: "px-4 py-2",
            fontSize: "text-sm",
            height: "h-[40px]",
            iconSize: "w-4 h-4",
            gap: "gap-2",
          };
        case "small":
          return {
            padding: "px-1.5 py-1.5",
            fontSize: "text-xs", 
            height: "h-[34px]",
            iconSize: "w-[18px] h-[18px]",
            gap: "gap-1",
          };
        case "tiny":
          return {
            padding: "px-2 py-1",
            fontSize: "text-xs",
            height: "h-6",
            iconSize: "w-3 h-3",
            gap: "gap-1",
          };
        default:
          return {
            padding: "px-4 py-2",
            fontSize: "text-sm",
            height: "h-10",
            iconSize: "w-4 h-4",
            gap: "gap-2",
          };
      }
    };

    // 스타일별 색상
    const getStyleColors = () => {
      switch (style) {
        case "filled":
          return {
            default: "bg-white text-[#007DFA] border-[#007BF7] shadow-none",
            enabled: "bg-[#007BF7] text-white border-[#007BF7] shadow-none",
            hover: "bg-[#001D9E] text-white border-[#001D9E] shadow-sm",
            pressed: "bg-[#0C35E9] text-white border-[#0C35E9] shadow-none",
            disabled:
              "bg-[#FAFAFA] text-[#DDDFE2] border-[#E7EAED] shadow-none",
          };
        case "outline":
          return {
            default: "bg-white text-[#677888] border-[#90A1B2] shadow-none",
            enabled: "bg-white text-[#007BF7] border-[#007BF7] shadow-none",
            hover: "bg-white text-[#001D9E] border-[#001D9E] shadow-sm",
            pressed: "bg-white text-[#0C35E9] border-[#0C35E9] shadow-none",
            disabled: "bg-white text-[#D2D4D7] border-[#E7EAED] shadow-none",
          };
        case "text":
          return {
            default:
              "bg-transparent text-[#677888] border-transparent shadow-none",
            enabled:
              "bg-transparent text-[#007BF7] border-transparent shadow-none",
            hover: "bg-transparent text-[#001D9E] border-transparent shadow-sm",
            pressed:
              "bg-transparent text-[#0C35E9] border-transparent shadow-none",
            disabled:
              "bg-transparent text-[#D2D4D7] border-transparent shadow-none",
          };
        default:
          return {
            default: "bg-white text-[#677888] border-[#90A1B2] shadow-none",
            enabled: "bg-white text-[#007BF7] border-[#007BF7] shadow-none",
            hover: "bg-white text-[#001D9E] border-[#001D9E] shadow-sm",
            pressed: "bg-white text-[#0C35E9] border-[#0C35E9] shadow-none",
            disabled: "bg-white text-[#D2D4D7] border-[#E7EAED] shadow-none",
          };
      }
    };

    const sizeStyles = getSizeStyles();
    const styleColors = getStyleColors();

    // ----- Pointer Events 기반 핸들러 -----
    const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (disabled) return;
      setIsPressed(true);
      // 포인터 캡처: 밖으로 나가도 up/cancel이 버튼으로 귀속
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      // 하위 호환: 기존 mouseDown 콜백 호출
      onMouseDown?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (disabled) return;
      setIsPressed(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      onMouseUp?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    const handlePointerEnter = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!disabled) setInternalState("hover");
      onMouseEnter?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    const handlePointerLeave = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!disabled) setInternalState("default");
      onMouseLeave?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
      // 캡처 중이라면 up은 어차피 들어오므로 여기서 pressed 해제는 불필요
    };

    const handlePointerCancel = (e: React.PointerEvent<HTMLButtonElement>) => {
      // 스크롤 간섭/OS 제스처 등으로 취소될 때 안전 복구
      setIsPressed(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    };

    const handleLostPointerCapture = () => {
      // 예기치 않게 캡처가 풀렸을 때도 pressed 해제
      setIsPressed(false);
    };

    // 키보드 접근성 (Space/Enter)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === " " || e.key === "Enter") setIsPressed(true);
    };
    const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === " " || e.key === "Enter") setIsPressed(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      // 필요 시 enabled 상태를 의미적으로 표시하고 싶으면 주석 해제
      // setInternalState("enabled");
      onClick?.(e);
    };

    // 콘텐츠 렌더링
    const renderContent = () => {
      switch (content) {
        case "left-icon":
          return (
            <>
              {leftIcon && (
                <span className={cn(sizeStyles.iconSize, "flex-shrink-0")}>
                  {leftIcon}
                </span>
              )}
              {text && <span className="flex-1 text-center">{text}</span>}
            </>
          );
        case "right-icon":
          return (
            <>
              {text && <span className="flex-1 text-center">{text}</span>}
              {rightIcon && (
                <span className={cn(sizeStyles.iconSize, "flex-shrink-0")}>
                  {rightIcon}
                </span>
              )}
            </>
          );
        case "only-icon":
          return (
            <span
              className={cn(
                sizeStyles.iconSize,
                "flex-shrink-0 [&>svg]:w-full [&>svg]:h-full"
              )}
            >
              {icon || leftIcon || rightIcon}
            </span>
          );
        case "only-text":
        default:
          return <span className="flex-1 text-center">{text || children}</span>;
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        autoFocus={autoFocus}
        aria-pressed={currentState === "pressed" || undefined}
        className={cn(
          // 기본 레이아웃
          "inline-flex items-center justify-center",
          "border-[1px] rounded-[6px]",
          "focus:outline-none focus:ring-0",
          // Tailwind active 스케일 효과는 유지/제거 선택 가능

          // 사이즈
          sizeStyles.padding,
          sizeStyles.fontSize,
          sizeStyles.height,
          sizeStyles.gap,

          // 상태별 색상
          styleColors[currentState as keyof typeof styleColors],

          // 비활성화
          disabled && "cursor-not-allowed opacity-60",

          // 외부 클래스
          className
        )}
        onClick={handleClick}
        // Pointer Events
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerCancel={handlePointerCancel}
        onLostPointerCapture={handleLostPointerCapture}
        // Keyboard
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        // 포커스 잃으면 안전 복귀
        onBlur={() => setIsPressed(false)}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

ButtonEnhanced.displayName = "ButtonEnhanced";

// 헬퍼 (그대로 유지)
export const createStateVariants = () => [
  { state: "default" as const, text: "Default" },
  { state: "enabled" as const, text: "Enabled" },
  { state: "hover" as const, text: "Hover" },
  { state: "pressed" as const, text: "Pressed" },
  { state: "disabled" as const, text: "Disabled" },
];

export const createContentVariants = () => [
  { content: "left-icon" as const, text: "Left Icon", icon: "←" },
  { content: "right-icon" as const, text: "Right Icon", icon: "→" },
  { content: "only-text" as const, text: "Only Text" },
  { content: "only-icon" as const, text: "Only Icon", icon: "★" },
];

export const createSizeVariants = () => [
  { size: "giant" as const, text: "Giant" },
  { size: "large" as const, text: "Large" },
  { size: "medium" as const, text: "Medium" },
  { size: "small" as const, text: "Small" },
  { size: "tiny" as const, text: "Tiny" },
];

export const createStyleVariants = () => [
  { style: "filled" as const, text: "Filled" },
  { style: "outline" as const, text: "Outline" },
  { style: "text" as const, text: "Text" },
];
