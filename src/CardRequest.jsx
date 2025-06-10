// import axios from "axios"
// import { BASE_URL } from "./constant/BaseUrl"
// import { useDispatch, useSelector } from "react-redux"
// import { removerequest } from "./utils/requestSlice"

// const CardRequest=({requestdata})=>{
//     // console.log(requestdata.fromuserId.firstName)
//     const {_id,fromuserId}=requestdata
//     const {firstName,lastName,age,about,skills,photourl}=fromuserId
//     const dispatch=useDispatch()
//     // const requests=useSelector((store)=>store.request)
//     const handlerequest=async (status,requestId)=>{
//         try{
//             console.log(status)
//     const res=await axios.post(BASE_URL+"/request/review/"+status+"/"+requestId,{},{withCredentials:true})
//     console.log(res)
//     dispatch(removerequest(_id));
// }
//     catch(err){console.log(err)}
// }
//     return (
//         <div className=" bg-slate-700 w-96 h-[500px] rounded-3xl">
//             <div className="w-96 h-72 bg-orange-200 rounded-2xl">
//                 <img className="w-96 h-72 rounded-2xl" src={photourl}></img>
//             </div>
//             <div className="">
                
//                 <div><h2 className=" text-center text-pretty text-lg my-2">{firstName} {lastName}</h2></div>
//                 <div>
//                 <p className="mx-2 my-2 w-64">About - {about}</p>
//                 <p className="mx-2 my-2 w-64">Skills- {skills.join(", ")}</p>
//                 <p className=" mx-2 my-2 w-64">Age- {age}</p>
//                 </div>
//                 <div className="my-4 flex justify-center gap-5 ">
//                     <button  onClick={()=>handlerequest("rejected",_id)} className="bg-red-500 w-16 h-8 rounded-lg font-bold text-black">Reject</button>
//                     <button onClick={()=>handlerequest("accepted",_id)}className="bg-green-500 w-16 h-8 rounded-lg font-bold text-black">Accept</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default CardRequest





import axios from "axios"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch, useSelector } from "react-redux"
import { removerequest } from "./utils/requestSlice"

const CardRequest = ({ requestdata }) => {
    const { _id, fromuserId } = requestdata
    const { firstName, lastName, age, about, skills, photourl } = fromuserId
    const dispatch = useDispatch()

    const handlerequest = async (status, requestId) => {
        try {
            console.log(status)
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + requestId, {}, { withCredentials: true })
            console.log(res)
            dispatch(removerequest(_id));
        }
        catch (err) { console.log(err) }
    }

    return (
        <div className="bg-base-200 w-96 h-[500px] rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-full h-72 bg-orange-200">
                <img className="w-full h-full object-cover rounded-t-3xl" src={photourl} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="p-4 text-white">
                <h2 className="text-center text-xl font-semibold mb-2">{firstName} {lastName}</h2>
                <p className="text-sm mb-2"><span className="font-semibold">About:</span> {about}</p>
                {/* <p className="text-sm mb-2"><span className="font-semibold">Skills:</span> {skills.join(", ")}</p> */}
                <p className="text-sm mb-4"><span className="font-semibold">Age:</span> {age}</p>
                <div className="flex justify-center gap-5">
                    <button onClick={() => handlerequest("rejected", _id)} className="bg-red-500 hover:bg-red-600 w-20 h-9 rounded-lg font-semibold text-white shadow-md">Reject</button>
                    <button onClick={() => handlerequest("accepted", _id)} className="bg-green-500 hover:bg-green-600 w-20 h-9 rounded-lg font-semibold text-white shadow-md">Accept</button>
                </div>
            </div>
        </div>
    )
}
export default CardRequest
