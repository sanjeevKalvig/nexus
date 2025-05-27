import React from "react";

const AboutUs = () => {
  return (
    <div className="relative text-white overflow-hidden mb-20">
      {/* Background Strip using clip-path */}
      <div className="absolute h-[19rem] top-20 left-0 w-full xl:h-[702px] xl:top-20 z-0">
        <div
          className="w-full h-full bg-[#011925]"
          style={{
            clipPath: "polygon(0% 30%, 0% 75%, 99% 70%, 100% 0%)",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 gap-0 max-w-[1920px] mx-auto xl:pt-20 xl:pb-64 flex flex-col lg:flex-row xl:gap-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-1 mt-[120px]">
          <div className="text-white py-20 px-6 md:px-12 lg:px-24 xl:px-24 xl:py-20">
            {/* Header */}
            <div className="mb-16">
              <h2 className=" text-[40px] font-semibold leading-none xl:text-[96px]">
                <span className="text-[#F4D48D]">ABOUT</span>{" "}
                <span className="text-white">US</span>
              </h2>
              <p className="text-[24px] text-gray-300 mt-8 max-w-4xl xl:max-w-4xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-16 xl:gap-16 xl:mb-20">
              <div>
                <div>
                  <img src="/assets/mission.svg" />
                </div>
                <h3 className="text-[32px] text-[#F4D48D] font-semibold mb-4">
                  Mission
                </h3>
                <p className="text-[20px] text-gray-300 leading-relaxed">
                  Nexus Group provides energy infrastructure solutions for
                  electric power delivery and pipeline installation. We also
                  work on infrastructure design as well as shoreline sites.
                </p>
              </div>
              <div>
                <div>
                  <img src="/assets/vision.svg" />
                </div>
                <h3 className="text-[32px] text-[#F4D48D] font-semibold mb-4">
                  Vision
                </h3>
                <p className="text-[20px] text-gray-300 leading-relaxed">
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
        <div className="relative flex-1 flex flex-col justify-between max-w-[700px] lg:max-w-[850px] xl:max-w-[850px]">
          {/* Background div behind the image */}
          <div
            className="absolute bg-[#011925] inset-0 w-full h-auto -mt-8 z-0 xl:hidden "
            style={{
              height: "109%", 
              clipPath: "polygon(0% 12%, 0% 84%, 100% 99%, 100% 4%)",
            }}
          ></div>

          {/* Foreground image */}
          <img
            src="/assets/building.png"
            alt="Building"
            className="w-full h-auto object-cover rounded-md relative z-10"
            style={{
              clipPath: "polygon(0% 9%, 0% 85%, 100% 100%, 100% 1%)",
            }}
          />
        </div>
      </div>

      {/* Our Values - Overlapping half of the content container */}
      <div className="relative z-20 mt-4 xl:-mt-[600px] px-6 md:px-12 lg:px-24 xl:px-24 max-w-[1920px] mx-auto">
        <div className="rounded-lg shadow-xl">
          <div className="flex items-center mb-12">
            <h2 className="text-[40px] font-semibold leading-none xl:text-[96px]">
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">VALUES</span>
            </h2>
            <img
              src="/assets/value.png"
              alt="Values Icon"
              className=" w-[49px] h-[49px] object-contain ml-6  xl:w-[160px] xl:h-[200px] "
            />
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-10 relative">
            {/* Vertical divider for medium+ screens */}
            <div className="hidden md:block absolute top-0 bottom-0 left-[45%] w-px bg-gray-600 transform -translate-x-1/2"></div>

            {/* Safety */}
            <div>
              <h4 className="text-[32px] text-[#F4D48D] font-semibold mb-4">
                Safety
              </h4>
              <p className="text-[18px] text-gray-300">
                Safety is fundamental to the way we work and live. It is our
                <br />
                commitment to you, our customer, that drives us to make sure
                <br />
                your safety is never compromised.
              </p>
            </div>

            {/* Professionalism */}
            <div>
              <h4 className="text-[32px] text-[#F4D48D] font-semibold mb-4">
                Professionalism
              </h4>
              <p className="text-[18px] text-gray-300">
                Our approach to business is professional and disciplined. We
                want
                <br />
                to treat our clients with the utmost respect, and we believe
                that this
                <br />
                is the only way to build long-term relationships.
              </p>
            </div>

            {/* Honesty — only this has the horizontal divider */}
            <div className="border-t border-gray-600 pt-6 mt-6 md:border-none md:pt-0 md:mt-0">
              <h4 className="text-[32px] text-[#F4D48D] font-semibold mb-4">
                Honesty
              </h4>
              <p className="text-[18px] text-gray-300">
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
              <h4 className="text-[32px] text-[#F4D48D] font-semibold mb-4">
                Teamwork
              </h4>
              <p className="text-[18px] text-gray-300">
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
