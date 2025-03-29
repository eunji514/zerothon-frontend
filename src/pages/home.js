import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import BottomNav from "./BottomNav";
const dummyPosts = [
  {
    id: 1,
    name: "Helena",
    tag: "운동",
    time: "3 min ago",
    title: "2시에 탄천에서 러닝할 크루",
    content: "2시쯤에 탄천 러닝하려 하는데 5분 정도 같이 뛰고 싶어요!",
    likes: 21,
    crew: 6,
  },
  {
    id: 2,
    name: "Daniel",
    tag: "강아지",
    time: "15 min ago",
    title: "강아지 같이 산책해요",
    content: "7시에 해 지고 같이 강아지 산책해요~~",
    likes: 4,
    crew: 2,
  },
  {
    id: 3,
    name: "Dana",
    tag: "애니",
    time: "1 day ago",
    title: "",
    content: "",
    image: "https://via.placeholder.com/300x180",
    likes: 0,
    crew: 0,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const categories = [
    "전체",
    "운동",
    "개발",
    "음식",
    "헬스",
    "뜨개질",
    "게임",
    "패션",
  ];
  const [selectedTag, setSelectedTag] = useState("전체");

  const filteredPosts =
    selectedTag === "전체"
      ? dummyPosts
      : dummyPosts.filter((post) => post.tag === selectedTag);

  return (
    <div className="home-wrapper">
      {/* 🔵 My Linkus 버튼 */}
      <div className="my-linkus-bar">
        <button onClick={() => navigate("/mylinkus")}>My Linkus</button>
      </div>

      {/* 카테고리 필터 */}
      <div className="categories">
        {categories.map((tag, index) => (
          <span
            className={`category-tag ${selectedTag === tag ? "active" : ""}`}
            key={index}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 게시글 리스트 */}
      <div className="post-list">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <strong>{post.name}</strong> 님 "{post.tag}"
              <span className="time">{post.time}</span>
            </div>
            {post.title && <h4 className="post-title">{post.title}</h4>}
            {post.content && <p className="post-content">{post.content}</p>}
            {post.image && (
              <img src={post.image} alt="post-img" className="post-image" />
            )}
            <div className="post-stats">
              ❤️ {post.likes} 명 신청 &nbsp;&nbsp; 💬 {post.crew} 명 크루
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
