import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/post";
import WritePost from "./pages/writePost";
import Mypage from "./pages/mypage";
import Splash from "./pages/splash";
import Home from "./pages/home";
import MyLinkus from "./pages/mylinkus";
import Login from "./pages/login";
import JoinStep1 from "./pages/JoinStep1";
import JoinStep2 from "./pages/JoinStep2";
import JoinComplete from "./pages/JoinComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinStep1 />} />
        <Route path="/join/info" element={<JoinStep2 />} />
        <Route path="/join/complete" element={<JoinComplete />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mylinkus" element={<MyLinkus />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
