import { render } from "@testing-library/react";
import { OrderContextProvider } from "./contexts/OrderContext";

// 커스텀 렌더 생성
// 모든 파일에 wrapper를 넣는것은 비효율적이기 때문이다.
// ui => 렌더하고자 하는 jsx
// options: wrapper 옵션 이외에 우리가 주고자 하는 다른 옵션들
const customRender = (ui, options) =>
  render(ui, { wrapper: OrderContextProvider, ...options });

// 테스팅 라이브러리에서 제공하는 모든것을 제공한다.
export * from "@testing-library/react";

// 이름을 render로 export한다.
export { customRender as render };
