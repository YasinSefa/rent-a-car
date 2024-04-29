import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import carReducer from './CarSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        car: carReducer,
    },
})