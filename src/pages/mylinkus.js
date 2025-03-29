import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/mylinkus.css";
import BottomNav from "./BottomNav";

// 더미 데이터
const myCrews = [
  {
    id: 1,
    title: "2시에 탄천에서 러닝할 크루",
    location: "서울 탄천",
    tag: "운동",
    members: 6,
  },
  {
    id: 2,
    title: "강아지 산책 메이트 구함",
    location: "서울 성수",
    tag: "강아지",
    members: 4,
  },
];

export default function MyLinkus() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mylinkus-wrapper">
        <div className="top-bar">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
          <h2 className="top-title">My Linkus</h2>
        </div>

        <div className="crew-list">
          {myCrews.map((crew) => (
            <div className="crew-card" key={crew.id}>
              <h4>{crew.title}</h4>
              <p>
                📍 {crew.location} | #{crew.tag}
              </p>
              <p>👥 {crew.members}명 참여 중</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}
