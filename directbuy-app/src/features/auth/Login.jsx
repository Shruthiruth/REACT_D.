import { useLoginMutation } from "./authApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


const schema=yup.object({
    email:yup.string().email("Invalid email address").required("Email is required"),
    password:yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
})


function Login()
{

    const {register,handleSubmit,formState:{errors,isValid},reset}=useForm({
        mode:'all',
        resolver:yupResolver(schema),
        defaultValues:{
            email:'',
            password:''
        }
    })
    const [login,{isLoading,error}]=useLoginMutation()
    const navigate= useNavigate()
    const onlogin=async(data)=>{
        try{
            await login(data).unwrap()
            console.log(data)
            navigate('/dashboard')


        }
        catch(err){
            console.error(err)
        }
        reset()
    }   
    return(
        <>

            <form onSubmit={handleSubmit(onlogin)}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div  className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" {...register("email")}/>
                                <span style={{color:'red',fontFamily:'cursive'}}>{errors.email?.message}</span>
                            </div>
                            <div  className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" {...register("password")}/>
                                <span style={{color:'red',fontFamily:'cursive'}}>{errors.password?.message}</span>
                            </div>
                             <div  className="form-group">
                                <button className="btn btn-primary" type="submit" disabled={!isValid}>
                                    {isLoading ? "Logging in..." : "Login"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {error && <h4 style={{color:'red'}}>{error.data?.message || "Login failed"}</h4>}
        </>
    )
}
export default Login