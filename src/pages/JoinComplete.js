import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/join.css";
import logo from "../assets/LinkusLogo.png"; // 로고 이미지

export default function JoinComplete() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // 3초 후 홈으로 이동
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="join-wrapper center">
      <img src={logo} alt="Linkus" className="logo-img" />
      <p>새로운 크루 여러분을 환영합니다!</p>
    </div>
  );
}
