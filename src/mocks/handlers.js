import { rest } from "msw";

export const handlers = [
  // get 요청을 보내면
  // return값으로 ctx.json을 따라서 응답 결과가 출력이 된다.
  rest.get("http://localhost:5000/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "/image/america.jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpeg",
        },
      ])
    );
  }),
  rest.get("http://localhost:5000/options", (req, res, ctx) => {
    return res(
      ctx.json(
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        }
      )
    );
  }),
];
