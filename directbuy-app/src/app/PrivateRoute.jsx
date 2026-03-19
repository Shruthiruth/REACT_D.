import { useGetMeQuery } from "../features/auth/authApi"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {

    const { data: user, isLoading, error } = useGetMeQuery()

    if (isLoading) return <p>Loading...</p>

    if (error || !user) {
        return <Navigate to="/login" />
    }

    return children
}

export default PrivateRoute