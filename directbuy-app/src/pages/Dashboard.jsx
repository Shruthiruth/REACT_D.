import { useGetMeQuery } from "../features/auth/authApi"
import AdminDb from "./AdminDb"
import UserDb from "./UserDb"

function Dashboard() {

    const {data: user, isLoading, error} = useGetMeQuery()

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error fetching user data</p>

    if(user.role === 'ADMIN') {
        return <AdminDb />
    }
    if(user.role === 'USER') {
        return <UserDb />
    }



    
}
export default Dashboard