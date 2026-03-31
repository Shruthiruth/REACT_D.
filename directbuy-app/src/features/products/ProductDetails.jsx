
import {  useParams ,Link} from "react-router-dom";
import { useDeleteProductByIdMutation, useGetProductByIdQuery } from "./productsApi";
import { useAuth } from "../../app/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddToCartMutation } from "../cart/cartApi";
import { useForm } from "react-hook-form";

function ProductDetails() {

    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    const {register,handleSubmit,reset,formState:{errors}} = useForm({
        mode:'all',
        defaultValues:{quantity:1}
    })

    const { data: product, isLoading, error } = useGetProductByIdQuery(id)
    const [deleteProductById, { isLoading: isDeleting }] = useDeleteProductByIdMutation()
    const [addToCart,{isLoading:isAdding}] = useAddToCartMutation()


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


    const onAddCart = async(formData)=>{
        try{
             await addToCart({
                productId:product?.data?.productId,
                quantity:formData.quantity
             }).unwrap()
             toast.success('Product added to cart')
             reset({quantity:1})
        }
        catch(err)
        {

            console.log(err)
            toast.error('product failed to add to cart')

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

{
    user && user?.role !== 'ADMIN' ?
    <form onSubmit={handleSubmit(onAddCart)}>
         <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div>
                        <label>Quantity</label>
                        <input type="number" {...register('quantity',{required:'quantity is required',min:{value:1,message:'Minimum 1 quantity'}})}/>
                        <span style={{color:'blue',fontFamily:'cursive'}}>{errors.quantity?.message}</span>
                    </div>
                    <br/>
                    <div>
                        <button className="btn btn-primary" type="submit">{isAdding?'Adding':'Add To Cart'}</button>
                    </div>
                </div>
            </div>
         </div>
    </form>
    :
    !user && <button onClick={()=>navigate('/login')}>Sign in to Add Cart</button>
}
        </div>


    )
}
export default ProductDetails