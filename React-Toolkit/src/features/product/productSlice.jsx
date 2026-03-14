import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProduct = createAsyncThunk(
    "product/productlist",
    async () => {
        const resp = await axios.get(" http://localhost:5007/products")
        return resp.data
    }
)

export const deleteProduct = createAsyncThunk(
    "product/deleteproduct",
    async (id) => {
        await axios.delete(`http://localhost:5007/products/${id}`)
        return id
    }
)
export const addProduct = createAsyncThunk(
    "product/addproduct",
    async (productData) => {
        const resp = await axios.post("http://localhost:5007/products", productData)
        return resp.data
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, data }) => {
        const resp = await axios.put(`http://localhost:5007/products/${id}`, data)
        return resp.data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products = state.products.filter(p => p.id !== action.payload)
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message

            })
            .addCase(addProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(action.payload)
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(updateProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false

                const index = state.products.findIndex(p => p.id === action.payload.id)
                if (index !== -1) {
                    state.products[index] = action.payload
                }

            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})
export default productSlice.reducer