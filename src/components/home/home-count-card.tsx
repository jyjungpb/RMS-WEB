import { Card, CardContent } from "@/components/ui/card";
import { SvgIcon } from "../common/svg_icon";
import { images } from "@/utils/constants/images";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HomeCountProps {
  title: string;
  count?: string;
  date?: string;
  className?: string;

  textCn?: string;
  iconCn?: string;
  iconImgPath?:string;
}

export default function HomeCountCard({
  title,
  count,
  date,
  className,

  textCn,
  iconCn,
  iconImgPath,
}: HomeCountProps) {
  return (
    <Card
      className={cn(
        "w-[282px] h-[256px] bg-white rounded-[8px] shrink-0", // 24px, 16px 근사치
        className
      )}
    >
      <CardContent className="flex items-center p-6 h-full">
        <div className="w-[234px] flex flex-col items-center justify-center  shrink-0">
          <div className=" h-[24px]  flex flex-row items-center justify-center  shrink-0">
            <div
              className={cn(
                "text-center [font-family:'Inter-SemiBold', Helvetica] font-semibold text-[#5A318F] text-[16px]  tracking-[-0.32px] whitespace-nowrap",
                textCn
              )}
            >
              {title}
            </div>
            <Image
              className="ml-[10px] block w-6 h-6"
              alt="icon"
              height={24}
              width={24}
              
              src={images.rightArrowIcon.src}
            />
          </div>
          <div
            className={cn(
              "mt-4 w-[40px] h-[40px] p-2 rounded-full bg-[#DDD4E9] items-center justify-center flex",
              iconCn
            )}
          >
            <Image
              className="block w-6 h-6 bg"
              alt="icon"
              height={24}
              width={24}
              src={iconImgPath ?? ""} 
            />
          </div>
          <div className=" text-center [font-family:'Inter-SemiBold', Helvetica] font-semibold text-black text-[36px]  tracking-[-0.72px] whitespace-nowrap pb-[23px]">
            {count}
          </div>
          <div className="bg-[#CFCFCF] h-[1px] w-[234px]"></div>
          <div className=" text-center [font-family:'Inter-SemiBold', Helvetica] font-medium text-black text-[12px]  tracking-[-0.24px] whitespace-nowrap pt-[16px]">
            {date}
          </div>
        </div>
        {/* {items?.map((items, index) => ( 
            <div key={index} className="flex w-[282px] pl-6 shrink-0 ">
              <div className="w-full items-center ">
                <div className="[font-family:'Inter-SemiBold',Helvetica] text-gray-500 font-semibold text-xs tracking-[-0.24px] leading-[15.8px] whitespace-nowrap pb-4">
                  {items. ?? ''}
                </div>
                <div className="[font-family:'Inter-SemiBold',Helvetica] text-gray-800 font-semibold text-base tracking-[-0.32px] leading-[21.1px] whitespace-nowrap">
                  {items.version ?? ''}
                </div>
              </div>
            </div>
          ))} */}
      </CardContent>
    </Card>
  );
}
