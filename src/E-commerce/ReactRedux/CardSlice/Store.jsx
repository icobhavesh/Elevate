
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CardSlice/Cardslice';
import searchReducer from '../SearchSlice/SearchSlice';

export const Store = configureStore({
    reducer: {
        Cart: cartReducer,
        Search: searchReducer,
    },
});
// import { configureStore } from "@reduxjs/toolkit"
// import cartReducer from "../CardSlice/Cardslice"
// import  searchReducer from "../SearchSlice/SearchSlice"
// export const Store =configureStore({
//     reducer:{
//         Cart:cartReducer,
//         Search: searchReducer,
//     }
// })