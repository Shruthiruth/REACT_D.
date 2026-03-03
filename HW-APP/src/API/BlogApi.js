import axios from 'axios'

const axiosInstance = axios.create({baseURL:"http://localhost:5002"})
export const getAllBlogs = ()=> axiosInstance.get("/blog")
export const getBlogById = (id)=> axiosInstance.get(`/blog/${id}`)
export const addBlog = (blog)=> axiosInstance.post("/blog",blog)
export const updateBlog = (blog)=> axiosInstance.put(`/blog/${blog.id}`,blog)
export const deleteBlog = (id)=> axiosInstance.delete(`/blog/${id}`)