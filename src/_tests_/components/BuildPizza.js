import React from "react";
import './BuildPizza.css'

export default function BuildPizza() {
  return (
    <div className="buildPizza">
      <h4>Build Your Own Pizza</h4>
      <div className="choiceBackground">
        <h4>Choice Of Size</h4>
        Required
      </div>
      <div className="dropDownSelect">
          <select>
              <option>--Large--</option>
              <option>--Medium--</option>
              <option>--Small--</option>
          </select>
      </div>
    </div>
  );
}
