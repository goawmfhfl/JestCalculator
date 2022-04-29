import React, { useState } from "react";

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={checked}
          id="confrim-checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="confrim-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
