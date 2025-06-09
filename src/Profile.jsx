import { useSelector } from "react-redux"
import EditProfile from "./Editprofile"
import UserCard from "./userCard"


const Profile =()=>{
    const data=useSelector((store)=>store.user)
    // console.log(data)
    return (data&&
        <div >
        <div >{<EditProfile user={data}/>}
        </div>
        </div>
    )
}
export default Profile