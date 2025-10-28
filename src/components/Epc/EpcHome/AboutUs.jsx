import React from "react";

function AboutUs() {
  const aboutUsText =
    "With a strong heritage from leading EPC establishments, Nexus EPC is dedicated to delivering cost-effective projects on time and with uncompromised quality. The company specializes in pipeline, piping, effluent treatment, and industrial infrastructure projects across multiple sectors.We collaborate globally to adopt advanced engineering and construction technologies, supported by robust IT-enabled management systems that ensure efficiency and precision.Our strong local partnerships and sustainable practices promote responsible development. Every project reflects our commitment to environmental conservation, innovation, and cost-efficient solutions through a capital-light approach that drives lasting value.";

  return (
    <div className="bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="relative mb-8 sm:mb-12 md:mb-16 px-4">
        {/* Big outline background text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
          style={{
            fontSize: "clamp(40px, 15vw, 110px)", // Responsive font size
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          about us
        </div>

        {/* Foreground title - Centered */}
        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl  leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-3 sm:translate-y-4 md:translate-y-6 font-noir">
            about us
          </h2>
        </div>
      </div>

      <div
        className='bg-[url("/assets/Blueprint.png")] bg-[length:80%] sm:bg-[length:70%] md:bg-[length:80%] bg-no-repeat bg-[position:100%_190%] sm:bg-[position:100%_180%] md:bg-[position:100%_190%] 
            px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-[10vw] lg:py-[13vw]'
      >
        <p className="max-w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] text-sm xl:text-lg sm:text-base leading-relaxed">
          {aboutUsText}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
