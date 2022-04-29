import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// 서버에 핸들러를 넣어주는 것이다.
// 내가 handler에서 작성한 rest요청들이 서버로 이동하게 된다.
export const server = setupServer(...handlers);
