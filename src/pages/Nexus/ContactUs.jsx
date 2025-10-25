import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../../components/Nexus/home/Footer";
import NexusNavbar from "../../components/Nexus/home/NexusNavbar";

function ContactUs() {
  return (
    <>
      <div className="bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] px-4 py-8 text-white sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <NexusNavbar />

        {/* Hero Section */}
        <div className="mt-16 md:mt-20">
          {/* Heading */}
          <div className="relative ml-10">
            {/* Big outline background text (Kept offset for effect, as per original visual) */}
            <div
              aria-hidden="true"
              className="absolute -left-12 inset-0 flex items-center  pointer-events-none uppercase font-extrabold text-transparent select-none"
              style={{
                fontSize: "120px", // Increased size for impact
                lineHeight: 1,
                whiteSpace: "nowrap",

                WebkitTextStroke: "1px rgba(255,255,255,0.06)",
              }}
            >
              get in touch
            </div>

            {/* Foreground title - Centered */}
            <div className="relative z-10 flex">
              <h2 className="m-0 text-5xl md:text-6xl leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6">
                get in touch
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="relative mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:items-start xl:gap-16">
            {/* Decorative map */}
            <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 flex justify-center opacity-30 sm:opacity-40 lg:top-24 lg:justify-start lg:opacity-60">
              <img
                src="assets/WorldMap.png"
                alt=""
                className="w-[480px] max-w-full sm:w-[560px] lg:w-[700px] xl:w-[900px]"
              />
            </div>

            {/* Info column */}
            <div className="flex flex-col gap-8 text-base leading-relaxed sm:text-lg lg:max-w-xl lg:text-[18px]">
              <p>
                In our metier of excellence and real customer focus, we are
                continually engaged in bringing up a quality and work culture
                that is truly trust based.
              </p>

              <div className="flex flex-col gap-8">
                {/* Contact */}
                <div className="flex items-start gap-4">
                  <img
                    src="assets/Telephone.png"
                    alt=""
                    className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wide text-[#F4D48D] sm:text-base">
                      Contact
                    </span>
                    <div className="text-lg sm:text-xl">+91 0000000000</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <img
                    src="assets/Email.png"
                    alt=""
                    className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wide text-[#F4D48D] sm:text-base">
                      Email
                    </span>
                    <div className="text-lg sm:text-xl break-words">
                      info@nexusgroup.com
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <img
                    src="assets/location.png"
                    alt=""
                    className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wide text-[#F4D48D] sm:text-base">
                      Location
                    </span>
                    <div className="text-base sm:text-lg lg:text-[18px]">
                      Lorem Ipsum has been the industry&apos;s standard dummy
                      text ever since the 1500s.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className=" rounded-xl border border-white/5 bg-[radial-gradient(at_top_left,_#061220,_#03090D)] p-6 shadow-lg sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Do You Have Any Query?
                </h1>
                <h2 className="text-base text-white/80 sm:text-lg">
                  Guaranteed Response within one Business Day!
                </h2>
              </div>

              <form
                className="mt-6 flex flex-col gap-4 sm:gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form clicked but not submitted!");
                }}
              >
                <input
                  type="text"
                  placeholder="Name*"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-3 text-white
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-3 text-white
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-3 text-white
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]"
                />
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="rounded-[5px] border border-[#01344F] bg-transparent p-3 text-white
                             outline-none transition-all duration-300 ease-in-out
                             focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]"
                />
                <button
                  type="submit"
                  className="rounded-[5px] bg-white p-3 font-semibold text-black transition-all duration-300 ease-in-out
                             hover:scale-105 hover:bg-[#CDAB65] hover:text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 ">
        <img
          src="assets/NexusLocationMap.png"
          alt=""
          className="w-full  border border-white/10 object-cover shadow-lg"
        />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ContactUs;
