import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "./constant/BaseUrl"
import { removeUser } from "./utils/userSlice"
import { removefeed, removeUserFromFeed } from "./utils/feedSlice"
import { removeconnection } from "./utils/connectSlice"
import { removerequestnull } from "./utils/requestSlice"

const Navbar=()=>{
  const dispatch=useDispatch();
  const Navigate=useNavigate()
   const selector=useSelector((store)=>store.user)
  const handlelogout=async ()=>{
    try{
    await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
    dispatch(removeUser())
    dispatch(removeconnection())
    dispatch(removerequestnull())
    dispatch(removefeed())
   return  Navigate("/login")
    // window.location.href = "/login";
  }
  catch(err){
    // console.log(err)
  }
  }
 
  // console.log(selector)
    return(
       <div className="navbar bg-base-200 shadow-sm flex justify-between ">
  <div className="">
    {selector?<Link to="/" className="btn btn-ghost text-3xl">DevTinder</Link>:<a className="btn btn-ghost text-3xl">DevTinder</a>}
  </div>
  <div className="">
    {/* <input type="text" placeholder="Search" className="input input-bordered h-50 md:w-auto" /> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {selector&&
          <div className=" flex w-10 rounded-full">
          <img className="flex"
            alt="Tailwind CSS Navbar component"
            src={selector.photourl} />
        </div>}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-2xl">
         <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/profile" className="justify-between">
            Profile   
          </Link>
          
        </li>
    
        
         <li><Link to="/friends" >Friend</Link></li>
        <li><Link to="/request" >Request</Link></li>
        <li><a onClick={()=>handlelogout()}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}
export default Navbar