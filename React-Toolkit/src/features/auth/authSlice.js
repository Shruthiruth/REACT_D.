import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk(
    'auth/register',
    async (newUserData) => {
        const resp = await axios.post('http://localhost:5007/register', newUserData);
        return resp.data;
    }
)

export const signin = createAsyncThunk(
    'auth/login',
    async(data,thunkApi)=>{
        try{
            const resp = await axios.post('http://localhost:5007/login', data);
            localStorage.setItem("user", JSON.stringify(resp.data));
             return resp.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
)

const userData = localStorage.getItem("user")
console.log("User data from localStorage:", userData);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [],
        error: null,
        loading: false,
        loggedInUser: userData ? userData.user : null,
        token: userData ? userData.accesToken : null

    },
    reducers: {
            logout: (state) => {
                state.loggedInUser = null;
                state.token = null;
                localStorage.removeItem("user");
            }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
        })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signin.pending, (state) => {
                state.loading = true;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedInUser = action.payload.user;
                state.token = action.payload.accesToken;
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
