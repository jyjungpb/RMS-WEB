"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
  import { RadioGroup, RadioWithLabel } from "@/components/ui/radio";       
import MainHeader from "@/components/common/main_header";
import { Button as ButtonEnhanced } from "@/components/ui/button-enhanced";

export default function TermsPage() {
  const [agreeService, setAgreeService] = useState(false);      // 필수: 이용약관
  const [agreePrivacy, setAgreePrivacy] = useState(false);      // 필수: 개인정보 처리방침
  const [agreeMarketing, setAgreeMarketing] = useState(false);  // 선택: 마케팅 수신 동의

  const allChecked = useMemo(
    () => agreeService && agreePrivacy && agreeMarketing,
    [agreeService, agreePrivacy, agreeMarketing]
  );

  const requiredChecked = useMemo(
    () => agreeService && agreePrivacy,
    [agreeService, agreePrivacy]
  );

  const onToggleAll = () => {
    const next = !allChecked;
    setAgreeService(next);
    setAgreePrivacy(next);
    setAgreeMarketing(next);
  };

  return ( 
    <div className="bg-white min-h-screen w-full flex flex-col pt-[68px]"> 
      <MainHeader />

      <main className="flex-1 flex justify-center pt-[47px]">
        <div className="w-[527px]  px-4">
          <div className="flex flex-col items-center justify-center gap-[14px] pb-8">
            <div className="text-center">
              <h2 className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-base leading-[1.32] tracking-[-0.02em] text-[#3A4753]">환영합니다.</h2>
            </div>
            <p className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-sm leading-[1.32] tracking-[-0.02em] text-[#3A4753] text-center">
              본 시스템의 서비스를 사용하기 위해서는 모든 약관에 대해 동의가 필요합니다.
            </p>
          </div>
          
          <Card className="bg-[#FCFCFC] border-[#D2D4D7] border w-[527px]">  
            <CardContent className="px-6 py-4 space-y-2"> 
              {/* Title */}
              <div className="px-6 w-full flex items-center ">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-base leading-[1.32] tracking-[-0.02em] text-[#3A4753]">약관 동의</h3>
              </div>

              {/* All agree */}
              <div className="flex items-center gap-4 h-8 px-6">
                <div className="relative">
                  <input
                    id="agree-all"
                    type="checkbox" 
                    checked={allChecked}
                    onChange={onToggleAll}
                    className="sr-only"
                  />
                  <label
                    htmlFor="agree-all"
                    className={`
                      flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-colors
                      ${allChecked 
                        ? 'border-[#007DFA] bg-white' 
                        : 'border-[#007DFA] bg-white hover:bg-[#EBEEF8]'
                      }
                    `}
                  >
                    {allChecked && (
                      <div className="w-3 h-3 rounded-full bg-[#007DFA]" />
                    )}
                  </label>
                </div>
                <Label htmlFor="agree-all" className="text-[#4B4B4B] text-base font-normal cursor-pointer">
                  모두 동의합니다.
                </Label>
              </div>

              <div className="h-px bg-[#D2D4D7] mx-6" />

              {/* Items */}
              <ul className="space-y-2 px-6">
                <li className="flex items-center justify-between gap-4 h-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input
                        id="agree-service"
                        type="checkbox"
                        checked={agreeService}
                        onChange={(e) => setAgreeService(e.target.checked)}
                        className="sr-only"
                      />
                      <label
                        htmlFor="agree-service"
                        className={`
                          flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-colors
                          ${agreeService 
                            ? 'border-[#007DFA] bg-white' 
                            : 'border-[#007DFA] bg-white hover:bg-[#EBEEF8]'
                          }
                        `}
                      >
                        {agreeService && (
                          <div className="w-3 h-3 rounded-full bg-[#007DFA]" />
                        )}
                      </label>
                    </div>
                    <Label htmlFor="agree-service" className="text-[#3A4753] text-sm cursor-pointer">
                      서비스 이용 약관에 동의합니다. (필수)
                    </Label>
                  </div>
                  <button type="button" className="inline-flex h-6 items-center text-[#677888] text-sm p-0">보기</button>
                </li>

                <li className="flex items-center justify-between gap-4 h-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input
                        id="agree-privacy"
                        type="checkbox" 
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="sr-only"
                      />
                      <label
                        htmlFor="agree-privacy"
                        className={`
                          flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-colors
                          ${agreePrivacy 
                            ? 'border-[#007DFA] bg-white' 
                            : 'border-[#007DFA] bg-white hover:bg-[#EBEEF8]'
                          }
                        `}
                      >
                        {agreePrivacy && (
                          <div className="w-3 h-3 rounded-full bg-[#007DFA]" />
                        )}
                      </label>
                    </div>
                    <Label htmlFor="agree-privacy" className="text-[#3A4753] text-sm cursor-pointer">
                      개인정보 처리 방침에 동의합니다. (필수)
                    </Label>
                  </div>
                  <button type="button" className="inline-flex h-6 items-center text-[#677888] text-sm p-0">보기</button>
                </li>

                <li className="flex items-center justify-between gap-4 h-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input
                        id="agree-marketing"
                        type="checkbox"
                        checked={agreeMarketing}
                        onChange={(e) => setAgreeMarketing(e.target.checked)}
                        className="sr-only"
                      />
                      <label
                        htmlFor="agree-marketing"
                        className={`
                          flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-colors
                          ${agreeMarketing 
                            ? 'border-[#007DFA] bg-white'  
                            : 'border-[#007DFA] bg-white hover:bg-[#EBEEF8]'
                          }
                        `}
                      >
                        {agreeMarketing && (
                          <div className="w-3 h-3 rounded-full bg-[#007DFA]" />
                        )}
                      </label>
                    </div>
                    <Label htmlFor="agree-marketing" className="text-[#3A4753] text-sm cursor-pointer">
                      개인 정보 수집 및 이용약관 (필수)
                    </Label>
                  </div>
                  <button type="button" className="inline-flex h-6 items-center text-[#677888] text-sm p-0">보기</button>
                </li>
              </ul>

            </CardContent>
          </Card>

          <div className="pt-6 flex justify-center"> 
                <ButtonEnhanced
                  className="w-[92px] h-10 text-xs" 
                  state={allChecked ? "primary" : "secondary-disabled"}
                  // state는 disabled prop으로 자동 처리   
                  disabled={!allChecked}    
                >
                  확인
                </ButtonEnhanced>
              </div>
        </div>
      </main>
    </div>
  );
}
