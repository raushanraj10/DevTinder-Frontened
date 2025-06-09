import axios from "axios"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch, useSelector } from "react-redux"
import { removerequest } from "./utils/requestSlice"

const CardRequest=({requestdata})=>{
    // console.log(requestdata.fromuserId.firstName)
    const {_id,fromuserId}=requestdata
    const {firstName,lastName,age,about,skills,photourl}=fromuserId
    const dispatch=useDispatch()
    // const requests=useSelector((store)=>store.request)
    const handlerequest=async (status,requestId)=>{
        try{
            console.log(status)
    const res=await axios.post(BASE_URL+"/request/review/"+status+"/"+requestId,{},{withCredentials:true})
    console.log(res)
    dispatch(removerequest(_id));
}
    catch(err){console.log(err)}
}
    return (
        <div className=" bg-slate-700 w-72 h-96 rounded-2xl">
            <div className="w-72 h-48 bg-orange-200 rounded-2xl">
                <img className="w-72 h-48 rounded-2xl" src={photourl}></img>
            </div>
            <div className="">
                
                <div><h2 className=" text-center text-pretty text-lg my-2">{firstName} {lastName}</h2></div>
                <div>
                <p className="mx-2 my-2 w-64">About - {about}</p>
                <p className="mx-2 my-2 w-64">Skills- {skills.join(", ")}</p>
                <p className=" mx-2 my-2 w-64">Age- {age}</p>
                </div>
                <div className="my-4 flex justify-center gap-5 ">
                    <button  onClick={()=>handlerequest("rejected",_id)} className="bg-red-500 w-16 h-8 rounded-lg font-bold text-black">Reject</button>
                    <button onClick={()=>handlerequest("accepted",_id)}className="bg-green-500 w-16 h-8 rounded-lg font-bold text-black">Accept</button>
                </div>
            </div>
        </div>
    )
}
export default CardRequest