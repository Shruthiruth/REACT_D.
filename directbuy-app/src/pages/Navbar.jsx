// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from '../features/auth/Logout'
import { useAuth } from '../app/AuthProvider'
// import { baseApi } from '../app/baseApi'
function Navbar() {
    const {data,isLoading} = useAuth()

  // const dispatch= useDispatch()
  // const navigate = useNavigate()
  // const onLogout = async () => {
  //         try {
  //             await Logout().unwrap()
  //             dispatch(baseApi.util.resetApiState())
  //             navigate('/login')
  //         }
  //         catch(err) {
  //             console.error(err)
  //         }
  //     }
  const user=data?.data
  if(isLoading) return <h4>Loading..</h4>
  return (
    <>

      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* <!-- Brand --> */}
        <Link className="navbar-brand" to="/">DirectBuy</Link>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/products'>Products</Link>
            </li>
            {user &&
             <li className="nav-item">
              <Link className="nav-link" to='/dashboard'>Dashboard</Link>
            </li>}
             {user &&
             <li className="nav-item">
              <Link className="nav-link" to='/cart'>My Cart</Link>
            </li>}
            {user &&
             <li className="nav-item">
              <Link className="nav-link" to='/orders'>My Orders</Link>
            </li>}
           
            {!user && <li className="nav-item">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>}
            {/* {!user &&
            <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>} */}
            {user &&
             <li className="nav-item">
              <Link className="nav-link" to='/logout'>Logout</Link>
            </li>}
           

          </ul>
        </div>
      </nav>


    </>
  )

}
export default Navbar