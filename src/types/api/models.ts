// 공통 Result 형태
export interface PagingInfo {
    page: number;
    count: number;
    startPage: number;
    endPage: number;
    lastPage: number;
  }
  
  export interface ApiSuccess<T = any> {
    success: true;
    status: number;
    code?: number | string;
    message?: string;
    content?: T;
    paging?: PagingInfo;
  }
  
  export interface ApiError {
    success: false;
    status: number;
    code?: number | string;
    message?: string;
  }
  
  export type ApiResult<T = any> = ApiSuccess<T> | ApiError;
  
  // ===== Auth =====
  export interface LoginReqDto {
    email: string;
    password: string;
  }
  export interface LoginResDto {
    accessToken: string;
    hasAgreedToTerms: boolean;
    role: "SUPERUSER" | "SYSADMIN" | "EMPLOYEE" | "AGENT";
  }
  
  // ===== Users =====
  export interface UserResDto {
    userId: string;
    userName: string;
    role: "SUPERUSER" | "SYSADMIN" | "EMPLOYEE" | "AGENT";
    roleName?: string;
    email: string;
    organization: string;
    status: "ACTIVE" | "INACTIVE";
    createdAt: string;
    lastLoginAt?: string;
    termsAgreedAt?: string;
  }
  
  export interface UserCreateReqDto {
    userName: string;
    email: string;
    organization: string;
    role: "SUPERUSER" | "SYSADMIN" | "EMPLOYEE" | "AGENT";
    status: "ACTIVE" | "INACTIVE";
  }
  
  // 목록/검색 등에 사용되는 요청 DTO 자리 (실제 스키마에 맞춰 확장 가능)
  export type UserReqDto = Record<string, any>;
  export type UcrReqDto = Record<string, any>;
  
  // ===== Analyzer =====
  export interface AnalyzerSummaryRes {
    current?: {
      channelId: string;
      serial: string;
      model: string;
      connectedAt: string;
      userId: string;
      userName: string;
      organization: string;
    };
    pending?: Array<Record<string, any>>;
    bound?: Array<Record<string, any>>;
  }
  
  export interface AnalyzerInfoResDto {
    channelId: string;
    serial: string;
    model: string;
    connectedAt: string;
    userId: string;
    userName: string;
    organization: string;
  }
  
  export interface AnalyzerConfigResDto {
    sampleCheck: number;
    firstDns: string;
    secondDns: string;
    emrProtocol: string;
    emrServerIp: string;
    emrPort: string;
    rmBlockLevel: string;
    rmUrl: string;
    rmsFileUpUrl: string;
    rmsTunnelPort: string;
    rmsTunnelUrl: string;
  }
  
  export interface AnalyzerVersionInfoResDto {
    systemVersion: string;
    appVersion: string;
    xmlVersion: string;
  }
  
  // ===== Analyte =====
  export type SelfTestReqDto = Record<string, any>;
  export type AnalyteReqDto = Record<string, any>;
  export type ErrorReqDto = Record<string, any>;
  export type ControlReqDto = Record<string, any>;
  
  export interface AnalyteResDto {
    rowId: number;
    patientId: string;
    date: string;
    sex?: string;
    birth?: string;
    speciesId?: string;
    speciesClass?: string;
    panelId?: string;
    serialNumber?: string;
    availablePeriod?: string;
    lotNumber?: string;
    errorCode?: number | string;
    errorLevel?: string;
    [k: string]: any;
  }
  
  export interface AnalyteDetailResDto {
    patientId: string;
    date: string;
    panelId: string;
    analyteName: string;
    result: number | string;
    abFlag?: string;
    finalOD?: number | string;
    refRangeMin?: number;
    refRangeMax?: number;
    unit?: string;
  }
  
  export interface InstFactorResDto {
    analyteName: string;
    analyteId: string;
    analyteFullName: string;
    refRangeMin?: number | string;
    refRangeMax?: number | string;
    unit?: string;
    instFactorA?: number | string;
    instFactorB?: number | string;
  }
  
  export interface ErrorResDto {
    date: string;
    errorCode: string;
    errorLevel: string;
    panelId?: string;
    [k: string]: any;
  }
  
  export interface ControlResDto {
    controlId: string;
    date: string;
    controlType: number;
    panelId?: string;
    serialNumber?: string;
    [k: string]: any;
  }
  
  export interface ControlMaterialResDto {
    qcName: string;
    qcLevel: number;
    qcLotNumber: string;
    qcExpiredDate: string;
    modifier?: string;
    qcValueVersion?: string;
  }
  
  export interface ControlDetailResDto {
    analyteName: string;
    result: string | number;
    finalOD?: number;
    min?: string | number;
    max?: string | number;
    unit?: string;
    panelId?: string;
  }
  
  export interface AnalyteCalibartionResDto {
    fileName: string;
    fileSize: string;
  }
  
  // ===== Misc common =====
  export interface EmailReqDto { email: string; }
  export interface EmailCodeReqDto { email: string; code: string; }
  export interface PasswordChangeReqDto {
    email: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }
  export interface ChannelBindReqDto { channelId: string; }
  