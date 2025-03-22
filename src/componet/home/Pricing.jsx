import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
   {
      id: 1,
      name: "Regular",
      price: { monthly: "$6", yearly: "$190" },
      features: ["Access All Products", "Access Future Products", "Access to VIP Products", "Access Basic Data"],
   },
   {
      id: 2,
      name: "Basic",
      price: { monthly: "$993", yearly: "$490" },
      features: ["Access All Products", "Access Future Products", "Access to VIP Products", "Access Basic Data"],
   },
   {
      id: 3,
      name: "VIP Premium",
      price: { monthly: "$339", yearly: "$3,990" },
      features: ["Access All Products", "Access Future Products", "Access to VIP Products", "Access Premium Features"],
   },
];

function Pricing() {
   const [billingCycle, setBillingCycle] = useState("monthly");

   
   

   return (
      <div className="bg-black">
         <div className="container mx-auto px-4 py-28">
            <h2 className="text-4xl font-bold text-center text-white">Pricing</h2>
            <p className="text-center mt-2 text-white">
               Begin employing AITool - AI technology today and feel the influence of AI in your workflow!
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mt-6">
               <div className="bg-gray-200 p-4 rounded-full flex gap-2">
                  <button
                     className={`px-6 py-2 rounded-tl-full rounded-br-full transition-all duration-300 ease-in-out ${billingCycle === "monthly" ? "bg-green-600 text-white shadow-lg scale-105" : "text-gray-700 hover:bg-gray-300"} `}
                     onClick={() => setBillingCycle("monthly")}
                  >
                     Monthly
                  </button>
                  <button
                     className={`px-6 py-2 rounded-tl-full rounded-br-full transition-all duration-300 ease-in-out ${billingCycle === "yearly" ? "bg-orange-500 text-white shadow-lg scale-105" : "text-gray-700 hover:bg-gray-300"}`}
                     onClick={() => setBillingCycle("yearly")}
                  >
                     Yearly
                  </button>
               </div>
            </div>


            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
               {plans.map((plan) => (
                  <div
                     key={plan.id}
                     className="bg-orange-500 text-white rounded-2xl p-8 py-16 shadow-lg hover:scale-105 transition-transform"
                  >
                     <h3 className="text-2xl font-bold">{plan.name}</h3>
                     <p className="text-3xl font-semibold mt-2">{plan.price[billingCycle]}/ Month</p>

                     <ul className="mt-4 space-y-3">
                        {plan.features.map((feature, index) => (
                           <li key={index} className="flex items-center gap-2">
                              <FaCheckCircle className="text-white text-lg" />
                              {feature}
                           </li>
                        ))}
                     </ul>

                     <button className="bg-white text-orange-500 font-semibold  w-full mt-6 py-4 rounded-tl-full rounded-br-full  hover:bg-gray-100 transition">
                        Browse Products
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Pricing;
