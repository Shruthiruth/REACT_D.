import {useState } from "react"

function ContactForm()
{   
    const [formData,setFormDate] = useState({
        Username :'',
        Password : '',
        Email : '',
        Mobile_No : ''
    })
    const [errors,setErrors] = useState({})

    const validate =()=>{
        const errObj ={};
        if(!formData.Username)
        {
            errObj.Username = "User Name is required"
        }
          if(!formData.Password)
        {
            errObj.Password = "Password is required"
        }

        setErrors(errObj);
        return Object.keys(errObj).length === 0;
    }

    const HandleInputChange=(event)=>{
        setFormDate({
            ...formData,
            [event.target.name]:event.target.value
    })
    }
    const HandleSubmit=(event)=>{
        event.preventDefault();
        if(validate())
        {
            console.log(formData)
        }
    }

    return(
        <><h3>Contact Form</h3>
        <form onSubmit={HandleSubmit}>
            <div>
            <label>UserName</label>
            <input name="Username" id="Username" value={formData.Username} onChange={HandleInputChange}/>
            <span style={{color:"red"}}>{errors.Username}</span>
            </div>
            <div>
            <label>Password</label>
            <input name="Password" id="Password" value={formData.Password} onChange={HandleInputChange}/>
               <span style={{color:"red"}}>{errors.Password}</span>
            </div>
            <div>
            <label>Email Id</label>
            <input name="Email" id="Email" value={formData.Email} onChange={HandleInputChange}/>
            </div>
            <div>
            <label>Mobile No</label>
            <input name="Mobile_No" id="Mobile_No" value={formData.Mobile_No} onChange={HandleInputChange}/>
            </div>
            <input type="submit" />
            </form>
        </>
    )
}
export default ContactForm