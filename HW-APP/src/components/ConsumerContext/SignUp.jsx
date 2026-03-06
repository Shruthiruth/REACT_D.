import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp()
{   
        const [loginForm,setLoginForm] = useState({
            email:'',
            password:'',
            name:''
        })
        const[message,setMessage] = useState('');
        const navigate = useNavigate()
        const {register} = useContext(AuthContext)

        const HandleInputChange =(event)=>{
            setLoginForm({
                ...loginForm,
                [event.target.name]:event.target.value
            })
        }

        const HandleSubmit = async(event)=>{
                event.preventDefault();
                const result = await register(loginForm.email,loginForm.password,loginForm.name);
                if(result)
                {
                    navigate("/Context/SignIn")
                }
                else
                {
                    setMessage("Registration failed")
                }
        }
    return(
        <>
            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <label>EMAIL ID:</label>
                    <input className="form-control" type="email" name="email" value={loginForm.email} onChange={HandleInputChange}/>
                </div>
                  <div className="form-group">
                    <label>PASSWORD :</label>
                    <input className="form-control" type="password" name="password" value={loginForm.password} onChange={HandleInputChange}/>
                </div>
                  <div className="form-group">
                    <label>NAME :</label>
                    <input className="form-control" type="text" name="name" value={loginForm.name} onChange={HandleInputChange}/>
                </div>
                <br></br>
                  <div className="form-group">
                    <label></label>
                    <input style={{color:"blueviolet"}} type="submit"  value="Register"/>
                </div>
                
            </form>
            {message && <b>{message}</b>}
        </>
    )
}
export default SignUp