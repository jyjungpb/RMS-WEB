"use client";

import { cn } from "@/lib/utils";

// 네비게이션 메뉴 아이템 타입 정의
export interface NavigationItem {
  id: string;
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

// 네비게이션 메뉴 컴포넌트의 props 타입 정의
export interface NavigationMenuProps {
  // 메뉴 아이템들
  items: NavigationItem[];
  
  // 활성 아이템 변경 핸들러
  onItemClick?: (item: NavigationItem) => void;
  
  // 커스터마이징 옵션
  className?: string;
  backgroundColor?: string;
  
  // 아이템 스타일 커스터마이징
  itemClassName?: string;
  activeItemClassName?: string;
  disabledItemClassName?: string;
  
  // 텍스트 스타일 커스터마이징
  textClassName?: string;
  activeTextClassName?: string;
  disabledTextClassName?: string;
}

// 개별 네비게이션 아이템 컴포넌트
function NavigationMenuItem({ 
  item, 
  onClick, 
  itemClassName,
  activeItemClassName,
  disabledItemClassName,
  textClassName,
  activeTextClassName,
  disabledTextClassName
}: {
  item: NavigationItem;
  onClick?: (item: NavigationItem) => void;
  itemClassName?: string;
  activeItemClassName?: string;
  disabledItemClassName?: string;
  textClassName?: string;
  activeTextClassName?: string;
  disabledTextClassName?: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!item.disabled) {
      console.log("Item clicked:", item.id, "Current active:", item.isActive);
      
      // 개별 아이템의 onClick 먼저 실행
      if (item.onClick) {
        item.onClick();
      }
      // 그 다음 전역 onClick 실행
      if (onClick) {
        onClick(item);
      }
    }
  };

  const getItemStyles = () => {
    if (item.disabled) {
      return cn( 
        "w-[90px] p-2 rounded-md transition-colors cursor-not-allowed",
        disabledItemClassName || "bg-gray-100"
      );
    }
    
    if (item.isActive) {
      return cn(  
        "w-[90px] pt-2 pb-2 rounded-md transition-colors cursor-pointer",
        activeItemClassName || "bg-blue-600"
      );
    }
    
    return cn( 
      "w-[90px] pt-2 pb-2 rounded-md transition-colors cursor-pointer",
      itemClassName 
    );
  };

  const getTextStyles = () => {
    if (item.disabled) {
      return cn(
        "text-[12px] font-bold text-center",
        disabledTextClassName || "text-gray-400"
      );
    }
    
    if (item.isActive) {
      return cn(
        "text-[12px] font-bold text-center",
        activeTextClassName || "text-white"
      );
    }
    
    return cn(
      "text-[12px] font-bold text-center", 
      textClassName || "text-gray-400"
    );
  };

  return (
    <button
      type="button"
      className={cn("shrink-0", getItemStyles())}  //
      onClick={handleClick}
      disabled={item.disabled}
    >
      <div className="flex items-center justify-center h-6">
        <span className={getTextStyles()}>
          {item.label}
        </span>
      </div>
    </button>
  );
}

// 메인 네비게이션 메뉴 컴포넌트
export function NavigationMenu({
  items,
  onItemClick,
  className = "",
  backgroundColor = "#F7F8FF",  
  itemClassName,
  activeItemClassName,
  disabledItemClassName,
  textClassName,
  activeTextClassName,
  disabledTextClassName
}: NavigationMenuProps) {
  return (
<div className={cn("py-[14px]", backgroundColor)}> 
  <div className=" no-scrollbar">

      <nav className={cn("flex justify-center items-center gap-[21px]", className)}>
        {items.map((item) => (
          <NavigationMenuItem 
            key={item.id}
            item={item}
            onClick={onItemClick}
            itemClassName={itemClassName}
            activeItemClassName={activeItemClassName}
            disabledItemClassName={disabledItemClassName}
            textClassName={textClassName}
            activeTextClassName={activeTextClassName}
            disabledTextClassName={disabledTextClassName}
          />
        ))}
      </nav>
 
  </div>
</div>
  );
}

// 기본 네비게이션 아이템들을 생성하는 헬퍼 함수
export function createDefaultNavigationItems(): NavigationItem[] {
  return [
    { id: "home", label: "검사기 홈", isActive: true, disabled: false },
    { id: "test", label: "검사", disabled: false },
    { id: "error", label: "오류", disabled: false },
    { id: "upload", label: "XML 업로드", disabled: false }, 
    { id: "instrument", label: "인스트러먼트 계수", disabled: false },
    { id: "qc", label: "정도관리(QC)", disabled: false },
    { id: "material", label: "정도관리 물질", disabled: false },
    { id: "diagnosis", label: "자가 진단", disabled: false },
    { id: "settings", label: "검사기 환경 설정", disabled: false },
    { id: "account", label: "계정관리", disabled: false }
  ];
}
