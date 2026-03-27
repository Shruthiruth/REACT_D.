import { useAuth } from "../app/AuthProvider"

import AdminDb from "./AdminDb"
import UserDb from "./UserDb"

function Dashboard() {

    const {data, isLoading, isError} = useAuth()
    const user= data?.data

    if(isLoading) return <p>Loading...</p>
    if(isError || !data) return <Navigate to='/login' />


    if(user?.role === 'ADMIN') {
        return <AdminDb />
    }
    if(user?.role === 'USER') {
        return <UserDb />
    }

    return <h3> no valid role found</h3>

    
}
export default Dashboard