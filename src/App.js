import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/post";
import WritePost from "./pages/writePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<WritePost />} />
      </Routes>
    </Router>
  );
}

export default App;
