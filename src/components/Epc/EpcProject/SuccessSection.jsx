// src/components/SuccessSection.jsx
import BuildingsIcon from '/assets/epc/buildings.svg';
import CustomersIcon from '/assets/epc/customers.svg';
import ArchitectsIcon from '/assets/epc/architects.svg';
import CountriesIcon from '/assets/epc/countries.svg';

export default function SuccessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000E15]">
      {/* Subtle background gradient/shine */}
      <div
        aria-hidden
        className="pointer-events-none relative inset-0"
      />

      {/* Large outlined SUCCESS behind */}
      <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-center sm:top-4 md:top-6">
        <span
          className="uppercase tracking-[0.2em] font-extrabold sm:tracking-[0.25em] md:tracking-[0.35em]"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.06)',
            textStroke: '1px rgba(255,255,255,0.06)',
            fontSize: 'clamp(32px, 8vw, 100px)',
          }}
        >
          SUCCESS
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1300px] px-4 py-12 text-center sm:px-6 sm:py-14 md:px-8 md:py-16 xl:py-24">
        {/* Title */}
        <h2 className="m-0 uppercase font-semibold tracking-[0.2em] text-[#D9B56D] sm:tracking-[0.25em] md:tracking-[0.35em]" 
            style={{ fontSize: 'clamp(20px, 4vw, 40px)' }}>
          SUCCESS
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-6 text-[#C9D6DE] sm:mt-10 sm:text-[15px] sm:leading-6 md:mt-12 md:text-[16px] md:leading-7 xl:mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-4 md:gap-10 xl:mt-24 xl:gap-12">
          {/* Buildings */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <img
              src={BuildingsIcon}
              alt="Buildings icon"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 xl:h-12 xl:w-12"
            />
            <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl">
              1738
            </p>
            <span className="text-xs text-[#C9D6DE] sm:text-sm xl:text-base">Buildings</span>
          </div>

          {/* Customers */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <img
              src={CustomersIcon}
              alt="Customers icon"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 xl:h-12 xl:w-12"
            />
            <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl">
              320
            </div>
            <span className="text-xs text-[#C9D6DE] sm:text-sm xl:text-base">Customers</span>
          </div>

          {/* Architects */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <img
              src={ArchitectsIcon}
              alt="Architects icon"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 xl:h-12 xl:w-12"
            />
            <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl">
              60
            </div>
            <span className="text-xs text-[#C9D6DE] sm:text-sm xl:text-base">Architects</span>
          </div>

          {/* Countries */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <img
              src={CountriesIcon}
              alt="Countries icon"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 xl:h-12 xl:w-12"
            />
            <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl">
              7
            </div>
            <span className="text-xs text-[#C9D6DE] sm:text-sm xl:text-base">Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}