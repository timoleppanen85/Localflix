import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const getFlix = createAsyncThunk("getFlix", async () => {
    const request = {
        method: "GET",
    };
    const response = await fetch(backendUrl + "api", request);
    const list = await response.json();
    return list;
});

const initialState = {
    list: [],
};

const flixSlice = createSlice({
    name: "flix",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFlix.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});

export default flixSlice.reducer;
