// import axios from "axios"
import { useState,useEffect } from "react"
import { getProductById,updateProduct } from "../../API/ProductApi"
import { useNavigate, useParams } from "react-router-dom"

function EditProductForm()

{
    const [form,setForm] = useState({
            id:'',
            name:'',
            price:'',
            category:''
    
        })
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
            const fetchProduct = async () => {
                try {
                    const resp = await getProductById(id);
                    setForm(resp.data)
                }
                catch (err) {
                    console.log(err)
                }
    
            }
            fetchProduct()
        },
            [])
    
    const HandleInputChange = (event)=>{
        setForm({
            ...form,
            [event.target.name] : event.target.value
    })
    }
    
    const HandleSubmit =(event)=>{
            event.preventDefault()

           EditProduct()

            setTimeout(()=>{
                navigate("/AllProduct")
            },2000)
    }

    const EditProduct = async()=>{
        try{
            // const resp = await axios.put("http://localhost:5000/products/"+id,form)
            const resp = await updateProduct(form)
            alert("updated")
            setForm(resp.data)

            
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <h3>Edit Product</h3>
        <form onSubmit={HandleSubmit} >
                 <div>
                    <label>Id</label>
                    <input type="text" name="id" value={form.id} disabled/>
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={HandleInputChange}/>
                </div>
                 <div>
                    <label>Price</label>
                    <input type="text" name="price" value={form.price} onChange={HandleInputChange}/>
                </div>
                 <div>
                    <label>Category</label>
                    <input type="text" name="category" value={form.category} onChange={HandleInputChange}/>
                </div>
                <input type="Submit"/>
            </form>
        </>
    )
}
export default EditProductForm