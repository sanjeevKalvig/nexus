import React from "react";

function What_We_Do() {
  const works = [
    {
      id: "0",
      workName: "Interior",
      workContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem",
    },
    {
      id: "1",
      workName: "Architecture",
      workContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem",
    },
  ];

  return (
    /* ---- Outer container ------------------------------------------------- */
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-28">
      {/* --------------------- Section title (big outline) ----------------- */}
      <div className="relative mb-12 md:mb-16">
        {/* Background outline text – fluid size with clamp() */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
          style={{
            fontSize: "clamp(30px, 8vw, 110px)", // scales from mobile → desktop
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          what we do
        </div>

        {/* Foreground title – responsive text size & positioning */}
        <div className="relative z-10 flex items-center">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-2 translate-x-2 md:translate-y-4 md:translate-x-8 font-noir">
            what we do
          </h2>
        </div>
      </div>

      {/* --------------------- Main illustration --------------------------- */}
      <img
        src="/assets/Akasa_What_We_Do.png"
        alt="Akasa – what we do illustration"
        className="w-full max-w-[1200px] mx-auto"
      />

      {/* --------------------- Works list --------------------------------- */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 max-w-full md:max-w-[600px] text-center md:text-left"
          >
            <h1 className="text-[#CDAB65] text-3xl md:text-4xl font-bold">
              {work.workName}
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              {work.workContent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default What_We_Do;