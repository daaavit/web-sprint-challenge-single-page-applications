import React from "react";
import './quantityButton.css'

export default function QuantityButton() {
  return (
    <div className="btnWrapper">
        <div className="main">
      <div className="numberWrpr">
        <input type="number" value={1} />
      </div>
      <div>
        <button className="addBtn" type="submit">Add to Order</button>
      </div>
      </div>
    </div>
  );
}
