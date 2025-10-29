import React, { useState } from "react";

const AkasaHeroSection = () => {
  const backgroundImages = [
    "/assets/akasa/os5.jpg",
    "/assets/akasa/os3.jpg",
    "/assets/akasa/os4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const showPreviousImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImages[currentImage]}
        alt="Industrial Background"
        className="absolute inset-0 w-[120%] h-full object-cover opacity-40 2xl:scale-[1.2] xlplus:scale-[1.2] xl:translate-x-[10%] 2xlplus:scale-[1.2] 2xl:translate-x-[10%] 2xlplus:translate-x-[6%]"
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center top-[2rem] left-[2rem] sm:top-[4rem] sm:left-[5rem]">
        <div className="w-full max-w-[90%]">
          <h1 className="text-[2.1rem] sm:text-[4.2rem] font-bold leading-none 2xl:text-[3.5rem] 2xlplus:text-[4.9rem]">
            <span className="text-[#F5D5A2]">LEADING</span>
            <span className="block text-white">INNOVATION</span>
          </h1>

          <p className="text-[0.7rem] sm:text-[0.84rem] text-[#F5D5A2] mt-4 leading-snug">
            We turn bold ideas into real-world impact and <br />
            drive progress through creativity and precision. <br />
            Our team blends modern design, technology, and <br />
            innovation to shape the future of industries <br />
            and inspire growth with every solution we build.
          </p>

          <button className="uppercase mt-6 w-[8rem] h-[2.6rem] font-normal text-[0.7rem] sm:w-[8rem] sm:h-[2.6rem] sm:py-2 sm:text-[0.84rem] border border-[#F5D5A2] text-white hover:bg-white hover:text-black transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-[2rem] sm:bottom-10 sm:left-[5rem] flex gap-3 z-20 ">
        <button
          onClick={showPreviousImage}
          className="px-3 py-2 text-[0.75rem] border border-[#F5D5A2] text-[#F5D5A2] hover:bg-[#F5D5A2] hover:text-black transition-all duration-300 uppercase"
        >
          ‹ Prev
        </button>
        <button
          onClick={showNextImage}
          className="px-3 py-2 text-[0.75rem] border border-[#F5D5A2] text-[#F5D5A2] hover:bg-[#F5D5A2] hover:text-black transition-all duration-300 uppercase"
        >
          Next ›
        </button>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-6 right-[2rem] sm:bottom-10 sm:right-[5rem] flex items-center gap-3 text-xs tracking-[0.35em] uppercase z-20">
        <span className="hidden sm:inline-block h-px w-8 bg-[#F5D5A2]/70" />
        {backgroundImages.map((_, index) => {
          const isActive = index === currentImage;
          return (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-[#F5D5A2]/60 hover:text-[#F5D5A2]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {String(index + 1).padStart(2, "0")}
              {index < backgroundImages.length - 1 && (
                <span className="ml-2 text-[#F5D5A2]/40">/</span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default AkasaHeroSection;
