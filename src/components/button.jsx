import React from "react";
import btnStyle from "../styles/button.module.scss";

export default function Button({ children }) {
  return (
    <button className={btnStyle.btn} role="button">
      <span className="text">{children}</span>
      <span>Now</span>
    </button>
  );
}
