import React from "react";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-5 py-5 xl:px-16 xl:py-20 overflow-hidden">
      {/* Top Section */}
      <div className="flex  xl:flex-row justify-between items-start xl:items-start xl:relative xl:px-[8rem]  xl:gap-0">
        {/* Column 1: Logo + LinkedIn */}
        <div className="flex flex-col gap-2 xl:mt-5 w-full xl:w-auto">
          {/* Logo */}
          <div>
            <img
              src="/assets/nexuslogo.png"
              alt="Nexus Logo"
              className="w-[34px] h-[41px] xl:w-[92px] xl:h-[96px]"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/assets/Linkedin.svg"
                alt="LinkedIn"
                className="w-[40px] h-[13px] xl:w-[110px] xl:h-[28px]"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="xl:mt-5 w-full xl:w-auto">
          <h3 className="text-[12px] xl:text-2xl font-semibold mb-2 xl:mb-6">Navigation</h3>
          <ul className="space-y-1 text-[10px] xl:text-xl text-[#E5E5E5] xl:space-y-4">
            <li>- Home</li>
            <li>- Contact</li>
            <li>- Company</li>
            <li>- Terms Of Use</li>
            <li>- Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="xl:mt-5 w-full xl:w-auto">
          <h3 className="text-[12px] xl:text-2xl font-semibold mb-2 xl:mb-6">Contact</h3>
          <ul className="space-y-2 text-[10px] xl:text-xl text-[#E5E5E5] xl:space-y-4">
            <li className="flex items-start gap-2 xl:gap-5">
              <FaPhoneAlt className="text-[#F4D48D] mt-0.5 xl:mt-2" size="0.9em" />
              <span>+91 99999- 00000</span>
            </li>
            <li className="flex items-start gap-2 xl:gap-5">
              <FaPaperPlane className="text-[#F4D48D] mt-0.5 xl:mt-2" size="0.9em" />
              <span>Info@nexagroup.com</span>
            </li>
            <li className="flex items-start gap-2 xl:gap-5">
              <FaMapMarkerAlt className="text-[#F4D48D] mt-0.5 xl:mt-2" size="0.9em" />
              <span className="text-[8px] xl:text-[1em]">
                23–Simply dummy text <br />
                of the printing and Mumbai-E,
                <br />
                India
              </span>
            </li>
          </ul>
        </div>
      </div>
       <div className="bg-gray-300 opacity-20 w-full h-[2px] mt-3" ></div>
      {/* Bottom Section - Copyright */}
      <div className="w-full text-[10px] xl:text-[16px] text-center mt-4 xl:mt-0 xl:-translate-x-12 xl:translate-y-7">
        © 2022 Nexus Group. Site by KALVIG
      </div>
    </footer>
  );
};

export default Footer;