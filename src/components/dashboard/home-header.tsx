"use client";

import { Button } from "@/components/ui/button-enhanced";
import {
  Package,
  Clock,
  User,
  Mail,
  Building2,
  LogOut,
  ChevronRight,
  Settings,
  Activity,
} from "lucide-react";

import { images } from "@/utils/constants/images";
import { ReactSVG } from "react-svg";

import { cn } from "@/lib/utils";
import { SvgIcon } from "../common/svg_icon";

const HEADER_W = 1126; // 원하는 고정 폭(px)
// 헤더 정보 패널의 props 타입 정의
export interface HomeHeaderProps {
  // 로고 관련
  logoUrl?: string;
  logoAlt?: string;

  // 검사기 정보
  analyzerInfo?: {
    name: string;
    serialNumber: string;
    portNumber: string;
    uptime: string;
  };

  // 사용자 정보
  userInfo?: {
    role: string;
    name: string;
    email: string;
    company: string;
  };

  // 버튼 이벤트 핸들러
  onAnalyzerListClick?: () => void;
  onMyAccountClick?: () => void;
  onLogoutClick?: () => void;

  // 커스터마이징 옵션
  className?: string;
}

export function HomeHeader({
  logoAlt = "Logo",
  analyzerInfo = {
    name: "Exdia PT10",
    serialNumber: "PCKA0-A00099",
    portNumber: "9999",
    uptime: "00:00:00",
  },
  userInfo = {
    role: "검사기관리자",
    name: "김원격",
    email: "kiimwonkyuk@Precision-bio.com",
    company: "프리시젼바이오",
  },
  onAnalyzerListClick,
  onMyAccountClick,
  onLogoutClick,
  className = "",
}: HomeHeaderProps) {
  return (
    <div
      className={cn(
        "flex overflow-x-auto items-center justify-center sm:overflow-x-hidden no-scrollbar", 
        className
      )}
    >
      {/* 고정 폭 콘텐츠: 왼쪽 기준. min-w = w 로 스크롤 기준을 명확히 */}
      <div
        className="box-border  py-3 h-[58px] flex items-center justify-center whitespace-nowrap"
        style={{ width: `${HEADER_W}px`, minWidth: `${HEADER_W}px` }}
      >
        {/* 좌측 */}
        <div className="flex items-center gap-4 pr-4 flex-none">
          <img
            src={images.loginLogo.src}
            alt={logoAlt}
            className="w-[82px] h-[29px] flex-none"
          />
          <Button
            state="outline-gray"
            className="gap-1 h-[34px] px-2 py-1.5 flex-none"
            onClick={onAnalyzerListClick}
          >
            <SvgIcon imagePath={images.deviceListIcon.src} />

            <span className="text-[10px] font-normal">검사기 목록</span>
          </Button>
        </div>

        {/* 가운데 */}  
        <div className="flex items-center justify-center gap-2 pr-4 flex-none">
          <div className="flex items-center gap-1 p-1 flex-none">
            <img src={images.deviceTypeIcon.src} className=" flex-none" />

            <span className="text-[10px] font-medium text-gray-700 truncate max-w-[120px]">
              {analyzerInfo.name}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 flex-none" />
          <div className="flex items-center gap-1 p-1 flex-none">
            <img src={images.deviceNameIcon.src} className=" flex-none" />
            <span className="text-[10px] font-medium text-gray-700 truncate max-w-[120px]">
              {analyzerInfo.serialNumber}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 flex-none" />
          <div className="flex items-center gap-1 p-1 flex-none">
            <img src={images.connectLabelIcon.src} className=" flex-none" />
            <span className="text-[10px] font-medium text-gray-700 truncate max-w-[120px]">
              {analyzerInfo.portNumber}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 flex-none" />
          <div className="flex items-center gap-1 p-1 flex-none">
            <img src={images.connectTimeIcon.src} className=" flex-none" />
            <span className="text-[10px] font-medium text-gray-700 truncate max-w-[120px]">
              {analyzerInfo.uptime}
            </span>
          </div>
        </div>

        {/* 우측 */} 
        <div className="flex items-center gap-2 flex-none"> 
          <div className="flex items-center gap-1 p-1 flex-none">
            <img src={images.deviceManageIcon.src} className=" flex-none" />
            <span className="text-[10px] font-medium text-gray-700 truncate max-w-[80px]">
              {userInfo.role}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 flex-none" />
          <div className="flex items-center gap-1 p-1 flex-none">
            <span className="text-[10px] font-medium text-gray-700 truncate max-w-[80px]">
              {userInfo.name}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300 flex-none" />
          <div className="flex items-center gap-1 p-1 flex-none"> 
            <span className="text-[10px] font-medium text-gray-800 truncate max-w-[165px]">
              {userInfo.email}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300 flex-none" />
          <div className="flex items-center gap-1 p-1 flex-none">
            <span className="text-[10px] font-medium text-gray-800 truncate max-w-[120px]">
              {userInfo.company}
            </span>
          </div>
          <Button
            state="outline-gray"
            className="gap-1 h-[34px] pl-1.5 pr-1 py-1 flex-none"
            onClick={onAnalyzerListClick}
          >
            <span className="text-[10px] font-normal">내 계정</span>
            <SvgIcon imagePath={images.rightArrowIcon.src} />
          </Button>
          <Button
            state="no-outline-gray"
            className="gap-1  pl-0 pr-1  flex-none"
            onClick={onAnalyzerListClick}
          >
            <SvgIcon imagePath={images.logoutIcon.src} />

            <span className="text-[10px] font-normal">로그아웃</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
