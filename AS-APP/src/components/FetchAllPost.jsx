import { useEffect, useState } from "react"
import axios from 'axios'
function FetchAllPost() {
    const [post, setPost] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resp=>setPost(resp.data))
    })
    return (
        <>
            <h3>Fetch ALL Post</h3>
            {
                post.map(posts =>
                    <div key={posts.id}>
                        <p>User ID:{posts.userID}</p>
                        <p style={{color:"red" , fontFamily:"cursive"}}  >Title :{posts.title}</p>
                        <p>Body:{posts.body}</p>
                        <p> <img src="https://r.bing.com/rp/prF6k5Dpvr9a9EgM6ALGaqfZ-rw.jpg"/></p>
                    </div>)
            }

        </>
    )
}
export default FetchAllPost