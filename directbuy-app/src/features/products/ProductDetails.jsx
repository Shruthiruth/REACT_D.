
import {  useParams ,Link} from "react-router-dom";
import { useDeleteProductByIdMutation, useGetProductByIdQuery } from "./productsApi";
import { useAuth } from "../../app/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()

    const { data: product, isLoading, error } = useGetProductByIdQuery(id)
    const [deleteProductById, { isLoading: isDeleting }] = useDeleteProductByIdMutation()


    const handleDelete = async () => {
        if (!window.confirm('are you sure do you want to delete')) return;

        try {
            await deleteProductById(id).unwrap()
            toast.success('deleted successfully')
            navigate('/products')
        }
        catch (err) {
            console.log(err)
            toast.error('deleted failed')

        }
    }

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


{
    user?.role === 'ADMIN' &&
    <div> 
        <Link to={`/product/edit/${productData.productId}`}>
            <button className="btn btn-primary">Edit</button>
        </Link> &nbsp;
        <button onClick={handleDelete} className="btn btn-primary">
            {isDeleting ? 'Deleting' : 'Delete'}
        </button>
    </div>
}
        </div>


    )
}
export default ProductDetails