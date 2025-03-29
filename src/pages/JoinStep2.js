import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/join.css";

export default function JoinStep2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/join/complete");
  };

  return (
    <div className="join-wrapper">
      <h2>정보를 입력해주세요!</h2>
      <div className="form">
        <label>E-MAIL</label>
        <input type="email" placeholder="이메일 입력" />
        <label>ID</label>
        <input type="text" placeholder="아이디 입력" />
        <label>PASSWORD</label>
        <input type="password" placeholder="비밀번호 입력" />
        <label>LOCATION</label>
        <input type="text" placeholder="위치 입력" />
        <button className="next-btn" onClick={handleNext}>
          NEXT
        </button>
      </div>
    </div>
  );
}
