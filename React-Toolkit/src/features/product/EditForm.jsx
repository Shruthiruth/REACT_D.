import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useDispatch} from "react-redux"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateProduct } from "./productSlice"

const schema = yup.object({
    name:yup.string().required("Name is required"),
    price:yup.number().required("Price is required").positive("Price must be positive"),
    image:yup.string().required("Image URL is required").url("Invalid URL format"),
    category:yup.string().required("Category is required")
})

function EditForm() {
    const {products,loading,error} = useSelector(state=>state.product)
    const {id} = useParams()
    const navigate = useNavigate()

    const {register,handleSubmit,formState:{errors,isValid},setValue} = useForm({
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

    const editProductHandler = (data)=>{
        disPatch(updateProduct({id,data}))
        navigate("/product/list")
    }

    useEffect(()=>{
        if(id){
            const product = products.find(p => p.id == id)
            if(product){
                setValue("id",product.id)
                setValue("name",product.name)
                setValue("price",product.price)
                setValue("image",product.image)
                setValue("category",product.category)
            }
        }
    },[id,products,setValue])

    if(loading){
        return <h3>Loading...</h3>
    }

    if(error){
        return <h3>{error}</h3>
    }


  return (
    <>
        <h1>Product Edit Form</h1>
        <form onSubmit={handleSubmit(editProductHandler)}>
        <div className="form-group">
                <label>Id:</label>
                <input className="form-control" type="text" name="name" {...register("id")} disabled/>
                <span style={{color:"royalblue",fontFamily:"-moz-initial"}}>{errors.id?.message}</span>
            </div>
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
                <input style={{color:"blueviolet"}} type="submit" value="Edit Product" disabled={!isValid}/>
            </div>
        </form>
    </>
  )
}
export default EditForm