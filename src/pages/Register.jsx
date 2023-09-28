import React, { useState } from "react"
import { registerUser } from "./API"
import { useNavigate } from "react-router-dom"

export default function Register({ token, setToken }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        const token = await registerUser(username, password)
        setToken(token)
        localStorage.setItem('token', token)
        navigate('/')
    }
    // if (token) {
    //     navigate('/')
    // }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="text-3xl block text-center font-semibold">Register</h1>
                <hr className="mt-3" />
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label for='username' className="block text-base mb-2">Username:</label>
                        <input type="text" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Username..." value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="mt-3">
                        <label for='password' className="block text-base mb-2">Password:</label>
                        <input type="password" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Password..." value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="border-2 border-[#D0BFFF] bg-[#D0BFFF] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#D0BFFF] font-semibold">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}