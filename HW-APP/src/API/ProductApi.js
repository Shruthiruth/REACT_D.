import axios from 'axios'

const axiosInstance = axios.create({baseURL:"http://localhost:5000"})
export const getAllProducts = ()=> axiosInstance.get("/products")
export const getProductById = (id)=> axiosInstance.get(`/products/${id}`)
export const addProducts = (product)=> axiosInstance.post("/products",product)
export const updateProduct = (product)=> axiosInstance.put(`/products/${product.id}`,product)
export const deletProduct = (id)=> axiosInstance.delete(`/products/${id}`)