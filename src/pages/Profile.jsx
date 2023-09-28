import { useState, useEffect } from "react"
import { profileData } from './API'
import { useNavigate } from "react-router-dom"

export default function Profile({ token }) {
    const [user, setUser] = useState('')
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function getUser() {
            const user = await profileData(token)
            setUser(user)
        }
        getUser()
    }, [token])
    if (!token) {
        navigate('/login')
    }
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}