import React from "react";

const AboutUs = () => {
  return (
    <div className="relative text-white overflow-hidden ">
      {/* Background Strip using clip-path */}
      <div className="absolute h-[12rem] lgplus:h-[43.875rem] top-[7rem] left-0 w-full   xl:h-[43.875rem] xl:top-[5rem] z-0">
        <div
          className="w-full h-full bg-[#011925]"
          style={{
            clipPath: "polygon(0% 30%, 0% 82%, 99% 70%, 100% 0%)",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div
        className="relative z-10  gap-0 max-w-[1920px] mx-auto xl:pt-20 xl:pb-64 flex flex-col lg:flex-row xl:gap-16 lgplus:top-[8rem] xlplus:top-4 
      2xl:top-[0.2rem]"
      >
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-1 mt-[7.5rem]">
          <div className="text-white py-20 px-6 md:px-12 lg:px-24 xl:px-24 xl:py-20">
            {/* Header */}
            <div className="mb-16">
              <h2 className=" text-[2.5rem] font-semibold leading-none lgplus:text-[4rem] xlplus:text-[5rem] 2xl:text-[4rem] 2xlplus:text-[8rem] ">
                <span className="text-[#F4D48D]">ABOUT</span>{" "}
                <span className="text-white">US</span>
              </h2>
              <p className="text-[1.375rem] text-gray-300 mt-8 max-w-4xl lg:text-[20px] lgplus:text-[1rem]   2xl:text-[1.375rem] 2xlplus:text-[2rem]">
                Nexus Group is built on the foundation of innovation, integrity,
                and excellence. We deliver end-to-end engineering and
                infrastructure solutions that empower businesses, shape
                communities, and drive sustainable growth across industries.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-16 xl:gap-16 ">
              <div>
                <div>
                  <img src="/assets/mission.svg" />
                </div>
                <h3 className="text-[2rem] text-[#F4D48D] font-semibold mb-4 lgplus:text-[2.5rem] 2xlplus:text-[5rem] ">
                  Mission
                </h3>
                <p className="text-[1.25rem] text-gray-300 leading-relaxed  lg:text-[15px] lgplus:text-[1rem] 2xl:text-[0.9375rem] 2xlplus:text-[1.5rem]">
                  Nexus Group provides energy infrastructure solutions for
                  electric power delivery and pipeline installation. We also
                  work on infrastructure design as well as shoreline sites.
                </p>
              </div>
              <div>
                <div>
                  <img src="/assets/vision.svg" />
                </div>
                <h3 className="text-[2rem] text-[#F4D48D] font-semibold mb-4 lgplus:text-[2.5rem] 2xlplus:text-[5rem] ">
                  {" "}
                  {/* 32px */}
                  Vision
                </h3>
                <p className="text-[1.25rem] text-gray-300 leading-relaxed lg:text-[15px] lgplus:text-[1rem] 2xl:text-[0.9375rem] 2xlplus:text-[1.5rem]">
                  {" "}
                  {/* 20px, 15px */}
                  To build a global enterprise for all our stakeholders'
                  priorities and for the public, Nexus Group wants to create a
                  great future for our country by empowering a million young
                  people with great opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex-1 flex flex-col justify-between max-w-[1000px] md:w-full lg:max-w-[850px] xl:max-w-[850px] ">
          {/* Background div behind the image */}
          <div
            className="absolute bg-[#011925] inset-0 w-full h-auto -mt-8 z-0 2xl:hidden md:hidden "
            style={{
              height: "109%", // retain percentage
              clipPath: "polygon(0% 12%, 0% 80%, 100% 99%, 100% 4%)",
            }}
          ></div>

          {/* Foreground image */}
          <img
            src="/assets/building.png"
            alt="Building"
            className="w-full h-auto object-cover rounded-md relative z-10 lg:mt-20 xl:mt-0 "
            style={{
              clipPath: "polygon(0% 10%, 0% 79%, 100% 100%, 100% 1%)",
            }}
          />
        </div>
      </div>

      {/* Our Values - Overlapping half of the content container */}
      <div
        className="relative z-20 mt-4 2xl:-mt-[27rem]  px-6 md:px-12 lg:px-24 xl:px-24 max-w-[1920px] mx-auto
       lgplus:mt-[6rem] xlplus:-mt-[20rem] 2xlplus:-mt-[20rem]"
      >
        {" "}
        {/* 432px → 27rem */}
        <div className="rounded-lg shadow-xl">
          <div className="flex items-center mb-12 h-auto">
            <h2 className="text-[2.5rem] font-semibold leading-none 2xl:text-[4rem] lgplus:text-[4rem] 2xlplus:text-[8rem]">
              {" "}
              {/* 40px, 90px */}
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">VALUES</span>
            </h2>
            <img
              src="/assets/value.png"
              alt="Values Icon"
              className="w-[3.0625rem] h-[3.0625rem] object-contain ml-6 xl:w-[7.5rem] xl:h-[12.5rem]"
            />{" "}
            {/* 49px, 120px, 200px */}
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-10 relative">
            {/* Vertical divider for medium+ screens */}
            <div
              className="hidden xl:block absolute top-0 bottom-0 2xl:left-[47%] w-px bg-[#F4D48D] transform -translate-x-1/2 text-[1.125rem]
             text-gray-300 2xlplus: lgplus:left-[48%] xlplus:left-[49%] 2xlplus:left-[48%]"
            ></div>

            {/* Safety */}
            <div>
              <h4 className="text-[2rem] text-[#F4D48D] font-semibold mb-4  lgplus:text-[3rem] 2xl:text-[2rem] 2xlplus:text-[4rem]">
                {" "}
                {/* 32px */}
                Safety
              </h4>
              <p className="text-[1.125rem] text-gray-300  2xlplus:text-[1.5rem] lgplus:text-[1rem]">
                {" "}
                {/* 18px */}
                Safety is fundamental to the way we work and live. It is our
                <br />
                commitment to you, our customer, that drives us to make sure
                <br />
                your safety is never compromised.
              </p>
            </div>

            {/* Professionalism */}
            <div>
              <h4 className="text-[2rem] text-[#F4D48D] font-semibold mb-4  lgplus:text-[3rem] 2xl:text-[2rem] 2xlplus:text-[4rem]">
                {" "}
                {/* 32px */}
                Professionalism
              </h4>
              <p className="text-[1.125rem] text-gray-300 2xlplus:text-[1.5rem] lgplus:text-[1rem]">
                {" "}
                {/* 18px */}
                Our approach to business is professional and disciplined. We
                want
                <br />
                to treat our clients with the utmost respect, and we believe
                that this
                <br />
                is the only way to build long-term relationships.
              </p>
            </div>

            {/* Honesty */}
            <div className="border-t border-gray-600 pt-6 mt-6 md:border-none md:pt-0 md:mt-0">
              <h4 className="text-[2rem] text-[#F4D48D] font-semibold mb-4  lgplus:text-[3rem] 2xl:text-[2rem] 2xlplus:text-[4rem]">
                {" "}
                {/* 32px */}
                Honesty
              </h4>
              <p className="text-[1.125rem] text-gray-300 2xlplus:text-[1.5rem] lgplus:text-[1rem]">
                {" "}
                {/* 18px */}
                Honesty is doing the right thing even when no one else is
                looking.
                <br />
                It's not saying what you think people want to hear, it's taking
                a<br />
                stand and doing what you know is right.
              </p>
            </div>

            {/* Teamwork */}
            <div>
              <h4 className="text-[2rem] text-[#F4D48D] font-semibold mb-4  lgplus:text-[3rem] 2xl:text-[2rem] 2xlplus:text-[4rem]">
                {" "}
                {/* 32px */}
                Teamwork
              </h4>
              <p className="text-[1.125rem] text-gray-300 2xlplus:text-[1.5rem] lgplus:text-[1rem]">
                {" "}
                {/* 18px */}
                We believe that people are the most important asset in any
                <br />
                organization and we work hard to ensure that everyone feels
                <br />
                valued and appreciated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
