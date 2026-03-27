import { useAuth } from "../app/AuthProvider"

function UserDb() {
    const {data,isLoading} = useAuth()
   
       const user= data?.data
       if(isLoading) return <h4>Loading...</h4>
       return (
           <div>
               <h1>User Dashboard</h1>    
               <p>Welcome to the User Dashboard. {user?.firstName}</p>
           </div>
       )
}
export default UserDb