import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import  logo  from "../assets/logo.png"
import Map from "../helpers/Maps";
import FormContact from "../components/FormContact";

const Footer = () => {
  return (
    <footer className="mt-20 dark:border-t py-10 dark:border-neutral-900 bg-neutral-900">
      <div className="flex flex-wrap justify-center lg:grid grid-cols-3 gap-3 mt-4">
        <div className="w-[80%] lg:ml-10 px-4 py-2">
          <img className="h-[6rem] w-[12rem] ml-3" src={logo} alt="Logo" />
          <h3 className="lg:text-2xl mb-4 mt-2 text-white">PT BERKAH INDO RATAMA </h3>
          <h3 className="lg:text-lg mb-6 mt-4 leading-relaxed text-justify text-white">Jl. Jatinegara Kaum No 8A Kelurahan Jatinegara Kaum Kecamatan Pulo Gadung Jakarta Timur 13250.</h3>
          <table className="dark:text-neutral-300 dark:hover:text-white text-md text-white">
            <tr className="mb-12">
                <td>Phone</td>
                <td>:</td>
                <td>+62 877-6151-4684</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>:</td>
                <td>cutfarin17@gmail.com</td>
            </tr>
          </table>
        </div>
        {/* <div>
          <h3 className="text-lg mb-4 mt-4">PT BERKAH INDO RATAMA </h3>
          <h3 className="text-md mb-4 mt-4">Jl. Jatinegara Kaum No 8A Kelurahan Jatinegara Kaum Kecamatan Pulo Gadung Jakarta Timur 13250.</h3>
        </div> */}
        <div className="w-[80%] lg:w-[90%]">
          <FormContact />
        </div>
        <div className="lg:mr-8">
          <iframe width="100%" height="380"  src="https://maps.google.com/maps?q=-6.203022691987594, 106.90285768861878&z=15&output=embed"></iframe>
        </div>
        {/* <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      <div className="mt-[4rem] px-6 text-center dark:text-neutral-300 hover:text-white text-white text-xs lg:text-sm">
          © Copyright 2024 PT.BERKAH INDO PRATAMA - All Rights Reserved
          {/* <a href="https://tw-elements.com/">TW Elements</a> */}
      </div>
    </footer>
  );
};

export default Footer;
