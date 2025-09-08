export const API_CONFIG = {
    // 배포/개발 환경에 따라 .env 로 덮어쓰기
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://dev-rms-api.precision-bio.com/api",
    // axios 응답 인터셉터에서 사용 (401 → refresh)
    REFRESH_PATH: "/v1/auth/token/refresh",
    TIMEOUT: 15000,
  } as const;