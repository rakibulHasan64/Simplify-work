
function Banner() {
   return (
      <>
         
         <div className="bg-black">
            <div className="container mx-auto py-52 ">

               <div className="text-white flex flex-col gap-8 justify-center items-center">
                  
                  <h3 className="text-3xl md:text-[48px] font-mono text-center">Simplify your work<br />
                        with AI tool</h3>

                  <p className="text-[18px] text-center">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave,<br /> the open AI chat app.</p>

                  
                  <div className="flex flex-col md:flex-row items-center gap-4 mt-3 justify-center">
                     <button className="bg-[#FF5A33] font-medium  text-white px-10 py-4  rounded-tl-full rounded-br-full">
                        Get Started Free
                     </button>

                     <button className=" hover:bg-[#FF5A33] border-2 text-[#FF5A33] hover:text-white border-[#FF5A33] font-medium   px-10 py-4  rounded-tl-full rounded-br-full">
                        Explore Feature
                     </button>
                  </div>
               </div>

            </div>
         </div>
         
      </>
   );
}

export default Banner;