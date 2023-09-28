import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makePost } from "./API";

export default function CreatePost({ token }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState('')
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  function handleSubmit(e) {
    e.preventDefault()
    makePost({title, description, price, location, willDeliver}, token)
    setTitle('')
    setDescription('')
    setPrice('')
    setLocation('')
    setWillDeliver(false)
    navigate('/')
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">  
        <h1 className="text-3xl block text-center font-semibold">Create Post</h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
            <div className="mt-3">
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" type='text' placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mt-3">
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" type='text' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mt-3">
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" type='text' placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mt-3">
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" type='text' placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="mt-3 flex justify-around">
                <div>
                    <label className="">Will Deliver </label>
                    <input type="checkbox" checked={willDeliver} onChange={(e) => setWillDeliver(e.target.checked)} />
                </div>
                <button className="border-2 border-[#D0BFFF] bg-[#D0BFFF] w-1/3 text-white py-1 rounded-md hover:bg-transparent hover:text-[#D0BFFF] font-semibold" type="submit">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
}
