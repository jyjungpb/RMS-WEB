// src/components/table/table-shell.tsx
"use client";

import * as React from "react";
import { DataTable } from "./data-table";
import { Pagination } from "./pagination";
import { type ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

type TableShellProps<T> = {
  title?: string;
  toolbar?: React.ReactNode;
  columns: ColumnDef<T, any>[];
  data: T[];
  paging: {
    page: number;
    lastPage: number;
  };
  onPageChange: (p: number) => void;
  className?: string;
};

export function TableShell<T>({
  title,
  toolbar,
  columns,
  data,
  paging,
  onPageChange,
  className,
}: TableShellProps<T>) {
  return (
    <section className={cn("bg-white ", className)}>


      <DataTable columns={columns} data={data} />

      <Pagination paging={paging} onPageChange={onPageChange} className="mt-2" />
    </section>
  );
}
