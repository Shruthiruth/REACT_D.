import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteBook, getBookById } from "../../API/BookApi"

function BookItem() {
    const [book, setBook] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resp = await getBookById(id)
                setBook(resp.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProduct()
    }, [id])

    const handleDelete=()=>{
        if(confirm("Are you sure? Do you want to remove this Book?"))
        {
            removeBook()

            setTimeout(()=>{
                navigate("/BookList")
            },1600)
        }
    }
    const removeBook =  async ()=>{
        try{
            const resp = await deleteBook(id)
            alert("deleted")
            setBook(resp.data)

        }
        catch(err)
        {
            console.log(err)
        }


    }
    if(!book)
    {
        return<p>Loading...</p>
    }
    return (
        
        <>
            <h2>Book Item</h2>
        {
            <div key={book.id}>

            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <button style={{color:"red"}} onClick={handleDelete}>Delete</button>

        </div>
    }
         </>
    )
   
}
export default BookItem