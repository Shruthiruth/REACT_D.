import { useEffect, useState } from "react"
import { getAllBooks } from "../../API/BookApi"
import { Link } from "react-router-dom"

function BookList()
{   const [books,setBooks] = useState([])

    useEffect(()=>{

        const fetchBooks= async()=>{
        try{
            const resp=await getAllBooks()
            setBooks(resp.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
        fetchBooks()
    },[])
    
    return(
        <div>
            <h2>Book List</h2>
            {
                books.map(b=>
                <div key={b.id}>
                    <p style={{color:"chocolate",fontFamily:"cursive"}}>{b.title}</p>
                    <p>Author: {b.author}</p>
                    <Link to={`/BookItem/${b.id}`} ><button>View Book Details</button></Link>
                </div>)
            }
            <br></br>    <br></br>
                    <Link to="/BookForm"><button>Add New Book</button></Link>
        </div>
    )
}
export default BookList