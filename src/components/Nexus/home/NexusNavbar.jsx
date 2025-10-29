import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NexusNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/companyprofile" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Nexus EPC", path: "/epc" },
    { name: "Nexus Akasa", path: "/akasa" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 h-[70px] bg- flex items-center justify-between px-8 z-[1000] ">
        <div className="flex items-center">
          <Link to="/">
            <img src="/assets/nexuslogo.png" alt="Nexus Logo" className="h-16 w-auto mt-6" />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className=" fixed w-[30px] h-[24px] flex flex-col justify-between  z-[1001] focus:outline-none right-8"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-[2px] bg-[#c9a961] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[11px]" : ""
              }`}
          />
          <span
            className={`w-full h-[2px] bg-[#c9a961] transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-full h-[2px] bg-[#c9a961] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 transition-all duration-300 z-[998] ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={closeMenu}
      />

      {/* Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0e1a] transition-transform duration-500 z-[999] flex flex-col items-center justify-center ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-center justify-center gap-2 text-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-[24px] tracking-wide transition-all duration-300 ${isActive
                    ? "text-[#c9a961] font-semibold"
                    : "text-white/95 hover:text-[#c9a961]"
                  }`
                }
                end
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-20 flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            <span
              className="absolute text-[100px] md:text-[160px] font-bold text-white/5 tracking-[10px] leading-none z-0 font-noir"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.06)",
              }}
            >
              NEXUS
            </span>
            <span className="relative z-10 text-[#c9a961] text-[42px] md:text-[50px]  tracking-[10px] font-noir translate-y-8 font-extrabold">
              GROUP
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NexusNavbar;
