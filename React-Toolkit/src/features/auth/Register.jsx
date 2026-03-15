import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useDispatch} from "react-redux"
import { signup } from "./authSlice"

const schema = yup.object({
    name:yup.string().required("Name is required"),
    email:yup.string().required("Email is required").email("Invalid email format"),
    password:yup.string().required("Password is required").min(4, "Password must be at least 4 characters"),
    role:yup.string().required("Role is required").oneOf(["admin", "user"], "Role must be either 'admin' or 'user'")
})

function Register() {

    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({
        mode:"all",
        resolver:yupResolver(schema),
            defaultValues:{
                name:"",
                email:"",
                password:"",
                role:""
                
            }

    })
    const disPatch = useDispatch()

    const onSubmit = (data)=>{
        console.log(data)
        disPatch(signup(data))
        reset()
    }


  return (
    <>
        <h1>Product Add Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>NAME:</label>
                <input className="form-control" type="text" name="name" {...register("name")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.name?.message}</span>
            </div>
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
              <div className="form-group">
                <label>ROLE:</label>
               <select className="form-control" name="role" {...register("role")}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.role?.message}</span>
            </div>
            
            <br></br>
             <div className="form-group">
                <label></label>
                <input style={{color:"blueviolet"}} type="submit" value="Register" disabled={!isValid}/>
            </div>
        </form>
    </>
  )
}
export default Register