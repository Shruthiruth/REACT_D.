import { useEffect, useState } from "react"
import { getAllProducts } from "../../API/ProductApi"
import { Link } from "react-router-dom"

function FetchAllProduct() {
    const [products, setProducts] = useState([])



    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resp = await getAllProducts();
                setProducts(resp.data)
            }
            catch (err) {
                console.log(err)
            }

        }
        fetchProduct()
    },
        [])


    return (
        <>
            <h3>ALL PRODUCT</h3>
            {
                products.map(p =>
                    <div key={p.id}>
                        <h3>{p.name}</h3>
                        <p>Price:{p.price}</p>
                        <p>Category:{p.category}</p>
                        <Link to={`/PDetails/${p.id}`}><button>View</button></Link>
                       
                    </div>
                    
                )
                
            }
            <br></br>
             <Link to='/AddProduct'><button>Add Product</button></Link>
        </>
    )
}
export default FetchAllProduct