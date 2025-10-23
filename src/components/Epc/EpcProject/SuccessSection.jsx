// src/components/SuccessSection.jsx
import BuildingsIcon from '/assets/epc/buildings.svg';
import CustomersIcon from '/assets/epc/customers.svg';
import ArchitectsIcon from '/assets/epc/architects.svg';
import CountriesIcon from '/assets/epc/countries.svg';

export default function SuccessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000E15] ">
      {/* Subtle background gradient/shine */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />

      {/* Large outlined SUCCESS behind */}
      <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center">
        <span
          className="uppercase tracking-[0.35em] text-[64px] md:text-[100px] font-extrabold"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.06)',
            textStroke: '1.5px rgba(255,255,255,0.06)',
          }}
        >
          SUCCESS
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1300px] px-6 md:px-8 py-16 md:py-24 text-center ">
        {/* Title */}
        <h2 className="m-0 text-[22px] md:text-[40px] uppercase font-semibold tracking-[0.35em] text-[#D9B56D]">
          SUCCESS
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-[14px] md:text-[16px] leading-7 text-[#C9D6DE] mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor.
        </p>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ">
          {/* Buildings */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={BuildingsIcon}
              alt="Buildings icon"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <p className="text-4xl md:text-5xl font-bold ">
              1738
            </p>
            <span className="text-sm md:text-base text-[#C9D6DE]">Buildings</span>
          </div>

          {/* Customers */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={CustomersIcon}
              alt="Customers icon"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <div className="text-4xl md:text-5xl font-bold">
              320
            </div>
            <span className="text-sm md:text-base text-[#C9D6DE]">Customers</span>
          </div>

          {/* Architects */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={ArchitectsIcon}
              alt="Architects icon"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <div className="text-4xl md:text-5xl font-bold">
              60
            </div>
            <span className="text-sm md:text-base text-[#C9D6DE]">Architects</span>
          </div>

          {/* Countries */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={CountriesIcon}
              alt="Countries icon"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <div className="text-4xl md:text-5xl font-bold">
              7
            </div>
            <span className="text-sm md:text-base text-[#C9D6DE]">Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}