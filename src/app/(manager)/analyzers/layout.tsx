// src/app/analyzers/layout.tsx
"use client";

import { ReactNode, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HomeHeader } from "@/components/dashboard/home-header";
import {
  NavigationMenu,
  NavigationItem,
  createDefaultNavigationItems,
} from "@/components/dashboard/navigation-menu";
import type { AnalyzerTab } from "@/types/navigation";

export default function AnalyzerLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // ex) /analyzers/list, /analyzers/test
  const router = useRouter();

  // /analyzers/<seg> → 탭 매핑. list는 home 탭으로 귀속
  const PATH_TO_TAB: Record<string, AnalyzerTab> = {
    home: "home",
    list: "home",
    test: "test",
    error: "error",
    upload: "upload",
    instrument: "instrument",
    qc: "qc",
    material: "material",
    diagnosis: "diagnosis",
    settings: "settings",
    account: "account",
  };

  const seg = pathname.split("/")[2] ?? "home";
  const activeId: AnalyzerTab = PATH_TO_TAB[seg] ?? "home";

  const items = useMemo(
    () =>
      createDefaultNavigationItems().map((it) => ({
        ...it,
        isActive: it.id === activeId,
      })),
    [activeId]
  );

  const handleNavigationClick = (clicked: NavigationItem) => {
    if (clicked.disabled) return;
    router.push(`/analyzers/${clicked.id}`);
  };

  return (
    <div className="min-h-screen min-w-[1200px] bg-white flex flex-col scrollbar-gutter-stable">
      <HomeHeader
        onAnalyzerListClick={() => router.push("/analyzers/list")} // 목록은 /list (탭은 home 유지)
        onMyAccountClick={() => router.push("/analyzers/account")}
        onLogoutClick={() => {
          /* TODO */
        }}
      />

      <NavigationMenu
        items={items}
        onItemClick={handleNavigationClick}
        backgroundColor="bg-[#F7F8FF]"
      />

    
      <main className="flex-1 flex justify-center   ">
        {children}
      </main>
    </div>
  );
}
