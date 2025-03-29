import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/post"; // 이게 너의 게시글 페이지

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
