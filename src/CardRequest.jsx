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





// import axios from "axios"
// import { BASE_URL } from "./constant/BaseUrl"
// import { useDispatch, useSelector } from "react-redux"
// import { removerequest } from "./utils/requestSlice"

// const CardRequest = ({ requestdata }) => {
//     const { _id, fromuserId } = requestdata
//     const { firstName, lastName, age, about, skills, photourl } = fromuserId
//     const dispatch = useDispatch()

//     const handlerequest = async (status, requestId) => {
//         try {
//             console.log(status)
//             const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + requestId, {}, { withCredentials: true })
//             console.log(res)
//             dispatch(removerequest(_id));
//         }
//         catch (err) { console.log(err) }
//     }

//     return (
//         <div className="bg-base-200 w-96 h-[500px] rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
//             <div className="w-full h-72 bg-orange-200">
//                 <img className="w-full h-full object-cover rounded-t-3xl" src={photourl} alt={`${firstName} ${lastName}`} />
//             </div>
//             <div className="p-4 text-white">
//                 <h2 className="text-center text-xl font-semibold mb-2">{firstName} {lastName}</h2>
//                 <p className="text-sm mb-2"><span className="font-semibold">About:</span> {about}</p>
//                 {/* <p className="text-sm mb-2"><span className="font-semibold">Skills:</span> {skills.join(", ")}</p> */}
//                 <p className="text-sm mb-4"><span className="font-semibold">Age:</span> {age}</p>
//                 <div className="flex justify-center gap-5">
//                     <button onClick={() => handlerequest("rejected", _id)} className="bg-red-500 hover:bg-red-600 w-20 h-9 rounded-lg font-semibold text-white shadow-md">Reject</button>
//                     <button onClick={() => handlerequest("accepted", _id)} className="bg-green-500 hover:bg-green-600 w-20 h-9 rounded-lg font-semibold text-white shadow-md">Accept</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default CardRequest











// import axios from "axios";
// import { BASE_URL } from "./constant/BaseUrl";
// import { useDispatch } from "react-redux";
// import { removerequest } from "./utils/requestSlice";

// const CardRequest = ({ requestdata }) => {
//     const { _id, fromuserId } = requestdata;
//     const { firstName, lastName, age, about, photourl } = fromuserId;
//     const dispatch = useDispatch();

//     const handlerequest = async (status, requestId) => {
//          const [error,seterror]=useState("")
//           const [isshow,setshow]=useState(false)
//         try {
//             // console.log(status);
//             const res = await axios.post(`${BASE_URL}/request/review/${status}/${requestId}`, {}, { withCredentials: true });
//             // console.log(res);
//             dispatch(removerequest(_id));
//         seterror(""); // clear any old error
    
//         setshow(true); // show success toast
//         setInterval(() => setshow(false), 3000); // hide after 4 sec
//   } catch (err) {
//     console.error("Request error:", err.response?.data || err.message);
//     seterror("failed to Send Request!");
//   }
//     };

//     return (
//     <>
//     {(isshow || error) && (
//   <div className="toast toast-top toast-center z-50">
//     <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
//       <span>{error ? error : "Profile Saved Successfully"}</span>
//     </div>
//   </div>
//    )}

//         <div className="bg-base-200 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] mx-auto">
//             <div className="w-full h-64 sm:h-72 md:h-80 bg-orange-200">
//                 <img className="w-full h-full object-cover rounded-t-3xl" src={photourl} alt={`${firstName} ${lastName}`} />
//             </div>
//             <div className="p-4 text-white text-center">
//                 <h2 className="text-xl sm:text-2xl font-semibold mb-2">{firstName} {lastName}</h2>
//                 <p className="text-sm mb-2"><span className="font-semibold">About:</span> {about}</p>
//                 <p className="text-sm mb-4"><span className="font-semibold">Age:</span> {age}</p>
//                 <div className="flex justify-center gap-4 flex-wrap">
//                     <button onClick={() => handlerequest("rejected", _id)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold text-white shadow-md">Reject</button>
//                     <button onClick={() => handlerequest("accepted", _id)} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold text-white shadow-md">Accept</button>
//                 </div>
//             </div>
//         </div>

//         </>
//     );
// };

// export default CardRequest;





// import axios from "axios";
// import { BASE_URL } from "./constant/BaseUrl";
// import { useDispatch } from "react-redux";
// import { removerequest } from "./utils/requestSlice";
// import { useState } from "react"; // Added missing useState import

