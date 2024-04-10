import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";
import DarkMode from "../components/ToggleDarkMode";

const Navbar = ({ref}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <nav className="sticky top-0 z-50 py-2 px-2 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 hover:cursor-pointer">
            <Link activeClass="active" smooth spy to="hero-section">
              <img className="h-12 w-16 ml-1" src={logo} alt="Logo" />
            </Link>
            {/* <span className="text-xl tracking-tight">VirtualR</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              // <li key={index}>
              //   <button onClick={()=> handleClick(item.href)}>{item.label}</button>
              //   {/* <FeatureSection ref={ref}/> */}
              //   {/* {ref && <FeatureSection ref={ref}/>} */}
              // </li>
              <Link activeClass="active" smooth spy to={item.href}>
                <button className="hover:text-[#fb0103] text-black dark:text-white">{item.label}</button>
              </Link>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a> */}
              <DarkMode/>
            <a
              href="https://api.whatsapp.com/send?phone=6287761514684"
              target="_blank"
              className="bg-gradient-to-r from-[#fb0103] to-orange-800 py-2 px-3 rounded-md text-white "
            >
              Hubungi Kami
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* <ul> */}
              {navItems.map((item, index) => (
                <Link className="py-4 hover:text-[#fb0103]" activeClass="active" smooth spy to={item.href}>
                  <button>{item.label}</button>
                </Link>
              ))}
            {/* </ul> */}
            {/* <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-[#fb0103] to-orange-800"
              >
                Create an account
              </a>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
