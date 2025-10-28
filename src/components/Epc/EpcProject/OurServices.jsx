import React from "react";

const SERVICES = [
  {
    title: "Pipelines",
    icon: "/assets/epc/pipelines.svg",
    desc: "We design and construct efficient pipeline systems for water, oil, and gas, ensuring safety, precision, and long-term reliability in every installation.",
  },
  {
    title: "Roads",
    icon: "/assets/epc/roads.svg",
    desc: "Our road construction projects combine durable materials and advanced engineering to deliver sustainable and high-quality infrastructure solutions.",
  },
  {
    title: "Bridges",
    icon: "/assets/epc/bridges.svg",
    desc: "From concept to completion, we build strong, modern bridges that connect communities and stand the test of time through smart engineering.",
  },
  {
    title: "Factories",
    icon: "/assets/epc/factories.svg",
    desc: "We develop state-of-the-art industrial facilities with a focus on safety, efficiency, and sustainability, tailored to meet diverse sector needs.",
  },
  {
    title: "Project Management",
    icon: "/assets/epc/pipelines.svg",
    desc: "Our expert team oversees every phase of execution, ensuring projects are completed on schedule, within budget, and to the highest quality standards.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#000E15] text-[#EAEAEA]">
      {/* Header band */}
      <div className="relative mx-auto px-4 pt-8 pb-16 sm:px-6 md:px-8 xl:pl-28 xl:pt-12 xl:pb-24 mt-10 sm:translate-x-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none sm:justify-start xl:pl-24"
          style={{
            fontSize: "clamp(40px, 8vw, 100px)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          OUR SERVICES
        </div>

        <div className="relative z-10 mx-auto flex h-full items-center justify-center px-6 translate-y-6 sm:justify-start xl:translate-y-12">
          <h2 className="m-0 text-[clamp(24px,6vw,40px)] leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            OUR SERVICES
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1300px] px-4 pt-8 pb-16 sm:px-6 md:px-8 xl:pt-12 xl:pb-24">
        <p className="mx-auto mb-8 max-w-[860px] text-center text-[16px] leading-6 text-[#B8C2CC] sm:text-[18px] sm:leading-7 xl:mb-10">
          At Nexus EPC, we deliver innovative, cost-efficient, and sustainable
          engineering solutions across diverse industries through expert
          execution and strong project management.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:gap-6">
          {SERVICES.slice(0, 3).map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 md:mx-auto md:max-w-[600px] lg:max-w-[800px] xl:mt-6 xl:gap-6">
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
    <div className="relative flex min-h-[200px] flex-col gap-3 bg-[#011925] p-5 pb-16 sm:min-h-[220px] sm:gap-4 sm:p-6 sm:pb-20 xl:min-h-[240px] xl:p-7 xl:pb-24">
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] z-10 bg-[linear-gradient(to_right,#012337,#022A42,#024B78,#00385A)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] z-10 bg-[linear-gradient(to_right,#012337,#022A42,#024B78,#00385A)] blur-md opacity-70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 right-0 w-[1px] z-10 bg-[linear-gradient(to_bottom,#012337,#022A42,#024B78,#00385A)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 right-0 w-[1px] z-10 bg-[linear-gradient(to_bottom,#012337,#022A42,#024B78,#00385A)] blur-md opacity-70"
      />

      <div className="flex h-[50px] w-[50px] items-center justify-center sm:h-[55px] sm:w-[55px] xl:h-[60px] xl:w-[60px]">
        <img
          src={icon}
          alt={title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="m-0 text-[18px] leading-snug font-bold sm:text-[19px] xl:text-[20px]">{title}</h3>

      <p className="m-0 text-[14px] leading-6 text-[#C9D6DE] sm:text-[15px] sm:leading-6 xl:text-[16px] xl:leading-7">{desc}</p>
    </div>
  );
};

export default OurServices;
