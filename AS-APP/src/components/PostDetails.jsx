import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function PostDetails()
{   

    const [post,setPost] = useState(null);
    const {pid} = useParams();
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/"+pid)
        .then(resp=>setPost(resp.data))
    },[])

    return(
        <>
                <h4>Post Details</h4>
                {
                    post !== null &&
                    <>
                        <p style={{color:"red" , fontFamily:"cursive"}}  >Title :{post.title}</p>
                        <p>Body:{post.body}</p>
                        <p> <img src="https://r.bing.com/rp/prF6k5Dpvr9a9EgM6ALGaqfZ-rw.jpg"/></p>
                    </>
                }


        </>
    )
}
export default PostDetails