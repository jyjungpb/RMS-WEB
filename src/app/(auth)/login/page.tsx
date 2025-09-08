"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { images } from '@/utils/constants/images';
import React, { useCallback, useMemo, useState } from "react";
import MainHeader from "@/components/common/main_header";
import { login, getLoginErrorMessage, isLoginSuccess, saveAccessToken, saveTermsAgreement, saveUserRole } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isDisabled = useMemo(() => {
    return isLoading || email.trim().length === 0 || password.trim().length === 0;
  }, [isLoading, email, password]);

  const handleSubmit = useCallback(async () => {
    if (isDisabled) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await login({ email, password });
      if (isLoginSuccess(response) && response.content) {
        saveAccessToken(response.content.accessToken);
        saveUserRole(response.content.role);
        
        saveTermsAgreement(response.content.hasAgreedToTerms);
        const { role, hasAgreedToTerms } = response.content;
        
        // if (role === "SUPERUSER" || role === "SYSADMIN" || role === "EMPLOYEE") {
        //   router.push("/");
        // } else if (hasAgreedToTerms) {  
        //   router.push("/");
        // } else {
        //   router.push("/term");
        // }
      } else {
        const message = getLoginErrorMessage(response);
        setError(message || "로그인 실패");
      }
    } finally {
      setIsLoading(false);
    }
  }, [email, password, isDisabled, router]);

  return (
    <div className="bg-white min-h-screen w-full flex flex-col pt-[68px]"> 
      <MainHeader />
 
      <main className="flex-1 flex justify-center pt-[47px]"> 
        <div className="  items-center justify-center">   
          <div className="text-center items-center justify-center"> 
            <h1 className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-base tracking-[-0.32px] leading-[21.1px] text-gray-800 pb-3.5">
              로그인
            </h1>
            <p className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[18.5px] text-gray-800 pb-[32px]">
              회원 서비스 이용을 위해 로그인 해주세요.
            </p>
          </div>

          <Card className="bg-[#FCFCFC] border-[#D2D4D7] border w-[322px]">
            <CardContent className="px-6 py-4 space-y-4">
              <div className="space-y-1.5">
                <Label className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-[#3A4753] text-base tracking-[0] leading-[21.1px]">
                  이메일
                </Label>
                <Input
                  placeholder="이메일을 입력해 주세요."
                  className="h-[34px] bg-white border-[#D3DDE7] [font-family:'Pretendard-Regular',Helvetica] font-normal text-sm tracking-[0] leading-[18.5px] placeholder:text-[#798CA0] rounded-lg px-3 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-[#3A4753] text-base tracking-[0] leading-[21.1px]">
                  비밀번호
                </Label>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  className="h-[34px] bg-white border-[#D3DDE7] [font-family:'Pretendard-Regular',Helvetica] font-normal text-sm tracking-[0] leading-[18.5px] placeholder:text-[#798CA0] rounded-lg px-3 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> 

              <div className="flex justify-end">
                <button className="inline-flex h-[20px] items-center gap-1 rounded-md p-0">
                  <img src={images.downIcon.src} alt="down" className="w-5 h-5" /> 
                  <span className="text-[#677888] [font-family:'Pretendard-Regular',Helvetica] font-normal text-xs tracking-[0] leading-none">
                    임시 비밀번호 전송
                  </span> 
                </button>
              </div>
            </CardContent>
          </Card>

          {error && (
            <div className="mt-3 text-xs text-red-500 text-center">{error}</div>
          )}

          <div className="mt-6 flex justify-center">
            <Button
              className="w-[92px] h-10 [font-family:'Pretendard-Regular',Helvetica] text-xs leading-[15.8px]"
              variant={isDisabled ? "outline" : "default"}
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
