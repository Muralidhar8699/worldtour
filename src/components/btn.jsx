import React from "react";
import style from "../styles/btn.module.scss";

export default function BTN({ children, type,onClick }) {
  return <button className={`${style.btn} ${style[type]}`} onClick={onClick}>{children}</button>;
}
