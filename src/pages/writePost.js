import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/write.css";
import BottomNav from "./BottomNav";

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [maxPeople, setMaxPeople] = useState(""); // 모집 인원

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !content || !maxPeople) return;
    alert(`게시물이 등록되었습니다.\n모집인원: ${maxPeople}명`);
    navigate(-1);
  };

  const isFormValid = title && content && maxPeople;

  return (
    <div className="write-wrapper">
      {/* 상단바 */}
      <div className="write-topbar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="write-title">글쓰기</h2>
        <button
          className={`submit-btn ${!isFormValid ? "disabled" : ""}`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          글 게시
        </button>
      </div>

      {/* 입력 폼 */}
      <div className="form">
        <input
          type="text"
          className="input-title"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="input-content"
          placeholder="본문을 입력해 주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* 모집 인원 선택 */}
        <div className="input-group">
          <label htmlFor="maxPeople">모집 인원</label>
          <select
            id="maxPeople"
            value={maxPeople}
            onChange={(e) => setMaxPeople(e.target.value)}
            className="select-people"
          >
            <option value="">선택하세요</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}명
              </option>
            ))}
          </select>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
