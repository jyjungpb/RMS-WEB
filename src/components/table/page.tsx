// src/app/analyzers/files/page.tsx
"use client";

import * as React from "react";
import { TableShell } from "@/components/common/table-shell";
import { DataTable } from "@/components/common/data-table"; // TableShell 내부에서 사용
import { Pagination } from "@/components/common/pagination"; // TableShell 내부에서 사용
import { fileColumns } from "@/components/table/upload/columns";
import { generateDummyFiles, type FileRow } from "@/mock/files";

export default function FilesPage() {
  // 전체 더미 데이터 한 번만 생성
  const ALL = React.useMemo(() => generateDummyFiles(437), []); // 총 437건 가정
  const pageSize = 50;                          // ✅ 한 페이지 최대 50행
  const [page, setPage] = React.useState(1);

  const lastPage = Math.max(1, Math.ceil(ALL.length / pageSize));
  const start = (page - 1) * pageSize;
  const current = React.useMemo(() => ALL.slice(start, start + pageSize), [ALL, start, pageSize]);

  return (
    <div className=" w-[1200px] flex items-center justify-center">
      <TableShell<FileRow> 
        title="파일 목록 (더미)"
        columns={fileColumns}
        data={current}                 // 현재 페이지 데이터 (최대 50)
        paging={{ page, lastPage }}    // ✅ API 없이도 여기서 계산
        onPageChange={setPage}
      />
    </div>
  );
}
