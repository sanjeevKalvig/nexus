import React from "react";

const About = () => {
  return (
    <section className="relative bg-[#0C1C24] text-white h-full overflow-hidden">
      {/* Top Diagonal Background Strip */}
      <div className="absolute top-[200px] left-0 w-full h-[300px] bg-[#10252E] -skew-y-6 z-0"></div>

      <div className="relative z-10 flex w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 py-20 px-6 md:px-12 lg:px-16">
          {/* Title */}
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-[#F4D48D]">ABOUT</span>{" "}
              <span className="text-white">US</span>
            </h2>
            <p className="text-gray-300 mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Mission / Vision */}
          <div className="grid sm:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-[#F4D48D] font-semibold text-lg mb-2">
                Mission
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Neural design provides energy transmission solutions to top-downs. Pulse delivery can guide the installation for all devices or modes readying in an unit or chamber area.
              </p>
            </div>
            <div>
              <h3 className="text-[#F4D48D] font-semibold text-lg mb-2">
                Vision
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To build a global enterprise line at our assembled premises until the first public launch date on which it contains digital tube (we are able to try to get power to achieve both purpose and warm guest opportunities).
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-10">
            <h3 className="text-[#F4D48D] text-2xl font-bold mb-6">
              OUR VALUES
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 text-sm text-gray-300">
              <div>
                <h4 className="text-white font-semibold mb-1">Safety</h4>
                <p>
                  Safety is fundamental to the way we work and live. It is our commitment to you, our customers, that drives us to make sure your safety is never compromised.
                </p>

                <h4 className="text-white font-semibold mt-4 mb-1">Honesty</h4>
                <p>
                  Honesty is doing the right thing even when no one else is looking to not saying what you think people want to hear, its talking o stand and doing what you know is right.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Professionalism
                </h4>
                <p>
                  Our approach to business is professional and disciplined. We want to head our clients with the utmost respect, and we believe that this is the only way to build long-term relationships.
                </p>

                <h4 className="text-white font-semibold mt-4 mb-1">Teamwork</h4>
                <p>
                  We believe that people are the most important cases in any organization and we work hard to ensure that everyone feels valued and appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image - Fixed to right edge */}
        <div className="hidden md:block fixed right-0 top-0 h-full w-[45%]">
          <img
            src="/assets/building.png"
            alt="building"
            className="object-cover h-full w-full"
             
          />
        </div>
      </div>
    </section>
  );
};

export default About;