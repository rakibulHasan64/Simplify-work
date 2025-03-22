import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Naber() {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   const closeSidebar = () => {
      setSidebarOpen(false);
   };

   return (
      <div className="bg-black relative">
         <div className="container mx-auto py-6">
            <nav className="flex justify-between items-center">
               <h2 className="text-[28px] font-mono text-[#fc6f03]">MUAI</h2>

               <div className="hidden md:flex">
                  <ul className="flex justify-center items-center gap-6">
                     <li className="text-[18px] font-sans text-white">Home</li>
                     <li className="text-[18px] font-sans text-white">Pricing</li>
                     <li className="text-[18px] font-sans text-white">About</li>
                     <li className="text-[18px] font-sans text-white">Contact</li>
                  </ul>
               </div>

               <button className="bg-[#FF5A33] font-medium text-white px-10 py-3 rounded-tl-full rounded-br-full">
                  Get Started
               </button>

               {/* Mobile menu icon */}
               <div className="md:hidden">
                  <button onClick={toggleSidebar}>
                     {sidebarOpen ? (
                        <FaTimes className="text-white text-3xl" />
                     ) : (
                        <FaBars className="text-white text-3xl" />
                     )}
                  </button>
               </div>
            </nav>
         </div>

         {/* Overlay (background darkening when sidebar is open) */}
         {sidebarOpen && (
            <div
               onClick={closeSidebar}
               className="fixed inset-0 bg-black opacity-50 z-10"
            ></div>
         )}

         {/* Sidebar */}
         <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#30FB81] text-black shadow-lg transform transition-all duration-300 ease-in-out z-20 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
               }`}
         >
            <ul className="flex flex-col justify-center items-center gap-6 py-20">
               <li className="text-[18px] font-sans">Home</li>
               <li className="text-[18px] font-sans">Pricing</li>
               <li className="text-[18px] font-sans">About</li>
               <li className="text-[18px] font-sans">Contact</li>
            </ul>
         </div>
      </div>
   );
}

export default Naber;
