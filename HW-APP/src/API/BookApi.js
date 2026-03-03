import axios from 'axios'

const axiosInstance = axios.create({baseURL:"http://localhost:5001"})
export const getAllBooks = ()=> axiosInstance.get("/books")
export const getBookById = (id)=> axiosInstance.get(`/books/${id}`)
export const addBooks = (book)=> axiosInstance.post("/books",book)
export const updateBook = (book)=> axiosInstance.put(`/books/${book.id}`,book)
export const deleteBook = (id)=> axiosInstance.delete(`/books/${id}`)