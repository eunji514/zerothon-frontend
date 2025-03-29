import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/mypage.css";
import BottomNav from "./BottomNav";

export default function Mypage() {
  const navigate = useNavigate();

  // 예시 사용자 정보
  const user = {
    name: "박지민",
    email: "jimin@example.com",
    interests: ["러닝", "산책"],
    region: "서울 강남",
  };

  const handleLogout = () => {
    // 로그아웃 로직 여기에 추가
    alert("로그아웃되었습니다.");
    navigate("/login");
  };

  return (
    <>
      <div className="mypage-wrapper">
        {/* 상단바 */}
        <div className="top-bar">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
          <h2 className="top-title">내정보조회</h2>
        </div>

        {/* 사용자 정보 */}
        <div className="user-info">
          <p>
            <strong>🧑 이름:</strong> {user.name}
          </p>
          <p>
            <strong>📧 이메일:</strong> {user.email}
          </p>
          <p>
            <strong>🎯 관심사:</strong> {user.interests.join(", ")}
          </p>
          <p>
            <strong>📍 지역:</strong> {user.region}
          </p>
        </div>

        <hr className="divider" />

        {/* 기능 메뉴 */}
        <div className="settings">
          <div className="setting-item" onClick={() => alert("설정으로 이동")}>
            ⚙️ 설정
          </div>
          <div
            className="setting-item"
            onClick={() => alert("정보 수정 페이지로 이동")}
          >
            ✏️ 내 정보 수정
          </div>
          <div
            className="setting-item"
            onClick={() => alert("알림 페이지로 이동")}
          >
            🔔 알림
          </div>
          <div className="setting-item logout" onClick={handleLogout}>
            🚪 로그아웃
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
