import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/BottomNav.css";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <button onClick={() => navigate("/write")}>✍️</button>
      <button onClick={() => navigate("/home")}>🏠</button>
      <button onClick={() => navigate("/mypage")}>🙋‍♂️</button>
    </div>
  );
}
