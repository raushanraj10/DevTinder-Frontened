// import axios from "axios"
// import { useEffect, useState } from "react"
// import { BASE_URL } from "./constant/BaseUrl"
// import { useDispatch } from "react-redux"
// // import { addfeed } from "./utils/feedSlice"
// import { addUser } from "./utils/userSlice"
// import UserCard from "./userCard"
// "_id,firstName","lastName","age","gender","about","skills","photourl"
// const EditProfile =({user})=>{
//   const dispatch=useDispatch()
//     const handleUpdate=async ()=>{
//         try{
//     const res=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,photourl,gender,about},{withCredentials:true})
//     console.log(res)
//     dispatch(addUser(res))
//     }
//     catch(err){
//      return (<h1 className="text-center text-2xl font-serif font-bold">{"Error: "+err.message}</h1>)
//     }
//   }
  
//     // useEffect(()=>{handleUpdate},[])


//     const [firstName,setfirstName]=useState(user.firstName)
//     const [lastName,setlastName]=useState(user.lastName)
//     const [age,setage]=useState(user.age)
//        const [photourl,setpic]=useState(user.photourl)
//           const [skills,setskill]=useState(user.skills)
//           const [gender,setegender]=useState(user.gender)
//            const [about,setabout]=useState(user.about)
//     return(
//       <div className="flex justify-center gap-24 m-32 ">
//         <div className="w-[600px]">
//   <div className="hero-content flex-col lg:flex-row-reverse w-[600px]">
//     <div className="text-center  w-[600px] lg:text-left ">
//       {/* <h1 className="text-5xl font-bold">Edit</h1> */}
//       {/* <p className="py-6">
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//         quasi. In deleniti eaque aut repudiandae et a id nisi.
//       </p> */}
//     </div>
//     <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-[600px]">
//       <div className="card-body h-[650px]">
//         <fieldset className="fieldset text-xl text-gray-100">
//             <div className="flex justify-center"><h1 className="text-2xl">Edit</h1></div>
//           <label   className="label">First Name</label>
//           <input value={firstName} onChange={(ele)=>{setfirstName(ele.target.value);console.log(firstName)}}type="text" className="input"  />
//           <label className="label">Last Name</label>
//            <input value={lastName} onChange={(ele)=>{setlastName(ele.target.value)}} type="text" className="input"  />
//           {/* <label className="label">Age</label>
//           <input  value={age} onChange={(ele)=>{setage(ele.target.value)}}  type="text" className="input"  /> */}
//             <label className="label">Gender</label>

//           <input  value={gender} onChange={(ele)=>{setegender(ele.target.value)}}  type="text" className="input"  />
          
//            {/* <label className="label">skills</label>
//           <input  value={skills} onChange={(ele)=>{setskill(ele.target.value)}}  type="text" className="input"  /> */}

//           <label className="label">About</label>
//           <input  value={about} onChange={(ele)=>{setabout(ele.target.value)}}  type="text" className="input"  />

//            <label className="label">Photo-Url</label>
//           <input  value={photourl} onChange={(ele)=>{setpic(ele.target.value)}}  type="text" className="input"  />
         
          
//           {/* <div><a className="link link-hover">Forgot password?</a></div> */}
//           <button onClick={()=>handleUpdate()}className="mt-4 w-[320px] bg-green-500">Save Profile</button>
//         </fieldset>
//       </div>
//     </div>
//   </div>
  
// </div>
// <div className="flex my-10">{<UserCard feeddata={{firstName,lastName,photourl,skills,gender,about,age}}/>}</div>
// </div>


//     )
// }
// export default EditProfile











// import axios from "axios"
// import { useState } from "react"
// import { BASE_URL } from "./constant/BaseUrl"
// import { useDispatch } from "react-redux"
// import { addUser } from "./utils/userSlice"
// import UserCard from "./userCard"

// const EditProfile = ({ user }) => {
//   const dispatch = useDispatch()

//   const [firstName, setfirstName] = useState(user.firstName)
//   const [lastName, setlastName] = useState(user.lastName)
//   const [age, setage] = useState(user.age)
//   const [photourl, setpic] = useState(user.photourl)
//   const [skills, setskill] = useState(user.skills)
//   const [gender, setegender] = useState(user.gender)
//   const [about, setabout] = useState(user.about)

//   const handleUpdate = async () => {
//     try {
//       const res = await axios.patch(
//         BASE_URL + "/profile/edit",
//         { firstName, lastName,age,photourl,gender,about,skills },
//         { withCredentials: true }
//       )
//       // console.log(firstName)
//       dispatch(addUser(res))
//     } catch (err) {
//       alert("Error: " + err.message)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-base-100 flex flex-col lg:flex-row justify-center gap-16 px-8 py-10">
//       {/* Profile Form */}
//       <div className="w-full max-w-xl border border-gray-700 rounded-xl shadow-sm p-8 bg-base-200">
//         <h2 className="text-2xl font-semibold text-gray-300 mb-6 text-center">Edit Profile</h2>

//         <div className="space-y-4 text-sm text-gray-400">
//           {/* First Name */}
//           <div>
//             <label className="block mb-1">First Name</label>
//             <input
//               value={firstName}
//               onChange={(e) => setfirstName(e.target.value)}
//               type="text"
//               className="w-full px-3 py-2 border text-white border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block mb-1">Last Name</label>
//             <input
//               value={lastName}
//               onChange={(e) => setlastName(e.target.value)}
//               type="text"
//               className="w-full px-3 py-2 border text-white border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Age */}

