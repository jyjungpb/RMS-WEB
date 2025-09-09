"use client";

import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent } from "@/components/ui/card";
import CommonActionCard from "@/components/dashboard/common-action-card";
import { ConnectCountCard } from "@/components/dashboard/connect_count_card";

export default function HomeSection() {
  return (
    <>
      {/* 상단 버튼/카드 */}
      <div className="flex justify-center items-center gap-6 pb-[12px] pt-[14px]">
        <Button state="outline" className="w-[282px] h-[96px] text-[16px]">
          원격 해지하기
        </Button>

        <Card className="w-[282px] h-24 bg-[#59d1e6] rounded-md border border-solid border-light-gray600">
          <CardContent className="flex items-center justify-center h-full p-2">
            <div className="font-semibold text-white text-xl">###</div>
          </CardContent>
        </Card>

        <Card className="w-[282px] h-24 bg-[#86b4f0] rounded-md border border-solid border-light-gray600">
          <CardContent className="flex flex-col gap-4 p-4 items-start">
            <div className="flex items-center justify-center w-full h-6">
              <div className="text-white text-sm">PCKA0-A00099</div>
            </div>
            <div className="flex items-center justify-center w-full h-6">
              <div className="text-white text-base font-semibold">Exdia PT10</div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[282px] h-24 bg-[#23A8DC] rounded-md border border-solid border-light-gray600">
          <CardContent className="flex flex-col gap-4 p-4 items-start">
            <div className="flex items-center justify-center w-full h-6">
              <div className="text-white text-sm">PCKA0-A00099</div>
            </div>
            <div className="flex items-center justify-center w-full h-6">
              <div className="text-white text-base font-semibold">Exdia PT10</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full h-[1px] bg-[#CFCFCF]" />

      {/* 좌/우 그리드 */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 min-w-[1200px]">
          {/* 왼쪽 */}
          <div className="border-r border-[#CFCFCF] p-3 h-full">
            <ConnectCountCard
              cardClassName="bg-[#FAF9FF] border-[#007BF7]"
              title="원격 연결 대기중 검사기"
              deviceCount="3"
            />
            <div className="grid grid-cols-2 gap-x-6 gap-y-[14px]">
              {[0, 1, 2].map((i) => (
                <CommonActionCard
                  key={`left-${i}`}
                  badgeText="###"
                  badgeClassName="bg-[#007BF7] text-white"
                  name="Exdia PT10"
                  serial="PCKA0-A00099"
                  dateLabel="2024-01-15 14:30:25"
                  footerStatus="원격 연결 대기중"
                  buttonText="원격 연결하기"
                  buttonClassName="border-[#007DFA] bg-white text-[#007DFA]"
                  onButtonClick={() => console.log("connect")}
                />
              ))}
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="p-3 h-full">
            <ConnectCountCard
              cardClassName="bg-[#F7FFFD] border-[#00AE86]"
              title="연결된 검사기"
              deviceCount="3"
            />
            <div className="grid grid-cols-2 gap-x-6 gap-y-[14px]">
              {[0, 1, 2].map((i) => (
                <CommonActionCard
                  key={`right-${i}`}
                  cardClassName="border-[#C6C9CE] bg-[#F7FFFD]"
                  badgeText="###"
                  badgeClassName="border-[#00AE86] bg-white text-[#3A4753]"
                  name="Exdia PT10"
                  serial="PCKA0-A00099"
                  dateLabel="2024-01-15 14:30:25"
                  footerStatus="원격 연결 대기중"
                  buttonText="원격 연결하기"
                  buttonClassName="border-[#00AE86] bg-[#00AE86] text-white"
                  onButtonClick={() => console.log("connect")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
