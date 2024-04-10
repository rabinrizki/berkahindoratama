import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import  bukti  from "../assets/file/bukti.jpg"
import { checklistItems } from "../constants";

const Client = () => {
  return (
    <section id="client-section">
      <div className="relative mt-20 dark:border-b dark:border-neutral-800 border-white min-h-[800px]">
        <span className="text-[#fb0103] rounded-full h-8 text-sm text-center font-medium px-2 py-4 uppercase">
          {/* Feature */}
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-10 lg:mt-24 tracking-wide text-black dark:text-white">
          Bukti Kerja Sama Antar{" "}
          <span className="bg-gradient-to-r from-[#fb0103] to-orange-800 text-transparent bg-clip-text">
            Client
          </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="p-6 lg:w-1/2">
            <img className="h-[60%] w-[100%]" src={bukti} alt="Bukti" />
          </div>
          <div className="pt-6 lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl text-black dark:text-white">{item.title}</h5>
                  <p className="text-md dark:text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
