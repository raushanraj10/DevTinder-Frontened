import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import feedReducer from "./feedSlice";
import connectReducer from "./connectSlice"
import requestReducer  from "./requestSlice";



const appStore=configureStore({
    reducer:
    {
        user:userReducer,
        feed:feedReducer,
        connections:connectReducer,
        request:requestReducer,
    }
})
export default appStore