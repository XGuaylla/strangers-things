import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Login from "./pages/login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="">
      <Navbar setToken={setToken} token={token}></Navbar>
      <Routes>
        <Route path="/" element={<Posts token={token} />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/createPost" element={<CreatePost token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
