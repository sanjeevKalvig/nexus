import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../../components/Nexus/home/Footer";
import NexusNavbar from "../../components/Nexus/home/NexusNavbar";

function ContactUs() {
  return (
    <>
      <div className="bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] px-4 py-6 text-white sm:px-6 sm:py-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <NexusNavbar />

        {/* Hero Section */}
        <div className="mt-12 sm:mt-14 md:mt-16 xl:mt-20">
          {/* Heading */}
          <div className="relative ml-4 sm:ml-6 md:ml-8 lg:ml-10">
            {/* Big outline background text */}
            <div
              aria-hidden="true"
              className="absolute -left-6 inset-0 flex items-center pointer-events-none uppercase font-extrabold text-transparent select-none sm:-left-8 md:-left-10 lg:-left-12"
              style={{
                fontSize: "clamp(40px, 12vw, 120px)",
                lineHeight: 1,
                whiteSpace: "nowrap",
                WebkitTextStroke: "1px rgba(255,255,255,0.06)",
              }}
            >
              get in touch
            </div>

            {/* Foreground title */}
            <div className="relative z-10 flex">
              <h2 
                className="m-0 leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-3 sm:translate-y-4 md:translate-y-5 lg:translate-y-6"
                style={{ fontSize: "clamp(28px, 8vw, 96px)" }}
              >
                get in touch
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="relative mt-12 grid gap-8 sm:mt-14 sm:gap-10 md:mt-16 md:gap-12 lg:mt-24 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:items-start xl:gap-16">
            {/* Decorative map */}
            <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 flex justify-center opacity-20 sm:opacity-25 md:opacity-30 lg:top-24 lg:justify-start lg:opacity-60">
              <img
                src="assets/WorldMap.png"
                alt=""
                className="w-[300px] max-w-full sm:w-[400px] md:w-[480px] lg:w-[700px] xl:w-[900px]"
              />
            </div>

            {/* Info column */}
            <div className="flex flex-col gap-6 text-sm leading-relaxed sm:gap-7 sm:text-base md:gap-8 md:text-lg lg:max-w-xl lg:text-[18px]">
              <p>
                In our metier of excellence and real customer focus, we are
                continually engaged in bringing up a quality and work culture
                that is truly trust based.
              </p>

              <div className="flex flex-col gap-6 sm:gap-7 md:gap-8">
                {/* Contact */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="assets/Telephone.png"
                    alt=""
                    className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-[#F4D48D] sm:text-sm md:text-base">
                      Contact
                    </span>
                    <div className="text-base sm:text-lg md:text-xl">+91 0000000000</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="assets/Email.png"
                    alt=""
                    className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-[#F4D48D] sm:text-sm md:text-base">
                      Email
                    </span>
                    <div className="text-base break-words sm:text-lg md:text-xl">
                      info@nexusgroup.com
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="assets/location.png"
                    alt=""
                    className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-[#F4D48D] sm:text-sm md:text-base">
                      Location
                    </span>
                    <div className="text-sm sm:text-base md:text-lg lg:text-[18px]">
                      Lorem Ipsum has been the industry&apos;s standard dummy
                      text ever since the 1500s.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="rounded-xl border border-white/5 bg-[radial-gradient(at_top_left,_#061220,_#03090D)] p-4 shadow-lg sm:p-5 md:p-6 lg:p-8 xl:p-12">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
                  Do You Have Any Query?
                </h1>
                <h2 className="text-sm text-white/80 sm:text-base lg:text-lg">
                  Guaranteed Response within one Business Day!
                </h2>
              </div>

              <form
                className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-4 md:mt-6 md:gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form clicked but not submitted!");
                }}
              >
                <input
                  type="text"
                  placeholder="Name*"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-2.5 text-white text-sm
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                             sm:p-3 sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-2.5 text-white text-sm
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                             sm:p-3 sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-2.5 text-white text-sm
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                             sm:p-3 sm:text-base"
                />
                <textarea
                  rows="3"
                  placeholder="Message"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-2.5 text-white text-sm
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                             sm:p-3 sm:text-base sm:rows-4"
                />
                <button
                  type="submit"
                  className="rounded-[5px] bg-white p-2.5 text-sm font-semibold text-black transition-all duration-300 ease-in-out
                             hover:scale-105 hover:bg-[#CDAB65] hover:text-white
                             sm:p-3 sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        <img
          src="assets/NexusLocationMap.png"
          alt=""
          className="w-full border border-white/10 object-cover shadow-lg"
        />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ContactUs;