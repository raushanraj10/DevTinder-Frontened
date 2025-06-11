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

import Chat from "./ChatBox";




// const CardConnect = ({ connectionsdata }) => {
//     // console.log(connectionsdata.firstName)
//     const { firstName, lastName, about, photourl, skills, gender, age } = connectionsdata
//     return (
//         <div className="w-96 h-[500px] bg-base-200 rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
//             <figure>
//                 <img
//                     className="w-full h-80 object-cover rounded-t-3xl"
//                     src={photourl}
//                     alt="pic"
//                 />
//             </figure>
//             <div className="p-4 flex flex-col gap-2 text-white">
//                 <h2 className="text-xl font-bold text-center">{firstName} {lastName}</h2>
//                 <p className="text-sm"><span className="font-semibold">Gender:</span> {gender}</p>
//                 <p className="text-sm"><span className="font-semibold">Age:</span> {age}</p>
//                 {/* <p className="text-sm"><span className="font-semibold">Skills:</span> {skills.join(", ")}</p> */}
//                 <p className="text-sm"><span className="font-semibold">About:</span> {about}</p>
//             </div>
//         </div>
//     )
// }
// export default CardConnect



// const CardConnect = ({ connectionsdata }) => {
//     const { firstName, lastName, about, photourl, skills, gender, age } = connectionsdata;

//     return (
//         <div className="w-full sm:w-80 md:w-96 bg-base-200 rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
//             <figure className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
//                 <img
//                     className="w-full h-full object-cover"
//                     src={photourl}
//                     alt="profile"
//                 />
//             </figure>
//             <div className="p-4 flex flex-col gap-2 text-white">
//                 <h2 className="text-lg sm:text-xl font-bold text-center">{firstName} {lastName}</h2>
//                 <p className="text-sm"><span className="font-semibold">Gender:</span> {gender}</p>
//                 <p className="text-sm"><span className="font-semibold">Age:</span> {age}</p>
//                 <p className="text-sm"><span className="font-semibold">About:</span> {about}</p>
//             </div>
//         </div>
//     );
// };

// export default CardConnect;






// const CardConnect = ({ connectionsdata }) => {
//     const { firstName, lastName, about, photourl, gender, age } = connectionsdata;

//     return (
//         <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-base-200 rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
//             <figure className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
//                 <img
//                     className="w-full h-full object-cover"
//                     src={photourl}
//                     alt="profile"
//                 />
//             </figure>
//             <div className="p-4 flex flex-col gap-2 text-white text-center">
//                 <h2 className="text-lg sm:text-xl font-bold">{firstName} {lastName}</h2>
//                 <p className="text-sm"><span className="font-semibold">Gender:</span> {gender}</p>
//                 <p className="text-sm"><span className="font-semibold">Age:</span> {age}</p>
//                 <p className="text-sm"><span className="font-semibold">About:</span> {about}</p>
//             </div>
//         </div>
//     );
// };

// export default CardConnect;






// const CardConnect = ({ connectionsdata, onMessageClick }) => {
//     const { firstName, lastName, about, photourl, gender, age } = connectionsdata;

//     return (
//         <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-base-200 rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
//             <figure className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
//                 <img
//                     className="w-full h-full object-cover"
//                     src={photourl}
//                     alt="profile"
//                 />
//             </figure>
//             <div className="p-4 flex flex-col gap-2 text-white text-center">
//                 <h2 className="text-lg sm:text-xl font-bold">{firstName} {lastName}</h2>
//                 <p className="text-sm"><span className="font-semibold">Gender:</span> {gender}</p>
//                 <p className="text-sm"><span className="font-semibold">Age:</span> {age}</p>
//                 <p className="text-sm"><span className="font-semibold">About:</span> {about}</p>
//                 <div className="mt-4 flex justify-center">
//                     <button 
//                         onClick={() => onMessageClick(firstName, lastName)}
//                         className="bg-blue-900 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold text-white shadow-md"
//                     >
//                         Message
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardConnect;






// const CardConnect = ({ connectionsdata, onMessageClick }) => {
//     const { firstName, lastName, about, photourl, gender, age } = connectionsdata;

//     return (
//         <div className="w-72 bg-base-200 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
//             <figure className="w-full h-40 overflow-hidden">
//                 <img
//                     className="w-full h-full object-cover"
//                     src={photourl}
//                     alt="profile"
//                 />
//             </figure>
//             <div className="p-2 flex flex-col gap-1 text-white text-center">
//                 <h2 className="text-sm font-bold">{firstName} {lastName}</h2>
//                 <p className="text-xs"><span className="font-semibold">Gender:</span> {gender}</p>
//                 <p className="text-xs"><span className="font-semibold">Age:</span> {age}</p>
//                 <p className="text-xs line-clamp-3"><span className="font-semibold">About:</span> {about}</p>
//                 <div className="mt-2 flex justify-center">
//                     <button 
//                         onClick={() => onMessageClick(firstName, lastName)}
//                         className="bg-blue-900 hover:bg-blue-600 px-3 py-1 text-xs rounded font-medium text-white shadow"
//                     >
//                         Message
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardConnect;




// const CardConnect = ({ connectionsdata, onMessageClick }) => {
//     const { firstName, lastName, about, photourl, gender, age } = connectionsdata;

//     return (
//         <div className="w-full max-w-[240px] sm:max-w-xs md:max-w-sm bg-base-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
//             <figure className="w-full h-40 sm:h-48 md:h-56 overflow-hidden">
//                 <img
//                     className="w-full h-full object-cover"
//                     src={photourl}
//                     alt={`${firstName} ${lastName}`}
//                 />
//             </figure>
//             <div className="p-3 sm:p-4 flex flex-col gap-1.5 text-white text-center">
//                 <h2 className="text-base sm:text-lg font-bold truncate">{firstName} {lastName}</h2>
//                 <p className="text-xs sm:text-sm"><span className="font-semibold">Gender:</span> {gender}</p>
//                 <p className="text-xs sm:text-sm"><span className="font-semibold">Age:</span> {age}</p>
//                 <p className="text-xs sm:text-sm line-clamp-2"><span className="font-semibold">About:</span> {about}</p>
//                 <div className="mt-3 flex justify-center">
//                     <button 
//                         onClick={() => onMessageClick(firstName, lastName)}
//                         className="bg-blue-900 hover:bg-blue-600 px-4 py-1.5 rounded-md font-medium text-xs sm:text-sm text-white shadow"
//                     >
//                         Message
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardConnect;


// import Chat from "./ChatBox";
const CardConnect = ({ connectionsdata, onMessageClick }) => {
    const { firstName, lastName, about, photourl, gender, age } = connectionsdata;

    return (
        <div className="w-full max-w-[220px] bg-base-200 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto ">
            <figure className="w-full h-36 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={photourl}
                    alt={`${firstName} ${lastName}`}
                />
            </figure>
            <div className="p-3 flex flex-col gap-1 text-white text-center text-xs">
                <h2 className="text-sm font-bold truncate">{firstName} {lastName}</h2>
                <p><span className="font-semibold">Gender:</span> {gender}</p>
                <p><span className="font-semibold">Age:</span> {age}</p>
                <p className="line-clamp-2"><span className="font-semibold">About:</span> {about}</p>
                <div className="mt-2 flex justify-center">
                    <button onclick={<Chat/>}
                        onClick={() => onMessageClick(firstName, lastName)}
                        className="bg-blue-900 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-xs font-medium shadow"
                    >
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardConnect;







