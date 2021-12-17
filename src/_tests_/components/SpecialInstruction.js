import React from "react";
import './specialINstruciton.css'

export default function SpecialInstruction() {
  return (
    <div className="specialInstWrapper">
      <div className="specialInst">
        <h3>Special Instruciton</h3>
      </div>
      <div className="wrapper">
        <label>
          <input className="inputArea" type="text" placeholder='Anything else you like to add' />
        </label>
      </div>
    </div>
  );
}
