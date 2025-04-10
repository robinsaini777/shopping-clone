import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to MyShop</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
