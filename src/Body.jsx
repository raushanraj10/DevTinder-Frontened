import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch, useSelector } from "react-redux"
import { addUser, } from "./utils/userSlice"
import { useEffect } from "react"

const Body=()=>{
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    
    const userData=useSelector((store)=>store.user)
    // console.log(userData)

    const fetchUser=async ()=>{
        if(userData) return;
        try{
        const res=await axios.get(BASE_URL+"/profile/view",{withCredentials:true});
        dispatch(addUser(res.data));
    }catch(err){
        if(err.status===401)
        Navigate("/login")
        // console.log(err);
    }
    }
    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex-grow"><Outlet/></div>
            <Footer/>
        </div>
    )
}
export default Body