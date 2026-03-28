import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { useAuth } from "../../app/AuthProvider"
import { useAddProductMutation } from "./productsApi"
import toast from "react-hot-toast"

const schema = yup.object({
    productName: yup.string().required('productname is required'),
    price: yup.number().min(5, 'Minimum price should be 5').required('price is required'),
    description: yup.string().required('description is required'),
    category: yup.string().required('category is required'),
    origin: yup.string().required('origin is required'),
    quantity: yup.number().required('quantity is required'),
    coverImage: yup
        .mixed()
        .required('Image is required')



})

function AddProduct() {



    const { register, handleSubmit, reset, formState: { isValid, errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    })

    const { user } = useAuth()
    console.log(user)


    const [addProduct, { isLoading: isAdding }] = useAddProductMutation()

    const convertToBase64 = (file) => {

        return new Promise((resolve, reject) => {

            const reader = new FileReader();
            reader.readAsDataURL(file)

            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    const onAdd = async (data) => {
        try {
            if (!user || user.role !== 'ADMIN') {
                toast.error('only admin can add product')
                return;
            }

            const base64Image = await convertToBase64(data.coverImage[0])
            const payload = {
                productName: data.productName,
                price: data.price,
                description: data.description,
                category: data.category,
                origin: data.origin,
                quantity: data.quantity,
                coverImage: base64Image,
                userId: user.userId
            }
            console.log('payload being sent', payload)

            await addProduct(payload).unwrap()
            toast.success('product added successfully')
            reset()
        }
        catch (err) {
            console.log(err)
            toast.error('product failed to add')

        }
    }


    return (
        <>

            <form onSubmit={handleSubmit(onAdd)}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Product Name</label>
                                <input className="form-control" type="text" {...register("productName")} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.productname?.message}</span>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input className="form-control" type="number" {...register('price')} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.price?.message}</span>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input className="form-control" type="text" {...register('description')} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.description?.message}</span>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input className="form-control" type="text" {...register('category')} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.category?.message}</span>
                            </div>
                            <div className="form-group">
                                <label>Origin</label>
                                <input className="form-control" type="text" {...register('origin')} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.origin?.message}</span>
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input className="form-control" type="number" {...register('quantity')} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.quantity?.message}</span>
                            </div>
                            <div className="form-group">
                                <label> Image</label>
                                <input className="form-control" type="file" {...register('coverImage')} />
                                <span style={{ color: 'red', fontFamily: 'cursive' }}>{errors.coverImage?.message}</span>
                            </div> <br></br>
                            <div className="form-group">
                                <label></label>
                                <button type="submit" className="btn btn-warning" disabled={!isValid} >{isAdding ? 'Adding' : 'Add Product'} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
export default AddProduct