import React from "react";

const SERVICES = [
  {
    title: "Pipelines",
    icon: "/assets/epc/pipelines.svg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim eget erat risus sollicitudin pellentesque et non erat. Maecenas nibh dolor.",
  },
  {
    title: "Roads",
    icon: "/assets/epc/roads.svg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim eget erat risus sollicitudin pellentesque et non erat. Maecenas nibh dolor.",
  },
  {
    title: "Bridges",
    icon: "/assets/epc/bridges.svg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim eget erat risus sollicitudin pellentesque et non erat. Maecenas nibh dolor.",
  },
  {
    title: "Factories",
    icon: "/assets/epc/factories.svg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim eget erat risus sollicitudin pellentesque et non erat. Maecenas nibh dolor.",
  },
  {
    title: "Project Management",
    icon: "/assets/epc/pipelines.svg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim eget erat risus sollicitudin pellentesque et non erat. Maecenas nibh dolor.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#000E15] text-[#EAEAEA]">
      {/* Header band */}
      <div className="relative mx-auto  pl-28 pt-12 pb-24">
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
          OUR SERVICES
        </div>

        {/* Foreground title */}
        <div className="relative z-10 mx-auto flex h-full  items-center px-6 translate-y-12">
          <h2 className="m-0 text-[40px] leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            OUR SERVICES
          </h2>
        </div>
      </div>

      {/* Content area */}
      <div className="mx-auto max-w-[1300px] px- pt-12 pb-24">
        <p className="mx-auto mb-10 max-w-[860px] text-center text-[18px] leading-7 text-[#B8C2CC]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim eget erat risus
          sollicitudin pellentesque et non erat. Maecenas nibh dolor.
        </p>

        {/* First row: 3 cards (lg) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        {/* Second row: centered 2 cards (lg) */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:mx-auto lg:max-w-[800px] lg:grid-cols-2">
          {SERVICES.slice(3).map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, icon, desc }) => {
  return (
    <div className="flex min-h-[240px] flex-col gap-4 rounded-xl bg-[#041C28] p-7">
      {/* 120px icon */}
      <div className="flex h-[60px] w-[60px] items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="m-0 text-[24px] leading-snug font-bold text-[#F4D48D]">{title}</h3>

      {/* Description */}
      <p className="m-0 text-[20px] leading-7 text-[#C9D6DE]">{desc}</p>
    </div>
  );
};

export default OurServices;
