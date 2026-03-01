import { Link } from "react-router-dom";

function Home()
{
  return(

    <>
    <h3>My home</h3>
    <p><Link to='./Counter'>Counter Link</Link></p>
        <p><Link to='./FetchAllPost'>FetchAllPost Link</Link></p>
        
    </>
  )
}
export default Home