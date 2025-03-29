import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/post.css";

const post = {
  title: "한강 러닝 크루 함께하실 분!",
  author: "박지민",
  date: "2025.03.29",
  content: `날씨 좋은 봄, 저녁마다 러닝 함께하실 분을 모집합니다!
초보자도 환영이에요. 부담 없이 즐겁게 운동해요 :)`,
  likes: 12,
  commentCount: 2,
};

const comments = [
  {
    name: "지민",
    content: "같이 러닝해요!",
  },
  {
    name: "유나",
    content: "성수에서도 모여요!",
  },
];

export default function Post() {
  const navigate = useNavigate();

  return (
    <div className="post-wrapper">
      {/* 상단바 */}
      <div className="top-bar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="top-title">게시글</h2>
      </div>

      {/* 게시글 */}
      <div className="post-box">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span className="author">{post.author}</span> ·{" "}
          <span className="date">{post.date}</span>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="post-stats">
          ❤️ 좋아요 {post.likes}개 &nbsp;&nbsp; 💬 댓글 {post.commentCount}개
        </div>
      </div>

      <hr className="divider" />

      {/* 댓글 섹션 */}
      <div className="comment-section">
        <h3>댓글</h3>
        {comments.map((comment, index) => (
          <div className="simple-comment" key={index}>
            <strong>{comment.name}</strong>: {comment.content}
          </div>
        ))}
      </div>
    </div>
  );
}
