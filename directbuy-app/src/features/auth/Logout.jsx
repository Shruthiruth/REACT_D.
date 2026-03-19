import { useEffect } from 'react'
import { useLogoutMutation } from './authApi'
import { useNavigate } from 'react-router-dom'    
function Logout()
{   
    const [logout,{isLoading}] = useLogoutMutation()
    const navigate = useNavigate()

    const onLogout = async () => {
        try {
            await logout().unwrap()
            navigate('/login')
        }
        catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        onLogout()
    }, [])
    return(
        <>

            {isLoading ? <p>Logging out...</p> : <p>You have been logged out.</p>}

        </>
    )
}
export default Logout