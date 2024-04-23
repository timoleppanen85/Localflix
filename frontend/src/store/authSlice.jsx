import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const url = backendUrl + "/api/user";

export const loginUser = createAsyncThunk(
    "login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch(url + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.status === 200) {
                const userData = await response.json();
                localStorage.setItem("user", JSON.stringify(userData));
                return userData;
            } else {
                return rejectWithValue("Invalid username or password");
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logoutUser = createAsyncThunk("logout", async () => {
    try {
        const response = await fetch(url + "/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            localStorage.removeItem("user");
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

if (localStorage.getItem("user")) {
    initialState.isLogged = true;
    initialState.user = JSON.parse(localStorage.getItem("user"));
}

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
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLogged = false;
            state.user = {};
        });
        // Logout user
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLogged = false;
            state.user = {};
        });
    },
});

export default authSlice.reducer;
