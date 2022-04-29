import "@testing-library/jest-dom";
import { server } from "./pages/mocks/server";

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());
