// src/app/analyzers/files/columns.ts
import { type ColumnDef } from "@tanstack/react-table";
import type { FileRow } from "@/mock/files";
import { ButtonEnhanced } from "@/components/dashboard/button-enhanced";
import { images } from "@/utils/constants/images";
import { ReactSVG } from "react-svg";

export const fileColumns: ColumnDef<FileRow>[] = [
  {
    accessorKey: "name",
    header: "파일명",
    cell: ({ getValue }) => (
      <span className="truncate">{String(getValue())}</span>
    ),
    meta: {
      width: "w-[875px]",
      headerClass: "text-center",
      cellClass: "text-center",
    },
  },
  {
    accessorKey: "size",
    header: "파일 크기",
    meta: {
      width: "w-[210px]",
      
      headerClass: "text-center",
      cellClass: "text-center",
    },
  },
  {
    accessorKey: "updatedAt",
    header: "관리",

    cell: ({ getValue }) => (
      <div className="flex felx-row   justify-between ">
       <ButtonEnhanced
          content="only-icon"
          size="small"
          style="outline"
          className="inline-flex items-center justify-center w-[34px] h-[34px] box-border p-1.5 border"
          icon={
            <ReactSVG
              src={images.downloadIcon.src}
              wrapper="span"
              className="block w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-current [&_path]:fill-current"
            />
          }
        />
        <ButtonEnhanced
          content="only-icon"
          size="small"
          style="outline"
          className="inline-flex items-center justify-center w-[34px] h-[34px] box-border p-1.5 border"
          icon={
            <ReactSVG
              src={images.deleteIcon.src}
              wrapper="span"
              className="block w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-current [&_path]:fill-current"
            />
          }
        />
      </div>

      // <input
      //   defaultValue={getValue() as string}
      //   className="w-16 border rounded text-center"
      // />
    ),

    meta: {
      width: "w-[115px]",
      headerClass: "text-center",
      cellClass: "text-center",
    },
  },
];
