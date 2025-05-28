import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/hero.png"
        alt="Industrial Background"
        className="absolute inset-0 w-[120%] h-full object-cover opacity-40 2xl:scale-[1.2] 2xlplus:scale-[1.2] 2xl:translate-x-[10%] 2xlplus:translate-x-[6%] "
      />

      {/* Logo Section */}
      <div className="absolute top-[3.3rem] left-[2.6rem] w-[3rem] h-[3.5rem] sm:top-[4.3rem] sm:left-[5.2rem] sm:w-[4.3rem] sm:h-[5.2rem]">
        <div className="flex items-center">
          <img
            src="/assets/nexuslogo.png"
            alt="Company Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center top-[2rem] left-[2rem] sm:top-[4rem] sm:left-[5rem]">
        <div className="w-full max-w-[90%]">
          <h1 className="text-[3rem] sm:text-[6rem] font-bold leading-none 2xl:text-[5rem] 2xlplus:text-[7rem]">
            <span className="text-[#F5D5A2]">LEADING</span>
            <span className="block text-white">INNOVATION</span>
          </h1>

          <p className="text-[1rem] sm:text-[1.2rem] text-[#F5D5A2] mt-4 leading-snug">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500s, when an unknown <br />
            printer took a galley of type and scrambled it to make a <br />
            type specimen book.
          </p>

          <button className="mt-6 w-[8rem] h-[2.6rem] font-normal  text-[1rem] sm:w-[8rem] sm:h-[2.6rem] sm:py-2 sm:text-[1.2rem] border border-[#F5D5A2] text-white hover:bg-white hover:text-black transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
