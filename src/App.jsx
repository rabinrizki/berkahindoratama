import Navbar from "./views/Navbar";
import HeroSection from "./views/HeroSection";
import LayananSection from "./views/LayananSection";
import Client from "./views/Client";
import Footer from "./views/Footer";
// import Pricing from "./views/Pricing";
// import Testimonials from "./views/Testimonials";
import TentangKami from "./views/TentangKami";
import Keunggulan from "./views/Keunggulan";
// import WhatsappButton from "./components/ButtonWa";
import Whatsapp from "./views/WhatsApp";

const App = () => {
  return (
    <>
      <div className="dark:bg-black">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6 ">
          <HeroSection />
          <TentangKami />
          <Keunggulan />
          <LayananSection />
          <Client />
          <Whatsapp/>
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
        </div>
      <Footer />
      </div>
  </>
  );
};

export default App;
