import React from "react";
import { Switch } from "antd";
import "./glutenFreeChoice.css";

export default function GlutenFreeChoice() {
  return (
    <div className="glutenWrapper">
      <div className="glutenBackground">
        <h4>Choice Of Substitute</h4>
        Choose up to 1.
      </div>
      <div className="toggleSwitch">
        <Switch />  Gluten Free Costs "($+1.00)"
      </div>
    </div>
  );
}
