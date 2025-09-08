// 사용자 역할 타입
export type UserRole = "SUPERUSER" | "SYSADMIN" | "EMPLOYEE" | "AGENT";

// 로그인 요청 타입
export interface LoginRequest {
  email: string;
  password: string;
}

// 로그인 성공 응답의 content 타입
export interface LoginContent {
  accessToken: string;
  hasAgreedToTerms: boolean;
  role: UserRole;
}

// API 공통 응답 타입
export interface ApiResponse<T = any> {
  success: boolean;
  status: number;
  message: string;
  content?: T;
  code?: number;
}

// 로그인 성공 응답 타입
export type LoginSuccessResponse = ApiResponse<LoginContent>;

// 로그인 실패 응답 타입
export type LoginErrorResponse = ApiResponse<null>;

// 로그인 응답 타입 (성공/실패 통합)
export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

// 인증 상태 타입
export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  hasAgreedToTerms: boolean;
  role: UserRole | null;
  user: {
    email: string;
    role: UserRole;
  } | null;
}

// 에러 코드 상수
export const AUTH_ERROR_CODES = {
  USER_NOT_FOUND: 2401,
  USER_SUSPENDED: 2403,
} as const;

export type AuthErrorCode = typeof AUTH_ERROR_CODES[keyof typeof AUTH_ERROR_CODES];
