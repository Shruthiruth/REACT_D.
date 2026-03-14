import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "./productSlice"
import { deleteProduct } from "./productSlice"
import { Link } from "react-router-dom"

function ProductList() {

    const { products, loading, error } = useSelector(state => state.product)
    const disPatch = useDispatch()

    useEffect(() => {
        disPatch(fetchProduct())
    }, [disPatch])

    const deleteProductHandler = (id) => {
         disPatch(deleteProduct(id))
    }

    if (loading) {
        return <h3>Loading...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }
    return (
        <>
            <h1>Product List</h1>

            {
                products.map(p =>
                    <div key={p.id}>
                    <br></br>
                        <h3 style={{ color: "red", fontFamily: "cursive" }}>{p.name}</h3>
                        <p>{p.price}</p>
                        <img src={p.image} alt={p.name} width="200px" height="200px" />
                        <p>{p.category}</p>
                        <Link to={`/product/${p.id}`}>
                            <button className="btn btn-warning">Edit</button>
                        </Link> <br></br> <br></br>
                        <button className="btn btn-primary" onClick={() => deleteProductHandler(p.id)}>
                            Delete
                        </button> 
                    </div>)
            }
        </>
    )
}
export default ProductList