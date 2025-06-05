import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./constant/BaseUrl";

const Login=()=>{
    const [emailId,setemailId]=useState("radha@gmail.com");
    const [password,setpassword]=useState("Radha@123");
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const handlerlogin=async ()=>{
        try{
        const res=await axios.post(BASE_URL+"/login",{emailId,password},{withCredentials:true})
        dispatch(addUser(res.data))
        return Navigate("/")

    
    }
        catch(err){
            console.log(err.messsge)
        }
   
    }
    return(
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div> */}
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" value={emailId} className="input" onChange={(ele)=>{setemailId(ele.target.value)}} />
          <label className="label">Password</label>
          <input type="password" value={password} className="input" onChange={(ele)=>{setpassword(ele.target.value)}} />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button onClick={handlerlogin} className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    )
}
export default Login