import {Link}  from 'react-router-dom'

function Home()
{
    return(
        <>
            <Link to='/counter'>Counter Link</Link> <br></br>
            <Link to='/product/list'>ProductList Link</Link> <br></br>
                <Link to='/product/add'>Add Product Link</Link> <br></br>
        </>
    )
}
export default Home