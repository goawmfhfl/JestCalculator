import "@testing-library/jest-dom";
import { server } from "./mocks/server";

//모든 테스트가 시작하기전에 서버를 listen을 한다.
beforeAll(() => server.listen());

// 테스트 중에 추가 request hanlder를 reset해준다.
// 다른 테스트에 영향을 주지 않게한다.
afterEach(() => server.resetHandlers());

afterAll(() => server.close());
