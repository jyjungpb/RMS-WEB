import { apiClient } from "../client";
import { API_ENDPOINTS } from "@/types/api/endpoints";
import type { ApiResult } from "@/types/api/models";

// 업로드 (PUT, query: command, fileName)
export async function upload(command: string, fileName: string, file: Blob) {
  const { data } = await apiClient.put<ApiResult>(API_ENDPOINTS.FILES.UPLOAD, file, {
    params: { command, fileName },
    headers: { "Content-Type": "application/octet-stream" },
  });
  return data;
}

export async function logDownload(command: string, fileName: string) {
  const { data } = await apiClient.get<ApiResult>(API_ENDPOINTS.FILES.LOG_DOWNLOAD, {
    params: { command, fileName },
  });
  return data;
}

export async function download(command: string, fileName: string) {
  const { data } = await apiClient.get<ApiResult>(API_ENDPOINTS.FILES.DOWNLOAD, {
    params: { command, fileName },
  });
  return data;
}
