import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/join.css";

const interests = [
  { label: "운동", image: "운동.PNG" },
  { label: "게임", image: "게임.PNG" },
  { label: "여행", image: "여행.PNG" },
  { label: "동물", image: "동물.PNG" },
  { label: "음악", image: "음악.PNG" },
  { label: "애니", image: "애니.PNG" },
  { label: "공부", image: "공부.PNG" },
  { label: "음식", image: "음식.PNG" },
];

export default function JoinStep1() {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/join/info"); // 이미지 클릭 시 다음 페이지로 이동
  };

  return (
    <div className="join-wrapper">
      <h2>Linkus에서 연결될 관심사를 골라주세요.</h2>
      <div className="interest-grid">
        {interests.map((item, i) => (
          <div key={i} className="interest-card" onClick={handleSelect}>
            <img src={`/images/${item.image}`} alt={item.label} />
            <div className="interest-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
