import { useEffect, useState } from "react"
import { deletProduct, getProductById } from "../../API/ProductApi"
import { Link, useNavigate, useParams } from "react-router-dom"

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resp = await getProductById(id)
                setProduct(resp.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProduct()
    }, [id])

     const handleDelete=()=>{
        if(confirm("Are you sure?")){
            removeProduct();
            setTimeout(()=>{
                navigate("/AllProduct")
            },2000)
        }
     }
    const removeProduct = async()=>{
        try{   
            const resp=await deletProduct(id)
        setProduct(resp.data)
        }
        catch(err)
        {
            console.log(err)
        }
     
    }
    if(!product)
    {
        return <p>Loading...</p>
    }

    return (
        <>
            <h2>Product Detail</h2>
            {
                <div>
                    <h3>{product.name}</h3>
                    <p>Price:{product.price}</p>
                    <p>Category:{product.category}</p>
                    <p>Description:{product.description}</p>
                    <p>
                        <Link to={`/EditProduct/${product.id}`} ><button>Edit</button></Link>
                        <button onClick={handleDelete}>Delete</button>
                    </p>
                </div>
            }

        </>
    )
}
export default ProductDetails