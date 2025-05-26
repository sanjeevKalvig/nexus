import React from "react";

const AboutUs = () => {
  return (
    <div className="relative text-white overflow-hidden mb-20">
      {/* Background Strip using clip-path */}
      <div className="absolute top-20 left-0 w-full h-[702px] z-0">
        <div
          className="w-full h-full bg-[#011925]"
          style={{
            clipPath: "polygon(0% 30%, 0% 75%, 99% 70%, 100% 0%)",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1920px] mx-auto pt-20 pb-64 flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-1 mt-[120px]">
          <div className="text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Header */}
            <div className="mb-16">
              <h2 className="text-[96px] font-semibold leading-none">
                <span className="text-[#F4D48D]">ABOUT</span>{" "}
                <span className="text-white">US</span>
              </h2>
              <p className="text-[25px] text-gray-300 mt-8 max-w-4xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
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
        <div className="flex-1 flex flex-col justify-between max-w-[700px] lg:max-w-[850px]">
          <img
            src="/assets/building.png"
            alt="Building"
            className="w-full h-auto object-cover rounded-md"
            style={{
              clipPath: "polygon(0% 9%, 0% 85%, 100% 100%, 100% 1%)",
            }}
          />
        </div>
      </div>

      {/* Our Values - Overlapping half of the content container */}
      <div className="relative z-20 -mt-[600px] px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
        <div className="rounded-lg shadow-xl">
          <div className="flex items-center mb-12">
            <h2 className="text-[96px] font-semibold leading-none">
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">VALUES</span>
            </h2>
            <img
              src="/assets/value.png"
              alt="Values Icon"
              className="w-[160px] h-[200px] object-contain ml-6"
            />
          </div>

          {/* 2x2 Grid Layout with vertical divider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
            {/* Vertical divider - only shows on md screens and larger */}
            <div className="hidden md:block absolute top-0 bottom-0 left-[45%] w-px bg-gray-600 transform -translate-x-1/2"></div>

            <div>
              <h4 className="text-[25px] font-300 text-white  mb-2">
                Safety
              </h4>
              <p className="text-[18px] text-gray-300">
                Safety is fundamental to the way we work and live. It is our<br></br>
                commitment to you, our customer, that drives us to make sure<br></br>
                your safety is never compromised.
              </p>
            </div>
            <div>
              <h4 className="text-[25px] font-300 text-white  mb-2">
                Professionalism
              </h4>
              <p className="text-[18px] text-gray-300">
                Our approach to business is professional and disciplined. We
                want <br></br> to treat our clients with the utmost respect, and we
                believe that this<br></br> is the only way to build long-term
                relationships.
              </p>
            </div>
            <div>
              <h4 className="text-[25px] font-300 text-white  mb-2">
                Honesty
              </h4>
              <p className="text-[18px] text-gray-300">
                Honesty is doing the right thing even when no one else is
                looking.<br></br> It's not saying what you think people want to hear,
                it's taking a <br></br>stand and doing what you know is right.
              </p>
            </div>

            <div>
              <h4 className="text-[25px] font-300 text-white  mb-2">
                Teamwork
              </h4>
              <p className="text-[18px] text-gray-300">
                We believe that people are the most important asset in any<br></br>
                organization and we work hard to ensure that everyone feels<br></br>
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
