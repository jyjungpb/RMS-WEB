// app/analyzers/_sections/section-upload.tsx
"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button, OutlineButton } from "@/components/ui/button-enhanced";
import FormInputDemoPage from "@/app/(dashboard)/form-input-demo/page";
import FormInput from "@/components/common/form-input";
import { ButtonEnhanced } from "@/components/dashboard/button-enhanced";

export default function UploadSection() {
  return (
    <div
      className={cn(
        " bg-[#FFFFFF] min-h-screen min-w-[1200px] w-screen flex flex-col  "
      )}
    >
      <div className={cn(" flex justify-center items-center py-[14px]")}>
        <div className="flex w-[1200px] h-[40px] px-6 ">
          <div className=" flex text-center items-center justify-center pl-2 [font-family:'Pretendard-SemiBold', Helvetica] font-semibold text-[#0026D2] text-[16px]  tracking-[-0.32px] whitespace-nowrap">
            Calibartion XML 파일 목록
          </div>
        </div>
      </div>
      <Separator className="bg-[#CFCFCF] h-[1px]"></Separator>

      <div className={cn(" flex  justify-center items-center py-[14px] ")}>
        <div className="flex  bg-[#F8F8FD] w-[1200px] h-[50px] px-6 py-2 flex-row gap-x-4">
          <div className=" flex w-[190px] text-center items-center  [font-family:'Pretendard-Bold', Helvetica] font-bold text-[#3A4753] text-[14px] whitespace-nowrap">
            XML 파일 업로드
          </div>

          <ButtonEnhanced
        state="default"
        content="only-text" 
        size="small"
        style="filled"
            className="w-[82px] text-[10px] [font-family:'Pretendard-normal', Helvetica] font-normal "
          >
            파일 선택
          </ButtonEnhanced>

          <FormInput
            type="email"
            placeholder="최대 10MB이하, 한번에 1개 파일만 등록 가능합니다."
            state="disabled"
            disabled={true}
            size="xl"
          />
          <ButtonEnhanced
          className="w-[82px] text-[10px] [font-family:'Pretendard-normal', Helvetica] font-normal"
            state="disabled"
            content="only-text"
            size="small"
            style="filled"
            disabled={true}
          >
            업로드
          </ButtonEnhanced>
        </div>
      </div>
    </div>
  );
}
