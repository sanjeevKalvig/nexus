import React from "react";

const OurServices = () => {
  return (
    <section className="text-white py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Heading - Progressive scaling */}
      <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] font-semibold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-18 xl:mb-20 2xlplus:text-[5.25rem]">
        <span className="text-white">OUR </span>
        <span className="text-[#F4D48D]">VERTICALS</span>
      </h2>

      {/* Cards Grid - Responsive grid with proper spacing */}
      <div className="max-w-7xl mx-auto grid place-items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-y-16 xl:gap-x-20 sm:grid-cols-2 xl:grid-cols-3">
        {/* Card 1 - Progressive sizing */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between rounded-[0.625rem] sm:rounded-[0.75rem] md:rounded-[0.875rem] xl:rounded-[0.9375rem]
          w-[280px] h-[360px] px-4 py-6
          sm:w-[300px] sm:h-[400px] sm:px-5 sm:py-7
          md:w-[320px] md:h-[440px] md:px-5 md:py-8
          lg:w-[340px] lg:h-[480px] lg:px-6 lg:py-9
          xl:w-[367px] xl:h-[529px] xl:px-6 xl:py-10"
        >
          {/* Image container with progressive sizing */}
          <div
            className="mb-4 sm:mb-5 md:mb-6 xl:mb-6 flex items-center justify-center
            w-[60px] h-[80px]
            sm:w-[70px] sm:h-[90px]
            md:w-[80px] md:h-[100px]
            lg:w-[90px] lg:h-[110px]
            xl:w-[112px] xl:h-[130px]"
          >
            <img
              src="/assets/nexusepc.png"
              alt="NEXUS EPC"
              className="w-full h-full object-contain"
            />
          </div>

          <p
            className="text-gray-300 font-normal leading-relaxed text-center
            text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[0.9375rem] 2xlplus:text-[1.05rem]"
          >
            Nexus EPC delivers complete engineering and <br />
            construction solutions that redefine industry <br />
            standards with precision, quality, and trust.
          </p>

          <button
            className="mt-4 sm:mt-5 md:mt-6 xl:mt-6 bg-[#002538] text-[#f2f1ef] font-normal
            w-[120px] h-[32px] text-[0.75rem] rounded-[0.5rem]
            sm:w-[140px] sm:h-[36px] sm:text-[0.8rem] sm:rounded-[0.6rem]
            md:w-[160px] md:h-[40px] md:text-[0.85rem] md:rounded-[0.7rem]
            lg:w-[170px] lg:h-[44px] lg:text-[0.9rem] lg:rounded-[0.8rem]
            xl:w-[180px] xl:h-[55px] xl:text-[0.9375rem] xl:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>

        {/* Card 2 - Progressive sizing */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between rounded-[0.625rem] sm:rounded-[0.75rem] md:rounded-[0.875rem] xl:rounded-[0.9375rem]
          w-[280px] h-[360px] px-4 py-6
          sm:w-[300px] sm:h-[400px] sm:px-5 sm:py-7
          md:w-[320px] md:h-[440px] md:px-5 md:py-8
          lg:w-[340px] lg:h-[480px] lg:px-6 lg:py-9
          xl:w-[367px] xl:h-[529px] xl:px-6 xl:py-10"
        >
          {/* Image container - Ākāsa logo sizing */}
          <div
            className="mb-4 sm:mb-5 md:mb-6 xl:mb-6 flex items-center justify-center
            w-[50px] h-[65px]
            sm:w-[60px] sm:h-[75px]
            md:w-[70px] md:h-[85px]
            lg:w-[80px] lg:h-[95px]
            xl:w-[223px] xl:h-[150px]"
          >
            <img
              src="/assets/aakasa2.svg"
              alt="Ākāsa"
              className="w-full h-full object-contain"
            />
          </div>

          <p
            className="text-gray-300 font-normal leading-relaxed text-center
            text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[0.9375rem] 2xlplus:text-[1.05rem]"
          >
            Akasa Spaces creates modern living and <br />
            commercial environments where design, <br />
            comfort, and innovation come together.
          </p>

          <button
            className="mt-4 sm:mt-5 md:mt-6 xl:mt-6 bg-[#002538] text-[#f2f1ef] font-normal
            w-[120px] h-[32px] text-[0.75rem] rounded-[0.5rem]
            sm:w-[140px] sm:h-[36px] sm:text-[0.8rem] sm:rounded-[0.6rem]
            md:w-[160px] md:h-[40px] md:text-[0.85rem] md:rounded-[0.7rem]
            lg:w-[170px] lg:h-[44px] lg:text-[0.9rem] lg:rounded-[0.8rem]
            xl:w-[180px] xl:h-[55px] xl:text-[0.9375rem] xl:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>

        {/* Card 3 - Progressive sizing */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between rounded-[0.625rem] sm:rounded-[0.75rem] md:rounded-[0.875rem] xl:rounded-[0.9375rem]
          w-[280px] h-[360px] px-4 py-6
          sm:w-[300px] sm:h-[400px] sm:px-5 sm:py-7
          md:w-[320px] md:h-[440px] md:px-5 md:py-8
          lg:w-[340px] lg:h-[480px] lg:px-6 lg:py-9
          xl:w-[367px] xl:h-[529px] xl:px-6 xl:py-10"
        >
          {/* Image container - Driveline logo sizing */}
          <div
            className="mb-4 sm:mb-5 md:mb-6 xl:mb-6 flex items-center justify-center
            w-[55px] h-[70px]
            sm:w-[65px] sm:h-[80px]
            md:w-[75px] md:h-[90px]
            lg:w-[85px] lg:h-[100px]
            xl:w-[225px] xl:h-[150px]"
          >
            <img
              src="/assets/drvline2.svg"
              alt="NEXUS DRIVELINE"
              className="w-full h-full object-contain"
            />
          </div>

          <p
            className="text-gray-300 font-normal leading-relaxed text-center
            text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[0.9375rem] 2xlplus:text-[1.05rem]"
          >
            Nexus Dryline provides advanced drylining <br />
            and interior systems tailored for strength, <br />
            durability, and aesthetic excellence.
          </p>

          <button
            className="mt-4 sm:mt-5 md:mt-6 xl:mt-7 bg-[#002538] text-[#f2f1ef] font-normal
            w-[120px] h-[32px] text-[0.75rem] rounded-[0.5rem]
            sm:w-[140px] sm:h-[36px] sm:text-[0.8rem] sm:rounded-[0.6rem]
            md:w-[160px] md:h-[40px] md:text-[0.85rem] md:rounded-[0.7rem]
            lg:w-[170px] lg:h-[44px] lg:text-[0.9rem] lg:rounded-[0.8rem]
            xl:w-[180px] xl:h-[55px] xl:text-[0.9375rem] xl:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
