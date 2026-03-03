import { useState } from "react"
import { addProducts } from "../../API/ProductApi"
// import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddProductForm()
{   
    const [form,setForm] = useState({
        name:'',
        price:'',
        category:''

    })
    const navigate = useNavigate()
    const HandleInputChange = (event)=>{
        setForm({
            ...form,
            [event.target.name] : event.target.value
    })
    }

    const HandleSubmit =(event)=>{
            event.preventDefault()

            const payload={
                name : form.name,
                price : form.price,
                category : form.category

        
            }
                addProduct(payload)

            setTimeout(()=>{
                navigate("/AllProduct")
            },2000)
    }

    const addProduct = async( payload)=>{
        try{
            // const resp = await axios.post("http://localhost:5000/products",payload)
            const resp = await addProducts(payload)
            setForm(resp.data)
        }
        catch(err)
        {
            console.log(err)
        }

    }
    return(
        <>
            <form onSubmit={HandleSubmit} >
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
export default AddProductForm