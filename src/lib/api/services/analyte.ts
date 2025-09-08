import { apiClient } from "../client";
import { API_ENDPOINTS } from "@/types/api/endpoints";
import type {
  ApiResult,
  PagingInfo,
  SelfTestReqDto,
  AnalyteReqDto,
  ErrorReqDto,
  ControlReqDto,
  AnalyteResDto,
  AnalyteDetailResDto,
  InstFactorResDto,
  ErrorResDto,
  ControlResDto,
  ControlMaterialResDto,
  ControlDetailResDto,
  AnalyteCalibartionResDto,
} from "@/types/api/models";

export async function getSelfTests(req: SelfTestReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<(any[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.SELF_TESTS,
    { params: { req, page } }
  );
  return data;
}

export async function getResults(req: AnalyteReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<(AnalyteResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.RESULTS,
    { params: { req, page } }
  );
  return data;
}

export async function getResultDetail(rowId: number) {
  const { data } = await apiClient.get<ApiResult<(AnalyteDetailResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.RESULT_DETAIL,
    { params: { rowId } }
  );
  return data;
}

export async function getInstFactors() {
  const { data } = await apiClient.get<ApiResult<(InstFactorResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.INST_FACTORS
  );
  return data;
}

export async function getErrors(req: ErrorReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<(ErrorResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.ERRORS,
    { params: { req, page } }
  );
  return data;
}

export async function getControls(req: ControlReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<(ControlResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.CONTROLS,
    { params: { req, page } }
  );
  return data;
}

export async function getControlMaterials(page = 1) {
  const { data } = await apiClient.get<ApiResult<(ControlMaterialResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.CONTROL_MATERIALS,
    { params: { page } }
  );
  return data;
}

export async function getControlDetail(controlId: string, date: string) {
  const { data } = await apiClient.get<ApiResult<(ControlDetailResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.CONTROL_DETAIL,
    { params: { controlId, date } }
  );
  return data;
}

export async function getCalibrations() {
  const { data } = await apiClient.get<ApiResult<(AnalyteCalibartionResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.ANALYTE.CALIBRATIONS
  );
  return data;
}
