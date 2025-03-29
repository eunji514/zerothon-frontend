import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 여기에 실제 로그인 로직 들어갈 예정
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">반가워요!</h2>
      <div className="login-box">
        <label>Email</label>
        <input type="email" placeholder="Value" />
        <label>Password</label>
        <input type="password" placeholder="Value" />
        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>
        <a className="forgot" href="#">
          Forgot password?
        </a>
      </div>
      <div className="signup-link">
        <p>아직 회원이 아니신가요?</p>
        <button className="signup-btn" onClick={() => navigate("/join")}>
          회원가입
        </button>
      </div>
    </div>
  );
}