// const CardRequest = ({ requestdata }) => {
//     const { _id, fromuserId } = requestdata;
//     const { firstName, lastName, age, about, photourl } = fromuserId;
//     const dispatch = useDispatch();
//     const [error, seterror] = useState(""); // Fixed hook declaration
//     const [isshow, setshow] = useState(false);

//     const handlerequest = async (status, requestId) => {
//         try {
//             await axios.post(
//                 `${BASE_URL}/request/review/${status}/${requestId}`,
//                 {}, 
//                 { withCredentials: true }
//             );
//             dispatch(removerequest(_id));
//             seterror("");
//             setshow(true);
//             setTimeout(() => setshow(false), 3000);
//         } catch (err) {
//             console.error("Request error:", err.response?.data || err.message);
//             seterror("Failed to process request!");
//         }
//     };

//     return (
//         <>
//             {(isshow || error) && (
//                 <div className="toast toast-top toast-center z-50">
//                     <div className={`alert ${error ? "alert-error" : "alert-success"}`}>
//                         <span>{error || "Request processed successfully!"}</span>
//                     </div>
//                 </div>
//             )}

//             {/* Compact card container */}
//             <div className="bg-base-200 w-full max-w-[240px] rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.03] mx-auto">
//                 {/* Smaller image container */}
//                 <div className="w-full h-40 bg-orange-200">
//                     <img 
//                         className="w-full h-full object-cover" 
//                         src={photourl} 
//                         alt={`${firstName} ${lastName}`} 
//                     />
//                 </div>
                
//                 {/* Compact content area */}
//                 <div className="p-3 text-center space-y-1">
//                     <h2 className="text-lg font-semibold truncate">{firstName} {lastName}</h2>
//                     <p className="text-xs text-gray-600 line-clamp-2 min-h-[2rem]">{about}</p>
//                     <p className="text-xs"><span className="font-medium">Age:</span> {age}</p>
                    
//                     {/* Compact buttons */}
//                     <div className="flex justify-center gap-2 pt-2">
//                         <button 
//                             onClick={() => handlerequest("rejected", _id)}
//                             className="btn btn-error btn-xs text-white px-3"
//                         >
//                             Reject
//                         </button>
//                         <button 
//                             onClick={() => handlerequest("accepted", _id)}
//                             className="btn btn-success btn-xs text-white px-3"
//                         >
//                             Accept
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CardRequest;



// import axios from "axios"
// import { BASE_URL } from "./constant/BaseUrl"
// import { useDispatch, useSelector } from "react-redux"
// import { removerequest } from "./utils/requestSlice"

// const CardRequest = ({ requestdata }) => {
//     const { _id, fromuserId } = requestdata;
//     const { firstName, lastName, age, about, skills, photourl } = fromuserId;
//     const dispatch = useDispatch();

//     const handlerequest = async (status, requestId) => {
//         try {
//             const res = await axios.post(
//                 BASE_URL + "/request/review/" + status + "/" + requestId,
//                 {},
//                 { withCredentials: true }
//             );
//             dispatch(removerequest(_id));
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="bg-base-200 w-64 h-[400px] rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
//             <div className="w-full h-40 bg-orange-200">
//                 <img
//                     className="w-full h-full object-cover rounded-t-2xl"
//                     src={photourl}
//                     alt={`${firstName} ${lastName}`}
//                 />
//             </div>
//             <div className="p-3 text-white text-sm">
//                 <h2 className="text-center text-base font-semibold mb-1">{firstName} {lastName}</h2>
//                 <p className="text-xs mb-1"><span className="font-semibold">About:</span> {about}</p>
//                 {/* <p className="text-xs mb-1"><span className="font-semibold">Skills:</span> {skills.join(", ")}</p> */}
//                 <p className="text-xs mb-3"><span className="font-semibold">Age:</span> {age}</p>
//                 <div className="flex justify-center gap-3">
//                     <button
//                         onClick={() => handlerequest("rejected", _id)}
//                         className="bg-red-500 hover:bg-red-600 w-16 h-8 rounded-md text-xs font-semibold text-white shadow"
//                     >
//                         Reject
//                     </button>
//                     <button
//                         onClick={() => handlerequest("accepted", _id)}
//                         className="bg-green-500 hover:bg-green-600 w-16 h-8 rounded-md text-xs font-semibold text-white shadow"
//                     >
//                         Accept
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardRequest;








