
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "./productsApi";

function ProductDetails() {

    const { id } = useParams()

    const { data: product, isLoading, error } = useGetProductByIdQuery(id)
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error fetching product details</p>
        const productData = product?.data
    return (
        <div>
            <div className="container mt-4">
                <div className="card p-3 shadow-sm">
                    <h3>Product: {productData?.productName}</h3>
                    <p>Price: ${productData?.price}</p>
                    <img
                        src={`${productData?.coverImage}`}
                        alt={productData?.productName}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <p>Description: {productData?.description}</p>
                    <p>Category: {productData?.category}</p>
                    <p>Origin: {productData?.origin}</p>
                    <p>Quantity: {productData?.quantity}</p>
                       
                </div>
            </div>
                        
        </div>
    )
}
export default ProductDetails