import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // ✅ external CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="login-subtitle">Sign in to manage your events efficiently</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="login-footer">
            Don’t have an account? <a href="#">Contact Admin</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
