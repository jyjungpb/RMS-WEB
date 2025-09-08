
import { ReactSVG } from "react-svg";
export interface SvgIconProps {

    imagePath?: string;
  }

export function SvgIcon({
 imagePath = "",
}: SvgIconProps){
return <ReactSVG
src={imagePath}
wrapper="span" // div 대신 span
className="inline-block" // 래퍼 span에 적용
beforeInjection={(svg) => {
  // SVG 자체가 부모의 색을 상속받게 처리
  svg.setAttribute("class", "align-middle pointer-events-none");
  // fill/stroke 하드코딩 무력화
  svg
    .querySelectorAll("[fill]")
    .forEach((el) => el.setAttribute("fill", "currentColor"));
  svg
    .querySelectorAll("[stroke]")
    .forEach((el) => el.setAttribute("stroke", "currentColor"));
}}
/>;
}