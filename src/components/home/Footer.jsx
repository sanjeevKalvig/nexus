import React from "react";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 md:px-20 py-16 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between  z-10 relative">
        {/* Column 1: Logo + LinkedIn + NEXUS background */}
        <div className="flex flex-col gap-4">
          {/* Row 1 - Logo */}
          <div>
            <img
              src="/assets/nexuslogo.png"
              alt="Nexus Logo"
              className="w-[68px] h-[72px]"
            />
          </div>

          {/* Row 2 - LinkedIn */}
          <div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/Linkedin.svg"
                alt="LinkedIn"
                className="w-[90px] h-[23px]"
              />
            </a>
          </div>

        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-[#E5E5E5]">
            <li>- Home</li>
            <li>- Contact</li>
            <li>- Company</li>
            <li>- Terms Of Use</li>
            <li>- Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-[#E5E5E5]">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#F4D48D] mt-1" />
              <span>+91 99999- 00000</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPaperPlane className="text-[#F4D48D] mt-1" />
              <span>Info@nexagroup.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#F4D48D] mt-1" />
              <span>
                23–Simply dummy text <br />
                of the printing and Mumbai-E,
                <br />
                India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-4 border-t border-[#1d1d1d] text-sm text-[#aaa] text-center z-10 relative">
        © 2022 Nexus Group. Site by KALVIG
      </div>
    </footer>
  );
};

export default Footer;
