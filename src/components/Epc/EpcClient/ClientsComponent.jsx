import ArrowLeft from "/assets/epc/arrow2.svg";
import ArrowRight from "/assets/epc/arrow1.svg";

const CLIENT_LOGOS = [
  { src: "/assets/epc/clientsquare.svg", alt: "Futurecons logo" },
  { src: "/assets/epc/clientsquare.svg", alt: "Roundurban logo" },
  { src: "/assets/epc/clientsquare.svg", alt: "Megabuilder logo" },
  { src: "/assets/epc/clientsquare.svg", alt: "Multiworker logo" },
];

export default function ClientsComponent({
  subtitle = "TRUSTED COMPANIES",
  description = `Lorem ipsum dolor sit amet, consectetur dolor elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat; consectetur amet.`,
  logos = CLIENT_LOGOS,
  onPrev,
  onNext,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#000E15]">
      {/* Header band */}
      <div className="mt-[5rem]"></div>
      <div className="relative mb-16 m">
        {/* Big outline background text (Kept offset for effect, as per original visual) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none"
          style={{
            fontSize: "120px", // Increased size for impact
            lineHeight: 1,
            whiteSpace: "nowrap",

            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          clients 
        </div>

        {/* Foreground title - Centered */}
        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-5xl md:text-6xl leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-8">
            CLIENTs 
          </h2>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center mx-auto max-w-7xl px-6 md:px- py-16 md:py-24">
        {/* Top headings */}

        <h2 className="uppercase font-semibold tracking-[0.28em] text-[#D9B56D] text-[18px] md:text-[40px] text-center md:text-left">
          {subtitle}
        </h2>

        {/* Content layout */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left: description + arrows */}
          <div className="md:col-span-4">
            <p className="max-w-md text-[#C9D6DE] text-[14px] md:text-[16px] leading-7">
              {description}
            </p>
            <div className="mt-6 flex gap-3">
              {" "}
              <button
                type="button"
                onClick={onPrev}
                className="h-9 w-9 grid place-items-center rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition"
                aria-label="Previous"
              >
                <img src={ArrowLeft} alt="" className="h-4 w-4 opacity-80" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="h-9 w-9 grid place-items-center rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition"
                aria-label="Next"
              >
                <img src={ArrowRight} alt="" className="h-4 w-4 opacity-80" />
              </button>
            </div>
          </div>{" "}
          {/* Right: logo cards */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className=" group relative border border-[rgba(255,255,255,0.12)] 
                bg-[rgba(255,255,255,0.02)]  p-16 flex items-center justify-center transition hover:border-[rgba(217,181,109,0.35)]"
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(217,181,109,0.15), 0 6px 18px rgba(217,181,109,0.08)",
                  }}
                />
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="relative h-14 w-auto opacity-90 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
