import { Link } from "react-router-dom"

function Navigation()
{
    return(
        <div>
            <h2>Blog App</h2> 
            <Link to="/BlogList">Home</Link> <br></br>
            <Link to="/NewBlogPost"></Link>
        </div>
    )   
}
export default Navigation