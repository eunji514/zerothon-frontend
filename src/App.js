import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/post";
import WritePost from "./pages/writePost";
import Mypage from "./pages/mypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
