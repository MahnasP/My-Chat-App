import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const preloadedState = localStorage.getItem("reduxState") ?
    JSON.parse(localStorage.getItem("reduxState")) : {};

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    preloadedState,
})

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;