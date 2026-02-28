import React from "react";

class LoginForm extends React.Component{

    constructor()
    {
        super();
        this.state={
            uname : '',
            pwd : ''
        }
    }
    HandlePassword=(event)=>{
        this.setState({
            pwd:event.target.value
        })
    }
    HandleUsername=(event)=>{
        this.setState({
            uname:event.target.value
        })
    }
    HandleSubmit=()=>{
       console.log("form submitted");
       if(this.state.pwd === "1234"){
        alert("welcome"+this.state.uname)
       }
       else
       {
        alert("login failed")
       }
       
    }
    render()
    {
        return(
            <>
                <div>
                    <label>UserName</label>
                    <input  type="text" name="uname" id="uname" value={this.state.uname} onChange={this.HandleUsername}/>
                </div>
                <div>
                    <label>Password</label>
                    <input  type="text" name="pwd" id="pwd" value={this.state.pwd} onChange={this.HandlePassword}/>
                </div>
                <button onClick={this.HandleSubmit}>Submit</button>
            </>
        )
    }
}
export default LoginForm