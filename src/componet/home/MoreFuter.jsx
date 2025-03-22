import { FaUsers, FaRocket, FaShieldAlt, FaChartLine, FaCog, FaLightbulb, FaDatabase } from "react-icons/fa";

function MoreFuter() {
   const features = [
      {
         id: "1",
         icon: <FaRocket />,
         color: "#FF6B6B",
         name: "Fast Performance",
         title: "Enables users to locate solutions to their inquiries without browsing numerous resources."
      },
      {
         id: "2",
         icon: <FaShieldAlt />,
         color: "#A56DFF",
         name: "Secure Data",
         title: "The app uses natural language processing to understand user queries and provide accurate and relevant responses."
      },
      {
         id: "3",
         icon: <FaChartLine />,
         color: "#FFA500",
         name: "Analytics & Insights",
         title: "The app uses natural language processing to understand user queries and provide accurate and relevant responses."
      },
      {
         id: "4",
         icon: <FaCog />,
         color: "#30CAFB",
         name: "Customization",
         title: "The app uses natural language processing to understand user queries and provide accurate and relevant responses."
      },
      {
         id: "5",
         icon: <FaLightbulb />,
         color: "#FB5530",
         name: "AI-Powered Assistance",
         title: "The app uses natural language processing to understand user queries and provide accurate and relevant responses."
      },
      {
         id: "6",
         icon: <FaDatabase />,
         color: "#30FB81",
         name: "Scalable Storage",
         title: "Connect with the AI tool from anywhere, on any device, making it more accessible and convenient."
      }
   ];

   return (
      <div className="bg-blue-900 sm:bg-blue-700 py-16 px-4">
         <div className="sm:bg-blue-600 rounded-tl-full rounded-br-full">
            <div className="sm:bg-red-500 py-20 rounded-tl-full rounded-br-full">
               <div className="sm:bg-fuchsia-500 rounded-bl-full rounded-tr-full py-10">
                  <div className="bg-blue-800 sm:bg-green-500 sm:rounded-tl-full sm:rounded-br-full">
                     <div className="container mx-auto max-w-7xl py-16 px-6">
                        <h2 className="text-3xl md:text-5xl font-mono text-center text-white">
                           More Features
                        </h2>
                        <p className="text-lg text-center mt-3 text-white">
                           These are a few of the key features of AITool that distinguish it from other AI platforms.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
                           {features.map((feature) => (
                              <div key={feature.id} className="py-6 shadow-lg p-6 rounded-xl bg-gray-800">
                                 <div className="flex flex-col items-center text-center gap-4">
                                    <h3
                                       className="text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl"
                                       style={{ backgroundColor: feature.color }}
                                    >
                                       {feature.icon}
                                    </h3>
                                    <h3 className="text-2xl font-semibold text-white">{feature.name}</h3>
                                    <p className="text-white">{feature.title}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MoreFuter;
