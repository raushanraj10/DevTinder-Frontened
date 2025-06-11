import axios from "axios"
import CardRequest from "./CardRequest"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch, useSelector } from "react-redux"
import { addrequest } from "./utils/requestSlice"
import { useEffect } from "react"
import Shimmer from "./Shimmer"
const Request=()=>{
    const dispatch=useDispatch()
    const requestdata=useSelector((store)=>store.request)
    // console.log(requestdata)
    const fetchRequest=async()=>{
        if(requestdata) return;
        try{
        const res=await axios.get(BASE_URL+"/user/request/recieved",{withCredentials:true})
        // console.log(res.data)
        dispatch(addrequest(res.data))
    }
    catch(err){console.log(err.message)}
    }
    useEffect(()=>{fetchRequest()},[])

    if(!requestdata){
        return(<div className="flex justify-center mt-16"><Shimmer/></div>)}
    
    if(requestdata.length===0) return(<div className="flex justify-center flex-wrap mt-8"><h1 className="text-2xl font-serif font-semibold">No Request Found</h1></div>)

  return (requestdata&&
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4 py-10">
    {requestdata.map((ele)=>(<CardRequest requestdata={ele}/>))}
    </div>
  )  
}
export default Request