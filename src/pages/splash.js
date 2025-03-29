import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/splash.css";
import { HiLink } from "react-icons/hi"; // 고리 아이콘

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // ✅ 홈이 아니라 로그인으로 이동
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-text">
        <p className="subtitle">우리가 이어지는 순간,</p>
        <HiLink className="splash-icon" />
        <p className="brand">Linkus</p>
      </div>
    </div>
  );
}