//           {/* <div>
//             <label value={age} className="block mb-1">Age</label>
//             <div className="flex items-center gap-3">
//               <button value={age}
//                 onClick={() => setage(Math.max(0, age - 1))}
//                 className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
//               >
//                 -
//               </button>
//               <span className="text-white">{age}</span>
//               <button
//                 onClick={() => setage(age + 1)}
//                 className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
//               >
//                 +
//               </button>
//             </div>
//           </div> */}
//           <div>
//             <label className="block mb-1">Age</label>
//             <input
//               value={age}
//               onChange={(e) => setage(e.target.value)}
//               type="number"
//               className="w-full px-3 py-2 border text-white border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Gender Dropdown */}
//           <div>
//             <label className="block mb-1">Gender</label>
//             <select
//               value={gender}
//               onChange={(e) =>{ setegender(e.target.value);console.log(e)}}
//               className="w-full text-white px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {/* About Textarea */}
//           <div>
//             <label className="block mb-1">About</label>
//             <textarea
//               value={about}
//               onChange={(e) => setabout(e.target.value)}
//               className="w-full h-24 px-3 py-2 border text-white border-gray-300 rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Write something about yourself..."
//             />
//           </div>

//           {/* Photo URL */}
//           <div>
//             <label className="block mb-1">Photo URL</label>
//             <input
//               value={photourl}
//               onChange={(e) => setpic(e.target.value)}
//               type="text"
//               className="w-full px-3 py-2 text-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Save Button */}
//           <div className="pt-4">
//             <button
//               onClick={handleUpdate}
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Save Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Profile Preview */}
//       <div className=" mt-1">
//         <UserCard
//           feeddata={{
//             firstName,
//             lastName,
//             photourl,
//             skills,
//             gender,
//             about,
//             age,
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// export default EditProfile










import axios from "axios"
import { use, useState } from "react"
import { BASE_URL } from "./constant/BaseUrl"
import { useDispatch } from "react-redux"
import { addUser } from "./utils/userSlice"
import UserCard from "./userCard"

const EditProfile = ({ user }) => {
  const dispatch = useDispatch()

  const [firstName, setfirstName] = useState(user.firstName)
  const [lastName, setlastName] = useState(user.lastName)
  const [age, setage] = useState(user.age)
  const [photourl, setpic] = useState(user.photourl)
  const [skills, setskill] = useState(user.skills)
  const [gender, setegender] = useState(user.gender)
  const [about, setabout] = useState(user.about)
  const [error,seterror]=useState("")
  const [isshow,setshow]=useState(false)
  const istrue={
    vd:false
  }
  const handleUpdate = async () => {

    if(age<0)
      return seterror("Age Should Be Greater Than 0")

  
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, photourl, gender, about, skills },
        { withCredentials: true }
      )
      // console.log(res)
      dispatch(addUser(res.data))
       
     seterror(""); // clear any old error 
    setshow(true); // show success toast
    setInterval(() => setshow(false), 3000); // hide after 4 sec
  } 
  catch (err) {
    console.error("Editing Error:", err.response?.data || err.message);
    seterror("Editing failed. Make sure all fields are filled correctly! Or Chrome Browser Not Supported");
  }
  }

  return (
    <>
    {(isshow || error) && (
  <div className="toast toast-top toast-center z-50">
    <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
      <span>{error ? error : "Profile Saved Successfully"}</span>
    </div>
  </div>
)}



    <div className="min-h-screen bg-base-100 flex flex-col items-center px-4 py-6 sm:px-6 sm:py-8 lg:flex-row lg:justify-center lg:items-start lg:gap-8 lg:px-8 lg:py-10">
      {/* Profile Form */}
      <div className="w-full max-w-2xl border border-gray-700 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 bg-base-200 mb-6 lg:mb-0 lg:w-1/2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 sm:mb-6 text-center">Edit Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
          {/* First Name */}
          <div className="md:col-span-1">
            <label className="block mb-1">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border text-white border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Last Name */}
          <div className="md:col-span-1">
            <label className="block mb-1">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border text-white border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Age */}
          <div className="md:col-span-1">
            <label className="block mb-1">Age</label>
            <input
              value={age}
              onChange={(e) => setage(e.target.value)}
              type="number"
              className="w-full px-3 py-2 border text-white border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Gender Dropdown */}
          <div className="md:col-span-1">
            <label className="block mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => { setegender(e.target.value); console.log(e) }}
              className="w-full text-white px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* About Textarea */}
          <div className="md:col-span-2">
            <label className="block mb-1">About</label>
            <textarea
              value={about}
              onChange={(e) => setabout(e.target.value)}
              className="w-full h-24 px-3 py-2 border text-white border-gray-300 rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write something about yourself..."
            />
          </div>

          {/* Photo URL */}
          <div className="md:col-span-2">
            <label className="block mb-1">Photo URL</label>
            <input
              value={photourl}
              onChange={(e) => setpic(e.target.value)}
              type="text"
              className="w-full px-3 py-2 text-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2 pt-4">
            <button
              onClick={handleUpdate}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>

      {/* Profile Preview - Adjusted for tablet */}
      <div className="w-full max-w-md lg:w-1/3">
        <UserCard
          feeddata={{
            firstName,
            lastName,
            photourl,
            skills,
            gender,
            about,
            age,
        }} validity={istrue}
        />
      </div>
    </div>
    </>
  )
}

export default EditProfile