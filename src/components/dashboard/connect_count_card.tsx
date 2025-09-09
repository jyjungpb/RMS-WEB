"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ConnectCountCardProps {
  // 카드 비주얼
  cardClassName?: string; // 배경색/테두리 등 카드 전체 스타일

  // 본문 정보

  title?: string; // 예:
  deviceCount?: string; // 예:

  // 크기 조정용(필요 시)
}

export function ConnectCountCard({
  cardClassName,

  title = "",
  deviceCount = "",
}: ConnectCountCardProps) {
  return (
    <Card 
    
    className={cn(
        // 기본 크기/여백은 Figma 기반으로 근접하게 설정
        "w-[588px]  rounded-md mb-3",
        cardClassName
      )}>
      <CardContent className="flex flex-col items-center gap-1 px-[220px] py-3.5">
        <div className="flex flex-col items-start px-2 py-1 self-stretch w-full gap-2.5">
          <div className="h-6 flex items-center justify-center gap-2.5 relative self-stretch w-full">
            <div className="relative w-fit [font-family:'Pretendard-Medium, Helvetica] font-medium text-black text-sm tracking-[0] leading-[18.5px] whitespace-nowrap">
              {title}
            </div>
          </div>
        </div>
        <div className="w-[94px] items-center justify-center px-2 py-1 flex gap-2.5">
          <div className="inline-flex h-6 items-center justify-center gap-2.5">
            <div className="mt-[-5.00px] mb-[-3.00px] [font-family:'Pretendard-Medium, Helvetica] font-bold text-black text-2xl tracking-[0] leading-[31.7px] whitespace-nowrap ">
              {deviceCount}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ConnectCountCard;
