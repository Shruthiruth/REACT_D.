import { useAuth } from "../app/AuthProvider"

function AdminDb() {

    const {data,isLoading} = useAuth()

    const user= data?.data
    if(isLoading) return <h4>Loading...</h4>
    return (
        <div>
            <h1>Admin Dashboard</h1>    
            <p>Welcome to the Admin Dashboard. {user?.firstName}</p>
        </div>
    )
}   
export default AdminDb