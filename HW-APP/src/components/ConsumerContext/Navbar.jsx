import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

function Navbar() {
    const { logout, loggedInUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlelogout = () => {
        logout();
        navigate("/Context/SignIn")
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link>About</Link>
                    </li>
                    {/* Show Logout only when user is logged in */}
                    {loggedInUser && (
                        <li className="nav-item">
                            <button onClick={handlelogout} className="btn btn-success">
                                Logout
                            </button>
                        </li>
                    )}

                    {/* Show Login only when user is NOT logged in */}
                    {!loggedInUser && (
                        <li className="nav-item">
                            <Link to="/Context/SignIn">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}
export default Navbar