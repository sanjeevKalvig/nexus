import React from "react";

const ContactUs = () => {
  return (
    <section className="text-white py-8 px-4
      xs:px-6 xs:py-10
      sm:px-8 sm:py-12
      md:px-12 md:py-16
      lg:px-16 lg:py-20
      xl:px-20 xl:py-24
      2xl:px-24 2xl:py-28
      lgplus:py-0 lgplus:mb-5
      xlplus:py-0 xlplus:mb-8">
      
      {/* Header */}
      <div className="flex items-center mb-8
        gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16
        xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
        
        <h2 className="font-semibold leading-none
          text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
          sm:text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[5.6rem]">
          <span className="text-[#F4D48D]">CONTACT</span>{" "}
          <span className="text-white">US</span>
        </h2>
        
        <img
          src="/assets/msgicon.png"
          alt="Message Icon"
          className="object-contain
            w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
            lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28
            md:w-[4rem] md:h-[4rem] lg:w-[5rem] lg:h-[5rem] 
            xl:w-[6rem] xl:h-[6rem] 2xl:w-[8.25rem] 2xl:h-[8.25rem]"
        />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch
          gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          
          {/* Column 1 */}
          <div className="flex flex-col h-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] focus:outline-none
                py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6
                text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                placeholder:text-sm placeholder:xs:text-base placeholder:sm:text-lg 
                placeholder:md:text-xl placeholder:lg:text-xl placeholder:xl:text-2xl"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] focus:outline-none
                py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6
                text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                placeholder:text-sm placeholder:xs:text-base placeholder:sm:text-lg 
                placeholder:md:text-xl placeholder:lg:text-xl placeholder:xl:text-2xl
                lgplus:mt-[20%] xl:mt-[20%]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col h-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
            <input
              type="text"
              placeholder="Phone*"
              className="w-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] focus:outline-none
                py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6
                text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                placeholder:text-sm placeholder:xs:text-base placeholder:sm:text-lg 
                placeholder:md:text-xl placeholder:lg:text-xl placeholder:xl:text-2xl"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] focus:outline-none
                py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6
                text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                placeholder:text-sm placeholder:xs:text-base placeholder:sm:text-lg 
                placeholder:md:text-xl placeholder:lg:text-xl placeholder:xl:text-2xl
                lgplus:mt-[20%] xl:mt-[20%]"
            />
          </div>

          {/* Column 3 - Message */}
          <div className="h-full">
            <textarea
              placeholder="Message*"
              className="w-full h-full bg-transparent border-b border-[#a3a3a3] text-white placeholder:text-[#a3a3a3] focus:outline-none resize-none
                text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                placeholder:text-sm placeholder:xs:text-base placeholder:sm:text-lg 
                placeholder:md:text-xl placeholder:lg:text-xl placeholder:xl:text-2xl
                min-h-[120px] xs:min-h-[140px] sm:min-h-[160px] md:min-h-[180px] 
                lg:min-h-[200px] xl:min-h-[220px] 2xl:min-h-[240px]"
              rows={6}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#F4D48D] text-black font-semibold hover:bg-[#eac36c] transition flex items-center justify-center gap-2
            mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12
            w-24 h-9 text-xs rounded-lg
            xs:w-28 xs:h-10 xs:text-sm xs:rounded-lg
            sm:w-32 sm:h-11 sm:text-base sm:rounded-xl
            md:w-36 md:h-12 md:text-lg md:rounded-xl
            lg:w-40 lg:h-14 lg:text-xl lg:rounded-2xl
            xl:w-44 xl:h-16 xl:text-2xl xl:rounded-2xl
            2xl:w-48 2xl:h-18 2xl:text-3xl 2xl:rounded-3xl
            px-3 py-1 xs:px-4 xs:py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 
            lg:px-7 lg:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5">
          Submit
          <img
            src="/assets/submitarrow.svg"
            alt="Arrow"
            className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
          />
        </button>
      </form>
    </section>
  );
};

export default ContactUs;