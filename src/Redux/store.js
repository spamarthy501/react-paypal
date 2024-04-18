import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './Reducers/addToCartSlice';
import userLoginReducer from './Reducers/userLoginSlice';


export const store = configureStore({
    reducer: {
        addToCart: addToCartReducer,
        userLogin: userLoginReducer
    },
})