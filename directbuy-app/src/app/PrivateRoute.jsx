
import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"

const PrivateRoute = ({ children , role : requiredrole}) => {

    const { user, isLoading, error } = useAuth()

    if (isLoading) return <p>Loading...</p>

    if (error || !user) {
        return <Navigate to="/login" />
    }

    const role = user?.role;

    if(requiredrole && role!== requiredrole){
        return <Navigate  to='/' replace />
    }

    return children
}

export default PrivateRoute