import React from "react";

const OurServices = () => {
  return (
    <section className="text-white py-16 px-4 sm:py-24">
      {/* Heading - Reduced from 2.5rem/6rem/7rem to 1.875rem/4.5rem/5.25rem */}
      <h2 className="text-[1.875rem] sm:text-[4.5rem] font-semibold text-center mb-12 sm:mb-20 2xlplus:text-[5.25rem]">
        <span className="text-white">OUR </span>
        <span className="text-[#F4D48D]">SERVICES</span>
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid place-items-center gap-y-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-20 sm:gap-y-16">
        {/* Card 1 - Reduced text and images by 25% */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[19.606rem] px-6 py-10 rounded-[0.9375rem]
            sm:w-[22.9375rem] sm:h-[33.075rem] sm:p-8 2xl:7-[rem]"
        >
          {/* Original: w-[5.625rem] h-[8.125rem] → Reduced to w-[4.21875rem] h-[6.09375rem] */}
          <div className="w-[4.21875rem] h-[6.09375rem] mb-6 sm:w-[7.03125rem] sm:h-[9.84375rem] flex items-center justify-center">
            <img
              src="/assets/nexusepc.png"
              alt="NEXUS EPC"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.558rem] font-normal leading-relaxed sm:text-[0.9375rem] 2xlplus:text-[1.05rem]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button
            className="mt-6 bg-[#002538] text-[#f2f1ef] font-normal rounded-[0.625rem]
              w-[6.6688rem] h-[2.0375rem] text-[0.558rem]
              sm:w-[11.25rem] sm:h-[3.4375rem] sm:text-[0.9375rem] sm:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[19.606rem] px-6 py-10 rounded-[0.9375rem]
            sm:w-[22.9375rem] sm:h-[33.075rem] sm:p-8"
        >
          {/* Original: w-[5rem] h-[6.875rem] → Reduced to w-[3.75rem] h-[5.15625rem] */}
          {/* Original: w-[18.625rem] h-[12.5rem] → Reduced to w-[13.96875rem] h-[9.375rem] */}
          <div className="w-[3.75rem] h-[5.15625rem] mb-6 sm:w-[13.96875rem] sm:h-[9.375rem] flex items-center justify-center">
            <img
              src="/assets/aakasa2.svg"
              alt="Ākāsa"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.558rem] font-normal leading-relaxed sm:text-[0.9375rem] 2xlplus:text-[1.05rem]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button
            className="mt-6 bg-[#002538] text-[#f2f1ef] font-normal rounded-[0.625rem]
              w-[6.6688rem] h-[2.0375rem] text-[0.558rem]
              sm:w-[11.25rem] sm:h-[3.4375rem] sm:text-[0.9375rem] sm:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[19.606rem] px-6 py-10 rounded-[0.9375rem]
            sm:w-[22.9375rem] sm:h-[33.075rem] sm:p-8"
        >
          {/* Original: w-[5.3125rem] h-[7.5rem] → Reduced to w-[3.984375rem] h-[5.625rem] */}
          {/* Original: w-[18.75rem] h-[12.5rem] → Reduced to w-[14.0625rem] h-[9.375rem] */}
          <div className="w-[3.984375rem] h-[5.625rem] mb-6 sm:w-[14.0625rem] sm:h-[9.375rem] flex items-center justify-center">
            <img
              src="/assets/drvline2.svg"
              alt="NEXUS DRIVELINE"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.558rem] font-normal leading-relaxed sm:text-[0.9375rem] 2xlplus:text-[1.05rem]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button
            className="mt-7 bg-[#002538] text-[#f2f1ef] font-normal rounded-[0.625rem]
              w-[6.6688rem] h-[2.0375rem] text-[0.558rem]
              sm:w-[11.25rem] sm:h-[3.4375rem] sm:text-[0.9375rem] sm:rounded-[0.9375rem]"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;