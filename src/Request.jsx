import axios from "axios"
import CardRequest from "./CardRequest"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch, useSelector } from "react-redux"
import { addrequest } from "./utils/requestSlice"
import { useEffect } from "react"
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

    if(!requestdata) return;
    
    if(requestdata.length===0) return(<div className="flex justify-center flex-wrap my-24"><h1 className="text-4xl font-serif font-semibold">No Request Found</h1></div>)

  return (requestdata&&
    <div className="flex flex-wrap justify-center my-24 gap-16">
    {requestdata.map((ele)=>(<CardRequest requestdata={ele}/>))}
    </div>
  )  
}
export default Request