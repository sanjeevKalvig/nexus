import React from "react";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative  bg-black text-white px-4 sm:px-6 md:px-6
                  lg:px-12 xl:px-16 py-8 sm:py-10 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
    >
      {/* Top Section */}
      <div className="flex flex-row  justify-between relative xl:px-[8rem] items-start">
        {/* Column 1: Logo + LinkedIn */}
        <div className="flex flex-col gap-2 md:mt-0 sm:mt-0 xl:mt-5">
          {/* Logo */}
          <div>
            <img
              src="/assets/nexuslogo.png"
              alt="Nexus Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-[68px] md:h-[72px] lg:w-[80px] lg:h-[84px] xl:w-[92px] xl:h-[96px]"
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
                className="w-14 h-3.5 sm:w-16 sm:h-4 md:w-[90px] md:h-[23px] lg:w-[100px] lg:h-[26px] xl:w-[110px] xl:h-[28px]"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:mt-0 sm:mt-0 xl:mt-5">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
            Navigation
          </h3>
          <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3 xl:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#E5E5E5]">
            <li>- Home</li>
            <li>- Contact</li>
            <li>- Company</li>
            <li>- Terms Of Use</li>
            <li>- Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="md:mt-0 sm:mt-0 xl:mt-5">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
            Contact
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-4 lg:space-y-5 xl:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#E5E5E5]">
            <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <FaPhoneAlt
                className="text-[#F4D48D] mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1.5 xl:mt-2"
                size="0.9em"
              />
              <span>+91 99999- 00000</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <FaPaperPlane
                className="text-[#F4D48D] mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1.5 xl:mt-2"
                size="0.9em"
              />
              <span>Info@nexagroup.com</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <FaMapMarkerAlt
                className="text-[#F4D48D] mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1.5 xl:mt-2"
                size="0.9em"
              />
              <span className="text-[0.9em] sm:text-[1em]">
                23–Simply dummy text <br />
                of the printing and Mumbai-E,
                <br />
                India
              </span>
            </li>
          </ul>
        </div>
      </div>

       {/* Bottom Section - Copyright */}
      <div className="w-full h-auto text-[13px] text-center mt-4 xl:-translate-x-12 xl:translate-y-7 xl:text-[16px]">
        © 2022 Nexus Group. Site by KALVIG
      </div>
    </footer>
  );
};

export default Footer;
