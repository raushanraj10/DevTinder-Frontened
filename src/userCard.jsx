// import axios from "axios"
// import { BASE_URL } from "./constant/BaseUrl"
// import { useDispatch, useSelector } from "react-redux"
// import { removeUserFromFeed } from "./utils/feedSlice"

// const Card=({feeddata})=>{
//   const data=useSelector((store)=>store.feed)
//   const {_id,firstName, lastName,about,skills,photourl,age,gender}=feeddata
//  const dispatch=useDispatch()

//   const handlerequest=async (status,userId)=>{
//     try{
//   const res=  await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true})
//    dispatch(removeUserFromFeed(userId))
//   }
//   catch(err){
//     return (<h1 className="text-center text-2xl font-serif font-bold">{"Error: "+err.message}</h1>)
//   }
// }

  
    
//     return (data&&
//        <div className="card bg-base-100 w-96 h-[500px] shadow-inner bg-slate-800 ">
//   <figure>
//     <img className="w-96 h-80"
//       src={photourl}
//       alt=" User Pic " />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{firstName +" "+ lastName}</h2>
//     <div className="flex justify-between"><h2 className="card-title">{gender}</h2>
//     <h2 className="card-title">{age}</h2></div>
//     <h2 className="card-title">{skills}</h2>
//     <h2 className="card-title">{about}</h2>
    
    
//     <div className="card-actions justify-center gap-7 my-4">
//       <button className="btn btn-primary bg-blue-500" onClick={()=>handlerequest("ignored",_id)}>Ignore </button>
//        <button className="btn btn-primary bg-green-500 text-1xl" onClick={()=>handlerequest("interested",_id)} >Interested</button>
//     </div>
//   </div>
// </div>
//     )

// }
// export default Card



// import axios from "axios";
// import { BASE_URL } from "./constant/BaseUrl";
// import { useDispatch, useSelector } from "react-redux";
// import { removeUserFromFeed } from "./utils/feedSlice";
// import { useState } from "react";

// const Card = ({ feeddata,validity }) => {
//   const [isshow,setshow]=useState(false)
//   const [error,seterror]=useState("")
// //  console.log(validity.vd)



//   const { _id, firstName, lastName, about, skills, photourl, age, gender } = feeddata;
//   const dispatch = useDispatch();

//   const handleRequest = async (status, userId) => {
//     try {
//       await axios.post(`${BASE_URL}/request/send/${status}/${userId}`, {}, { withCredentials: true });
//       dispatch(removeUserFromFeed(userId));
//       seterror(""); 
//       setshow(true);
//        console.log(isshow)
//       setInterval(() => setshow(false), 1000); 
//     } catch (err) {
//       console.error("Request error:", err.response?.data || err.message);
//     seterror("failed to Send Request!");
//   }
//   };

//   return (

//      <>
//     {(isshow || error) && (
//   <div className="toast toast-top toast-center z-50">
//     <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
//       <span>{error ? error : "Request Sended"}</span>
//     </div>
//   </div>
//     )}

//     <div className="card w-96 bg-base-200 shadow-xl border border-base-300 transition-transform hover:scale-[1.015]">
//       <figure className="h-64 overflow-hidden">
//         <img
//           src={photourl}
//           alt="User Pic"
//           className="w-full h-full object-cover"
//         />
//       </figure>

//       <div className="card-body text-white">
//         <h2 className="text-2xl font-semibold">{firstName} {lastName}</h2>
//         <div className="flex justify-between text-sm text-gray-300 mt-1">
//           <span className="capitalize">{gender}</span>
//           <span>{age} yrs</span>
//         </div>

//         <div className="mt-2">
//           {/* <p className="text-sm text-gray-400">
//             <span className="font-medium text-white">Skills:</span> {skills}
//           </p> */}
//           <p className="text-sm text-gray-400 mt-1 line-clamp-3">
//             <span className="font-medium text-white">About:</span> {about}
//           </p>
//         </div>

//         {validity.vd&&<div className="card-actions justify-between mt-6">
//         <button
//             onClick={() => handleRequest("ignored", _id)}
//             className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
//           >
//             Ignore
//           </button>
//           <button
//             onClick={() => handleRequest("interested", _id)}
//             className="btn btn-primary bg-green-600 border-none hover:bg-green-700"
//           >
//             Interested
//           </button>
//         </div>}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Card;



import axios from "axios";
import { BASE_URL } from "./constant/BaseUrl";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "./utils/feedSlice";
import { useState } from "react";

const Card = ({ feeddata, validity }) => {
  const [isshow, setshow] = useState(false);
  const [error, seterror] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const { _id, firstName, lastName, about, photourl, age, gender } = feeddata;
  const dispatch = useDispatch();

  const handleRequest = async (status, userId) => {
    try {
  await axios.post(
    `${BASE_URL}/request/send/${status}/${userId}`,
    {},
    { withCredentials: true }
  );
  
  seterror("");
  setshow(true);

  // hide success toast after 1s
  setTimeout(() => setshow(false), 1000);

  // Delay removal from feed
  setTimeout(() => {
    dispatch(removeUserFromFeed(userId));
    setIsProcessing(false);
  }, 1000);
} catch (err) {
  console.error("Request error:", err.response?.data || err.message);
  seterror("Failed to send request!");
  setIsProcessing(false);
  setTimeout(() => seterror(""), 1000); // hide error toast
}
}

  return (
    <>
      {(isshow || error) && (
        <div className="toast toast-top toast-center z-50">
          <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
            <span>{error || "Request sent successfully!"}</span>
          </div>
        </div>
      )}

      <div className="card w-96 bg-base-200 shadow-xl border border-base-300 transition-transform hover:scale-[1.015]">
        <figure className="h-64 overflow-hidden">
          <img
            src={photourl}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body text-white">
          <h2 className="text-2xl font-semibold">
            {firstName} {lastName}
          </h2>
          <div className="flex justify-between text-sm text-gray-300 mt-1">
            <span className="capitalize">{gender}</span>
            <span>{age} yrs</span>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-400 mt-1 line-clamp-3">
              <span className="font-medium text-white">About:</span> {about}
            </p>
          </div>

          {validity.vd && (
            <div className="card-actions justify-between mt-6">
              <button
                onClick={() => handleRequest("ignored", _id)}
                disabled={isProcessing}
                className={`btn btn-outline border-red-500 text-red-500 ${
                  isProcessing
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-red-500 hover:text-white"
                }`}
              >
                Ignore
              </button>
              <button
                onClick={() => handleRequest("interested", _id)}
                disabled={isProcessing}
                className={`btn btn-primary bg-green-600 border-none ${
                  isProcessing
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-700"
                }`}
              >
                Interested
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
