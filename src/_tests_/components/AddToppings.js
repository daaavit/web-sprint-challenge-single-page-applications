import React from "react";
import './AddToppings.css'


export default function AddToppings() {
  return (
    <div className="addToppings">
      <div className="toppingsBackground">
        <h4>Add Toppings</h4>
        Chose up to 10.
      </div>
      <div className="toppingWrapper">
      <div className="topppingOptions">
        <label>
          <input type="checkbox" />
          Peperoni
        </label>
        <label>
          <input type="checkbox" />
          Sasuage
        </label>
        <label>
          <input type="checkbox" />
          Canadian Becon
        </label>
        <label>
          <input type="checkbox" />
          Spicy Italian Sasuage
        </label>
        <label>
          <input type="checkbox" />
          Grilled Chicken
        </label>
        <label>
          <input type="checkbox" />
          Onions
        </label>
        <label>
          <input type="checkbox" />
          Green Pepper
        </label>
        </div>
        <div className="topppingOptions">
        <label>
          <input type="checkbox" />
          Diced Tomato
        </label>
        <label>
          <input type="checkbox" />
          Black Olives
        </label>   <label>
          <input type="checkbox" />
          Roasted Garilc
        </label>
        <label>
          <input type="checkbox" />
          Artichoke Hearts
        </label>   <label>
          <input type="checkbox" />
          Three Cheese
        </label>   <label>
          <input type="checkbox" />
          Pinaple
        </label>   <label>
          <input type="checkbox" />
          Extra Cheese
        </label>
        </div>
      </div>
    </div>
  );
}
