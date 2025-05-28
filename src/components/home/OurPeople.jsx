import React from "react";

const OurPeople = () => {
  return (
    <div className="relative bg-[#050D11] sm:min-h-[50rem] sm:h-[31.25rem] lg:h-[37.5rem] xl:h-[50rem]
     text-white overflow-hidden  ">
      {/* Background Strip using clip-path - Mobile height increased */}
      <div className="absolute top-0 left-0 w-full h-[40.625rem] sm:h-[25.125rem] lg:h-[31.375rem] xl:h-[43.875rem] z-0">
        <div className="w-full h-full bg-[#011925] clip-bg"></div>
      </div>

      {/* Content Section - Changed to column layout on mobile */}
      <div className="relative z-10 flex flex-col sm:flex-col lg:flex-row items-center sm:items-start px-4 sm:px-4 lg:px-6 xl:px-10 py-8 sm:py-10 lg:py-14 xl:py-20 h-full ">
        {/* Column 1 - Stacked on top in mobile */}
        <div className="flex flex-col gap-8 items-start ml-0 sm:ml-[1.5rem] lg:ml-[2.5rem] xl:ml-[4rem] mt-0 sm:mt-[0.75rem] lg:mt-1 xl:mt-[1.25rem] w-full sm:w-auto">
          {/* Header - Left-aligned on all screens */}
          <div className="flex flex-row items-center justify-start mb-4 sm:mb-2 lg:mb-3 xl:mb-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            <h2 className="text-[2rem] mt-[3rem] sm:text-[2.875rem] lg:text-[3.25rem] 
            2xl:text-[4.688rem] font-semibold leading-none text-left 2xlplus:text-[6.5rem] ">
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">PEOPLE</span>
            </h2>
            <img
              src="/assets/peoplelogo.svg"
              alt="People Icon"
              className="w-[4.4375rem] h-[4.4375rem] sm:w-[5.625rem] sm:h-[7rem] lg:w-[6.25rem] lg:h-[7.813rem] 2xl:w-[9.375rem] 2xl:h-[12.5rem] object-contain"
            />
          </div>

          {/* Paragraph - Left-aligned on all screens */}
          <div className="flex-grow text-left">
            <p className="text-[1.5rem] sm:text-[1.125rem] lg:text-[1.375rem] 2xl:text-[1.875rem] 2xlplus:text-[2.5rem] font-light leading-snug">
              Meet the team driving our innovation
            </p>
          </div>

          {/* Button - Left-aligned on all screens */}
          <div className="mt-6 sm:mt-auto w-full flex justify-start">
            <button className="w-[10.8125rem] h-[3rem] text-[1.0625rem] sm:w-[12.5rem] sm:h-[3.375rem] lg:w-[13.75rem] lg:h-[3.625rem] xl:w-[15.625rem] xl:h-[5.1875rem] mt-0 sm:mt-[3.75rem] lg:mt-[4.375rem] xl:mt-[5.625rem] sm:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5625rem] font-semibold bg-[#F4D48D] text-black rounded-[0.75rem] sm:rounded-[0.875rem] lg:rounded-[1rem] xl:rounded-[1.25rem] shadow-md hover:brightness-95">
              MEET THE TEAM
            </button>
          </div>
        </div>

        {/* Card - Placed below on mobile */}
        <div className="mt-8 sm:absolute sm:right-4 border md:top-[28%] lg:right-6 
        2xl:right-10 sm:top-[25%] sm:transform sm:-translate-y-1/2 
        w-[21.3125rem] h-[13.32625rem] sm:w-[27.5rem] lg:w-[31.25rem] 
        2xl:w-[43.8125rem] 2xlplus:w-[50rem] sm:h-[19rem] lg:h-[21.875rem] xl:h-[29.75rem] 
        bg-[#01141E] rounded-[0.75rem] sm:rounded-[0.875rem] lg:rounded-[1rem] 
        xl:rounded-[1.25rem] xl:top-[38%] shadow-lg text-white flex flex-col justify-between mx-auto sm:mx-0">
          {/* Card Content */}
          <div className="ml-[10%] p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
            <div className="flex items-start gap-3">
              <img
                src="/assets/model.png"
                alt="David Jones"
                className="w-[4.5625rem] h-[4.5625rem] sm:w-[6.5rem] sm:h-[6.5rem] lg:w-[7.1875rem]
                 lg:h-[7.1875rem] xl:w-[10.25rem] xl:h-[10.25rem] rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-[1.125rem] sm:text-[1.75rem] lg:text-[2rem] xl:text-[3rem] font-bold">
                  David Jones
                </h3>
                <p className="text-[0.625rem] sm:text-[1.125rem] lg:text-[1.25rem] xl:text-[2rem] text-[#9CA3AF]">
                  Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 lg:mt-8 xl:mt-10 max-w-[43.75rem] px-2 text-left">
              <p className="text-[0.625rem] sm:text-[0.875rem] lg:text-[1rem] 2xl:text-[1.25rem] 2xlplus:text-[1.5rem]  leading-snug text-[#E5E5E5]">
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-6 mt-[2rem] sm:gap-10 lg:gap-8 xl:gap-8 self-end p-[0.15rem] sm:p-4 lg:p-6 xl:p-[0.4rem] sm:mt-[1.875rem] lg:mt-[2.5rem] xl:mt-[5rem]">
            {/* Left Arrow */}
            <div className="w-[1.25rem] h-[1.25rem] sm:w-[2rem] sm:h-[2rem] lg:w-[2.25rem] lg:h-[2.25rem] xl:w-[2.5rem] xl:h-[2.5rem] border-y-[10px] sm:border-y-[2rem] lg:border-y-[2.25rem] xl:border-y-[2.5rem] border-y-transparent border-r-[0.75rem] sm:border-r-[2.5rem] lg:border-r-[2.8125rem] xl:border-r-[3rem] border-r-[#D1D5DB]" />

            {/* Right Arrow */}
            <div className="w-[1.25rem] h-[1.25rem] sm:w-[2rem] sm:h-[2rem] lg:w-[2.25rem] lg:h-[2.25rem] xl:w-[2.5rem] xl:h-[2.5rem] border-y-[10px] sm:border-y-[2rem] lg:border-y-[2.25rem] xl:border-y-[2.5rem] border-y-transparent border-l-[0.75rem] sm:border-l-[2.5rem] lg:border-l-[2.8125rem] xl:border-l-[3rem] border-l-[#D1D5DB]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;