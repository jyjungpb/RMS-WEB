// src/components/table/data-table.tsx
"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";

type DataTableProps<TData> = {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  className?: string;
};

export function DataTable<TData>({
  columns,
  data,
  className,
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={cn(" bg-white w-[1200px]", className)}>
      <Table className="table-fixed [&_th]:h-10 [&_th]:py-0 [&_th]:px-0 [&_td]:h-10 [&_td]:py-0 [&_td]:px-3">
        <colgroup>
          {table.getAllLeafColumns().map((col) => {
            const w = (col.columnDef.meta as any)?.width as string | undefined;
            return <col key={col.id} className={w} />;
          })}
        </colgroup>

        <TableHeader className="bg-[#F4F3FF]">
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    "text-xs font-medium text-[#3A4753]",
                    (header.column.columnDef.meta as any)?.headerClass
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={cn(
                    "text-sm text-[#3A4753] flex-shrink-0 ",
                    (cell.column.columnDef.meta as any)?.cellClass
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
