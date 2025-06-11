import axios from "axios"
import CardConnect from "./CardConnection"
import { BASE_URL } from "./constant/BaseUrl"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addconnection } from "./utils/connectSlice"
import Shimmer from "./Shimmer"

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

    if(!connectionsdata) {
        return(<div className="flex justify-center mt-16"><Shimmer/></div>)}

    if(connectionsdata.length===0) return (<h1 className="text-center mt-8 font-serif text-2xl font-bold">No Connectons</h1>)

//    return (connectionsdata&&
//        <div className=" flex flex-wrap justify-center my-16 gap-10">
//         {/* <h1>dfg</h1> */}
//         {connectionsdata.map((ele)=><CardConnect connectionsdata={ele}/>)}
//         </div>
//     )


return (
  connectionsdata && (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-4 py-10">
      {connectionsdata.map((ele, index) => (
        <CardConnect key={index} connectionsdata={ele} />
      ))}
    </div>
  )
);


}
export default Connections