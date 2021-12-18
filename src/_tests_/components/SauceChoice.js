import { Radio } from "antd";
import React, { useState } from "react";
import "./sauceChoice.css";

// const initialFormValues = {
//   originalRed: "",
//   garlicRanch: "",
//   bbqSauce: "",
//   spanichAlfredo: "",
// };

export default function SauceChoice() {
  const [category, setCategory] = useState();

  const onChange = (e) => {
    setCategory(e.target.value);

    
  };

  console.log({ category }, "test");
  return (
    <div className="soauceWrapper">
      <div className="choiceBackground">
        <h4>Choice Of Sauce</h4>
        Required
      </div>
      <div className="choiceRadioBtn">
        <label value>
          <input
            value={0.50}
            name="sauce"
            type="radio"
            onChange={onChange}
          />{" "}
          Original Red
        </label>
        <label>
          <input
            value={0.65}
            name="sauce"
            type="radio"
            onChange={onChange}
          />{" "}
          Garlic Ranch
        </label>
        <label>
          <input
            value={0.53}
            name="sauce"
            type="radio"
            onChange={onChange}
          />
          BBQ sauce
        </label>
        <label>
          <input
            value={0.45}
            name="sauce"
            type="radio"
            onChange={onChange}
          />{" "}
          Spanich Alfredo
        </label>
      </div>
    </div>
  );
}
