import { FaStar, FaCheckCircle, FaChartLine } from "react-icons/fa";

function Experience() {
   return (
      <div className="bg-amber-400">
         <div className="bg-black   rounded-tl-full rounded-br-full">
            <div className="container mx-auto py-20 px-4">
               <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                  {/* Image Section */}
                  <div className="lg:w-1/2 flex justify-center">
                     <img src="/Image.png" alt="Experience" className="w-full max-w-md rounded-lg shadow-lg" />
                  </div>

                  {/* Text Section */}
                  <div className="lg:w-1/2">
                     <h2 className="text-white text-3xl md:text-5xl font-mono text-center lg:text-left">
                        Delightful User Experience
                     </h2>

                     <div className="mt-6 space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4">
                           <h3 className="bg-[#46D3FF] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                              <FaStar />
                           </h3>
                           <div className="space-y-2">
                              <h2 className="text-xl font-bold text-white ">Premium Access</h2>
                              <p className="text-lg text-white ">Get exclusive features with our premium plan.</p>
                           </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4">
                           <h3 className="bg-[#FF6B6B] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                              <FaCheckCircle />
                           </h3>
                           <div className="space-y-2">
                              <h2 className="text-xl text-white ">Professional Tools</h2>
                              <p className="text-lg text-white ">Advanced tools to optimize your workflow efficiently.</p>
                           </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4">
                           <h3 className="bg-[#A56DFF] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                              <FaChartLine />
                           </h3>
                           <div className="space-y-2">
                              <h2 className="text-xl font-bold text-white ">Growth Analytics</h2>
                              <p className="text-lg text-white ">Track trends and improve performance with insights.</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
}

export default Experience;

