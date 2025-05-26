import React from "react";

const ContactUs = () => {
  return (
    <section className=" text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="flex items-center gap-8 mb-16">
        <h2 className="text-[96px] font-semibold leading-none">
          <span className="text-[#F4D48D]">CONTACT</span>{" "}
          <span className="text-white">US</span>
        </h2>
        <img
          src="/assets/msgicon.png"
          alt="Message Icon"
          className="w-[165px] h-[165px] object-contain mb-20 ml-10"
        />
      </div>

      {/* Form */}
      <form className="flex flex-col md:flex-row gap-10">
        {/* Left - Inputs */}
        <div className="w-[70%] grid grid-cols-2 gap-x-10 gap-y-10">
          <input
            type="text"
            placeholder="Name*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full bg-transparent border-b border-[#a3a3a3] text-white text-[20px] placeholder:text-[#a3a3a3] focus:outline-none py-2"
          />
        </div>

        {/* Right - Message */}
        <div className="w-[30%]">
          <textarea
            placeholder="Message*"
            className="w-full h-full bg-transparent border-b border-[#a3a3a3] text-white text-[20px] placeholder:text-[#a3a3a3] focus:outline-none"
            rows={10}
          />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
