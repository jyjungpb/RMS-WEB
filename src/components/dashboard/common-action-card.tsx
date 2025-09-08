"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface CommonActionCardProps {
  // 카드 비주얼
  cardClassName?: string; // 배경색/테두리 등 카드 전체 스타일
  badgeText?: string; // 좌측 상단 작은 배지 텍스트(예: ###)
  badgeClassName?: string; // 배지 박스 색/스타일

  // 본문 정보
  name?: string; // 예: Exdia PT10
  serial?: string; // 예: PCKA0-A00099
  dateLabel?: string; // 예: YYYY-MM-DD 00:00:00
  footerStatus?: string; // 예: 원격 연결 대기중

  // 버튼
  buttonText?: string;
  onButtonClick?: () => void;
  buttonClassName?: string; // 버튼 테두리/배경/텍스트/hover 모두 여기서 제어
  buttonDisabled?: boolean;

  // 크기 조정용(필요 시)
  className?: string; // 카드 바깥 wrapper에 추가
}

export function CommonActionCard({
  cardClassName,
  badgeText = "###",
  badgeClassName,
  name = "Exdia PT10",
  serial = "PCKA0-A00099",
  dateLabel = "YYYY-MM-DD 00:00:00",
  footerStatus = "원격 연결 대기중",
  buttonText = "원격 연결하기",
  onButtonClick,
  buttonClassName,
  buttonDisabled,
  className,
}: CommonActionCardProps) {
  return (
    <Card
      className={cn(
        // 기본 크기/여백은 Figma 기반으로 근접하게 설정
        "w-[282px] flex flex-col gap-2 rounded-md border p-3.5 bg-[#F5F9FF] border-[#D3DDE7]",
        cardClassName
      )}
    >
      {/* 상단: 배지 + 버튼 */}
      <div className="flex items-center justify-between gap-3">
        <div
          className={cn(
            "flex items-center justify-center rounded-md w-[94px] h-14 text-sm font-normal text-white bg-[#007BF7]",
            badgeClassName
          )}
        >
          {badgeText}
        </div>

        <Button
          type="button"
          disabled={buttonDisabled}
          onClick={onButtonClick}
          className={cn(
            // 기본값: Figma의 outline 스타일에 가까운 값
            "h-14 w-[146px] rounded-md border text-[16px] font-medium",
            "border-[#90A1B2] bg-white text-[#007BF7] hover:bg-[#F5F9FF]",
            buttonClassName
          )}
        >
          {buttonText}
        </Button>
      </div>

      {/* 본문 정보 3줄 */}
      <div className="mt-1 space-y-2">
        <div className="flex items-center justify-center">
          <p className="text-[12px] font-semibold text-[#3A4753]">{name}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[12px] font-semibold text-[#3A4753]">{serial}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[12px] text-[#3A4753]">{dateLabel}</p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="my-1 h-px w-full bg-[#D3DDE7]" />

      {/* 하단 상태 텍스트 */}
      <div className="flex items-center justify-center">
        <p className="text-[12px] font-medium text-[#3A4753]">{footerStatus}</p>
      </div>
    </Card>
  );
}

export default CommonActionCard;
