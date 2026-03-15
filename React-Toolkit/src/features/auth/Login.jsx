import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useDispatch} from "react-redux"
import { signin } from "./authSlice"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const schema = yup.object({
    
    email:yup.string().required("Email is required").email("Invalid email format"),
    password:yup.string().required("Password is required").min(4, "Password must be at least 4 characters"),
}) 



function Login() {

    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({
        mode:"all",
        resolver:yupResolver(schema),
            defaultValues:{
                
                email:"",
                password:"",
               
                
            }

    })
    const disPatch = useDispatch()
    const navigate = useNavigate()
    const {error,loading} = useSelector(state=>state.auth)

    const onLogin = (data)=>{
        try{
            disPatch(signin(data)).unwrap()
           
            navigate("/dashboard")
        }
        catch(error){
            console.error("Login error:", error)
        }
         reset()
    }

    if(loading){
        return <p>Loading...</p>
    }

    


  return (
    <>
        <h1>Product Add Form</h1>
        <form onSubmit={handleSubmit(onLogin)}>
            
            <div className="form-group">
                <label>EMAIL:</label>   
                <input className="form-control" type="email" name="email" {...register("email")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.email?.message}</span>
        
            </div>
            <div className="form-group">
                <label>PASSWORD:</label>
                <input className="form-control" type="password" name="password" {...register("password")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.password?.message}</span>
            </div>
              
               
            
            <br></br>
             <div className="form-group">
                <label></label>
                <input style={{color:"blueviolet"}} type="submit" value="Login" disabled={!isValid}/>
            </div>
        </form>
        {error && <p style={{color:"red"}}>{error}</p>}
    </>
  )
}
export default Login