// src/lib/api/index.ts

// 네임스페이스 export (신규 서비스용)
export * as AuthAPI from "./services/auth";
export * as UsersAPI from "./services/users";
export * as AnalyzerAPI from "./services/analyzer";
export * as AnalyteAPI from "./services/analyte";
export * as FilesAPI from "./services/files";
export * as InternalAPI from "./services/internal";

// 기존 사용처 호환을 위한 named re-export
export {
  login,
  refresh,
  logout,
  getLoginErrorMessage,
  isLoginSuccess,
  saveAccessToken,
  getAccessToken,
  removeAccessToken,
} from "./services/auth";

export {
  saveTermsAgreement,
  getTermsAgreement,
  saveUserRole,
  getUserRole,
  removeUserRole,
} from "./services/local";

// (선택) 과거 루트 auth.ts를 잠시 더 지원하려면 아래 한 줄 유지
// export * from "./auth";
