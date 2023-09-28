import { Link } from "react-router-dom";

export default function Navbar({ token, setToken }) {
    function logout() {
        setToken(null)
        localStorage.removeItem('token')
    }
    return(
        <nav className=" h-16 text-2xl text-red-400 bg-[#D0BFFF] flex justify-between items-center">
            <div>
                <h1>Stranger's Things</h1>
            </div>
            <div>
                <ul className="flex item-center gap-[4vw]">
                    <li className="hover:text-red-600">
                        <Link to="/">Posts</Link>
                    </li>
                    { token && <li className="hover:text-red-600">  
                        <Link to="/profile">Profile</Link>
                    </li> }
                    { !token && <li className="hover:text-red-600">
                        <Link to="/login">Login</Link>
                    </li> }
                    { !token && <li className="hover:text-red-600">
                        <Link to="/register">Resgister</Link>
                    </li> }
                    { token && <li className="hover:text-red-600"><button onClick={logout}>Logout</button></li>}
                </ul>
            </div>
        </nav>
    )
}