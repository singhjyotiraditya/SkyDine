import React, { useState } from "react";
import "./styles/Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <div className="main-title">
        <span className="title-welcome">Welcome To </span>
        <span className="title-name">SkyDine</span>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input">
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-password">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
