// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../constants";

// const Pricing = () => {
//   return (
//     <section id="pricing">
//       <div className="relative mt-20 dark:border-b dark:border-neutral-800  border-white min-h-[800px]">
//         <span className="text-[#fb0103] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
//           {/* Feature */}
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 mt-10 lg:mt-20 mb-10 tracking-wide text-black dark:text-white">
//           Pricing
//         </h2>
//         <div className="flex flex-wrap">
//           {pricingOptions.map((option, index) => (
//             <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
//               <div className="p-10 border border-neutral-700 rounded-xl">
//                 <p className="text-4xl mb-8 text-black dark:text-white">
//                   {option.title}
//                   {option.title === "Pro" && (
//                     <span className="bg-gradient-to-r from-[#fb0103] to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
//                       (Most Popular)
//                     </span>
//                   )}
//                 </p>
//                 <p className="mb-6">
//                   <span className="text-5xl mt-6 mr-2 text-black dark:text-white">{option.price}</span>
//                   <span className="dark:text-neutral-400 tracking-tight">/Month</span>
//                 </p>
//                 <ul>
//                   {option.features.map((item, index) => (
//                     <li key={index} className="mt-6 flex items-center">
//                       {/* <CheckCircle2 /> */}
//                       <span className="ml-2 text-black dark:text-white">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a
//                   href="#"
//                   className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl dark:hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200 text-white hover:bg-opacity-200 bg-[#fb0103]"
//                 >
//                   Subscribe
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
