
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "./productsApi";

function ProductDetails() {

    const { id } = useParams()

    const { data: product, isLoading, error } = useGetProductByIdQuery(id)
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error fetching product details</p>
    return (
        <div>
            <div className="container mt-4">
                <div className="card p-3 shadow-sm">
                    <h3>Product: {product.productName}</h3>
                    <p>Price: ${product.price}</p>
                    <img
                        src={
                            product?.coverImage
                                ? `http://localhost:8081/api/files/${product.coverImage}`
                                : "https://via.placeholder.com/200?text=No+Image"
                        }
                        alt={product?.productName}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Origin: {product.origin}</p>
                    <p>Quantity: {product.quantity}</p>
                       
                </div>
            </div>
                        
        </div>
    )
}
export default ProductDetails