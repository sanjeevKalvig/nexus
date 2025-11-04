import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const AkasaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((p) => !p);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", path: "/akasa" },
    { name: "Project", path: "/akasaproject" },
    { name: "Profile", path: "/akasacompany" },
    { name: "NexusHome", path: "/" },
  ];

  const bar = (idx) => (
    <span
      key={idx}
      className={`w-full h-0.5 bg-[#c9a961] transition-all duration-300 ${
        isOpen ? (idx === 0 ? "rotate-45 translate-y-[11px]" : idx === 1 ? "opacity-0" : "-rotate-45 -translate-y-[11px]") : ""
      }`}
    />
  );

  return (
    <>
      {/* ---------- TOP BAR ---------- */}
      <nav className="absolute top-0 left-0 right-0 h-[70px]  flex items-center justify-between px-[2rem] lg:px-[4.4rem] z-[1000] ">
        <Link to="/akasa">
          <img src="/assets/akasa.png" alt="Nexus Logo" className="h-16 w-auto mt-6" />
        </Link>

        <button
          onClick={toggleMenu}
          className="fixed w-[2rem]  h-[24px] lg:h-[2rem] lg:w-[3rem] flex flex-col justify-between  z-[1001] focus:outline-none right-10"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(bar)}
        </button>
      </nav>

      {/* ---------- OVERLAY ---------- */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/70 z-[998] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ---------- FULLSCREEN MENU ---------- */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0e1a] z-[999] flex flex-col items-center justify-center transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-center uppercase">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                end
                className={({ isActive }) =>
                  `text-2xl tracking-wide transition-all duration-300 ${
                    isActive ? "text-[#c9a961] font-semibold" : "text-white/95 hover:text-[#c9a961]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ---------- BOTTOM BRAND ---------- */}
       <div className="absolute bottom-20 flex flex-col items-center">
          <span
            className="absolute z-0 text-[130px] leading-none tracking-[10px] text-white/5 md:text-[160px] md:tracking-[14px]"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.06)" }}
          >
            NEXUS
          </span>
          <span className="relative z-10 text-[42px] font-bold tracking-[10px] text-[#c9a961] md:text-[50px] md:tracking-[12px]">
            GROUP
          </span>
        </div>
      </div>
    </>
  );
};

export default AkasaNavbar;