// import axios from "axios";
// import { BASE_URL } from "./constant/BaseUrl";
// import { useDispatch } from "react-redux";
// import { removerequest } from "./utils/requestSlice";
// import { useState } from "react";

// const CardRequest = ({ requestdata }) => {
//     const [isshow,setshow]=useState(false)
//     const [error,seterror]=useState("")


//     const { _id, fromuserId } = requestdata;
//     const { firstName, lastName, age, about, skills, photourl } = fromuserId;
//     const dispatch = useDispatch();

//     const handlerequest = async (status, requestId) => {
//     // console.log("sdhfshdfjik")
//         try {
//             const res = await axios.post(
//                 `${BASE_URL}/request/review/${status}/${requestId}`,
//                 {},
//                 { withCredentials: true }
//             );
//             dispatch(removerequest(_id));
//             seterror(""); 
//             setshow(true);
//             // console.log(isshow) 
//             setTimeout(() => setshow(false), 2000); 
//           } catch (err) {
//           console.error("Request error:", err.response?.data || err.message);
//            seterror("failed to Send Request!");
//     }
//     };

//     return (
//         <div className="">
//         {(isshow||error) && (
//       <div className="bg-orange-300 toast toast-top toast-center z-50">
//      <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
//       <span>{error ? error : "Request Sended"}</span>
//       </div>
//       </div>
//     )}


//         <div className="bg-base-200 w-72 sm:w-64 max-w-xs rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
//             <div className="w-full h-36 sm:h-40 bg-orange-200">
//                 <img
//                     className="w-full h-full object-cover rounded-t-xl"
//                     src={photourl}
//                     alt={`${firstName} ${lastName}`}
//                 />
//             </div>
//             <div className="p-3 text-white text-sm">
//                 <h2 className="text-center text-base font-semibold mb-1 truncate">{firstName} {lastName}</h2>
//                 <p className="text-xs mb-1 line-clamp-2"><span className="font-semibold">About:</span> {about}</p>
//                 <p className="text-xs mb-3"><span className="font-semibold">Age:</span> {age}</p>
//                 <div className="flex justify-center gap-2">
//                     <button
//                         onClick={() => handlerequest("rejected", _id)}
//                         className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-xs font-semibold text-white shadow"
//                     >
//                         Reject
//                     </button>
//                     <button
//                         onClick={() => handlerequest("accepted", _id)}
//                         className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-xs font-semibold text-white shadow"
//                     >
//                         Accept
//                     </button>
//                 </div>
//             </div>
//         </div>
//        </div>
//     );
// };

// export default CardRequest;






// import axios from "axios";
// import { BASE_URL } from "./constant/BaseUrl";
// import { useDispatch } from "react-redux";
// import { removerequest } from "./utils/requestSlice";
// import { useState } from "react";

// const CardRequest = ({ requestdata }) => {
//     const [isshow, setshow] = useState(false);
//     const [error, seterror] = useState("");
//     const [isProcessing, setIsProcessing] = useState(false); // Track request state

//     const { _id, fromuserId } = requestdata;
//     const { firstName, lastName, age, about, skills, photourl } = fromuserId;
//     const dispatch = useDispatch();

//     const handlerequest = async (status, requestId) => {
//         if (isProcessing) return; // Prevent multiple clicks
//         setIsProcessing(true);
        
//         try {
//             await axios.post(
//                 `${BASE_URL}/request/review/${status}/${requestId}`,
//                 {},
//                 { withCredentials: true }
//             );
            
//             seterror("");
//             setshow(true);
            
//             // Delay removal until after toast is shown
//             setTimeout(() => {
//                 dispatch(removerequest(_id));
//                 setIsProcessing(false);
//             }, 2000);
//         } catch (err) {
//             console.error("Request error:", err.response?.data || err.message);
//             seterror("Failed to process request!");
//             setIsProcessing(false);
//             setTimeout(() => seterror(""), 2000);
//         }
//     };

//     return (
//         <div className="relative">
//             {/* Toast Notification */}
//             {(isshow || error) && (
//                 <div className="bg-orange-300 toast toast-top toast-center z-50">
//                     <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
//                         <span>{error || "Request processed successfully!"}</span>
//                     </div>
//                 </div>
//             )}

