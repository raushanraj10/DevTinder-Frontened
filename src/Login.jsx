// import axios from "axios";
// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, removeUser } from "./utils/userSlice";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { BASE_URL } from "./constant/BaseUrl";

// const Login=()=>{
//     const [emailId,setemailId]=useState("");
//     const [password,setpassword]=useState("");
//     const [firstName,setfirstName]=useState("")
//     const [lastName,setlastName]=useState("")
//     const [isLogin,setLogin]=useState(false)

//     const [error,seterror]=useState("")
//     const dispatch=useDispatch()
//     const Navigate=useNavigate()
//     const userdata=useSelector((store)=>store.user)
//     const handlerlogin=async ()=>{
//         try{
//         const res=await axios.post(BASE_URL+"/login",{emailId,password},{withCredentials:true})
//         dispatch(addUser(res.data))
//         return Navigate("/")
//     }
//         catch(err){
//           seterror("Invalid Credentials")
//           // dispatch(removeUser())
//             // console.log(err.messsge)
//         }
//     }



//     const handlersingup=async ()=>{
//       try{
//       const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true})
//       setLogin(false)
//       Navigate("/login")
//       console.log(res)
//       }
//       catch(err){console.log(err.message)}
//     }


//     return(
//         <div className="flex justify-center ">
//   <div className="hero-content flex-col lg:flex-row-reverse  w-[650px] mb-48">
//     {/* <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Login now!</h1>
//       <p className="py-6">
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//         quasi. In deleniti eaque aut repudiandae et a id nisi.
//       </p>
//     </div> */}
//     <div className="card bg-base-100 w-full h-auto max-w-sm  shrink-0 shadow-2xl mt-2 ">
//       <div className="card-body">
//         <fieldset className="fieldset mt-9 text-xl">
//              <p className="text-red-500">{error}</p>
//           {isLogin&&<>
//           <label className="label">First Name</label>
//           <input type="email" value={firstName} className="input" onChange={(ele)=>{setfirstName(ele.target.value)}} />
//           <label className="label">Last Name</label>
//             <input type="text" value={lastName} className="input" onChange={(ele)=>{setlastName(ele.target.value)}} /></>}
//           <label className="label">Email</label>
//           <input type="email" value={emailId} className="input" onChange={(ele)=>{setemailId(ele.target.value)}} />
//           <label className="label">Password</label>
//           <input type="password" value={password} className="input" onChange={(ele)=>{setpassword(ele.target.value)}} />
       
//           <div><Link onClick={(ele)=>{setLogin((ele)=>!ele)}} className="text-red-300 text-sm mt-2">New User? SingUp</Link></div>
//           <button onClick={!isLogin?handlerlogin:handlersingup} className="btn btn-neutral mt-4">{!isLogin?"Login":"SingUp"}</button>
//         </fieldset>
//       </div>
//     </div>
//   </div>
// </div>
//     )
// }
// export default Login





import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "./constant/BaseUrl";
import validator from "validators/lib/validators";
import Shimmer from "./Shimmer";

const Login = () => {
  const [emailId, setemailId] = useState("harinath@gmail.com");
  const [password, setpassword] = useState("Harinath@123");
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [gender, setgender] = useState("")
  const [age,setage]=useState(0)
  const [about, setabout] = useState("This Is My Default About!")
  const [isLogin, setLogin] = useState(false)
  const [isshow , setshow]=useState(false)
  // const [shim,setshim]=useState(true)

  const [error, seterror] = useState("")
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  // const userdata = useSelector((store) => store.user)

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function isValidEmail(emailId) {
     return emailRegex.test(emailId);
     }

  const handlerlogin = async () => {
    try {
      // console.log("jkdshfhs")
      const res = await axios.post(BASE_URL + "/login", { emailId, password }, { withCredentials: true })
      dispatch(addUser(res.data))
       Navigate("/")
    }
    catch (err) {
  console.log("Login error:", err.response?.data || err.message);
  seterror("Invalid Credentials!");
}

  }

  const handlersingup = async () => {
  if (!firstName || !lastName || !emailId || !password) {
    seterror("Please fill all required fields!");
    return;
  }

  if(!isValidEmail(emailId))
  {
    seterror("Email Formate Is Not Corrrect!")
    return; 
  }

  try {
    const res = await axios.post(
      BASE_URL + "/signup",
      { firstName, lastName, emailId, password, about, age, gender },
      { withCredentials: true }
    );
    // console.log(res.data)
    if(res.data===5)
      {return seterror("Email Id Already Exist!")}

    seterror(""); // clear any old error
    setLogin(false); // switch to login view
    setshow(true); // show success toast
    setInterval(() => setshow(false), 3000); // hide after 4 sec
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
    seterror("Signup failed. Make sure all fields are filled correctly!");
  }
};



  return (
    
    <>
    {(isshow || error) && (
  <div className="toast toast-top toast-center z-50">
    <div className={`alert ${error ? "alert-error" : "alert-info"}`}>
      <span>{error ? error : "You Signed Up. Please Login"}</span>
    </div>
  </div>
)}



    <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl px-6">
        <div className="card bg-base-200 w-full max-w-sm shadow-lg rounded-2xl p-6">
          <div className="card-body">
            <fieldset className="flex flex-col text-base gap-2">
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
              {isLogin && (
                <>
                  <label className="text-white font-medium">First Name</label>
                  <input type="text" placeholder="abc" value={firstName} onChange={(e) => setfirstName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                  <label   className="text-white font-medium">Last Name</label>
                  <input type="text" placeholder="abc" value={lastName} onChange={(e) => setlastName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                <label   className="text-white font-medium">Age</label>
                  <input type="number" placeholder="123" value={age} onChange={(e) => setage(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                
                <div>
            <label className="block mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) =>{ setgender(e.target.value)}}
              className="w-full text-white px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
                </>
              )}
              <label className="text-white font-medium">Email</label>
              <input type="email" placeholder="abc123@gmail.com" value={emailId} onChange={(e) => setemailId(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

              <label className="text-white font-medium">Password</label>
              <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />



              {isLogin && (
                <>
                {isshow&&<Shimmer/>}
                  <div>
            <label className="block mb-1">About</label>
            <textarea
              value={about}
              onChange={(e) => setabout(e.target.value)}
              className="w-full h-24 px-3 py-2 border text-white border-gray-300 rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write something about yourself..."
            />
          </div>
                 </>)}

              <div className="mt-2">
                <Link onClick={() => {
                  setLogin(prev => !prev);
                  seterror("");  // clear old error
                   }} className="text-sm text-blue-600 hover:underline">

                  {isLogin ? "Already have an account? Login" : "New User? Sign Up"}
                </Link>
              </div>
              <button onClick={!isLogin ? handlerlogin : handlersingup}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200">
                {!isLogin ? "Login" : "Sign Up"}
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Login;
