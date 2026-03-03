import { useEffect, useState } from "react"
import { getAllBlogs } from "../../API/BlogApi"
import { Link } from "react-router-dom"

function BlogList()
{   const [blogs,setBlogs] = useState([])

    useEffect(()=>{

        const fetchBlogs= async()=>{
        try{
            const resp=await getAllBlogs()
            setBlogs(resp.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
        fetchBlogs()
    },[])
    
    return(
        <div>
            <h2>Blog List</h2>
            {
                blogs.map(b=>
                <div key={b.id}>
                   
                <Link to={`/BlogPost/${b.id}`} ><button style={{color:"chocolate",fontFamily:"cursive"}}>{b.title}</button></Link>
                </div>)
            }
            <br></br>    <br></br>
                    <Link to="/NewBlogPost"><button>Create Post</button></Link>
        </div>
    )
}
export default BlogList