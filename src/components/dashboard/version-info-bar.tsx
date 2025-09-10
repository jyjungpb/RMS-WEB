"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface VersionItem {
  label: string;    // 예: 시스템 버전
  value: string;    // 예: 1.00.14.0006
}

export interface VersionInfoBarProps {
  title?: string;                 // 좌측 타이틀 (예: 검사기 소프트웨어 버전 정보)
  items: VersionItem[];          // 우측에 나열될 항목들 (최대 3~4개 권장)
  className?: string;            // 전체 래퍼 커스텀
  titleClassName?: string;       // 타이틀 커스텀
  itemLabelClassName?: string;   // 항목 라벨 커스텀
  itemValueClassName?: string;   // 항목 값 커스텀
}

// Figma (node 9:18378) 기반: 좌측 타이틀 + 우측 3열 항목, 흰 배경, 수평 정렬, 내부 패딩 16px 24px
export function VersionInfoBar({
  title = "검사기 소프트웨어 버전 정보",
  items,
  className,
  titleClassName,
  itemLabelClassName,
  itemValueClassName,
}: VersionInfoBarProps) {
  return (
    <Card
      className={cn(
        "flex  w-[1200px] items-center justify-between gap-6 rounded-lg border bg-white px-6 py-4", // 24px, 16px 근사치
        className
      )}
    >
   

      {/* Right Items */}
      <div className="flex items-center justify-between gap-6">
           {/* Left Title */}
      <div className={cn(
        "shrink-0 border-r pr-6 text-[12px] items-start font-semibold leading-5 text-[#677888]",
        titleClassName
      )}
        style={{ borderColor: "#D2D4D7" }}
      >
        {title}
      </div>
        {items.map((it, idx) => (
          <div key={idx} className={cn(
            "flex w-[282px] flex-col gap-4 pl-6", // 각 칼럼 좌여백 24px
          )}
          >
            <div className={cn(
              "h-4 text-[12px] font-semibold leading-5 text-[#677888]",
              itemLabelClassName
            )}
            >
              {it.label}
            </div>
            <div className={cn(
              "text-[16px] font-semibold leading-5 text-[#3A4753]",
              itemValueClassName
            )}
            >
              {it.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default VersionInfoBar;
