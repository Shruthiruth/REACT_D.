import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addBlog } from "../../API/BlogApi"

function NewBlogPost()
{
    const[form,setForm] = useState({
        
        title:'',
        content:'',
       
    })
    const navigate = useNavigate()
    const HandleInputChange =(event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const HandleSubmit=(event)=>{
        event.preventDefault()
        const payload = {
            title:form.title,
            content:form.content
        }
        addBlogPost(payload)

        setTimeout(()=>{
            navigate("/BlogList")
        },2000)
    }
    const addBlogPost = async (payload)=>{
        try{
            const resp = await addBlog(payload)
            alert("Blog Post added")
            setForm(resp.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return(
        <div>
            <h2>New Blog Post</h2>
            <form onSubmit={HandleSubmit}>
                <div>
                <label>Blog Title:</label>
                 <input type="text" name="title" value={form.title} onChange={HandleInputChange} required placeholder="Blog Title"/>
                </div>
                <br></br>
                <div>
                <label>Blog Content:</label>
                <textarea name="content" value={form.content} onChange={HandleInputChange} required placeholder="Blog Content" rows="5" cols="30"/>
                 {/* <input type="text" name="content" value={form.content} onChange={HandleInputChange} required placeholder="Blog Content"/> */}
                </div>
                
                <input type="submit" value="Blog Post"/>

                <Link to="/BlogList"><button>Back to Home</button></Link>
               
            </form>
            
        </div>
    )
}
export default NewBlogPost