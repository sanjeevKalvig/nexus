import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Epc_Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const previouslyFocused = useRef(null);

  const toggleMenu = () => setIsOpen(v => !v);
  const closeMenu = () => setIsOpen(false);

  // Split links like Nexus
  const left = useMemo(
    () => [
      { name: "Home", path: "/epc" },
      { name: "Profile", path: "/epc_companyprofile" },
    ],
    []
  );

  const right = useMemo(
    () => [
      { name: "Project", path: "/epc_ourservices" },
      { name: "Client", path: "/epc_client" },
      { name: "Invester", path: "/epcreport" },
      { name: "NexusHome", path: "/" },
    ],
    []
  );

  const linkCls = (isActive) =>
    `px-3 py-1 text-sm tracking-wide motion-safe:transition ${
      isActive ? "text-[#c9a961]" : "text-white/90 hover:text-[#c9a961]"
    }`;

  // Close drawer on route change
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Scroll lock + ESC + focus trap
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      previouslyFocused.current = document.activeElement;
      body.classList.add("overflow-hidden");
      setTimeout(() => firstLinkRef.current?.focus(), 0);
    } else {
      body.classList.remove("overflow-hidden");
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    }

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeMenu();
      }
      if (e.key === "Tab" && isOpen && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-2 inset-x-0 z-[1000] h-[80px] flex items-center">
        <div className="mx-auto w-[92%] lg:w-[89%] rounded-full bg-black/40 backdrop-blur border border-white/10 px-4">
          {/* Desktop split layout */}
          <div className="hidden lg:grid grid-cols-3 items-center">
            {/* left links */}
            <ul className="flex gap-4">
              {left.map((i) => (
                <li key={i.path}>
                  <NavLink
                    to={i.path}
                    end={i.path === "/epc"}
                    className={({ isActive }) => linkCls(isActive)}
                  >
                    {i.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* center logo */}
            <div className="flex justify-center py-2">
              <Link to="/epc" aria-label="Go to EPC homepage">
                <img
                  src="/assets/NexusEPC_logo.png"
                  alt="Nexus EPC"
                  className="h-10 w-auto"
                  loading="eager"
                />
              </Link>
            </div>

            {/* right links */}
            <div className="flex justify-end items-center gap-2">
              {right.map((i) => (
                <NavLink
                  key={i.path}
                  to={i.path}
                  className={({ isActive }) => linkCls(isActive)}
                >
                  {i.name}
                </NavLink>
              ))}
              {/* Optional CTA example:
              <NavLink
                to="/epc_contact"
                className="ml-2 rounded-full border border-[#c9a961]/40 px-4 py-2 text-sm text-[#c9a961] hover:bg-[#c9a961]/10 motion-safe:transition"
              >
                Contact Us
              </NavLink> */}
            </div>
          </div>

          {/* Mobile header row */}
          <div className="flex lg:hidden items-center justify-between h-[60px]">
            <Link to="/epc" aria-label="Go to EPC homepage">
              <img
                src="/assets/NexusEPC_logo.png"
                alt="Nexus EPC"
                className="h-10 w-auto"
                loading="eager"
              />
            </Link>

            <button
              ref={btnRef}
              onClick={toggleMenu}
              className="w-9 h-7 flex flex-col justify-between"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="epc-mobile-menu"
            >
              <span
                className={`block w-9 h-[2px] rounded bg-[#c9a961] motion-safe:transition ${
                  isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`block w-9 h-[2px] rounded bg-[#c9a961] motion-safe:transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-9 h-[2px] rounded bg-[#c9a961] motion-safe:transition ${
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* overlay */}
      <div
        onClick={closeMenu}
        aria-hidden={!isOpen}
        className={`fixed inset-0 bg-black/70 z-[998] motion-safe:transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* fullscreen mobile menu */}
      <div
        id="epc-mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0e1a] z-[999] flex flex-col items-center justify-center motion-safe:transition-transform duration-500 will-change-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {[...left, ...right].map((item, idx) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            ref={idx === 0 ? firstLinkRef : null}
            className={({ isActive }) =>
              `my-2 text-2xl tracking-wide outline-none focus:ring-2 focus:ring-[#c9a961]/50 rounded-md px-2 motion-safe:transition ${
                isActive ? "text-[#c9a961]" : "text-white/95 hover:text-[#c9a961]"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* bottom brand */}
        <div className="absolute bottom-20 flex flex-col items-center select-none pointer-events-none">
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
}
