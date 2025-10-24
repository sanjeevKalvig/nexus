import React, { useState } from "react";

const NexusNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Company", href: "#company" },
    { name: "Project", href: "#project" },
    { name: "Investor", href: "#investor" },
    { name: "Clients", href: "#clients" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-[70px] bg-transparent flex items-center justify-between px-8 z-[1000] ">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/nexuslogo.png" alt="Nexus Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="w-[30px] h-[24px] flex flex-col justify-between relative z-[1001] focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-[2px] bg-[#c9a961] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[11px]" : ""
            }`}
          />
          <span
            className={`w-full h-[2px] bg-[#c9a961] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-[2px] bg-[#c9a961] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[11px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 transition-all duration-300 z-[998] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0e1a] transition-transform duration-500 z-[999] flex flex-col items-center justify-center ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       

        {/* Centered Menu Items */}
        <ul className="flex flex-col items-center justify-center gap-8 text-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={closeMenu}
                className={`text-[24px] tracking-wide transition-all duration-300 ${
                  index === 0
                    ? "text-[#c9a961] font-semibold"
                    : "text-white/95 hover:text-[#c9a961]"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="absolute bottom-20 flex flex-col items-center justify-center">
          {/* NEXUS background text */}
          <div className="relative flex flex-col items-center justify-center">
            <span
              className="absolute text-[130px] md:text-[160px] font-bold text-white/5 tracking-[10px] leading-none z-0"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.06)",
              }}
            >
              NEXUS
            </span>

            {/* GROUP text on top */}
            <span className="relative z-10 text-[#c9a961] text-[42px] md:text-[50px] font-bold tracking-[10px]">
              GROUP
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NexusNavbar;