//             {/* Request Card */}
//             <div className="bg-base-200 w-72 sm:w-64 max-w-xs rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
//                 <div className="w-full h-36 sm:h-40 bg-orange-200">
//                     <img
//                         className="w-full h-full object-cover rounded-t-xl"
//                         src={photourl}
//                         alt={`${firstName} ${lastName}`}
//                     />
//                 </div>
//                 <div className="p-3 text-white text-sm">
//                     <h2 className="text-center text-base font-semibold mb-1 truncate">
//                         {firstName} {lastName}
//                     </h2>
//                     <p className="text-xs mb-1 line-clamp-2">
//                         <span className="font-semibold">About:</span> {about}
//                     </p>
//                     <p className="text-xs mb-3">
//                         <span className="font-semibold">Age:</span> {age}
//                     </p>
//                     <div className="flex justify-center gap-2">
//                         <button
//                             onClick={() => handlerequest("rejected", _id)}
//                             disabled={isProcessing}
//                             className={`bg-red-500 px-3 py-1 rounded-md text-xs font-semibold text-white shadow ${
//                                 isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
//                             }`}
//                         >
//                             Reject
//                         </button>
//                         <button
//                             onClick={() => handlerequest("accepted", _id)}
//                             disabled={isProcessing}
//                             className={`bg-green-500 px-3 py-1 rounded-md text-xs font-semibold text-white shadow ${
//                                 isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
//                             }`}
//                         >
//                             Accept
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardRequest;









import axios from "axios";
import { BASE_URL } from "./constant/BaseUrl";
import { useDispatch } from "react-redux";
import { removerequest } from "./utils/requestSlice";
import { useEffect, useState } from "react";

const CardRequest = ({ requestdata }) => {
    const [toastMsg, setToastMsg] = useState("");
    const [toastType, setToastType] = useState(""); // "success" or "error"
    const [isProcessing, setIsProcessing] = useState(false);
    const dispatch = useDispatch();

    const { _id, fromuserId } = requestdata;
    const { firstName, lastName, age, about, skills, photourl } = fromuserId;

    useEffect(() => {
        if (toastMsg) {
            const timer = setTimeout(() => {
                setToastMsg("");
                setToastType("");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [toastMsg]);

    const handlerequest = async (status, requestId) => {
        if (isProcessing) return;
        setIsProcessing(true);

        try {
            await axios.post(
                `${BASE_URL}/request/review/${status}/${requestId}`,
                {},
                { withCredentials: true }
            );

            setToastType("success");
            setToastMsg("Request processed successfully!");
            
            setTimeout(() => {
                dispatch(removerequest(_id));
                setIsProcessing(false);
            }, 2000);
        } catch (err) {
            console.error("Request error:", err.response?.data || err.message);
            setToastType("error");
            setToastMsg("Failed to process request!");
            setIsProcessing(false);
        }
    };

    return (
        <div className="relative">
            {/* Toast Notification */}
            {toastMsg && (
                <div className="toast toast-top toast-center z-50">
                    <div className={`alert ${toastType === "error" ? "alert-error" : "alert-info"}`}>
                        <span>{toastMsg}</span>
                    </div>
                </div>
            )}

            {/* Request Card */}
            <div className="bg-base-200 w-72 sm:w-64 max-w-xs rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
                <div className="w-full h-36 sm:h-40 bg-orange-200">
                    <img
                        className="w-full h-full object-cover rounded-t-xl"
                        src={photourl}
                        alt={`${firstName} ${lastName}`}
                    />
                </div>
                <div className="p-3 text-white text-sm">
                    <h2 className="text-center text-base font-semibold mb-1 truncate">
                        {firstName} {lastName}
                    </h2>
                    <p className="text-xs mb-1 line-clamp-2">
                        <span className="font-semibold">About:</span> {about}
                    </p>
                    <p className="text-xs mb-3">
                        <span className="font-semibold">Age:</span> {age}
                    </p>
                    <div className="flex justify-center gap-2">
                        <button
                            onClick={() => handlerequest("rejected", _id)}
                            disabled={isProcessing}
                            className={`bg-red-500 px-3 py-1 rounded-md text-xs font-semibold text-white shadow ${
                                isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
                            }`}
                        >
                            Reject
                        </button>
                        <button
                            onClick={() => handlerequest("accepted", _id)}
                            disabled={isProcessing}
                            className={`bg-green-500 px-3 py-1 rounded-md text-xs font-semibold text-white shadow ${
                                isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
                            }`}
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardRequest;






