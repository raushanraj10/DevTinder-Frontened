import axios from "axios"
import CardConnect from "./CardConnection"
import { BASE_URL } from "./constant/BaseUrl"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addconnection } from "./utils/connectSlice"

const Connections=()=>{
    // const user=useSelector((store)=>store.user)
    const dispatch=useDispatch();
    const connectionsdata=useSelector((store)=>store.connections)
    // console.log(connectionsdata)

    // console.log(user)
    const connect=async ()=>{
        if(connectionsdata) return;
        try{
        const res=await axios.get(BASE_URL+"/user/review/connection",{withCredentials:true})
        // console.log(res.data)
        dispatch(addconnection(res.data))
      }
         catch(err){console.log(err.message)}
    }
    useEffect(()=>{connect()},[]);

    if(!connectionsdata) return;

    if(connectionsdata.length===0) return (<h1 className="text-center my-16 font-serif text-xl font-bold">No Connectons</h1>)

    return (connectionsdata&&
       <div className="  flex justify-center my-16 gap-16 flex-wrap">
        {/* <h1>dfg</h1> */}
        {connectionsdata.map((ele)=><CardConnect connectionsdata={ele}/>)}
       </div>
    )

}
export default Connections