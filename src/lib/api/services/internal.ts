import { apiClient } from "../client";
import { API_ENDPOINTS } from "@/types/api/endpoints";
import type { ApiResult } from "@/types/api/models";

export async function allocateChannel(body: { serial?: string }) {
  const { data } = await apiClient.post<ApiResult>(API_ENDPOINTS.INTERNAL.ALLOCATE_CHANNEL, body);
  return data;
}

export async function disconnectChannel(channelId: string) {
  const { data } = await apiClient.delete<ApiResult>(API_ENDPOINTS.INTERNAL.DISCONNECT_CHANNEL(channelId));
  return data;
}

export async function getActiveSockets() {
  // 이 엔드포인트는 단순 Map<string, string>을 반환한다고 가정
  const { data } = await apiClient.get<Record<string, string>>(API_ENDPOINTS.INTERNAL.GET_ACTIVE_SOCKETS);
  return data;
}

export async function getPresignedUrl(serial: string, fileName: string) {
  const { data } = await apiClient.get<string>(API_ENDPOINTS.INTERNAL.PRESIGNED_URL, {
    params: { serial, fileName },
  });
  return data;
}

export async function getUploadPresignedUrl(serial: string, fileName: string) {
  const { data } = await apiClient.get<string>(API_ENDPOINTS.INTERNAL.UPLOAD_PRESIGNED_URL, {
    params: { serial, fileName },
  });
  return data;
}

export async function fileDownload(serial: string, fileName: string, type: string) {
  const { data } = await apiClient.get<string>(API_ENDPOINTS.INTERNAL.FILE_DOWNLOAD, {
    params: { serial, fileName, type },
  });
  return data;
}

export async function fileDown(serial: string, fileName: string) {
  const { data } = await apiClient.get<string>(API_ENDPOINTS.INTERNAL.FILE_DOWN, {
    params: { serial, fileName },
  });
  return data;
}
