import { createSlice } from "@reduxjs/toolkit";

const connectSlice = createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        addconnection:(state,action)=>action.payload,
        removeconnection:()=>null
    }
})

export const {addconnection,removeconnection}=connectSlice.actions
export default connectSlice.reducer