import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counter/counterSlice'
import productSlice from './features/product/productSlice'
import authSlice from './features/auth/authSlice'
const store = configureStore({
    reducer:{
        counter:counterSlice,
        product:productSlice,
        auth:authSlice
    }
})
export default store