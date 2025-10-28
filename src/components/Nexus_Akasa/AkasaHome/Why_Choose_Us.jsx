import React from "react";

function Why_Choose_Us() {
  const chooseUsReasons = [
    {
      id: "0",
      heading: "Exclusive Ideas",
      subHeading:
        "We create a different exclusive working strategy for every single project.",
    },
    {
      id: "1",
      heading: "Professionals",
      subHeading:
        "We at Nexus Group work with expertise and effort. We are a team of experts who are highly experienced in their field.",
    },
    {
      id: "2",
      heading: "Customer Relations",
      subHeading:
        "We are always ready to help the customer until their projects get done.",
    },
  ];

  return (
    <div className="bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-12 sm:py-28 px-4 sm:px-10 md:px-20">
      <div className="bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.9)),url('/assets/constructionBuilding.jpg')] bg-cover bg-center px-4 sm:px-20 pb-12 sm:pb-20">
        <div className="relative mb-16">
          {/* Big outline background text */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none 
            uppercase font-extrabold text-transparent select-none font-noir text-[45px] lg:text-[110px]"
            style={{
              lineHeight: 1,
              whiteSpace: "nowrap",
              WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            }}
          >
            why choose us
          </div>
          {/* Foreground title */}
          <div className="relative z-10 flex items-center justify-center">
            <h2 className="m-0 text-3xl sm:text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6 font-noir">
              why choose us
            </h2>
          </div>
        </div>

        <div className="mt-16 sm:mt-32 flex flex-col sm:flex-row gap-5 justify-between">
          {chooseUsReasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col gap-3 w-full sm:w-[260px]"
            >
              <div className="relative w-max flex gap-4 text-[#CDAB65] font-semibold text-xl lg:text-2xl">
                {reason.heading}
                <span className="absolute hidden xl:grid top-[50%] -right-16 sm:-right-20 w-[30px] sm:w-[50px] border-b border-[#CDAB65]"></span>
              </div>
              <p className="text-base sm:text-lg">{reason.subHeading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why_Choose_Us;
