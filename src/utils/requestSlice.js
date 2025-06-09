import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addrequest:(state,action)=>{
            return action.payload},
        removerequest:(state,action)=>{
            const newRequest=state.filter((ele)=>ele._id!==action.payload)
            return newRequest;
        },
    }
})

export const {addrequest,removerequest}=requestSlice.actions
export default requestSlice.reducer