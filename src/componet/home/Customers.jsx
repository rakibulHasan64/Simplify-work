
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Customers() {
   const reviews = [
      {
         id: 1,
         name: 'John Doe',
         review: 'This is an amazing product! I highly recommend it to everyone.',
         image: '/Image (1).png',
      },
      {
         id: 2,
         name: 'Jane Smith',
         review: 'Fantastic quality and great customer service. Will buy again.',
         image: '/Image (2).png',
      },
      {
         id: 3,
         name: 'Alex Johnson',
         review: 'The product exceeded my expectations. Excellent value for money!',
         image: '/public/Image (3).png',
      },
   ];

   const [currentReview, setCurrentReview] = useState(0);

   const nextReview = () => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
   };

   const prevReview = () => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
   };

   return (
      <div className="">
         <div className="bg-green-500">
            <div className="bg-black rounded-tl-full rounded-br-full">
               <div className="container mx-auto py-20">
                  <h2 className="text-3xl text-white font-semibold text-center mb-8">Customer Reviews</h2>
                  <div className="text-white flex justify-center items-center">
                     <button
                        onClick={prevReview}
                        className="text-black hover:text-[#FF5A33] p-4 rounded-full bg-white shadow-md transition-all duration-200"
                     >
                        <FaChevronLeft />
                     </button>

                     <div className="text-center px-8">
                        <img
                           className="w-24 h-24 rounded-full mx-auto mb-4"
                           src={reviews[currentReview].image}
                           alt={reviews[currentReview].name}
                        />
                        <h3 className="font-semibold text-lg">{reviews[currentReview].name}</h3>
                        <p className="text-white mt-2">{reviews[currentReview].review}</p>
                     </div>

                     <button
                        onClick={nextReview}
                        className="text-gray-700 hover:text-[#FF5A33] p-4 rounded-full bg-white shadow-md transition-all duration-200"
                     >
                        <FaChevronRight />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Customers;
