import { forwardRef } from "react";
import { layanan } from "../constants";

const LayananSection = () => {
  return (
    <section id="layanan-section">
      <div className="relative mt-20 dark:border-b dark:border-neutral-800 border-white min-h-[800px]">
        <div className="text-center">
          <span className=" text-[#fb0103] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            {/* Feature */}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-black dark:text-white">
              LAYANAN {" "}
            <span className="bg-gradient-to-r from-[#fb0103] to-orange-800 text-transparent bg-clip-text">
              KAMI 
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {layanan.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl text-black dark:text-white">{item.text}</h5>
                  <p className="text-md p-2 mb-20 dark:text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananSection;
