import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFlix = createAsyncThunk("getFlix", async () => {
    const request = {
        method: "GET",
    };
    const response = await fetch("/api", request);
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
