import { useEffect, useState } from "react"
import axios from 'axios'
import PostDetails from "./PostDetails"
import { Link } from "react-router-dom"
function FetchAllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resp=>setPosts(resp.data))
    })
    return (
        <>
            <h3>Fetch ALL Post</h3>
            {
                posts.map(post =>
                    <div key={post.id}>
                        <p>User ID:{post.userId}</p>
                        <p style={{color:"red" , fontFamily:"cursive"}}  >Title :{post.title}</p>
                        <p>Body:{post.body}</p>
                        <p><Link to={`/PostDetails/${post.id}`}><button>PostDetails</button></Link></p>
                       
                    </div>)
            }

        </>
    )
}
export default FetchAllPost