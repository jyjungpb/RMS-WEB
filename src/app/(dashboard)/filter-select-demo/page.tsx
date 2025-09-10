"use client";

import { FilterSelect, FilterSelectOption, createFilterOptions } from "@/components/dashboard/filter-select";
import { useState } from "react";

export default function FilterSelectDemoPage() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [counterValue, setCounterValue] = useState<number>(1);
  const [currentVariant, setCurrentVariant] = useState<"default" | "hover" | "focus" | "selected">("default");

  const filterOptions: FilterSelectOption[] = [
    { value: "all", label: "전체" },
    { value: "connected", label: "연결됨" },
    { value: "disconnected", label: "연결 끊김" },
    { value: "maintenance", label: "점검 중" },
    { value: "error", label: "오류" },
  ];

  const statusOptions = createFilterOptions(["활성", "비활성", "대기중", "오류"]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold">Filter Select 데모</h1>
      </div>
      
      {/* 데모 컨텐츠 */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* 기본 사용법 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">기본 사용법</h2>
            <div className="flex gap-4 items-center">
              <FilterSelect
                placeholder="필터 검색"
                options={filterOptions}
                value={selectedValue}
                onValueChange={setSelectedValue}
              />
              <span className="text-sm text-gray-600">
                선택된 값: {selectedValue || "없음"}
              </span>
            </div>
          </div>

          {/* 4가지 상태별 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">4가지 상태별 예시</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Default</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  variant="default"
                  showIcon={true}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Hover</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  variant="hover"
                  showIcon={true}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Focus</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  variant="focus"
                  showIcon={true}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Selected</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  variant="selected"
                  showIcon={true}
                />
              </div>
            </div>
          </div>

          {/* Counter 옵션 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Counter 옵션</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Counter Off</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  showCounter={false}
                  showIcon={true}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Counter On (Default)</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  showCounter={true}
                  counterValue={1}
                  showIcon={true}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Counter On (Hover)</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  variant="hover"
                  showCounter={true}
                  counterValue={5}
                  showIcon={true}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Counter On (Selected)</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  variant="selected"
                  showCounter={true}
                  counterValue={3}
                  showIcon={true}
                />
              </div>
            </div>
          </div>

          {/* Icon 옵션 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Icon 옵션</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Icon On</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  showIcon={true}
                  showCounter={true}
                  counterValue={2}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Icon Off</h3>
                <FilterSelect
                  placeholder="필터 검색"
                  options={filterOptions}
                  showIcon={false}
                  showCounter={true}
                  counterValue={2}
                />
              </div>
            </div>
          </div>

          {/* 인터랙티브 데모 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">인터랙티브 데모</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <FilterSelect
                  placeholder="상태 선택"
                  options={statusOptions}
                  value={selectedValue}
                  onValueChange={setSelectedValue}
                  showCounter={true}
                  counterValue={counterValue}
                  showIcon={true}
                />
                
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => setCounterValue(prev => Math.max(0, prev - 1))}
                  >
                    Counter -
                  </button>
                  <button
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => setCounterValue(prev => prev + 1)}
                  >
                    Counter +
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2">
                {(["default", "hover", "focus", "selected"] as const).map((variant) => (
                  <button
                    key={variant}
                    className={`px-3 py-1 text-sm rounded capitalize ${
                      currentVariant === variant
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setCurrentVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
              
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="font-medium text-gray-900 mb-2">현재 설정:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>선택된 값: {selectedValue || "없음"}</div>
                  <div>Counter 값: {counterValue}</div>
                  <div>현재 상태: {currentVariant}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 코드 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">사용법</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import { FilterSelect, FilterSelectOption } from "@/components/dashboard/filter-select";

// 기본 사용법
<FilterSelect
  placeholder="필터 검색"
  options={[
    { value: "all", label: "전체" },
    { value: "connected", label: "연결됨" },
    { value: "disconnected", label: "연결 끊김" }
  ]}
  value={selectedValue}
  onValueChange={setSelectedValue}
/>

// Counter와 Icon 포함
<FilterSelect
  placeholder="필터 검색"
  options={options}
  variant="selected"
  showCounter={true}
  counterValue={3}
  showIcon={true}
  onValueChange={handleChange}
/>

// 커스터마이징
<FilterSelect
  placeholder="커스텀 필터"
  options={options}
  className="w-full"
  triggerClassName="border-red-500"
  contentClassName="max-h-[200px]"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
