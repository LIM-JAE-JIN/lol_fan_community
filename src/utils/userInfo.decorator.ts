import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// createParamDecorator를 사용하여 UserInfo라는 커스텀 파라미터 데코레이터를 생성
export const UserInfo = createParamDecorator(
  // 데코레이터가 받을 수 있는 인자 (data), ExecutionContext를 사용하여 현재 실행 컨텍스트에 접근
  (data: unknown, ctx: ExecutionContext) => {
    // 현재 실행 컨텍스트에서 HTTP 요청 객체를 가져옴
    const request = ctx.switchToHttp().getRequest();

    // 요청 객체에서 user 속성을 확인하고, 있다면 해당 값을 반환, 없다면 null 반환
    return request.user ? request.user : null;
  },
);
