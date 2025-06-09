const CardConnect =({connectionsdata})=>{
    // console.log(connectionsdata.firstName)
    const {firstName,lastName,about,photourl,skills,gender,age}=connectionsdata
    return (
<div className="w-96 h-[500px] bg-slate-300 rounded-2xl">
  <figure>
    <img className="w-96 h-80 rounded-md"
      src={photourl}
      alt="pic" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black">
      {firstName} {lastName}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p className="text-black">{gender}</p>
     <p className="text-black">{age}</p>
      <p className="text-black">{skills.join(",   ")}</p>
       <p className="text-black">{about}</p>
    {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div> */}
  </div>
</div>
    )
}
export default CardConnect