import React from "react";
import axios from 'axios'

class FetchAllPost extends React.Component{
    constructor()
    {
        super();
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resp=> this.setState({
            posts : resp.data
        }))
    }
    render()
    {
        return(
            <>
                <h2>All posts</h2>
                {
                    this.state.posts.map(post=>
                    <div key={post.id}>
                          
                            <p>  {post.userId} </p>
                             <p>  {post.title} </p>
                    </div>
                    )
                }
            </>
        )
    }
}
export default FetchAllPost