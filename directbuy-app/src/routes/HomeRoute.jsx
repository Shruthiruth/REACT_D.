// import { useLocation } from "react-router-dom";
import { useAuth } from "../app/AuthProvider";
import Dashboard from "../pages/Dashboard";
import ProductList from "../features/products/productList";


function HomeRoute ()
{
    const {user,isLoading} = useAuth()
    // const location = useLocation();
     if(isLoading) return <h4>Loading....</h4>
    if(user) return <Dashboard/>
    return <ProductList/>
}

export default HomeRoute