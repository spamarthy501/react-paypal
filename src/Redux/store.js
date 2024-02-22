import { configureStore } from '@reduxjs/toolkit'
import userLoginReducer from './Reducers/userLoginSlice'


export const store = configureStore({
    reducer: {
        userLogin: userLoginReducer
    },
})