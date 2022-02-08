import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create a Post</Link>
        <Link to="/">Home</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register">Registration</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
