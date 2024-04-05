import React from "react";
import loginStyle from "../styles/login.module.scss"

export default function Login() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input type="" placeholder="" required name="" />
        <div>
          <label>Password</label>
          <input type="password" placeholder="" required name="" />
          <p>Icon</p>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
