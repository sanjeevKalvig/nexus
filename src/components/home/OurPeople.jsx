import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurPeople = () => {
  return (
    <div className="relative bg-[#050D11] h-[800px] text-white overflow-hidden mt-[200px]">
      {/* Background Strip using clip-path */}
      <div className="absolute top-0 left-0 w-full h-[702px] z-0">
        <div
          className="w-full h-full bg-[#011925]"
          style={{
            clipPath: "polygon(0% 30%, 0% 87%, 99% 70%, 100% 0%)",
          }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-between items-start px-10 py-20 h-full">
        {/* Left Column - Fixed position */}
        <div className="flex flex-col ml-16 mt-5 ">
          {/* Header */}
          <div className="flex items-center mb-4">
            <h2 className="text-[96px] font-semibold leading-none">
              <span className="text-[#F4D48D]">OUR </span>
              <span className="text-white">PEOPLE</span>
            </h2>
            <img
              src="/assets/peoplelogo.svg"
              alt="Message Icon"
              className="w-[160px] h-[200px] object-contain ml-6 mb-16"
            />
          </div>

          {/* Paragraph with fixed spacing */}
          <div className="flex-grow">
            <p className="text-[36px] font-light leading-snug">
              Meet the team driving <br /> our innovation
            </p>
          </div>

          {/* Button with fixed position relative to parent */}
          <div className="mt-auto">
            <button className="w-[310px] h-[83px] mt-[90px] text-[29px] font-semibold bg-[#F4D48D] text-black  text-lg rounded-[20px] shadow-md hover:brightness-95">
              MEET THE TEAM
            </button>
          </div>
        </div>

        {/* Right Column - Card with Arrows Wrapped in Parent */}
        <div className="absolute right-10 top-[40%] transform -translate-y-1/2 w-[701px] bg-[#01141E]   rounded-[20px] shadow-lg text-white flex flex-col justify-between h-[476px]">
          {/* Card Content */}
          <div>
            <div className="flex items-center justify-center gap-6 p-11">
              <img
                src="/assets/model.png"
                alt="David Jones"
                className="w-[164px] h-[164px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-[48px] font-bold">David Jones</h3>
                <p className="text-[32px] text-[#9CA3AF]">Lorem Ipsum</p>
              </div>
            </div>

            <p className="mt-8 text-[24px] leading-snug text-[#E5E5E5] ml-[110px]">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br />
              dummy text ever since the 1500s.
            </p>
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-10 self-end p-8 mt-[50px] ">
            {/* Left Arrow */}
            <div className="w-[50px] h-[50px] border-y-[50px] border-y-transparent border-r-[60px] border-r-[#D1D5DB] "></div>

            {/* Right Arrow */}
            <div className="w-[50px] h-[50px] border-y-[50px] border-y-transparent border-l-[60px] border-l-[#D1D5DB]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
