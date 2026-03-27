import { useEffect } from 'react'
import { useLogoutMutation } from './authApi'
import { useNavigate } from 'react-router-dom'    
import { useDispatch } from 'react-redux'
import { baseApi } from '../../app/baseApi'
function Logout()
{   
    const [logout,{isLoading}] = useLogoutMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = async () => {
        try {
            await logout().unwrap()
            dispatch(baseApi.util.resetApiState())
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