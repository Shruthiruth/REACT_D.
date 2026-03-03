import {Link} from 'react-router-dom'

function Home()
{
    return(
        <>
            <Link to="/Cart">Cart Link</Link> <br></br>

            <Link to="/AllProduct">Products Link</Link>
            
        </>
    )
}
export default Home