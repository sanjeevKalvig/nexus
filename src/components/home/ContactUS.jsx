import React from "react";

const ContactUs = () => {
  return (
    <section className="text-white px-[1.5rem] md:px-[5rem] py-[2rem] lgplus:py-0 lgplus:mb-5 xl:px-[5rem] xl:py-[5rem] xlplus:py-0 xlplus:mb-8">
      {/* Header */}
      <div className="flex items-center gap-[1rem] mb-[2.5rem] md:gap-[2rem] md:mb-[4rem] xl:gap-[2rem] xl:mb-[4rem]">
        <h2 className="text-[2.5rem] font-semibold leading-none md:text-[4rem] lg:text-[5rem] xl:text-[6rem]">
          <span className="text-[#F4D48D]">CONTACT</span>{" "}
          <span className="text-white">US</span>
        </h2>
        <img
          src="/assets/msgicon.png"
          alt="Message Icon"
          className="w-[3.125rem] h-[3.125rem] object-contain md:w-[7.5rem] md:h-[7.5rem] xl:w-[10.3125rem] xl:h-[10.3125rem]"
        />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-[2rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5rem] xl:gap-[2.5rem] items-stretch">
          {/* Column 1 */}
          <div className="flex flex-col h-full gap-[1.5rem]">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] text-[1.125rem] focus:outline-none py-[0.5rem]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-transparent border-b lgplus:mt-[20%] xl:mt-[20%] border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] text-[1.125rem] focus:outline-none py-[0.5rem]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col h-full gap-[1.5rem]">
            <input
              type="text"
              placeholder="Phone*"
              className="w-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] text-[1.125rem] focus:outline-none py-[0.5rem]"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full bg-transparent border-b lgplus:mt-[20%] xl:mt-[20%] border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] text-[1.125rem] focus:outline-none py-[0.5rem]"
            />
          </div>

          {/* Column 3 - Message */}
          <div className="h-full">
            <textarea
              placeholder="Message*"
              className="w-full h-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] text-[1.125rem] focus:outline-none resize-none"
              rows={6}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-[1rem] w-[7.5rem] h-[2.75rem] bg-[#F4D48D] text-black px-[1.5rem] py-[0.5rem] text-[1rem] font-semibold rounded-[0.4375rem] hover:bg-[#eac36c] transition flex items-center justify-center gap-[0.5rem]"
        >
          Submit
          <img
            src="/assets/submitarrow.svg"
            alt="Arrow"
            className="w-[1rem] h-[1rem]"
          />
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
