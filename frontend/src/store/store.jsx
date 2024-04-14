import { configureStore } from "@reduxjs/toolkit";
import flixReducer from "./flixSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        flix: flixReducer,
        auth: authReducer,
    },
});

export default store;
