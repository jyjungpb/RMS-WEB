"use client";

// 헤더 구분선 컴포넌트의 props 타입 정의
export interface HeaderDividerProps {
  // 배경색 커스터마이징
  backgroundColor?: string;
  
  // 높이 커스터마이징
  height?: string;
  
  // 패딩 커스터마이징
  padding?: string;
  
  // 추가 스타일링
  className?: string;
  
  // 구분선 표시 여부
  showDivider?: boolean;
  
  // 구분선 색상
  dividerColor?: string;
  
  // 구분선 두께
  dividerThickness?: string;
}

export function HeaderDivider({
  backgroundColor = "#F7F8FF",
  height = "68px",
  padding = "14px 407px",
  className = "",
  showDivider = false,
  dividerColor = "#CFCFCF",
  dividerThickness = "1px"
}: HeaderDividerProps) {
  return (
    <div  
      className={`w-full ${className}`}
      style={{
        backgroundColor,
        height,
        padding,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      {showDivider && (
        <div 
          className="w-full"
          style={{
            backgroundColor: dividerColor,
            height: dividerThickness
          }}
        />
      )}
    </div>
  );
}
