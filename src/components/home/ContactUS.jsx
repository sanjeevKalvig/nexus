import React from "react";

const ContactUs = () => {
  return (
    <section className="text-white px-6 md:px-20 py-20 lg:top-10 xl:px-20 xl:py-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 md:gap-8 md:mb-16 xl:gap-8 xl:mb-16">
        <h2 className="text-[40px] font-semibold leading-none md:text-[64px] lg:text-[80px] xl:text-[96px]">
          <span className="text-[#F4D48D]">CONTACT</span>{" "}
          <span className="text-white">US</span>
        </h2>
        <img
          src="/assets/msgicon.png"
          alt="Message Icon"
          className="w-[50px] h-[50px] object-contain md:w-[120px] md:h-[120px] xl:w-[165px] xl:h-[165px]"
        />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-10 md:flex-row lg:gap-4 xl:flex-row xl:gap-10">
        {/* Left - Inputs */}
        <div className="w-full grid grid-cols-1 gap-y-6 md:w-[70%] md:grid-cols-2 md:gap-x-10 md:gap-y-10 xl:w-[70%]">
          <input
            type="text"
            placeholder="Name*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[18px] md:text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[18px] md:text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[18px] md:text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[18px] md:text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
        </div>

        {/* Right - Message + Button */}
        <div className="w-full md:w-[30%] flex flex-col">
          <textarea
            placeholder="Message*"
            className="w-full h-[200px] md:h-full bg-transparent border-b border-[#a3a3a3] text-white text-[18px] md:text-[20px] md:border-none placeholder:text-[#a3a3a3] focus:outline-none xl:border-none"
            rows={10}
          />
          <button
            type="submit"
            className="mt-4 w-fit bg-[#F4D48D] text-black px-6 py-2 text-[16px] font-medium rounded-md hover:bg-[#eac36c] transition xl:z-20 "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
