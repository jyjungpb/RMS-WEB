import { apiClient } from "../client";
import { API_ENDPOINTS } from "@/types/api/endpoints";
import type {
  ApiResult,
  AnalyzerVersionInfoResDto,
  AnalyzerConfigResDto,
  AnalyzerInfoResDto,
  AnalyzerSummaryRes,
} from "@/types/api/models";

export async function getVersion() {
  const { data } = await apiClient.get<ApiResult<AnalyzerVersionInfoResDto>>(API_ENDPOINTS.ANALYZER.VERSION);
  return data;
}
export async function getScreen() {
  const { data } = await apiClient.get<ApiResult<{ hasScreen: boolean }>>(API_ENDPOINTS.ANALYZER.SCREEN);
  return data;
}
export async function getHome() {
  const { data } = await apiClient.get<ApiResult<AnalyzerSummaryRes>>(API_ENDPOINTS.ANALYZER.HOME);
  return data;
}
export async function getCurrent() {
  const { data } = await apiClient.get<ApiResult<AnalyzerInfoResDto>>(API_ENDPOINTS.ANALYZER.CURRENT);
  return data;
}
export async function getConfig() {
  const { data } = await apiClient.get<ApiResult<AnalyzerConfigResDto>>(API_ENDPOINTS.ANALYZER.CONFIG);
  return data;
}
