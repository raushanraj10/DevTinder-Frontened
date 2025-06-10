// const CardConnect =({connectionsdata})=>{
//     // console.log(connectionsdata.firstName)
//     const {firstName,lastName,about,photourl,skills,gender,age}=connectionsdata
//     return (
// <div className="w-96 h-[500px] bg-slate-300 rounded-2xl">
//   <figure>
//     <img className="w-96 h-80 rounded-md"
//       src={photourl}
//       alt="pic" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title text-black">
//       {firstName} {lastName}
//       {/* <div className="badge badge-secondary">NEW</div> */}
//     </h2>
//     <p className="text-black">{gender}</p>
//      <p className="text-black">{age}</p>
//       <p className="text-black">{skills.join(",   ")}</p>
//        <p className="text-black">{about}</p>
//     {/* <div className="card-actions justify-end">
//       <div className="badge badge-outline">Fashion</div>
//       <div className="badge badge-outline">Products</div>
//     </div> */}
//   </div>
// </div>
//     )
// }
// export default CardConnect




const CardConnect = ({ connectionsdata }) => {
    // console.log(connectionsdata.firstName)
    const { firstName, lastName, about, photourl, skills, gender, age } = connectionsdata
    return (
        <div className="w-96 h-[500px] bg-base-200 rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <figure>
                <img
                    className="w-full h-80 object-cover rounded-t-3xl"
                    src={photourl}
                    alt="pic"
                />
            </figure>
            <div className="p-4 flex flex-col gap-2 text-white">
                <h2 className="text-xl font-bold text-center">{firstName} {lastName}</h2>
                <p className="text-sm"><span className="font-semibold">Gender:</span> {gender}</p>
                <p className="text-sm"><span className="font-semibold">Age:</span> {age}</p>
                {/* <p className="text-sm"><span className="font-semibold">Skills:</span> {skills.join(", ")}</p> */}
                <p className="text-sm"><span className="font-semibold">About:</span> {about}</p>
            </div>
        </div>
    )
}
export default CardConnect
