import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <header className="w-full h-[68px] bg-[#f7f8ff] flex items-center justify-center">
        <h1 className="text-xl font-bold text-gray-800">RMS</h1>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">환영합니다</h2>
          <p className="text-gray-600">RMS 시스템에 오신 것을 환영합니다.</p>
          <div className="space-x-4">
            <Link 
              href="/login" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              로그인
            </Link>
            <Link 
              href="/register" 
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              회원가입
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
