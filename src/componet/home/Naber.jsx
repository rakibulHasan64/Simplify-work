
function Naber() {
   return (
      <>
         
         <div className="bg-black">
            <div className="container mx-auto py-6 ">
               <nav className="flex justify-between items-center ">
                  <h2 className="text-[28px] font-mono text-[#fc6f03]">MUAI</h2>
                  <div className="">
                     <ul className="flex justify-center items-center gap-6">
                        <li className="text-[18px] font-sans text-white">Home</li>

                        <li className="text-[18px] font-sans text-white">Princing</li>
                        <li className="text-[18px] font-sans text-white">About</li>
                        <li className="text-[18px] font-sans text-white">Contact</li>

                     </ul>
                  </div>

                  <button className="bg-[#FF5A33] font-medium  text-white px-10 py-3  rounded-tl-full rounded-br-full">
                     Get Started
                  </button>

               </nav>

            </div>
         </div>
         
      </>
   );
}

export default Naber;