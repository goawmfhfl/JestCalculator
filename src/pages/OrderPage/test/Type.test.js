import { render, screen } from "@testing-library/react";
import Type from "../Type";

test("display product images from server", async () => {
  // Type 컴포넌트를 렌더링 하는데
  // 우리가 컨트롤 하는 것은 Products 컴포넌트 이기 때문에
  // orderType을 넣어준 것이다. <하위 컴포넌트를 넣어준 것이다>

  render(<Type orderType="products" />);
  // 이미지를 잡아와야한다.
  // 서버에 요청을 보내면
  // { name: "America", imagePath: "/images/america.jpeg" },
  // { name: "England", imagePath: "/images/england.jpeg" },

  // img에 Role로 잡아준다
  // findByAll은 지금 이미지가 여러개를 잡을 수 있다.
  // 이미지를 다 불러올 예정이다. 이미지가 전부 불러왔는지 확인을 하기 위해서이다.
  // getBy + findBy를 사용한다.
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  // i 속성을 통해서 해당 문자열에 product가들어가 있는지 캐치한다
  // name은 alt속성을 보고 값을 캐치한다.
  expect(productImages).toHaveLength(2);
  // 2개가 있는지 확인한다.

  const altText = productImages.map((element) => element.alt);
  // 반복적으로 체크한다.
  // === (연산자)
  expect(altText).toEqual(["America product", "England product"]);
});
