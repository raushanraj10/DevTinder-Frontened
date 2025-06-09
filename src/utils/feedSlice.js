import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
            // console.log("data"+action.payload)
            return action.payload},
        removeUserFromFeed:(state,action)=>{
            const newfeed=state.filter((ele)=>ele._id!==action.payload)
            return newfeed;
        },
    }
})

export const {addfeed,removeUserFromFeed}=feedSlice.actions
export default feedSlice.reducer