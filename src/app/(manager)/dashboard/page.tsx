"use client";

import { HomeHeader } from "@/components/dashboard/home_header";
import {
  NavigationMenu,
  NavigationItem,
  createDefaultNavigationItems,
} from "@/components/dashboard/navigation-menu";
import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent } from "@/components/ui/card";
import { Rowdies } from "next/font/google";
import { useState } from "react";

export default function DashBoardPage() {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>(
    createDefaultNavigationItems()
  );

  const handleNavigationClick = (clickedItem: NavigationItem) => {
    console.log("Navigation clicked:", clickedItem);

    // 활성 아이템 변경
    setNavigationItems((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item.id === clickedItem.id,
      }))
    );
  };

  return (
    <div className="min-h-screen min-w-[1200px] bg-white">
      <HomeHeader />

      {/* 네비게이션 메뉴 */}
      <NavigationMenu
        items={navigationItems}
        onItemClick={handleNavigationClick}
        backgroundColor="bg-[#F7F8FF]"
      />

      {/* body 원격해지하기 btn */}
      <div className="flex justify-center items-center gap-6 pb-[12px] pt-[14px]  flex-none">
        <Button state="outline" className="w-[282px] h-[96px] text-[16px]">
          원격 해지하기
        </Button>
        <Card className="w-[282px] h-24 bg-[#59d1e6] rounded-md border border-solid border-light-gray600">
          <CardContent className="flex items-center justify-center h-full p-2">
            <div className="[font-family:'Pretendard-SemiBold', Helvetical] font-semibold text-white text-xl tracking-[0] leading-[26.4px]">
              {" "}
              ###
            </div>
          </CardContent>
        </Card>

        <Card className="w-[282px] h-24 bg-[#86b4f0] rounded-md border border-solid border-light-gray600">
          <CardContent className="flex flex-col items-start gap-4 p-4">
            <div className="flex-col flex-[0_0_auto] flex items-center justify-center gap-2.5 releative self-stretch w-full">
              <div className="h-6 flex items-center justify-center gap-2.5 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Pretendard-Medium, Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.5px] whitespace-nowrap">
                  PCKA0-A00099
                </div>
              </div>
            </div>
            <div className="flex-col flex-[0_0_auto] flex items-center justify-center gap-2.5 releative self-stretch w-full">
              <div className="h-6 flex items-center justify-center gap-2.5 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Pretendard-Medium, Helvetica] font-semibold text-white text-base tracking-[0] leading-[21.1px] whitespace-nowrap">
                  Exdia PT10
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[282px] h-24 bg-[#23A8DC] rounded-md border border-solid border-light-gray600">
          <CardContent className="flex flex-col items-start gap-4 p-4">
            <div className="flex-col flex-[0_0_auto] flex items-center justify-center gap-2.5 releative self-stretch w-full">
              <div className="h-6 flex items-center justify-center gap-2.5 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Pretendard-Medium, Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.5px] whitespace-nowrap">
                  PCKA0-A00099
                </div>
              </div>
            </div>
            <div className="flex-col flex-[0_0_auto] flex items-center justify-center gap-2.5 releative self-stretch w-full">
              <div className="h-6 flex items-center justify-center gap-2.5 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Pretendard-Medium, Helvetica] font-semibold text-white text-base tracking-[0] leading-[21.1px] whitespace-nowrap">
                  Exdia PT10
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1920px h-[1px] bg-[#CFCFCF] flex-none" />
      <div className="grid grid-cols-2 w-full h-screen">
        <div className="border-r-1 border-[#CFCFCF] p-4 h-full">
          <CommonActionCard
            cardClassName="bg-[#F5F9FF] border-[#D3DDE7]"
            badgeText="###"
            badgeClassName="bg-[#007BF7] text-white"
            name="Exdia PT10"
            serial="PCKA0-A00099"
            dateLabel="2024-01-15 14:30:25"
            footerStatus="원격 연결 대기중"
            buttonText="원격 연결하기"
            buttonClassName="border-[#90A1B2] bg-white text-[#007BF7] hover:bg-[#EEF5FF]"
            onButtonClick={() => console.log("connect")}
          />
        </div>
        
        <div className="p-4">
          {/* 오른쪽 */}

          <CommonActionCard
            cardClassName="bg-[#F5F9FF] border-[#D3DDE7]"
            badgeText="###"
            badgeClassName="bg-[#007BF7] text-white"
            name="Exdia PT10"
            serial="PCKA0-A00099"
            dateLabel="2024-01-15 14:30:25"
            footerStatus="원격 연결 대기중"
            buttonText="원격 연결하기"
            buttonClassName="border-[#90A1B2] bg-white text-[#007BF7] hover:bg-[#EEF5FF]"
            onButtonClick={() => console.log("connect")}
          />
        </div>
      </div>
    </div>
  );
}
import CommonActionCard from "@/components/dashboard/common-action-card";
