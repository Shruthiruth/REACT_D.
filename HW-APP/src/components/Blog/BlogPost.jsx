import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getBlogById } from "../../API/BlogApi"

function BlogPost() {
    const [blog, setBlog] = useState(null)
    const { id } = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resp = await getBlogById(id)
                setBlog(resp.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProduct()
    }, [id])




    

    if(!blog)
    {
        return<p>Loading...</p>
    }
    return (
        
        <>
            <h2>Blog Item</h2>
        {
            <div key={blog.id}>

            <p>Title: {blog.title}</p>
            <p>Content: {blog.content}</p>
        
        </div>
    }
         </>
    )
   
}
export default BlogPost