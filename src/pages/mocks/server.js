import { setupServer } from "msw/node";
import { handler } from "./handlers";
// before All
// 서버를 모든 테스트 이전에 실행하는 것

// afterEach
// 서버를 리셋해주는 것

// afterAll
// 테스트가 끝나고 서버를 종료한다는 것을 의미한다.

export const server = setupServer(...handler);
