import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        fetchCarsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCarsSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.cars = action.payload;
        },
        fetchCarsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export const { setCars, fetchCarsRequest, fetchCarsSuccess, fetchCarsFailure } = carSlice.actions;
export default carSlice.reducer;