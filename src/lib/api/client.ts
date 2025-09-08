// src/lib/api/client.ts (정리본)
import axios, { AxiosError, AxiosHeaders, InternalAxiosRequestConfig } from "axios";
import { API_CONFIG } from "@/types/api/config";

console.log("[ENV] NEXT_PUBLIC_API_BASE_URL =", process.env.NEXT_PUBLIC_API_BASE_URL);

export const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true, // ★ HttpOnly 쿠키 자동 전송/수신
  headers: { "Content-Type": "application/json" },
  timeout: API_CONFIG.TIMEOUT,
});

// ===== 요청 인터셉터: Access Token 자동 첨부 =====
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const at = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (at) {
    if (!config.headers) config.headers = new AxiosHeaders();
    if (config.headers instanceof AxiosHeaders) {
      config.headers.set("Authorization", `Bearer ${at}`);
    } else {
      (config.headers as any)["Authorization"] = `Bearer ${at}`;
    }
  }
  return config;
});

let isRefreshing = false;
let queue: Array<(token: string) => void> = [];

// ===== 응답 인터셉터: 401 → refresh → 원요청 재시도 =====
apiClient.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as (InternalAxiosRequestConfig & { _retry?: boolean });
    const status = error.response?.status;

    if (status === 401 && !original?._retry) {
      original._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const r = await apiClient.post(API_CONFIG.REFRESH_PATH, {});
          const newAT =
            (r.data as any)?.content?.accessToken ??
            (r.data as any)?.accessToken;

          if (newAT) {
            localStorage.setItem("accessToken", newAT);
            queue.forEach((cb) => cb(newAT));
            queue = [];
          }
          return apiClient(original);
        } catch (e) {
          queue = [];
          if (typeof window !== "undefined") localStorage.removeItem("accessToken");
          throw e;
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        queue.push((token: string) => {
          if (!original.headers) original.headers = new AxiosHeaders();
          if (original.headers instanceof AxiosHeaders) {
            original.headers.set("Authorization", `Bearer ${token}`);
          } else {
            (original.headers as any)["Authorization"] = `Bearer ${token}`;
          }
          resolve(apiClient(original));
        });
      });
    }

    return Promise.reject(error);
  }
);

// ===== (옵션) 전역 에러 핸들러 등록 유틸 =====
export function registerGlobalErrorHandler(
  handler: (title?: string, message?: string, subMessage?: string) => void
) {
  const id = apiClient.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      if (error.response?.status !== 401) {
        const serverMsg =
          (error.response?.data as any)?.message ??
          error.message ??
          "요청 처리 중 오류가 발생했습니다.";
        handler("오류", serverMsg, "");
      }
      return Promise.reject(error);
    }
  );
  return () => apiClient.interceptors.response.eject(id);
}
