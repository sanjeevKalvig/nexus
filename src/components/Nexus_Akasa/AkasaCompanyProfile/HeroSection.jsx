import React from "react";

function HeroSection() {
  return (
    <div className="px-6 sm:px-20 py-28 bg-[linear-gradient(rgba(0,0,0,0),rgba(5,19,28,0.42)),url('/assets/AkasaHeroSection.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative mb-12 md:mb-16">
        {/* Background outline text – fluid size with clamp() */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center pointer-events-none uppercase font-extrabold 
          text-transparent select-none font-noir"
          style={{
            fontSize: "clamp(30px, 8vw, 110px)", // scales from mobile → desktop
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          About us
        </div>

        {/* Foreground title – responsive text size & positioning */}
        <div className="relative z-10 flex items-center">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-2 translate-x-2 md:translate-y-4 md:translate-x-8 font-noir">
            About us
          </h2>
        </div>
      </div>

      {/* 2. Chairman's Note */}
      <section className="relative flex flex-col xl:flex-row items-center justify-between py-16 max-w-[1400px] mx-auto mb-1">
        <div className="flex-1">
          <h2 className="text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-4">
            OUR SUCCESS STORIES
          </h2>
          <p className="text-gray-300 leading-relaxed text-[1rem] max-w-xl">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
            <br />
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
            <br />
            <br />
          </p>

          <br />
          <h3 className="text-[#F4D48D] mb-6 text-[1.5rem]">
            “IF A BUILDINGBECOMES ARCHITECTURE,THEN IT IS ART.”
          </h3>

          <button className="mt-8 border border-[#F4D48D] text-[#F4D48D] px-8 py-3 rounded-md hover:bg-[#F4D48D] hover:text-black transition">
            Join Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
