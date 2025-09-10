"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface HomeInfoCardProps {
  title?: string; // 예:
  content?: string; // 예:

  // 크기 조정용(필요 시)
}

export function HomeInfoCard({ title = "", content = "" }: HomeInfoCardProps) {
  return (
    <Card className="w-[282px] h-[101px] bg-white rounded-[8px]">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <div className="flex flex-col items-start  self-stretch w-full ">
          <div className="relative self-stretch w-full h-4">
            <div className="absolute -top-px left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#677888] text-xs tracking-[-0.24px] leading-[15.8]px whitespace-nowrap">
              {title}
            </div>
          </div>
        </div>
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica]  font-semibold text-black text-base tracking-[-0.32px] leading-[21.1]px whitespace-nowrap">
            {content}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default HomeInfoCard;
