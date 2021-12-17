import React, { useState } from "react";
import "./BuildPizza.css";

export default function BuildPizza() {
  const [pizzaSizePrice, setPizzaSizePrice] = useState(0);

  const onSelectChange = (selectedValue) => {
    let value = selectedValue.target.value;

    if (value !== 0) {
      setPizzaSizePrice(value);
    }
  };

  console.log("pizzaSizePrice", pizzaSizePrice); 
  return (
    <div className="buildPizza">
      <h4>Build Your Own Pizza</h4>
      <div className="choiceBackground">
        <h4>Choice Of Size</h4>
        Required
      </div>
      <div className="dropDownSelect">
        <select onChange={onSelectChange}>
          <option value={0}>--Choose size--</option>
          <option value={12.5}>--Large--</option>
          <option value={8.5}>--Medium--</option>
          <option value={5.6}>--Small--</option>
        </select>
      </div>
    </div>
  );
}
