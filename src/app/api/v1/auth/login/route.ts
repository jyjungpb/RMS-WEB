export const dynamic = 'force-dynamic';

const UPSTREAM = 'https://dev-rms-api.precision-bio.com/api/v1/auth/login';

export async function OPTIONS() {
  // 동일 출처 요청에서 프리플라이트가 올 일은 거의 없지만, 안전하게 204로 응답
  return new Response(null, { status: 204 });
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';

    let bodyToSend: string | undefined = undefined;
    let headers: Record<string, string> = {};

    if (contentType.includes('application/json')) {
      const json = await req.json();
      bodyToSend = JSON.stringify(json);
      headers['Content-Type'] = 'application/json';
      headers['Accept'] = 'application/json';
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await req.text();
      bodyToSend = text;
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      headers['Accept'] = 'application/json';
    } else {
      // 그 외 컨텐츠 타입은 원문 그대로 텍스트로 전달
      const text = await req.text();
      bodyToSend = text;
      if (contentType) headers['Content-Type'] = contentType;
    }

    // 백엔드로 서버 측에서 호출 (Origin 헤더 미전달하여 CORS 회피)
    const upstreamResp = await fetch(UPSTREAM, {
      method: 'POST',
      headers,
      body: bodyToSend,
      // 타임아웃이 필요하면 AbortController 사용 가능
    });

    const upstreamContentType = upstreamResp.headers.get('content-type') || '';

    if (upstreamContentType.includes('application/json')) {
      const data = await upstreamResp.json();
      return Response.json(data, { status: upstreamResp.status });
    }

    const text = await upstreamResp.text();
    return new Response(text, {
      status: upstreamResp.status,
      headers: upstreamContentType ? { 'Content-Type': upstreamContentType } : undefined,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: '프록시 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 