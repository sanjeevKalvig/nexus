import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NexusNavbarSplit() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(v => !v);
  const closeMenu = () => setIsOpen(false);

  // Lock scroll + close on Esc
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", isOpen);
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const left = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/companyprofile" },
  ];
  const right = [
    { name: "Nexus EPC", path: "/epc" },
    { name: "Nexus Akasa", path: "/akasa" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const linkCls = (isActive) =>
    `px-3 py-1 text-sm tracking-wide transition ${
      isActive ? "text-[#c9a961]" : "text-white/90 hover:text-[#c9a961]"
    }`;

  return (
    <>
      <nav className="fixed top-2 inset-x-0 z-[1000] h-[80px] flex items-center">
        <div className="mx-auto w-[92%] lg:w-[89%] rounded-full bg-black/40 backdrop-blur border border-white/10 px-4">
          <div className="hidden lg:grid grid-cols-3 items-center">
            {/* left links */}
            <ul className="flex gap-4">
              {left.map((i) => (
                <li key={i.path}>
                  <NavLink
                    to={i.path}
                    end={i.path === "/"}
                    className={({ isActive }) => linkCls(isActive)}
                  >
                    {i.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* center logo */}
            <div className="flex justify-center py-2">
              <Link to="/" aria-label="Go to homepage">
                <img
                  src="/assets/nexuslogo.png"
                  alt="Nexus"
                  className="h-10 w-auto"
                  loading="eager"
                />
              </Link>
            </div>

            {/* right links + CTA */}
            <div className="flex justify-end items-center gap-2">
              {right.slice(0, 2).map((i) => (
                <NavLink
                  key={i.path}
                  to={i.path}
                  className={({ isActive }) => linkCls(isActive)}
                >
                  {i.name}
                </NavLink>
              ))}
              <NavLink
                to="/contactus"
                className="ml-2 rounded-full border border-[#c9a961]/40 px-4 py-2 text-sm text-[#c9a961] hover:bg-[#c9a961]/10 transition"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* mobile header row */}
          <div className="flex lg:hidden items-center justify-between h-[72px]">
            <Link to="/" aria-label="Go to homepage">
              <img
                src="/assets/nexuslogo.png"
                alt="Nexus"
                className="h-10 w-auto"
                loading="eager"
              />
            </Link>

            <button
              onClick={toggleMenu}
              className="w-8 h-6 flex flex-col justify-between"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-8 h-[2px] rounded bg-[#c9a961] transition ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-8 h-[2px] rounded bg-[#c9a961] transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-8 h-[2px] rounded bg-[#c9a961] transition ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/70 transition z-[998] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* fullscreen menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0e1a] transition-transform duration-500 z-[999] flex flex-col items-center justify-center ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {[...left, ...right].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `my-2 text-2xl tracking-wide transition ${
                isActive ? "text-[#c9a961]" : "text-white/95 hover:text-[#c9a961]"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}
