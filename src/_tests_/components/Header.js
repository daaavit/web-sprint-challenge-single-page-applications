import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h3 className="headerName">BLOOMTECH EATS</h3>
      </div>
      <div>
        <button className="buttonHome">Home</button>
        <button>Help</button>
      </div>
    </div>
  );
}
