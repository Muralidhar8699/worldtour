import React from "react";
import style from "../styles/form.module.scss";
import BTN from "./btn";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  return (
    <form className={style.card}>
      <div className={style.form}>
        <label>City Name</label>
        <input type="text" />
        <label>When did you go to ?</label>
        <input type="text" />
        <label>Notes about your trip to</label>
        <textarea id="notes" />
      </div>
      <div>
        <BTN type="primary">Add</BTN>
        <BTN
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          👈Back
        </BTN>
      </div>
    </form>
  );
}
