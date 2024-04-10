import { forwardRef } from "react";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-black dark:text-white">
        PT. BERKAH INDO
        <span className="bg-gradient-to-r from-[#fb0103] to-red-800 text-transparent bg-clip-text">
          {" "}
          RATAMA
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Merupakan Perusahaan yang Menyediakan Layanan Pengurusan Legalitas
        Terlengkap, Tercepat dan Terpercaya
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://api.whatsapp.com/send?phone=6287761514684"
          target="_blank"
          className="bg-gradient-to-r from-[#fb0103] to-orange-800 py-3 px-4 mx-3 rounded-md text-white dark:text-white"
        >
          Konsultasi
        </a>
        <a href="src\assets\file\COMPRO PT Berkah Indo Ratama.pdf" target="_blank" className="py-3 px-4 mx-3 rounded-md border bg-black text-white dark:text-white">
          Company Profile
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-gray-500 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-gray-500 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={vid2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
