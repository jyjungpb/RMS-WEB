export const API_ENDPOINTS = {
    AUTH: {
      LOGIN: "/v1/auth/login",
      REFRESH: "/v1/auth/token/refresh",
      LOGOUT: "/v1/auth/logout",
    },
  
    USERS: {
      LIST: "/v1/users",
      CREATE: "/v1/users",
      ONE: (userId: string) => `/v1/users/${userId}`,
      SUMMARY_OF: (userId: string) => `/v1/users/${userId}/summary`,
      ME: "/v1/users/me",
      ME_SUMMARY: "/v1/users/me/summary",
      TERMS_AGREEMENT: "/v1/users/terms-agreement",
      PASSWORD_SEND_CODE: "/v1/users/password/send-code",
      PASSWORD_VERIFY_CODE: "/v1/users/password/verify-code",
      PASSWORD_SEND_TEMP: "/v1/users/password/send-temp",
      PASSWORD_CHANGE: "/v1/users/password",
      CHANNELS_CONNECT: "/v1/users/channels",
      CHANNELS_DISCONNECT: (channelId: string) => `/v1/users/channels/${channelId}`,
    },
  
    ANALYZER: {
      VERSION: "/v1/analyzer/version",
      SCREEN: "/v1/analyzer/screen",
      HOME: "/v1/analyzer/home",
      CURRENT: "/v1/analyzer/current",
      CONFIG: "/v1/analyzer/config",
    },
  
    ANALYTE: {
      SELF_TESTS: "/v1/analyte/self-tests",
      RESULTS: "/v1/analyte/results",
      RESULT_DETAIL: "/v1/analyte/results/detail",
      INST_FACTORS: "/v1/analyte/inst-factors",
      ERRORS: "/v1/analyte/errors",
      CONTROLS: "/v1/analyte/controls",
      CONTROL_MATERIALS: "/v1/analyte/controls/materials",
      CONTROL_DETAIL: "/v1/analyte/controls/detail",
      CALIBRATIONS: "/v1/analyte/calibrations",
    },
  
    FILES: {
      UPLOAD: "/v1/files/upload",            // PUT
      LOG_DOWNLOAD: "/v1/files/log-download",
      DOWNLOAD: "/v1/files/download",
    },
  
    INTERNAL: {
      ALLOCATE_CHANNEL: "/internal/channels/allocate",
      DISCONNECT_CHANNEL: (channelId: string) => `/internal/channels/${channelId}/disconnect`,
      GET_ACTIVE_SOCKETS: "/internal/getAllActiveConnections",
      PRESIGNED_URL: "/internal/presigned-url",
      UPLOAD_PRESIGNED_URL: "/internal/upload-presigned-url",
      FILE_DOWNLOAD: "/internal/files/download",
      FILE_DOWN: "/internal/file-down",
    },
  } as const;