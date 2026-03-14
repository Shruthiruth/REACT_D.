import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useDispatch} from "react-redux"
import { addProduct } from "./productSlice"

const schema = yup.object({
    name:yup.string().required("Name is required"),
    price:yup.number().required("Price is required").positive("Price must be positive"),
    image:yup.string().required("Image URL is required").url("Invalid URL format"),
    category:yup.string().required("Category is required")
})

function AddForm() {

    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({
        mode:"all",
        resolver:yupResolver(schema),
            defaultValues:{
                name:"",
                price:"",
                image:"",
                category:""
            }

    })
    const disPatch = useDispatch()

    const onSubmit = (data)=>{
        console.log(data)
        disPatch(addProduct(data))
        reset()
    }


  return (
    <>
        <h1>Product Add Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>NAME:</label>
                <input className="form-control" type="text" name="name" {...register("name")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.name?.message}</span>
            </div>
            <div className="form-group">
                <label>PRICE:</label>   
                <input className="form-control" type="number" name="price" {...register("price")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors .price?.message}</span>
        
            </div>
             <div className="form-group">
                <label>IMAGE:</label>
                <input className="form-control" type="text" name="image" {...register("image")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.image?.message}</span>
            </div>
             <div className="form-group">
                <label>CATEGORY:</label>
                <input className="form-control" type="text" name="category" {...register("category")}/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.category?.message}</span>
            </div>
            <br></br>
             <div className="form-group">
                <label></label>
                <input style={{color:"blueviolet"}} type="submit" value="Add Product" disabled={!isValid}/>
            </div>
        </form>
    </>
  )
}
export default AddForm