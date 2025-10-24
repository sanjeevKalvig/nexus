import React from "react";

// Reusable Metric Block Component
const MetricBlock = ({ value, label, description, isMoney = false }) => (
  <div className="flex justify-between items-center bg-[#012337] p-6 rounded-lg shadow-md">
    {/* Value & Label */}
    <div className="flex-shrink-0 w-[30%]">
      <div className="text-5xl font-light text-white">
        {isMoney && <span className="text-5xl align-top">$</span>}
        {value}
      </div>
      <div className="text-lg font-medium text-gray-400 uppercase tracking-wider mt-2 max-w-5">
        {label}
      </div>
    </div>

    {/* Icon & Description */}
    <div className=" w-[60%] flex items-center gap-4 p-2 rounded-lg bg-[#00385A]">
      <div>
        <img src="/assets/epc/buildings.svg" alt="img" />
      </div>

      <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider max-w-[60%]">
        {description}
      </div>
    </div>
  </div>
);

// Main Annual Report Header Component
const AnnualReportHeader = () => {
  return (
    <>
      {/* Header band */}
      <div className="relative mx-auto  pl-28 pt-12 pb-24 font-noir">
        {/* Big outline background text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center pl-24 pointer-events-none uppercase font-extrabold text-transparent select-none"
          style={{
            fontSize: "100px",
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)", // outline not possible via Tailwind, minimal compromise required!
          }}
        >
          ANNUAL REPORT
        </div>

        {/* Foreground title */}
        <div className="relative z-10 mx-auto flex h-full  items-center px-6 translate-y-12">
          <h2 className="m-0 text-[40px] leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            ANNUAL REPORT
          </h2>
        </div>
      </div>
      <div className={` min-h-screen text-white p-8 md:p-16 lg:p-20 font-sans`}>
        {/* Container for the two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* === LEFT COLUMN: Headline and Text === */}
          <div className="space-y-8 lg:pr-8">
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-amber-500 leading-tight">
              GROWTH THROUGH
              <br />
              <span className="text-white">OPERATIONAL</span>
              <br />
              EXCELLENCE.
            </h1>

            {/* Body Text (using the actual text from the image) */}
            <div className="text-gray-400 text-base leading-relaxed max-w-lg space-y-4 pt-4">
              <p>
                Lorem Ipsum is simply dummy text of the printing and generated
                in writing. Lorem Ipsum has been used to identify the keypoints
                about the application in this paper.
              </p>
              <p>
                In addition, it is based on a general way that all components of
                the most simple properties have been handled as early as a
                calendar. But also in the meantime, modern applications,
                smoothing materials, writing data or handling systems have
                available, and more
              </p>
            </div>
          </div>

          {/* === RIGHT COLUMN: Key Metrics === */}
          <div className="space-y-8 lg:pt-20 lg:pl-8">
            {/* Metric 1: Sales */}
            <MetricBlock
              value="48"
              label="BILLIONS"
              description="GROWING NET SALES IN YEAR 2022"
              isMoney={true}
            />

            {/* Metric 2: Employees */}
            <MetricBlock
              value="24k"
              label="EMPLOYEES"
              description="24,700 EMPLOYEES IN 98 MANUFACTURING SITES"
            />

            {/* Metric 3: Production Sites */}
            <MetricBlock
              value="98"
              label="PRODUCTION SITES"
              description="28 COUNTRIES IN WHICH WE ARE PRODUCING"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnualReportHeader;
