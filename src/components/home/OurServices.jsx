import React from "react";

const OurServices = () => {
  return (
    <section className="text-white py-16 px-4 sm:py-24">
      {/* Heading */}
      <h2 className="text-[2.5rem] sm:text-[6rem] font-semibold text-center mb-12 sm:mb-20">
        <span className="text-white">OUR </span>
        <span className="text-[#F4D48D]">SERVICES</span>
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid place-items-center gap-y-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-20 sm:gap-y-16">
        {/* Card 1 */}
        <div className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[21.7844rem] px-6 py-10 rounded-[15px]
            sm:w-[367px] sm:h-[588px] sm:p-8">
          <div className="w-[90px] h-[130px] mb-6 sm:w-[150px] sm:h-[210px] flex items-center justify-center">
            <img
              src="/assets/nexusepc.png"
              alt="NEXUS EPC"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.744rem] font-normal leading-relaxed sm:text-[20px]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button className="mt-6 bg-[#002538] text-[#f2f1ef] font-normal rounded-[10px]
              w-[6.6688rem] h-[2.0375rem] text-[0.744rem]
              sm:w-[180px] sm:h-[55px] sm:text-[20px] sm:rounded-[15px]">
            VIEW MORE
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[21.7844rem] px-6 py-10 rounded-[15px]
            sm:w-[367px] sm:h-[588px] sm:p-8">
          <div className="w-[80px] h-[110px] mb-6 sm:w-[298px] sm:h-[200px] flex items-center justify-center">
            <img
              src="/assets/akash.png"
              alt="Ākāsa"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.744rem] font-normal leading-relaxed sm:text-[20px]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button className="mt-6 bg-[#002538] text-[#f2f1ef] font-normal rounded-[10px]
              w-[6.6688rem] h-[2.0375rem] text-[0.744rem]
              sm:w-[180px] sm:h-[55px] sm:text-[20px] sm:rounded-[15px]">
            VIEW MORE
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#01141E] text-center flex flex-col items-center justify-between
            w-[13.5969rem] h-[21.7844rem] px-6 py-10 rounded-[15px]
            sm:w-[367px] sm:h-[588px] sm:p-8">
          <div className="w-[85px] h-[120px] mb-6 sm:w-[300px] sm:h-[200px] flex items-center justify-center">
            <img
              src="/assets/driveline.png"
              alt="NEXUS DRIVELINE"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-[0.744rem] font-normal leading-relaxed sm:text-[20px]">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry.
          </p>
          <button className="mt-7 bg-[#002538] text-[#f2f1ef] font-normal rounded-[10px]
              w-[6.6688rem] h-[2.0375rem] text-[0.744rem]
              sm:w-[180px] sm:h-[55px] sm:text-[20px] sm:rounded-[15px]">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
