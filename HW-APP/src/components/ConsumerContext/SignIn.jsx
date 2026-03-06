import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignIn()
{   
        const [loginForm,setLoginForm] = useState({
            email:'',
            password:''
        })
        const[message,setMessage] = useState('');
        const navigate = useNavigate()
        const {login} = useContext(AuthContext)

        const HandleInputChange =(event)=>{
            setLoginForm({
                ...loginForm,
                [event.target.name]:event.target.value
            })
        }

        const HandleSubmit = async(event)=>{
                event.preventDefault();
                const result = await login(loginForm.email,loginForm.password);
                if(result)
                {
                    navigate("/User/DashBaord")
                }
                else
                {
                    setMessage("login failed")
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
                <br></br>
                  <div className="form-group">
                    <label></label>
                    <input style={{color:"blueviolet"}} type="submit"  value="Login"/>
                </div>
                
            </form>
            {message && <b>{message}</b>}
        </>
    )
}
export default SignIn