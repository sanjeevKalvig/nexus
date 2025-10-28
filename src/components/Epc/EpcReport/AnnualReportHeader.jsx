import React from "react";

// Reusable Metric Block Component
const MetricBlock = ({ value, label, description, isMoney = false }) => (
  <div
    className="
      flex flex-col sm:flex-row 
      justify-between items-start sm:items-center 
      bg-[#012337] 
      p-4 sm:p-6 lg:p-8 
      rounded-lg shadow-md 
      gap-4
    "
  >
    {/* Value & Label */}
    <div className="w-full sm:w-1/3">
      <div className="flex items-baseline">
        {isMoney && (
          <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-white align-top">
            $
          </span>
        )}
        <span className="ml-1 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
          {value}
        </span>
      </div>
      <div className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg font-medium text-gray-400 uppercase tracking-wide">
        {label}
      </div>
    </div>

    {/* Icon & Description */}
    <div
      className="
        w-full sm:w-2/3 
        flex items-center 
        gap-2 sm:gap-4 
        p-2 sm:p-4 
        bg-[#00385A] 
        rounded-lg
      "
    >
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
          src="/assets/epc/buildings.svg"
          alt="icon"
        />
      </div>
      <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-300 uppercase tracking-wide">
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
      <div className="relative mt-10 py-12 text-center overflow-hidden">
        {/* Big outline background text */}
        <div
          aria-hidden="true"
          className="
      absolute inset-0 
      flex justify-center items-center 
      pointer-events-none select-none uppercase font-extrabold text-transparent
      leading-none
      text-[2.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem]
    "
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.06)", // still inline since Tailwind doesn’t support text-stroke
          }}
        >
          ANNUAL REPORT
        </div>

        {/* Foreground title */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 translate-y-3 sm:translate-y-7">
          <h2
            className="
        mx-auto inline-block
        text-2xl sm:text-4xl md:text-5xl lg:text-[60px]
        leading-tight font-bold uppercase
        text-[#F4D48D]
        drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
      "
          >
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
                Nexus EPC continues to strengthen its foundation of performance
                through disciplined execution and innovation. Our focus on
                operational excellence drives sustainable growth and consistent
                value creation.
              </p>
              <p>
                We leverage advanced technologies, efficient processes, and a
                skilled workforce to optimize every phase of our operations.
                Through strategic planning and continuous improvement, we ensure
                long-term success for our clients and stakeholders.
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
