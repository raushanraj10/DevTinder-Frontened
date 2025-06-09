import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch } from "react-redux"
// import { addfeed } from "./utils/feedSlice"
import { addUser } from "./utils/userSlice"
import UserCard from "./userCard"
"_id,firstName","lastName","age","gender","about","skills","photourl"
const EditProfile =({user})=>{
  const dispatch=useDispatch()
    const handleUpdate=async ()=>{
        try{
    const res=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,photourl,gender,about},{withCredentials:true})
    console.log(res)
    dispatch(addUser(res))
    }
    catch(err){
     return (<h1 className="text-center text-2xl font-serif font-bold">{"Error: "+err.message}</h1>)
    }
  }
  
    // useEffect(()=>{handleUpdate},[])


    const [firstName,setfirstName]=useState(user.firstName)
    const [lastName,setlastName]=useState(user.lastName)
    const [age,setage]=useState(user.age)
       const [photourl,setpic]=useState(user.photourl)
          const [skills,setskill]=useState(user.skills)
          const [gender,setegender]=useState(user.gender)
           const [about,setabout]=useState(user.about)
    return(
      <div className="flex justify-center gap-24 m-32 ">
        <div className="w-[600px]">
  <div className="hero-content flex-col lg:flex-row-reverse w-[600px]">
    <div className="text-center  w-[600px] lg:text-left ">
      {/* <h1 className="text-5xl font-bold">Edit</h1> */}
      {/* <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p> */}
    </div>
    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-[600px]">
      <div className="card-body h-[650px]">
        <fieldset className="fieldset text-xl text-gray-100">
            <div className="flex justify-center"><h1 className="text-2xl">Edit</h1></div>
          <label   className="label">First Name</label>
          <input value={firstName} onChange={(ele)=>{setfirstName(ele.target.value);console.log(firstName)}}type="text" className="input"  />
          <label className="label">Last Name</label>
           <input value={lastName} onChange={(ele)=>{setlastName(ele.target.value)}} type="text" className="input"  />
          {/* <label className="label">Age</label>
          <input  value={age} onChange={(ele)=>{setage(ele.target.value)}}  type="text" className="input"  /> */}
            <label className="label">Gender</label>

          <input  value={gender} onChange={(ele)=>{setegender(ele.target.value)}}  type="text" className="input"  />
          
           {/* <label className="label">skills</label>
          <input  value={skills} onChange={(ele)=>{setskill(ele.target.value)}}  type="text" className="input"  /> */}

          <label className="label">About</label>
          <input  value={about} onChange={(ele)=>{setabout(ele.target.value)}}  type="text" className="input"  />

           <label className="label">Photo-Url</label>
          <input  value={photourl} onChange={(ele)=>{setpic(ele.target.value)}}  type="text" className="input"  />
         
          
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button onClick={()=>handleUpdate()}className="mt-4 w-[320px] bg-green-500">Save Profile</button>
        </fieldset>
      </div>
    </div>
  </div>
  
</div>
<div className="flex my-10">{<UserCard feeddata={{firstName,lastName,photourl,skills,gender,about,age}}/>}</div>
</div>


    )
}
export default EditProfile