import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    export const addToCartProducts = createAsyncThunk(
        'cart/addToCartProducts',
        async (product) => {
            const resp = await axios.post('http://localhost:5007/carts', product);
            return resp.data;
        }
    )
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        error: null,
        loading: false
    },
    reducers: {
        
        },
    extraReducers: (builder) => {   
            builder.addCase(addToCartProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToCartProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addToCartProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;