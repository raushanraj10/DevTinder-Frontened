import { createSlice } from "@reduxjs/toolkit";

const connectSlice = createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        addconnection:(state,action)=>action.payload,
    }
})

export const {addconnection}=connectSlice.actions
export default connectSlice.reducer