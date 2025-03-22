import { BsArrowRight } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";


function News() {
   return (
      <>
         
         <div className="bg-indigo-600">
            <div className="bg-black   rounded-tr-full rounded-bl-full">

               <div className="container mx-auto py-20">
                  <div className="flex items-center justify-center mx-auto">
                     <button className="bg-[#FF5A33] flex items-center gap-3 font-medium text-white px-16 py-4 rounded-tl-full rounded-br-full mb-4 transition-all duration-200 hover:bg-[#FF3D1F] hover:scale-105">
                        News <BsArrowRight />
                     </button>
                  </div>


                  <h3 className="text-2xl sm:text-7xl text-white font-bold text-center ">Discover the latest news.</h3>
                  <p className="text-center text-lg font-bold text-gray-100 mt-4">Stay informed and inspired with valuable insights for business growth.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20 py-20 px-4 md:px-6">
                     <div className="border-[1px] border-gray-300 py-5 bg-white shadow-2xl rounded-2xl hover:shadow-2xl transition-all">
                        <div className="p-5">
                           <img className="w-full rounded-t-2xl" src="/Image (2).png" alt="Image" />
                           <button className="text-sm bg-[#FF5A33] text-white px-4 py-2 rounded-full mt-4 mb-4">New</button>
                           <h2 className="text-xl font-semibold text-gray-900 mb-3">Unleash the Power of Advanced Analytics</h2>
                           <p className="text-gray-700 mb-4">Modern and minimal clean personal portfolio template for Framer.</p>

                           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                              <button className="text-[#FF5A33] font-medium flex items-center gap-3 hover:bg-[#FF5A33] hover:text-white border border-[#FF5A33] px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105">
                                 2 Minutes Ago <BsArrowRight className="text-3xl" />
                              </button>

                              <button className="bg-[#FF5A33] flex items-center gap-3 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:bg-orange-600 hover:scale-105">
                                 Read Now <BsArrowRight className="text-3xl" />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="border-[1px] border-gray-300 py-5 bg-white shadow-2xl rounded-2xl hover:shadow-2xl transition-all">
                        <div className="p-5">
                           <img className="w-full rounded-t-2xl" src="/Image (3).png" alt="Image" />
                           <button className="text-sm bg-[#FF5A33] text-white px-4 py-2 rounded-full mt-4 mb-4">New</button>
                           <h2 className="text-xl font-semibold text-gray-900 mb-3">Unleash the Power of Advanced Analytics</h2>
                           <p className="text-gray-700 mb-4">Modern and minimal clean personal portfolio template for Framer.</p>

                           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                              <button className="text-[#FF5A33] font-medium flex items-center gap-3 hover:bg-[#FF5A33] hover:text-white border border-[#FF5A33] px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105">
                                 2 Minutes Ago <BsArrowRight className="text-3xl" />
                              </button>

                              <button className="bg-[#FF5A33] flex items-center gap-3 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:bg-orange-600 hover:scale-105">
                                 Read Now <BsArrowRight className="text-3xl" />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="border-[1px] border-gray-300 py-5 bg-white shadow-2xl rounded-2xl hover:shadow-2xl transition-all">
                        <div className="p-5">
                           <img className="w-full rounded-t-2xl" src="/Image (1).png" alt="Image" />
                           <button className="text-sm bg-[#FF5A33] text-white px-4 py-2 rounded-full mt-4 mb-4">New</button>
                           <h2 className="text-xl font-semibold text-gray-900 mb-3">Unleash the Power of Advanced Analytics</h2>
                           <p className="text-gray-700 mb-4">Modern and minimal clean personal portfolio template for Framer.</p>

                           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                              <button className="text-[#FF5A33] font-medium flex items-center gap-3 hover:bg-[#FF5A33] hover:text-white border border-[#FF5A33] px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105">
                                 2 Minutes Ago <BsArrowRight className="text-3xl" />
                              </button>

                              <button className="bg-[#FF5A33] flex items-center gap-3 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:bg-orange-600 hover:scale-105">
                                 Read Now <BsArrowRight className="text-3xl" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>






               </div>

            </div>
      </div>
         
      </>
   );
}

export default News;


 