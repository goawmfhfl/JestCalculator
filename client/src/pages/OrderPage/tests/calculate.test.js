import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import OrderPage from "../OrderPage";

test.only("update product's total when products change", async () => {
  // 렌더링을 해줄 컴포넌트를 정한다.
  render(<Type orderType="products" />);
  // 상품 총 가격 캐치
  // 상품 총 가격 뒤에 다른 값이 있더라도 catch를 할 수 있다.
  const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
  // exact: string
  expect(productsTotal).toHaveTextContent("0");

  // 여행 상품 가져오기 위해서는 그냥 getByRoll을 할 수 없다 ㅠㅠ
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  // userEvent.type(americaInput, "3");

  // userEvent.type(americaInput, "2");
  // userEvent.clear(americaInput);

  // fire이벤트 대신에 user event를 사용한다
  // 사용하기전에 한번 클리어 해준다.
  userEvent.clear(americaInput);
  // 1로 올려주었을 때는 ?
  userEvent.type(americaInput, "1");
  // 1000이 될꺼야
  console.log("use", productsTotal.textContent);
  expect(productsTotal).toHaveTextContent("1000");

  const englandInput = await screen.findByRole("spinbutton", {
    name: "England",
  });
  userEvent.clear(englandInput);
  userEvent.type(englandInput, "3");
  expect(productsTotal).toHaveTextContent("4000");
});

test("update option's total when options change", async () => {
  render(<Type orderType="options" />);
  // 옵션 총 가격이라는 글자가 들어간 매쳐
  const optionsTotal = screen.getByText("옵션 총 가격:", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  // 보험 옵션 추가
  // 비동기요청 async await으로 가져와야한다.
  const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  // 체크를 하면 500원이 올라간다.
  userEvent.click(insuranceCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
  //
  const dinnerCheckbox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
  // 디너 옵션 추가
  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("1000");
  // 디너 옵션 제거
  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
});

describe("total price of goods and options", () => {
  test("total price starts with 0 and Updating total price when adding one product", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total Price:", { exact: false });
    expect(total).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    expect(total).toHaveTextContent("1000");
  });

  test("Updating total price when adding one option", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price:", { exact: false });

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });
    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("500");
  });

  test("Updating total price when removing option and product", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price:", { exact: false });

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });
    userEvent.click(insuranceCheckbox);

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "3");

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    expect(total).toHaveTextContent("1500");
  });
});
