// src/lib/api/services/auth.ts
import axios, { AxiosError } from "axios";
import { apiClient } from "../client";
import { API_ENDPOINTS } from "@/types/api/endpoints";

// ─────────────────────────────────────────────────────────────
// ✅ 타입 호환을 위한 최소 타입 (기존/신규 응답 모두 커버)
type MinimalResult = {
  success: boolean;
  status: number;
  code?: number | string;
  message?: string;
  content?: any;
};

// 기존 프로젝트 타입들(있으면 사용)
import type { LoginRequest, LoginResponse } from "@/types";
// 신규 모델 타입(있으면 사용)
import type { LoginReqDto, LoginResDto, ApiResult } from "@/types/api/models";

// 저장/조회 유틸 (기존 호환용 — 간단 구현)
export const saveAccessToken = (token: string): void => {
  if (typeof window !== "undefined") localStorage.setItem("accessToken", token);
};
export const getAccessToken = (): string | null => {
  if (typeof window !== "undefined") return localStorage.getItem("accessToken");
  return null;
};
export const removeAccessToken = (): void => {
  if (typeof window !== "undefined") localStorage.removeItem("accessToken");
};

// ─────────────────────────────────────────────────────────────
// 로그인: 1) JSON → 2) 403 시 x-www-form-urlencoded 재시도
export async function login(
  loginData: LoginRequest | LoginReqDto
): Promise<LoginResponse | ApiResult<LoginResDto> | MinimalResult> {
  try {
    // 1차: JSON 전송
    const jsonResp = await apiClient.post<MinimalResult>(
      API_ENDPOINTS.AUTH.LOGIN,
      loginData
    );

    const data1 = jsonResp.data;
    const at1 = data1?.content?.accessToken as string | undefined;
    if (data1?.success && at1) saveAccessToken(at1);

    return data1;
  } catch (err) {
    // 2차: 403일 때만 x-www-form-urlencoded 재시도
    if (axios.isAxiosError(err) && err.response?.status === 403) {
      try {
        const body = loginData as LoginRequest | LoginReqDto;
        const formBody = new URLSearchParams({
          // 양쪽 타입 공통 필드 사용
          email: (body as any).email,
          password: (body as any).password,
        });

        const formResp = await apiClient.post<MinimalResult>(
          API_ENDPOINTS.AUTH.LOGIN,
          formBody.toString(),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const data2 = formResp.data;
        const at2 = data2?.content?.accessToken as string | undefined;
        if (data2?.success && at2) saveAccessToken(at2);

        return data2;
      } catch (err2) {
        if (axios.isAxiosError(err2) && err2.response?.data) {
          return err2.response.data as MinimalResult;
        }
        return {
          success: false,
          status: 500,
          message: "로그인 처리 중 오류가 발생했습니다.",
        };
      }
    }

    // 서버가 에러 바디를 리턴했다면 그대로 전달
    if (axios.isAxiosError(err) && err.response?.data) {
      return err.response.data as MinimalResult;
    }

    // 예상치 못한 에러
    return {
      success: false,
      status: 500,
      message: "로그인 처리 중 오류가 발생했습니다.",
    };
  }
}

// 토큰 리프레시 (쿠키 기반 — 바디 없음)
export async function refresh(): Promise<MinimalResult> {
  const { data } = await apiClient.post<MinimalResult>(
    API_ENDPOINTS.AUTH.REFRESH,
    {}
  );
  const at = data?.content?.accessToken as string | undefined;
  if (data?.success && at) saveAccessToken(at);
  return data;
}

// 로그아웃 (서버가 refreshToken 쿠키 만료 Set-Cookie 내려준다고 가정)
export async function logout(): Promise<MinimalResult> {
  const { data } = await apiClient.post<MinimalResult>(
    API_ENDPOINTS.AUTH.LOGOUT,
    {}
  );
  removeAccessToken();
  return data;
}

// ─────────────────────────────────────────────────────────────
// 기존 유틸과 호환되는 도우미 (타입에 의존하지 않게 최소화)
export function getLoginErrorMessage(response: { success: boolean; code?: any; message?: string }): string {
  if (response.success) return "";
  // 코드 매핑은 프로젝트 enum에 맞게 필요 시 확장
  if (response?.code === "USER_NOT_FOUND") return "이메일 또는 비밀번호가 올바르지 않습니다.";
  if (response?.code === "USER_SUSPENDED") return "이용이 정지된 계정입니다. 고객센터에 문의해주세요.";
  return response.message || "로그인 중 오류가 발생했습니다.";
}

export function isLoginSuccess<T extends { success?: boolean }>(
  response: T
): response is T & { success: true } {
  return response?.success === true;
}
