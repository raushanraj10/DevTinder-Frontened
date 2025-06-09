import axios from "axios"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch, useSelector } from "react-redux"
import { removeUserFromFeed } from "./utils/feedSlice"

const Card=({feeddata})=>{
  // const data=useSelector((store)=>store.feed)
  const {_id,firstName, lastName,about,skills,photourl,age,gender}=feeddata
 const dispatch=useDispatch()

  const handlerequest=async (status,userId)=>{
    try{
  const res=  await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true})
   dispatch(removeUserFromFeed(userId))
  }
  catch(err){
    return (<h1 className="text-center text-2xl font-serif font-bold">{"Error: "+err.message}</h1>)
  }
}
    
    return (
       <div className="card bg-base-100 w-96 h-[500px] shadow-inner bg-slate-800 ">
  <figure>
    <img className="w-96 h-80"
      src={photourl}
      alt=" User Pic " />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName +" "+ lastName}</h2>
    <div className="flex justify-between"><h2 className="card-title">{gender}</h2>
    <h2 className="card-title">{age}</h2></div>
    <h2 className="card-title">{skills}</h2>
    <h2 className="card-title">{about}</h2>
    
    
    <div className="card-actions justify-center gap-7 my-4">
      <button className="btn btn-primary bg-blue-500" onClick={()=>handlerequest("ignored",_id)}>Ignore </button>
       <button className="btn btn-primary bg-green-500 text-1xl" onClick={()=>handlerequest("interested",_id)} >Interested</button>
    </div>
  </div>
</div>
    )

}
export default Card
