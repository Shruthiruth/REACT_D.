import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import Login from "../features/auth/Login"

function Dashboard() {
    const { loggedInUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    if (loggedInUser!==null) {
        return (
            <>
                <div>
                    <h1>Welcome to the Dashboard, {loggedInUser?.name}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </>

        )
    }
    else {
        return <Login />
    }
}
export default Dashboard