import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import conversationReducer from "./conversationSlice";

// const preloadedState = localStorage.getItem("reduxState") ?
//     JSON.parse(localStorage.getItem("reduxState")) : {};

const store = configureStore({
    reducer: {
        auth: authSlice,
        convo: conversationReducer,
    },
    // preloadedState,
})

// store.subscribe(() => {
//     localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

export default store;