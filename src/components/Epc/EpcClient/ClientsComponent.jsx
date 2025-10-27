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
      <div className="relative mb-8 sm:mb-12 md:mb-16 mx-4 sm:mx-6 lg:mx-8">
        {/* Big outline background text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-ethnocentric"
          style={{
            fontSize: "clamp(40px, 12vw, 100px)", // Responsive font size
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          clients
        </div>

        {/* Foreground title - Centered */}
        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-4 sm:translate-y-6 md:translate-y-8 font-ethnocentric">
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
        <div className="mt-8 md:mt-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Left: description + arrows */}
          <div className="md:col-span-4 order-2 md:order-1">
            {" "}
            {/* Added order change for mobile flow */}
            <p className="max-w-md text-[#C9D6DE] text-[15px] sm:text-[16px] leading-7">
              {/* Assuming 'description' is defined */}
              {description}
            </p>
            <div className="mt-6 flex gap-3">
              {" "}
              <button
                type="button"
                // Assuming onPrev is defined
                onClick={onPrev}
                className="h-10 w-10 grid place-items-center rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition focus:outline-none focus:ring-2 focus:ring-[#F4D48D]"
                aria-label="Previous"
              >
                {/* Assuming ArrowLeft is defined */}
                <img src={ArrowLeft} alt="" className="h-4 w-4 opacity-80" />
              </button>
              <button
                type="button"
                // Assuming onNext is defined
                onClick={onNext}
                className="h-10 w-10 grid place-items-center rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition focus:outline-none focus:ring-2 focus:ring-[#F4D48D]"
                aria-label="Next"
              >
                {/* Assuming ArrowRight is defined */}
                <img src={ArrowRight} alt="" className="h-4 w-4 opacity-80" />
              </button>
            </div>
          </div>{" "}
          {/* Right: logo cards */}
          <div className="md:col-span-8 order-1 md:order-2">
            {" "}
            {/* Added order change for mobile flow */}
            {/* Refined grid: 2 cols mobile, 3 cols medium, 4 cols large */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Assuming 'logos' is defined and mapped */}
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  // Responsive padding: smaller on mobile, increases with screen size
                  className="group relative border border-[rgba(255,255,255,0.12)] 
          bg-[rgba(255,255,255,0.02)] p-6 sm:p-10 lg:p-12 xl:p-16 
          flex items-center justify-center transition hover:border-[rgba(217,181,109,0.35)]"
                >
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(217,181,109,0.15), 0 6px 18px rgba(217,181,109,0.08)",
                    }}
                  />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    // Responsive height for logo images
                    className="relative h-10 sm:h-12 lg:h-14 w-auto opacity-90 group-hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
