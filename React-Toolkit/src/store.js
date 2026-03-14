import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counter/counterSlice'
import productSlice from './features/product/productSlice'
const store = configureStore({
    reducer:{
        counter:counterSlice,
        product:productSlice
    }
})
export default store