import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import DarkMode from "../components/ToggleDarkMode";

const Navbar = ({ref}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(true);
  const [dark, setDark] = useState(false)
  const [ligth, setLigth] = useState(false)

//  let bool = null
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
   localStorage.theme == 'dark' ? setDark(true) : setLigth(true) 
   
  }, []);

  const toggle = () => {
    dark ? setDark(false) : setDark(true) 
    ligth ? setLigth(false) : setLigth(true) 
  }

  // console.log(dark, "dark");
  // console.log(ligth, 'ligth');

  return (
    <nav className="sticky top-0 z-50 py-2 px-1 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-1 mx-auto relative lg:text-sm">
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
              <button onClick={toggle}>
                <DarkMode size={20}/>
              </button>
            <a
              href="https://api.whatsapp.com/send?phone=6287761514684"
              target="_blank"
              className="bg-gradient-to-r from-[#fb0103] to-orange-800 py-2 px-3 rounded-md text-white "
            >
              Hubungi Kami
            </a>
          </div>
          <div className="lg:hidden flex justify-between">
            <div className=" mt-3.5">
              <button onClick={toggle}>
                <DarkMode size={20}/>
              </button>
            </div>
            <div>
              {
                dark && <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <Hamburger size={18} color="#FFFFFF"/> : <Hamburger size={18} color="#FFFFFF"/> }
                </button>
              }
               {
                ligth && <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <Hamburger size={18} color="#000000"/> : <Hamburger size={18} color="#000000"/> }
                </button>
              }
            </div>
          </div>
        </div>
        {!mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* <ul> */}
              {navItems.map((item, index) => (
                <Link className="py-4 hover:text-[#fb0103] text-white" activeClass="active" smooth spy to={item.href}>
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
