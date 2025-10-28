import React from "react";

const OurPeople = () => {
  return (
    <div className="relative h-auto text-white overflow-hidden">
      {/* Background Strip using clip-path - Responsive heights */}
      <div className="absolute top-0 left-0 w-full z-0
        h-[28rem] xs:h-[30rem] sm:h-[32rem] md:h-[34rem] lg:h-[31.375rem] xl:h-[43.875rem] xlplus:h-[45rem]">
        <div className="w-full h-full bg-[#011925] clip-bg"></div>
      </div>

      {/* Content Section - Responsive layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start px-4 py-6 h-full
        sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-6 lg:py-14 xl:px-10 xl:py-20">
        
        {/* Column 1 - Text Content */}
        <div className="flex flex-col items-start w-full lg:w-auto
          pl-4 sm:pl-6 md:pl-8 lg:pl-0 lg:ml-[2.5rem] xl:ml-[4rem]
          gap-4 sm:gap-6 md:gap-7 lg:gap-8
          mt-2 sm:mt-3 md:mt-4 lg:mt-1 xl:mt-[1.25rem]">
          
          {/* Header - Responsive sizing */}
          <div className="flex flex-row items-center justify-start w-full
            mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 xlplus:mt-12
            gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            
            <h2 className="font-semibold leading-none text-left
              text-[1.25rem] xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem]
              lg:text-[2.438rem] 2xl:text-[3.516rem] xlplus:text-[3rem] 2xlplus:text-[4.875rem]
              mt-4 sm:mt-6 md:mt-8 lg:mt-0">
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">PEOPLE</span>
            </h2>
            
            <img
              src="/assets/peoplelogo.svg"
              alt="People Icon"
              className="object-contain
                w-[3rem] h-[3rem] xs:w-[3.5rem] xs:h-[3.5rem]
                sm:w-[4rem] sm:h-[4.5rem] md:w-[5rem] md:h-[6rem]
                lg:w-[6.25rem] lg:h-[7.813rem] 2xl:w-[9.375rem] 2xl:h-[12.5rem]"
            />
          </div>

          {/* Paragraph - Responsive text sizing */}
          <div className="text-left w-full">
            <p className="font-light leading-snug
              text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]
              lg:text-[1.031rem] xlplus:text-[1.275rem] 2xl:text-[1.406rem] 2xlplus:text-[1.875rem]">
              Meet the team driving our innovation
            </p>
          </div>

          {/* Button - Responsive sizing */}
          <div className="w-full flex justify-start
            mt-3 sm:mt-4 md:mt-5 lg:mt-auto">
            <button className="font-semibold bg-[#F4D48D] text-black shadow-md hover:brightness-95
              w-[9rem] h-[2.5rem] text-[0.7rem] rounded-[0.6rem]
              xs:w-[10rem] xs:h-[2.7rem] xs:text-[0.75rem] xs:rounded-[0.65rem]
              sm:w-[11rem] sm:h-[3rem] sm:text-[0.8rem] sm:rounded-[0.7rem]
              md:w-[12rem] md:h-[3.2rem] md:text-[0.85rem] md:rounded-[0.75rem]
              lg:w-[13.75rem] lg:h-[3.625rem] lg:text-[0.938rem] lg:rounded-[1rem]
              xl:w-[15.625rem] xl:h-[5.1875rem] xl:text-[1.172rem] xl:rounded-[1.25rem]
              lg:mt-[4.375rem] xl:mt-[5.625rem]">
              MEET THE TEAM
            </button>
          </div>
        </div>

        {/* Card - Responsive positioning and sizing */}
        <div className="bg-[#01141E] shadow-lg text-white flex flex-col justify-between mx-auto
          mt-6 sm:mt-8 md:mt-10 lg:absolute lg:right-6 lg:top-[13rem] xl:right-10 xl:top-[38%]
          w-[18rem] h-[11rem] rounded-[0.6rem]
          xs:w-[19rem] xs:h-[12rem] xs:rounded-[0.65rem]
          sm:w-[22rem] sm:h-[14rem] sm:rounded-[0.7rem]
          md:w-[26rem] md:h-[16rem] md:rounded-[0.75rem]
          lg:w-[31.25rem] lg:h-[21.875rem] lg:rounded-[1rem] lg:mx-0
          xlplus:w-[38rem] 2xl:w-[43.8125rem] 2xlplus:w-[50rem]
          xl:h-[29.75rem] xl:rounded-[1.25rem]
          lg:transform lg:-translate-y-1/2">
          
          {/* Card Content */}
          <div className="p-3 sm:p-4 md:p-5 lg:p-8 xl:p-10 2xl:p-12
            ml-[5%] sm:ml-[7%] md:ml-[8%] lg:ml-[10%]">
            
            <div className="flex items-start
              gap-2 sm:gap-2.5 md:gap-3 lg:gap-3">
              
              <img
                src="/assets/model.png"
                alt="David Jones"
                className="rounded-full object-cover
                  w-[3rem] h-[3rem] xs:w-[3.5rem] xs:h-[3.5rem]
                  sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem]
                  lg:w-[7.1875rem] lg:h-[7.1875rem] xl:w-[10.25rem] xl:h-[10.25rem]
                  xlplus:w-[9rem] xlplus:h-[9rem]"
              />
              
              <div className="text-left">
                <h3 className="font-bold
                  text-[0.8rem] xs:text-[0.9rem] sm:text-[1.1rem] md:text-[1.4rem]
                  lg:text-[2rem] xl:text-[3rem] xlplus:text-[2.8rem]">
                  Sameer Kanwar
                </h3>
                <p className="text-[#9CA3AF]
                  text-[0.5rem] xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.9rem]
                  lg:text-[1.25rem] xl:text-[2rem]">
                  Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="text-left max-w-[43.75rem] px-1
              mt-2 sm:mt-3 md:mt-4 lg:mt-8 xl:mt-10
              sm:px-1.5 md:px-2 lg:px-2">
              
              <p className="leading-snug text-[#E5E5E5]
                text-[0.5rem] xs:text-[0.55rem] sm:text-[0.65rem] md:text-[0.8rem]
                lg:text-[1rem] xlplus:text-[1.3rem] 2xl:text-[1.25rem] 2xlplus:text-[1.5rem]">
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Arrow Controls - Responsive positioning and sizing */}
          <div className="flex absolute right-1 bottom-1 self-end
            gap-3 sm:gap-4 md:gap-5 lg:gap-8 xl:gap-8
            p-1 sm:p-2 md:p-3 lg:p-6 xl:p-[0.4rem]
            sm:right-2 sm:bottom-2 lg:right-2 lg:bottom-2
            mt-2 sm:mt-3 md:mt-4 lg:mt-[2.5rem] xl:mt-[5rem] xlplus:mt-[7rem]">
            
            {/* Left Arrow */}
            <div className="border-y-transparent border-r-[#D1D5DB]
              w-[0.8rem] h-[0.8rem] border-y-[0.4rem] border-r-[0.5rem]
              xs:w-[0.9rem] xs:h-[0.9rem] xs:border-y-[0.45rem] xs:border-r-[0.55rem]
              sm:w-[1rem] sm:h-[1rem] sm:border-y-[0.5rem] sm:border-r-[0.6rem]
              md:w-[1.2rem] md:h-[1.2rem] md:border-y-[0.6rem] md:border-r-[0.7rem]
              lg:w-[2.25rem] lg:h-[2.25rem] lg:border-y-[2.25rem] lg:border-r-[2.8125rem]
              xl:w-[2.5rem] xl:h-[2.5rem] xl:border-y-[2.5rem] xl:border-r-[3rem]" />

            {/* Right Arrow */}
            <div className="border-y-transparent border-l-[#D1D5DB]
              w-[0.8rem] h-[0.8rem] border-y-[0.4rem] border-l-[0.5rem]
              xs:w-[0.9rem] xs:h-[0.9rem] xs:border-y-[0.45rem] xs:border-l-[0.55rem]
              sm:w-[1rem] sm:h-[1rem] sm:border-y-[0.5rem] sm:border-l-[0.6rem]
              md:w-[1.2rem] md:h-[1.2rem] md:border-y-[0.6rem] md:border-l-[0.7rem]
              lg:w-[2.25rem] lg:h-[2.25rem] lg:border-y-[2.25rem] lg:border-l-[2.8125rem]
              xl:w-[2.5rem] xl:h-[2.5rem] xl:border-y-[2.5rem] xl:border-l-[3rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;