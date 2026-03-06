import axios from "axios";
import { useState } from "react";
import { AuthContext } from "./AuthContext";



export const AuthProvider = ({children})=>{

    const [authToken,setAuthToken] = useState('')
    const[registerUser,setResgisterUser] = useState(null)
    const [loggedInUser,setLoggedInUser] = useState(null)

    const login = async(email,password)=>{
        try{
            const resp= await axios.post("http://localhost:3001/login",{email,password})
            if(resp.data.accessToken)
            {
                localStorage.setItem("token",resp.data.accessToken)
                setAuthToken(resp.data.accessToken)
                setLoggedInUser(resp.data.user)
                return true
            }
        }
        catch(err)
        {
            console.log(err,"login failed")
            return false
        }

    }
    const logout = ()=>{
        localStorage.removeItem("token")
        setAuthToken('')
        setLoggedInUser(null)

        
    }
    const register = async(email,password,name)=>{
        try{
            const resp= await axios.post("http://localhost:3001/register",{email,password,name})
            if(resp.data.accessToken)
            {
                localStorage.setItem("token",resp.data.accessToken)
                setAuthToken(resp.data.accessToken)
                setResgisterUser(resp.data.user)
                return true
            }
        }
        catch(err)
        {
            console.log(err,"register failed")
            return false
        }

    }

    return <AuthContext.Provider value={{authToken,loggedInUser,registerUser,login,logout,register}}>
    {children}
    </AuthContext.Provider>
}
