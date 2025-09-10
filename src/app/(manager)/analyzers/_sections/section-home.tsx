// src/app/analyzers/_sections/section-home-list.tsx

"use client";



import { cn } from "@/lib/utils";
import HomeInfoCard from "@/components/home/home-info-card";

import HomeVersionCard from "@/components/home/home-version-card";
import VersionInfoBar from "@/components/dashboard/version-info-bar";
import HomeCountCard from "@/components/home/home-count-card";
import { images } from "@/utils/constants/images";
import HomeFileCard from "@/components/home/home-file-card";
import FilterSelectDemoPage from "@/app/(dashboard)/filter-select-demo/page";

export default function HomeSection() { 



  return (
    <div className={cn(" bg-[#F7F8FF] min-h-screen min-w-[1200px] w-screen flex flex-col")}> 
        {/* <FilterSelectDemoPage></FilterSelectDemoPage> */}

    <div className=" no-scrollbar">
  
        <div className={cn(" flex justify-center items-center gap-[24px] pt-[14px]")}>
        <HomeInfoCard title="모델명" content="Exdia PT10"/>
        <HomeInfoCard title="검사기 S/N" content="Exdia PT10"/>
        <HomeInfoCard title="연결 채널" content="Exdia PT10"/>
        <HomeInfoCard title="원격 유지 시간" content="Exdia PT10"/>
        </div> 
        <div className={cn(" flex justify-center items-center py-6 ")}>
        <HomeVersionCard 
        
        items={[
          { label: "시스템 버전", version: "1.00.14.0006" },
          { label: "어플리케이션 버전", version: "2.08.04.0001" },
          { label: "XML 버전", version: "1.08.16.0002" },
        ]}
        />
        </div>  
        <div className="min-w-[1200px] w-scree items-center flex flex-row justify-center gap-6"> 
        <HomeCountCard title="검사 개수" count="9999"date="최근 진단 일시 9999-99-99 12:12:12" iconImgPath={images.testCountIcon.src} className="bg-[#FCFBFF] border-[#DDD4E9] /"/>
        <HomeCountCard title="검사 개수" count="9999"date="최근 진단 일시 9999-99-99 12:12:12" iconImgPath={images.errorCountIcon.src} className="bg-[#F8FBFF] border-[#BFCEF0]"textCn="text-[#003AAD]" iconCn="bg-[#BDC8E0]" />
        <HomeFileCard title="로그 다운로드" className="bg-[#FAFFFF] border-[#CDE5E4]" btnText="로그 다운" content="test"/> 
        <HomeFileCard title="화면 보호기" className="bg-[#FEFFFC] border-[#D4DBCB]" btnText="파일 선택" content="test" useLog={false}/>

        </div>
    </div>
  </div>
  );
}

