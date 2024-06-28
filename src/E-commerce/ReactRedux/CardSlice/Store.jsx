
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../CardSlice/Cardslice"
export const Store =configureStore({
    reducer:{
        Cart:cartReducer
    }
})