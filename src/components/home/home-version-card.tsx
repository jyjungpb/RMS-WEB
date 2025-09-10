import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "../ui/separator";



export interface VersionItem {
    label: string;    // 예: 시스템 버전
    version: string;    // 예: 1.00.14.0006
  } 
  
  export interface HomeVersionProps {
    items?: VersionItem[];          // 우측에 나열될 항목들 (최대 3~4개 권장)

  }

export default function HomeVersionCard({  items} : HomeVersionProps) {
  return (
    <Card className="w-[1200px] h-[101px] bg-white rounded-lg shrink-0"> 
      <CardContent className="flex items-center p-6 h-full">
      <div className="flex flex-1 justify-between items-start min-w-0">

        <div className="w-[258px] h-[53px]  flex items-center border-r border-[#D2D4D7]  shrink-0">
          <div className="[font-family:'Inter-SemiBold', Helvetica] font-semibold text-gray-500 text-xs leading-[132%] tracking-[-0.24px] whitespace-nowrap">
            검사기 소프트웨어 버전 정보
          </div>
        </div>

 
          {items?.map((items, index) => ( 
            <div key={index} className="flex w-[282px] pl-6 shrink-0 ">
              <div className="w-full items-center ">
                <div className="[font-family:'Inter-SemiBold',Helvetica] text-gray-500 font-semibold text-xs leading-[132%] tracking-[-0.24px] whitespace-nowrap pb-4">
                  {items.label ?? ''}
                </div>
                <div className="[font-family:'Inter-SemiBold',Helvetica] text-gray-800 font-semibold text-base leading-[132%] tracking-[-0.32px] whitespace-nowrap">
                  {items.version ?? ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
