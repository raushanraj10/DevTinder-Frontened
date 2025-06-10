import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "./constant/BaseUrl";
import { addfeed } from "./utils/feedSlice";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserCard from "./userCard"

const Feed =()=>{
    // const Navigate=useNavigate()
    const feedselector=useSelector((store)=>store.feed)
    const userdata=useSelector((store)=>store.user)
    // console.log(feedselector)
    const dispatch=useDispatch();

     const feedloder=async()=>{
        if(feedselector) return;
        try{
        const res=await axios.get(BASE_URL+"/feed",{withCredentials:true})
        // console.log(res.data.data)
        dispatch(addfeed(res.data))
        // if(userdata)
        //     Navigate("/feed")
    }
        catch(err){
            console.log(err.message)
             return (<h1 className="text-center text-2xl font-serif font-bold">{"Error: "+err.message}</h1>)
            // Navigate("/login")
        } 
     }
   
    // console.log(selector.type());

    
    useEffect(()=>{feedloder()},[]);
   
    if(!feedselector)
        return;

     
    if(feedselector.length===0) return (<h1 className="my-10 text-center font-serif font-bold text-2xl">All Feed U 
    Already Visited</h1>)

    return(
        <div className="flex justify-center my-16 flex-wrap">
            <UserCard feeddata={feedselector[0]} />
        </div>  
    )
}
export default Feed