import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const hostName = "http://localhost:8000/"

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await axios.get(`${hostName}users?email=${userCredentials?.email}&&password=${userCredentials?.password}`);
        /*const request = await axios.post(`${hostName}users`, userCredentials);*/
        const response = await request.data;

        if (response[0].length > 0) {
            localStorage.setItem('user', JSON.stringify(response));
        }
        return response;
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userCredentials) => {
        const request = await axios.post(`${hostName}users`, userCredentials);
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Access Denied! Invalid Credentials';
                }
                else {
                    state.error = "Hata";
                }
            })
    }

});


export default userSlice.reducer