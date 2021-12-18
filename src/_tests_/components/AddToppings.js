import React, { useState } from "react";
import "./AddToppings.css";

export default function AddToppings() {
  const [addToppings, setAddToppings] = useState();

  const onChange = (e) => {
    setAddToppings(e.target.value);
  };

  console.log({addToppings}, 'Toppings input')

  return (
    <div className="addToppings">
      <div className="toppingsBackground">
        <h4>Add Toppings</h4>
        Chose up to 10.
      </div>
      <div className="toppingWrapper">
        <div className="topppingOptions">
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Peperoni
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Sasuage
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Canadian Becon
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Spicy Italian Sasuage
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Grilled Chicken
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Onions
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Green Pepper
          </label>
        </div>
        <div className="topppingOptions">
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Diced Tomato
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Black Olives
          </label>{" "}
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Roasted Garilc
          </label>
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Artichoke Hearts
          </label>{" "}
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Three Cheese
          </label>{" "}
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Pinaple
          </label>{" "}
          <label>
            <input
              type="checkbox"
              value={1.0}
              onChange={onChange}
              name={"topping"}
            />
            Extra Cheese
          </label>
        </div>
      </div>
    </div>
  );
}
