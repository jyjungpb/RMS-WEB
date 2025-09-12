// src/components/table/pagination.tsx
"use client";

import { cn } from "@/lib/utils";

type PaginationProps = {
  paging: {
    page: number; // 현재 페이지
    lastPage: number; // 전체 페이지 수
  };
  onPageChange: (p: number) => void;
  groupSize?: number; // 기본 5
  className?: string;
};

export function Pagination({
  paging,
  onPageChange,
  groupSize = 5,
  className,
}: PaginationProps) {
  const { page, lastPage } = paging;

  const clamp = (p: number) => Math.min(lastPage, Math.max(1, p));
  const go = (p: number) => onPageChange(clamp(p));

  // 현재 페이지가 속한 그룹 (예: 1–5, 6–10)
  const groupStart = Math.floor((page - 1) / groupSize) * groupSize + 1;
  const groupEnd = Math.min(groupStart + groupSize - 1, lastPage);
  const pages = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, i) => groupStart + i
  );

  const Btn = ({
    disabled,
    active,
    children,
    onClick,
  }: {
    disabled?: boolean;
    active?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        " h-6 w-6 rounded-[8px] border-[1px] font-family:'Pretendard-SemiBold', Helvetical] font-semibold text-[14px] bg-white border-[#DCDFE3] text-[#494949]",
        disabled
          ? "text-[#C4C4C4] border-[#E8E8E8] cursor-not-allowed bg-white "
          : active
            ? "text-white border-[#C0C5CE] bg-[#C0C5CE] cursor-not-allowed"
            : [
                // hover
                "hover:bg-[#758BB3] hover:text-white hover:border-[#758BB3]",
                // pressed(누르는 중)
                "active:bg-[#003AAD] active:text-white active:border-[#003AAD]",
              ]
      )}
    >
      {children}
    </button>
  );

  return (
    <div className={cn("flex items-center justify-end gap-2 py-6", className)}>
      <Btn disabled={page === 1} onClick={() => go(1)}>
        ≪
      </Btn>
      <Btn disabled={page === 1} onClick={() => go(page - 1)}>
        ‹
      </Btn>

      {pages.map((p) => (
        <Btn key={p} active={p === page} onClick={() => go(p)}>
          {p}
        </Btn>
      ))}

      <Btn disabled={page === lastPage} onClick={() => go(page + 1)}>
        <Box/>
      </Btn>
      <Btn disabled={page === lastPage} onClick={() => go(lastPage)}>
        ≫
      </Btn>
    </div>
  );
}

import React from "react";
import vector from "@/assets/images/vector.svg";
export const Box = () => {
  return (
    <div className="w-1 h-2">
      <img
        className="fixed w-[5px] h-[9px] top-0 left-0 "
        alt="Vector"
        src={vector}
      />
    </div>
  );
};
