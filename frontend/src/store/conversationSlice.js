import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedConversation: null,//selected user to chat with - stores user object
    messages:[],
}

const conversationSlice = createSlice({
    name: "convo",
    initialState,
    reducers: {
        setSelectedConversation: (state, action) => {
            state.selectedConversation = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        }
    }
});

export const { setSelectedConversation,setMessages } = conversationSlice.actions;

export default conversationSlice.reducer;