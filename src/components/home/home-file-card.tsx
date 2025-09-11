import { Card, CardContent } from "@/components/ui/card";
import { SvgIcon } from "../common/svg_icon";
import { images } from "@/utils/constants/images";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button-enhanced";

export interface HomeFileProps {
  title: string;
  content?: string;
  useLog?: boolean;

  className?: string;
  btnText: string;
}

export default function HomeFileCard({
  title,
  content,
  className,
  btnText,
  useLog = true,
}: HomeFileProps) {
  return (
    <Card
      className={cn(
        "w-[282px] h-[256px] bg-white rounded-[8px] shrink-0", // 24px, 16px 근사치
        className
      )}
    >
      <CardContent className="flex items-center p-6 h-full">
        <div className="w-[234px] flex flex-col  shrink-0">
          <div
            className={cn(
              "text-center [font-family:'Inter-SemiBold', Helvetica] font-semibold text-[#5A318F] text-[16px]  tracking-[-0.32px] whitespace-nowrap mb-25"
            )}
          >
            {title}
          </div>
          <div className="flex flex-col items-end justify-end gap-4">
            {useLog ? (
              <Button
                state="outline"
                size="down"
                className=" text-[10px] [font-family:'Pretendard-normal', Helvetica] font-normal "
              >
                {btnText}
              </Button>
            ) : (
              <div className="flex flex-row items-end justify-end gap-2"> 
                <Button
                  state="outline"
                  size="down"
                  className=" text-[10px] [font-family:'Pretendard-normal', Helvetica] font-normal "
                >
                  {btnText}
                </Button>
                <Button state="outline-disabled" size="icon-small">
                  <SvgIcon imagePath={images.uploadIcon.src} />
                </Button>

                <Button state="outline" size="icon-small">
                  <SvgIcon imagePath={images.deleteIcon.src} />
                </Button>
              </div>
            )}
            <div className="w-[234px] h-[34px] bg-white px-3 py-2  rounded-[8px] border-[1px] border-[#007BF7] text-[14px] text-[#3A4753] [font-family:'Pretendard-normal', Helvetica] font-normal justify-start items-center flex">
              {content}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
