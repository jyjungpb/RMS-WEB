import { apiClient } from "../client";
import { API_ENDPOINTS } from "@/types/api/endpoints";
import type {
  ApiResult,
  PagingInfo,
  UserResDto,
  UserCreateReqDto,
  UserReqDto,
  UcrReqDto,
  EmailReqDto,
  EmailCodeReqDto,
  PasswordChangeReqDto,
  ChannelBindReqDto,
} from "@/types/api/models";

// 목록
export async function getUsers(req: UserReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<(UserResDto[]) & { paging?: PagingInfo }>>(
    API_ENDPOINTS.USERS.LIST,
    { params: { req, page } }
  );
  return data;
}

// 등록
export async function createUser(body: UserCreateReqDto) {
  const { data } = await apiClient.post<ApiResult<UserResDto>>(API_ENDPOINTS.USERS.CREATE, body);
  return data;
}

// 상세
export async function getUser(userId: string) {
  const { data } = await apiClient.get<ApiResult<UserResDto>>(API_ENDPOINTS.USERS.ONE(userId));
  return data;
}

// 수정
export async function updateUser(userId: string, body: UserCreateReqDto) {
  const { data } = await apiClient.put<ApiResult<UserResDto>>(API_ENDPOINTS.USERS.ONE(userId), body);
  return data;
}

// 삭제
export async function deleteUser(userId: string) {
  const { data } = await apiClient.delete<ApiResult<UserResDto>>(API_ENDPOINTS.USERS.ONE(userId));
  return data;
}

// 내 정보
export async function getMyInfo() {
  const { data } = await apiClient.get<ApiResult<UserResDto>>(API_ENDPOINTS.USERS.ME);
  return data;
}

// 내 정보 요약
export async function getMyInfoSummary(req: UcrReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<any>>(API_ENDPOINTS.USERS.ME_SUMMARY, { params: { req, page } });
  return data;
}

// 특정 사용자 요약
export async function getUserInfoSummary(userId: string, req: UcrReqDto, page = 1) {
  const { data } = await apiClient.get<ApiResult<any>>(API_ENDPOINTS.USERS.SUMMARY_OF(userId), { params: { req, page } });
  return data;
}

// 약관 동의 시각 저장
export async function updateTermsAgreedAt() {
  const { data } = await apiClient.patch<ApiResult<UserResDto>>(API_ENDPOINTS.USERS.TERMS_AGREEMENT, {});
  return data;
}

// 비밀번호: 1) 코드 발송
export async function sendPasswordResetCode(body: EmailReqDto) {
  const { data } = await apiClient.post<ApiResult<any>>(API_ENDPOINTS.USERS.PASSWORD_SEND_CODE, body);
  return data;
}

// 비밀번호: 2) 코드 검증
export async function verifyPasswordResetCode(body: EmailCodeReqDto) {
  const { data } = await apiClient.post<ApiResult<any>>(API_ENDPOINTS.USERS.PASSWORD_VERIFY_CODE, body);
  return data;
}

// 비밀번호: 임시 비번 발송
export async function sendTemporaryPassword(body: EmailReqDto) {
  const { data } = await apiClient.post<ApiResult<any>>(API_ENDPOINTS.USERS.PASSWORD_SEND_TEMP, body);
  return data;
}

// 비밀번호: 3) 변경
export async function changePassword(body: PasswordChangeReqDto) {
  const { data } = await apiClient.patch<ApiResult<any>>(API_ENDPOINTS.USERS.PASSWORD_CHANGE, body);
  return data;
}

// 채널 연결/해제
export async function connectUserToChannels(body: ChannelBindReqDto) {
  const { data } = await apiClient.post<ApiResult<any>>(API_ENDPOINTS.USERS.CHANNELS_CONNECT, body);
  return data;
}
export async function disconnectUserToChannels(channelId: string) {
  const { data } = await apiClient.delete<ApiResult<any>>(API_ENDPOINTS.USERS.CHANNELS_DISCONNECT(channelId));
  return data;
}
