// const Footer=()=>{
//     return (
//       <div className="flex px-[40%] bg-base-100 fixed bottom-0 mx-50">
//         <footer className=" footer footer-center rounded p-10 ">
//   <nav className="grid grid-flow-col gap-4">
//     <a className="link link-hover">About us</a>
//     <a className="link link-hover">Contact</a>
//     <a className="link link-hover">Jobs</a>
//     <a className="link link-hover">Press kit</a>
//   </nav>
//   <nav>
//     <div className="grid grid-flow-col gap-4">
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//         </svg>
//       </a>
//     </div>
//   </nav>
//   <aside>
//     {/* <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p> */}
//   </aside>
// </footer>
// </div>
//     )
// }
// export  default Footer


// const Footer = () => {
//   return (
//     <div className="flex justify-center bg-base-200 w-full mt-10">
//       <footer className="footer footer-center rounded p-10 w-full max-w-7xl">
//         <nav className="grid grid-flow-col gap-4 text-white">
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav>
//           <div className="grid grid-flow-col gap-4 text-gray-500">
//             <a>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
//                 <path d="M24 4.557c-..." />
//               </svg>
//             </a>
//             <a>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
//                 <path d="M19.615 3.184c-..." />
//               </svg>
//             </a>
//             <a>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
//                 <path d="M9 8h-3v4h3v12h5v..." />
//               </svg>
//             </a>
//           </div>
//         </nav>
//         <aside>
//           <p className="text-sm text-gray-500">
//             © {new Date().getFullYear()} DevTinder — All rights reserved.
//           </p>
//         </aside>
//       </footer>
//     </div>
//   )
// }

// export default Footer




// 



const Footer = () => {
  return (
    <div className="bg-base-200 w-full mt-10 flex justify-center">
      <footer className="footer footer-center rounded p-10 w-full max-w-7xl">
        <nav className="grid grid-flow-row sm:grid-flow-col gap-4 text-white text-center sm:text-left">
          <a className="link link-hover" href="#">About us</a>
          <a className="link link-hover" href="#">Contact</a>
          <a className="link link-hover" href="#">Jobs</a>
          <a className="link link-hover" href="#">Press kit</a>
        </nav>
        <nav className="mt-4 sm:mt-0">
          <div className="flex justify-center sm:justify-start gap-6 text-gray-500">
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482C7.69 8.587 4.067 6.678 1.64 3.641a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.062a4.922 4.922 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.937 4.937 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21-.004-.423-.014-.633A10.012 10.012 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.239 0 1 1.239 1 3v18c0 1.761 1.239 3 3 3h14c1.761 0 3-1.239 3-3V3c0-1.761-1.239-3-3-3zm-11 20H5V9h3v11zm-1.5-12.268C5.673 7.732 5 7.059 5 6.268 5 5.477 5.673 4.804 6.5 4.804c.827 0 1.5.673 1.5 1.464 0 .791-.673 1.464-1.5 1.464zM20 20h-3v-5.604c0-1.336-.026-3.06-1.865-3.06-1.868 0-2.155 1.46-2.155 2.964V20h-3V9h2.887v1.507h.041c.402-.763 1.385-1.565 2.85-1.565C19.156 8.942 20 10.413 20 13.051V20z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
              </svg>
            </a>
          </div>
        </nav>
        <aside className="mt-4 sm:mt-6">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} DevTinder — All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;





