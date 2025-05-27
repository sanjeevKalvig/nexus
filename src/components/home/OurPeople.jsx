import React from "react";

const OurPeople = () => {
  return (
    <div className="relative bg-[#050D11] sm:min-h-[800px] sm:h-[500px] lg:h-[600px] xl:h-[800px] text-white overflow-hidden mt-[80px] sm:mt-[120px] lg:mt-[150px] xl:mt-[200px]">
      {/* Background Strip using clip-path - Mobile height increased */}
      <div className="absolute top-0 left-0 w-full h-[650px] sm:h-[402px] lg:h-[502px] xl:h-[702px] z-0">
        <div className="w-full h-full bg-[#011925] clip-bg"></div>
      </div>

      {/* Content Section - Changed to column layout on mobile */}
      <div className="relative  z-10 flex flex-col sm:flex-col lg:flex-row items-center sm:items-start px-4 sm:px-4 lg:px-6 xl:px-10 py-8 sm:py-10 lg:py-14 xl:py-20 h-full">
        {/* Column 1 - Stacked on top in mobile */}
        <div className="flex flex-col gap-8 items-start ml-0 sm:ml-6 lg:ml-10 xl:ml-16 mt-0 sm:mt-3 lg:mt-4 xl:mt-5 w-full sm:w-auto">
          {/* Header - Left-aligned on all screens */}
          <div className="flex flex-row items-center justify-start mb-4 sm:mb-2 lg:mb-3 xl:mb-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            <h2 className="text-[32px] mt-12 sm:text-[46px] lg:text-[52px] xl:text-[96px] font-semibold leading-none text-left">
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">PEOPLE</span>
            </h2>
            <img
              src="/assets/peoplelogo.svg"
              alt="People Icon"
              className="w-[71px] h-[71px] sm:w-[90px] sm:h-[112px] lg:w-[100px] lg:h-[125px] xl:w-[160px] xl:h-[200px] object-contain"
            />
          </div>

          {/* Paragraph - Left-aligned on all screens */}
          <div className="flex-grow text-left">
            <p className="text-[24px] sm:text-[18px] lg:text-[22px] xl:text-[36px] font-light leading-snug">
              Meet the team driving our innovation
            </p>
          </div>

          {/* Button - Left-aligned on all screens */}
          <div className="mt-6 sm:mt-auto w-full flex justify-start">
            <button className="w-[173px] h-[48px] text-[17px] sm:w-[200px] sm:h-[54px] lg:w-[220px] lg:h-[58px] xl:w-[310px] xl:h-[83px] mt-0 sm:mt-[60px] lg:mt-[70px] xl:mt-[90px] sm:text-[18px] lg:text-[20px] xl:text-[29px] font-semibold bg-[#F4D48D] text-black rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px] shadow-md hover:brightness-95">
              MEET THE TEAM
            </button>
          </div>
        </div>

        {/* Card - Placed below on mobile */}
        <div className="mt-8 sm:absolute sm:right-4 lg:right-6 xl:right-10 sm:top-[25%] sm:transform sm:-translate-y-1/2 w-[341px] h-[213.22px] sm:w-[440px] lg:w-[500px] xl:w-[701px] sm:h-[304px] lg:h-[350px] xl:h-[476px] bg-[#01141E] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px] xl:top-[36%] shadow-lg text-white flex flex-col justify-between mx-auto sm:mx-0">
          {/* Card Content */}
          <div>
            <div className="flex items-center justify-center gap-3 p-4 sm:p-6 lg:p-8 xl:p-11">
              <img
                src="/assets/model.png"
                alt="David Jones"
                className="w-[73px] h-[73px] sm:w-[104px] sm:h-[104px] lg:w-[115px] lg:h-[115px] xl:w-[164px] xl:h-[164px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-[18px] sm:text-[28px] lg:text-[32px] xl:text-[48px] font-bold">
                  David Jones
                </h3>
                <p className="text-[10px] sm:text-[18px] lg:text-[20px] xl:text-[32px] text-[#9CA3AF]">
                  Lorem Ipsum
                </p>
              </div>
            </div>

            <p className="mt-2 sm:mt-4 lg:mt-6 xl:mt-8 text-[10px] sm:text-[14px] lg:text-[16px] xl:text-[24px] leading-snug text-[#E5E5E5] ml-[60px] sm:ml-[70px] lg:ml-[80px] xl:ml-[110px]">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br />
              dummy text ever since the 1500s.
            </p>
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-4 mt-[2.5rem] sm:gap-6 lg:gap-8 xl:gap-10 self-end p-3 sm:p-4 lg:p-6 xl:p-8  sm:mt-[30px] lg:mt-[40px] xl:mt-[50px]">
            {/* Left Arrow */}
            <div className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[50px] xl:h-[50px] border-y-[10px] sm:border-y-[32px] lg:border-y-[36px] xl:border-y-[50px] border-y-transparent border-r-[12px] sm:border-r-[40px] lg:border-r-[45px] xl:border-r-[60px] border-r-[#D1D5DB]"></div>

            {/* Right Arrow */}
            <div className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[50px] xl:h-[50px] border-y-[10px] sm:border-y-[32px] lg:border-y-[36px] xl:border-y-[50px] border-y-transparent border-l-[12px] sm:border-l-[40px] lg:border-l-[45px] xl:border-l-[60px] border-l-[#D1D5DB]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
