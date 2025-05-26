import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden ">
      <img
        src="/assets/hero.png"
        alt="Industrial Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
         style={{
          width: "130%",
          transform: "translateX(6%)",
        }}
      />

      {/* Top bar with enlarged logo and NECUS text */}
      <div className="absolute top-[68px] left-[83px] w-[69px] h-[83px]">
        <div className=" flex items-center">
          {/* Enlarged logo - adjust h-12 to your preferred size */}
          <img
            src="/assets/nexuslogo.png"
            alt="Company Logo"
            className="h-full w-full" // Increased from h-8 to h-12
          />
        </div>
      </div>

      {/* Main content - perfectly aligned with logo */}
      <div className="relative z-10 h-full flex items-center left-[83px] top-[65px]">
        <div className="">
          {" "}
          {/* mt-16 matches top bar height */}
          <div className="w-full ">
            <h1 className="text-[96px]  font-bold">
              <span className="text-[#F5D5A2]">LEADING</span>
              <span className="block  text-white">INNOVATION</span>
            </h1>
            <p className="text-[18px] w-[616px] text-[#F5D5A2]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="mt-6 w-[128px] border border-[#F5D5A2] text-white px-2 py-2 text-[18px] hover:bg-white hover:text-black transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default HeroSection;
