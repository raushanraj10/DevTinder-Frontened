import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "./constant/BaseUrl"
import { removeUser } from "./utils/userSlice"

const Navbar=()=>{
  const dispatch=useDispatch();
  const Navigate=useNavigate()
  const handlelogout=async ()=>{
    try{
    await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
    dispatch(removeUser())
    Navigate("/login")
  }
  catch(err){
    console.log(err)
  }
  }
  const selector=useSelector((store)=>store.user)
  console.log(selector)
    return(
       <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {selector&&(<div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.pinimg.com/736x/92/59/72/92597243e069cd3feccc7fab97d1cbbd.jpg" />
        </div>)}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handlelogout}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}
export default Navbar