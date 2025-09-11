"use client";

import { FormInput, createStateVariants, createSizeVariants } from "@/components/common/form-input";
import { useState } from "react";

export default function FormInputDemoPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentState, setCurrentState] = useState<"default" | "hover" | "focus" | "enabled" | "disabled" | "error">("default");
  const [currentSize, setCurrentSize] = useState<"sm" | "md" | "lg" | "xl">("md");
  const [showLabel, setShowLabel] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const stateVariants = createStateVariants();
  const sizeVariants = createSizeVariants();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold">Form Input 데모</h1>
        <p className="text-gray-600 mt-2">Figma 디자인 기반 Input 컴포넌트 - 상태 전환 자동화</p>
      </div>
      
      {/* 데모 컨텐츠 */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* 기본 사용법 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">기본 사용법 (자동 상태 전환)</h2>
            <div className="flex gap-4 items-end">
              <FormInput
                label="기본 입력"
                placeholder="텍스트를 입력하세요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onStateChange={(state) => setCurrentState(state)}
              />
              <div className="text-sm text-gray-600">
                <div>입력값: {inputValue || "없음"}</div>
                <div>현재 상태: <span className="font-semibold text-blue-600">{currentState}</span></div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
              <strong>상태 전환 순서:</strong> Default → Hover → Focus (입력 중) → Enabled (입력 완료 후)
            </div>
          </div>

          {/* 6가지 상태별 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">6가지 상태별 예시 (고정 상태)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stateVariants.map((variant, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700 capitalize">
                    {variant.state} State
                  </h3>
                  <FormInput
                    label="Label"
                    placeholder={variant.placeholder}
                    state={variant.state}
                    hasError={variant.hasError}
                    errorMessage={variant.errorMessage}
                    size="md"
                    disabled={variant.state === "disabled"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 4가지 사이즈별 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">4가지 사이즈별 예시</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sizeVariants.map((variant, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700 capitalize">
                    {variant.size} Size
                  </h3>
                  <FormInput
                    label="Label"
                    placeholder={variant.placeholder}
                    size={variant.size}
                    state="default"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Label 유무 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Label 유무 예시</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Label 있음</h3>
                <FormInput
                  label="사용자 이름"
                  placeholder="이름을 입력하세요"
                  showLabel={true}
                  size="md"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Label 없음</h3>
                <FormInput
                  placeholder="이름을 입력하세요"
                  showLabel={false}
                  size="md"
                />
              </div>
            </div>
          </div>

          {/* 인터랙티브 데모 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">인터랙티브 데모</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-end">
                <FormInput
                  label="인터랙티브 입력"
                  placeholder="상태를 변경해보세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  state={currentState}
                  size={currentSize}
                  showLabel={showLabel}
                  hasError={hasError}
                  errorMessage={hasError ? "입력값이 필요합니다" : undefined}
                  onStateChange={(state) => setCurrentState(state)}
                />
              </div>
              
              {/* 상태 컨트롤 */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">수동 상태 변경 (자동 전환 비활성화)</h3>
                  <div className="flex flex-wrap gap-2">
                    {(["default", "hover", "focus", "enabled", "disabled", "error"] as const).map((state) => (
                      <button
                        key={state}
                        className={`px-3 py-1 text-sm rounded capitalize ${
                          currentState === state
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => {
                          setCurrentState(state);
                          if (state === "error") {
                            setHasError(true);
                          } else {
                            setHasError(false);
                          }
                        }}
                      >
                        {state}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">사이즈 변경</h3>
                  <div className="flex flex-wrap gap-2">
                    {(["sm", "md", "lg", "xl"] as const).map((size) => (
                      <button
                        key={size}
                        className={`px-3 py-1 text-sm rounded capitalize ${
                          currentSize === size
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => setCurrentSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">기타 옵션</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-3 py-1 text-sm rounded ${
                        showLabel
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => setShowLabel(!showLabel)}
                    >
                      Label {showLabel ? "ON" : "OFF"}
                    </button>
                    
                    <button
                      className={`px-3 py-1 text-sm rounded ${
                        hasError
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => setHasError(!hasError)}
                    >
                      Error {hasError ? "ON" : "OFF"}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="font-medium text-gray-900 mb-2">현재 설정:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>입력값: {inputValue || "없음"}</div>
                  <div>현재 상태: <span className="font-semibold text-blue-600">{currentState}</span></div>
                  <div>현재 사이즈: {currentSize}</div>
                  <div>Label 표시: {showLabel ? "ON" : "OFF"}</div>
                  <div>에러 상태: {hasError ? "ON" : "OFF"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 실제 사용 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">실제 사용 예시 (자동 상태 전환)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">로그인 폼</h3>
                <FormInput
                  label="이메일"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required
                  size="lg"
                />
                <FormInput
                  label="비밀번호"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                  size="lg"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">프로필 정보</h3>
                <FormInput
                  label="이름"
                  placeholder="이름을 입력하세요"
                  size="md"
                />
                <FormInput
                  label="전화번호"
                  type="tel"
                  placeholder="010-1234-5678"
                  size="md"
                />
                <FormInput
                  label="주소"
                  placeholder="주소를 입력하세요"
                  size="xl"
                />
              </div>
            </div>
          </div>

          {/* 상태 전환 설명 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">상태 전환 로직</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded">
                  <h3 className="font-semibold text-blue-900 mb-2">자동 상태 전환</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li><strong>Default:</strong> 기본 상태 (회색 테두리)</li>
                    <li><strong>Hover:</strong> 마우스 호버 시 (파란색 테두리)</li>
                    <li><strong>Focus:</strong> 포커스 시 (보라색 테두리 + 링) - <span className="text-red-600 font-semibold">입력 중 유지</span></li>
                    <li><strong>Enabled:</strong> 입력값 있을 때 (파란색 테두리) - <span className="text-green-600 font-semibold">포커스 해제 후</span></li>
                    <li><strong>Disabled:</strong> disabled=true (회색 배경, 입력 불가)</li>
                    <li><strong>Error:</strong> hasError=true (빨간색 테두리)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded">
                  <h3 className="font-semibold text-green-900 mb-2">우선순위</h3>
                  <ol className="text-sm text-green-800 space-y-1">
                    <li>1. <strong>Disabled</strong> (최우선)</li>
                    <li>2. <strong>Error</strong></li>
                    <li>3. <strong>Focus</strong> <span className="text-red-600 font-semibold">(입력 중 우선)</span></li>
                    <li>4. <strong>Enabled</strong> (입력값 있음)</li>
                    <li>5. <strong>Hover</strong></li>
                    <li>6. <strong>Default</strong></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* 코드 예시 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">사용법</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import { FormInput } from "@/components/dashboard/form-input";

// 기본 사용법 (자동 상태 전환)
<FormInput
  label="사용자 이름"
  placeholder="이름을 입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onStateChange={(state) => console.log('State:', state)}
/>

// 에러 상태
<FormInput
  label="이메일"
  placeholder="이메일을 입력하세요"
  hasError={true}
  errorMessage="올바른 이메일을 입력해주세요"
  size="lg"
/>

// 비활성화 상태
<FormInput
  label="비활성화된 입력"
  placeholder="입력할 수 없습니다"
  disabled={true}
  size="md"
/>

// 커스터마이징
<FormInput
  label="커스텀 입력"
  placeholder="커스텀 스타일"
  className="w-full"
  inputClassName="border-red-500"
  labelClassName="text-blue-600"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
