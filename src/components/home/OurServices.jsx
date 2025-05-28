import React from "react";

const OurServices = () => {
  return (
    <section className="text-white py-16 px-4 sm:py-24">
      {/* Heading */}
      <h2 className="text-[2.5rem] sm:text-[6rem] font-semibold text-center mb-12 sm:mb-20 2xlplus:text-[7rem]">
        <span className="text-white">OUR </span>
        <span className="text-[#F4D48D]">SERVICES</span>
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid place-items-center gap-y-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-20 sm:gap-y-16">
        {/* Card 1 */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[21.7844rem] px-6 py-10 rounded-[0.9375rem] 
            sm:w-[22.9375rem] sm:h-[36.75rem] sm:p-8 2xl:7-[rem]"
        >
          <div className="w-[5.625rem]  h-[8.125rem]  mb-6 sm:w-[9.375rem]  sm:h-[13.125rem]  flex items-center justify-center">
            <img
              src="/assets/nexusepc.png"
              alt="NEXUS EPC"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.744rem] font-normal leading-relaxed sm:text-[1.25rem] 2xlplus:text-[1.4rem]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button
            className="mt-6 bg-[#002538] text-[#f2f1ef] font-normal rounded-[0.625rem]
              w-[6.6688rem] h-[2.0375rem] text-[0.744rem]
              sm:w-[11.25rem] /* 180px */ sm:h-[3.4375rem]  sm:text-[1.25rem] sm:rounded-[0.9375rem] "
          >
            VIEW MORE
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[21.7844rem] px-6 py-10 rounded-[0.9375rem] 
            sm:w-[22.9375rem] sm:h-[36.75rem] sm:p-8"
        >
          <div className="w-[5rem]  h-[6.875rem]  mb-6 sm:w-[18.625rem]  sm:h-[12.5rem]  flex items-center justify-center">
            <img
              src="/assets/aakasa2.svg"
              alt="Ākāsa"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.744rem] font-normal leading-relaxed sm:text-[1.25rem] 2xlplus:text-[1.4rem] ">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button
            className="mt-6 bg-[#002538] text-[#f2f1ef] font-normal rounded-[0.625rem] /* 10px */
              w-[6.6688rem] h-[2.0375rem] text-[0.744rem]
              sm:w-[11.25rem] sm:h-[3.4375rem] sm:text-[1.25rem] sm:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[21.7844rem] px-6 py-10 rounded-[0.9375rem]
            sm:w-[22.9375rem] sm:h-[36.75rem] sm:p-8"
        >
          <div className="w-[5.3125rem] h-[7.5rem]  mb-6 sm:w-[18.75rem]  sm:h-[12.5rem]  flex items-center justify-center">
            <img
              src="/assets/drvline2.svg"
              alt="NEXUS DRIVELINE"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.744rem] font-normal leading-relaxed sm:text-[1.25rem] 2xlplus:text-[1.4rem]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button
            className="mt-7 bg-[#002538] text-[#f2f1ef] font-normal rounded-[0.625rem]
              w-[6.6688rem] h-[2.0375rem] text-[0.744rem]
              sm:w-[11.25rem] sm:h-[3.4375rem] sm:text-[1.25rem] sm:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
