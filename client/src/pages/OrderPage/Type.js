import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

function Type({ orderType }) {
  // 1. products를 전달받는다.
  const [items, setItems] = useState([]);
  // 4. 서버로부터 전달받은 상태값이 items에 담기게 된다.
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);
  // 2. 전달받은 orderType을 서버에 요청한다.
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:4000/${orderType}`);
      // 3. 서버의 travel json으로부터 products의 요청에 따라
      // 응답값으로 res.json(travelData.countries)을 전달 받는다.
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  // 5. 서버에서 불러온 데이터가 에러가 발생하면 에러 컴포넌트를 보여준다.
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }
  // 6. OrderPage로 부터 전달받은 orderType에 따라 컴포넌트의 성격이 달라진다.
  // 즉 ItemComponents는 사실 <Products /> <Options /> 컴포넌트가 될 수 있는 것이다.
  const ItemComponents = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    // 7. 컴포넌트의 성격에 따라서 props가 전달 된다.
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      // 8 updateItemCount에서 itemName, newItemCount는 무엇이란 말인가?
      // 일단 함수의 매개변수 자리에
      // updateItemCount ={
      // function (itemName, newItemCount) {
      //   updateItemCount(itemName, newItemCount, orderType)
      //  }
      // }
      // props로 넘겨주기만 한 것이지 호출을 한 것은 아니다.
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  let orderTypeKorean = orderType === "products" ? "상품" : "옵션";
  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>
        {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
