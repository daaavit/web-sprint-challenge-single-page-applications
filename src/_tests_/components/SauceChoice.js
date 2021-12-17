import React from "react";
import './sauceChoice.css'

export default function SauceChoice() {
  return (
    <div className="soauceWrapper">
      <div className="choiceBackground">
        <h4>Choice Of Sauce</h4>
        Required
      </div>
      <div className="choiceRadioBtn">
          <label>
              <input type='radio'/> Original Red
          </label>
          <label>
              <input type='radio'/> Garlic Ranch
          </label>
          <label>
              <input type='radio'/> BBQ sauce
          </label>
          <label>
              <input type='radio'/> Spanich Alfredo
          </label>

      </div>
    </div>
  );
}
