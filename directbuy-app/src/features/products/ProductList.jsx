import { useGetProductsQuery } from "./productsApi"
import { Link } from 'react-router-dom'

const baseApi = import.meta.env.VITE_API_URL
function ProductList() {

    const { data: products, isLoading, error } = useGetProductsQuery()

    if (isLoading) return <h4>Loading...</h4>
    if (error) return <h4>{error?.data?.message || "Error loading products"}</h4>

    return (

        <>
            <br></br>
            <div className="container">
                <div className="row g-4">

                    {
                        products.content?.map(p =>
                            <div key={p.productId} className="card col-md-6 mb-3 h-100 shadow-sm" style={{ width: "500px" }}>
                                <h3 className="card-title">{p.productName}</h3>
                                <p className="card-text">${p.price}</p>
                                <img className="card-img-top" src={`${baseApi}/files/${p.coverImage}`} alt={p.productName} width='200' style={{ height: "200px", objectFit: "cover" }} />
                                <Link className="card-link btn btn-primary stretched-link" to={`/product/${p.productId}`}>View</Link> <br></br>
                            </div>)
                    }


                </div>
            </div>



        </>
    )
}
export default ProductList