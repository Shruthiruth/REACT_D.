import {  useState } from "react"
import { addBooks } from "../../API/BookApi"
import { useNavigate } from "react-router-dom"

function BookForm()
{
    const[form,setForm] = useState({
        
        title:'',
        author:'',
        year:''
    })
    const navigate = useNavigate()
    const HandleInputChange =(event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const HandleSubmit=(event)=>{
        event.preventDefault()
        const payload = {
            title:form.title,
            author:form.author,
            year:form.year
        }
        addBook(payload)

        setTimeout(()=>{
            navigate("/BookList")
        },2000)
    }
    const addBook = async (payload)=>{
        try{
            const resp = await addBooks(payload)
            alert("Book added")
            setForm(resp.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return(
        <div>
            <h2>Book Catelog</h2>
            <form onSubmit={HandleSubmit}>
                <div>
                <label>Book Title</label>
                 <input type="text" name="title" value={form.title} onChange={HandleInputChange} required placeholder="Book Title"/>
                </div>
                <div>
                <label>Book Author</label>
                 <input type="text" name="author" value={form.author} onChange={HandleInputChange} required placeholder="Book Author"/>
                </div>
                <div>
                <label>Book Year</label>
                 <input type="text" name="year" value={form.year} onChange={HandleInputChange}/>
                </div>
                <input type="submit"/>
               
            </form>
            
        </div>
    )
}
export default BookForm