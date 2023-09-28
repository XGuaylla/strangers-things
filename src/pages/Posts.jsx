import { useState, useEffect } from "react";
import { fetchPosts } from "./API";
import { Link } from "react-router-dom"; 

export default function Posts({ token }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    fetchData();
  }, []);
  return (
    <div className="flex content-center items-center flex-col p w-screen ">
      <h1 className="bg-[#BEADFA] w-3/4 flex justify-center text-4xl">Posts</h1>
      {token && <Link to='/createPost'>
        <h2 className="text-lg bg-[#BEADFA] pr-3 pl-3 hover:text-white">Create Post</h2>
        </Link> }
      {posts.map((post) => (
        <div
          className="w-3/4 border-4 border-solid border-[#BEADFA] bg-[#D0BFFF]"
          key={post.id}
        >
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Price: {post.price}</p>
          <p>Created by: {post.author.username}</p>
          <p>Location: {post.location}</p>
        </div>
      ))}
    </div>
  );
}
