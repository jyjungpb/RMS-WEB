"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// 상태 카드의 타입 정의
export interface StatusCard {
  id: string;
  type: 'button' | 'info' | 'data';
  title?: string;
  value?: string | number;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 상태 카드 그룹의 props 타입 정의
export interface StatusCardsProps {
  // 카드들
  cards: StatusCard[];
  
  // 레이아웃 커스터마이징
  className?: string;
  gap?: string;
  
  // 카드 커스터마이징
  cardClassName?: string;
  defaultCardWidth?: string;
  defaultCardHeight?: string;
  
  // 버튼 카드 커스터마이징
  buttonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
  
  // 이벤트 핸들러
  onCardClick?: (card: StatusCard) => void;
}

// 개별 상태 카드 컴포넌트
function StatusCardItem({ 
  card, 
  onClick,
  cardClassName,
  defaultCardWidth,
  defaultCardHeight,
  buttonVariant,
  buttonSize
}: {
  card: StatusCard;
  onClick?: (card: StatusCard) => void;
  cardClassName?: string;
  defaultCardWidth?: string;
  defaultCardHeight?: string;
  buttonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
}) {
  const handleClick = () => {
    if (onClick) {
      onClick(card);
    }
    if (card.onClick) {
      card.onClick();
    }
  };

  const getCardStyles = () => {
    const baseStyles = "rounded-md transition-all duration-200";
    const width = card.type === 'button' ? 'w-[282px]' : 'w-[282px]';
    const height = card.type === 'button' ? 'h-24' : 'h-24';
    
    return cn(
      baseStyles,
      width,
      height,
      cardClassName
    );
  };

  const getCardBackground = () => {
    if (card.backgroundColor) {
      return card.backgroundColor;
    }
    
    switch (card.type) {
      case 'button':
        return 'bg-white';
      case 'info':
        return 'bg-cyan-200';
      case 'data':
        return 'bg-blue-300';
      default:
        return 'bg-white';
    }
  };

  const getCardBorder = () => {
    if (card.borderColor) {
      return `border ${card.borderColor}`;
    }
    
    switch (card.type) {
      case 'button':
        return 'border border-blue-500';
      case 'info':
      case 'data':
        return 'border border-gray-300';
      default:
        return 'border border-gray-300';
    }
  };

  const getTextColor = () => {
    if (card.textColor) {
      return card.textColor;
    }
    
    switch (card.type) {
      case 'button':
        return 'text-blue-600';
      case 'info':
      case 'data':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  if (card.type === 'button') {
    return (
      <Button
        variant={buttonVariant || 'outline'}
        size={buttonSize || 'lg'}
        className={cn(
          getCardStyles(),
          getCardBackground(),
          getCardBorder(),
          getTextColor(),
          'font-semibold text-base',
          card.disabled && 'opacity-50 cursor-not-allowed'
        )}
        onClick={handleClick}
        disabled={card.disabled}
      >
        {card.title}
      </Button>
    );
  }

  if (card.type === 'info') {
    return (
      <Card
        className={cn(
          getCardStyles(),
          getCardBackground(),
          getCardBorder(),
          'flex flex-col justify-center items-center p-2'
        )}
        onClick={handleClick}
      >
        <div className="text-center">
          <div className={cn("text-xl font-semibold", getTextColor())}>
            {card.value || '###'}
          </div>
        </div>
      </Card>
    );
  }

  if (card.type === 'data') {
    return (
      <Card
        className={cn(
          getCardStyles(),
          getCardBackground(),
          getCardBorder(),
          'flex flex-col justify-center items-center p-4 gap-4'
        )}
        onClick={handleClick}
      >
        <div className="text-center">
          <div className={cn("text-sm font-medium", getTextColor())}>
            {card.title}
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-base font-semibold", getTextColor())}>
            {card.value}
          </div>
        </div>
      </Card>
    );
  }

  return null;
}

// 메인 상태 카드 그룹 컴포넌트
export function StatusCards({
  cards,
  className = "",
  gap = "gap-6",
  cardClassName,
  defaultCardWidth = "w-[282px]",
  defaultCardHeight = "h-24",
  buttonVariant,
  buttonSize,
  onCardClick
}: StatusCardsProps) {
  return (
    <div className={cn("flex items-center", gap, className)}>
      {cards.map((card) => (
        <StatusCardItem
          key={card.id}
          card={card}
          onClick={onCardClick}
          cardClassName={cardClassName}
          defaultCardWidth={defaultCardWidth}
          defaultCardHeight={defaultCardHeight}
          buttonVariant={buttonVariant}
          buttonSize={buttonSize}
        />
      ))}
    </div>
  );
}

// 기본 상태 카드들을 생성하는 헬퍼 함수
export function createDefaultStatusCards(): StatusCard[] {
  return [
    {
      id: 'disconnect',
      type: 'button',
      title: '원격 해지하기',
      backgroundColor: 'bg-white',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600'
    },
    {
      id: 'status',
      type: 'info',
      value: '###',
      backgroundColor: 'bg-cyan-200',
      borderColor: 'border-gray-300',
      textColor: 'text-white'
    },
    {
      id: 'device-info',
      type: 'data',
      title: 'PCKA0-A00099',
      value: 'Exdia PT10',
      backgroundColor: 'bg-blue-300',
      borderColor: 'border-gray-300',
      textColor: 'text-white'
    },
    {
      id: 'time-info',
      type: 'data',
      title: 'YYYY-MM-DD 00:00:00',
      value: '00:24:26',
      backgroundColor: 'bg-blue-400',
      borderColor: 'border-gray-300',
      textColor: 'text-white'
    }
  ];
}
