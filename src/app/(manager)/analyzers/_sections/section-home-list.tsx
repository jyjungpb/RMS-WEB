// src/app/analyzers/_sections/section-home-list.tsx

"use client";


import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent } from "@/components/ui/card";
import { ConnectCountCard } from "@/components/dashboard/connect-count-card";

export default function AnalyzerListPage() {



  return (
    <div className="min-h-screen min-w-[1200px] bg-white "> 


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
      <div className="w-screen h-[1px] bg-[#CFCFCF] flex-none"/>
      <div className="flex justify-center items-stretch h-screen  "> 
         
        <div className="grid grid-cols-2 min-w-[1200px] ">
          {/* body 관리자 원격 연결 대기중 검사기  */} 
          <div className="border-r border-[#CFCFCF] p-3  self-stretch flex-none">  
          <ConnectCountCard
              cardClassName="bg-[#FAF9FF] border-[#007BF7]"
              title="원격 연결 대기중 검사기"
              deviceCount="3"
            />

            <div className="grid grid-cols-2  gap-x-6 gap-y-[14px]">
              <CommonActionCard
                badgeText="###"
                badgeClassName="bg-[#007BF7] text-white"
                name="Exdia PT10"
                serial="PCKA0-A00099"
                dateLabel="2024-01-15 14:30:25"
                footerStatus="원격 연결 대기중2"
                buttonText="원격 연결하기"
                buttonClassName="border-[#007DFA] bg-white text-[#007DFA]"
                onButtonClick={() => console.log("connect")}
              />
              <CommonActionCard
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
              <CommonActionCard
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
            </div>
          </div>
          {/* body 관리자 원격 연결된 검사기  */}

          <div className="  p-3 h-screen"> 
            <ConnectCountCard
              cardClassName="bg-[#F7FFFD] border-[#00AE86]"
              title="연결된 검사기"
              deviceCount="3"
            />

            <div className="grid grid-cols-2 gap-x-6 gap-y-[14px] ">
              <CommonActionCard
                cardClassName="border-[#C6C9CE] bg-[#F7FFFD] "
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
              <CommonActionCard
                cardClassName="border-[#C6C9CE] bg-[#F7FFFD] "
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
              <CommonActionCard
                cardClassName="border-[#C6C9CE] bg-[#F7FFFD] "
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import CommonActionCard from "@/components/dashboard/common-action-card";
