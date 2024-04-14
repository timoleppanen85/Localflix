import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "/api/user";

export const loginUser = createAsyncThunk("login", async (data) => {
    try {
        const response = await fetch(url + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const userData = await response.json();
            return userData;
        }
    } catch (error) {
        return error;
    }
});

export const logoutUser = createAsyncThunk("logout", async () => {
    try {
        const response = await fetch(url + "/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return;
        }
    } catch (error) {
        return error;
    }
});

const initialState = {
    isLogged: false,
    user: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login user
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLogged = true;
            state.user = action.payload;
        });
        // Logout user
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLogged = false;
            state.user = {};
        });
    },
});

export default authSlice.reducer;
