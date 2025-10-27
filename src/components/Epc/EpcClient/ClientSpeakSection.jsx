import React, { useState } from "react";
import ArrowLeft from "/assets/epc/arrow2.svg";
import ArrowRight from "/assets/epc/arrow1.svg";

// Placeholder structure for testimonial data
const TESTIMONIALS = [
  {
    quote:
      "I am really pleased with the overall management and outcome of this project. We have a lot of work internally to do to communicate this information to the people who need it and to make sure it is used appropriately.",
    name: "David Smith",
    rating: 5, // 5 stars
    imageSrc: "/assets/epc/model.png", // Placeholder for David's image
  },
  {
    quote:
      "This service exceeded all expectations. The team was professional and highly efficient.",
    name: "Jane Doe",
    rating: 4, // 4 stars
    imageSrc: "/assets/epc/model.png", // Placeholder for Jane's image
  },
  // Add more testimonials here
];

// Helper component for star rating visualization
const StarRating = ({ count }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <svg
        key={index}
        className={`h-4 w-4 ${
          index < count ? "text-[#F4D48D]" : "text-gray-500"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.044a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.044a1 1 0 00-1.175 0l-2.817 2.044c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  return <div className="flex justify-center mt-2">{stars}</div>;
};

export default function ClientSpeakSection({ testimonials = TESTIMONIALS }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#000E15] py-24">
      {/* --- HEADER BAND (Centered) --- */}
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
          client speaks
        </div>

        {/* Foreground title - Centered */}
        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-4 sm:translate-y-6 md:translate-y-8 font-ethnocentric">
            CLIENT speaks
          </h2>
        </div>
      </div>

      {/* --- TESTIMONIAL CONTENT (Centered) --- */}
      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Navigation Left - Hidden on mobile, visible on tablet+ */}
        <button
          type="button"
          onClick={handlePrev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-10 sm:w-12  place-items-center border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition z-20 ml-2 sm:ml-4"
          aria-label="Previous Testimonial"
        >
          <img
            src={ArrowLeft}
            alt="Previous"
            className="h-4 sm:h-5 w-4 sm:w-5 opacity-80"
          />
        </button>

        {currentTestimonial && (
          <div className="text-center">
            {/* Client Images */}
            <div className="flex justify-center items-center mb-4 sm:mb-6 space-x-2 sm:space-x-4">
              {/* Previous image - hidden on mobile, visible on tablet+ */}
              <div className="hidden sm:flex w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-white/20 overflow-hidden bg-gray-700 opacity-50 items-center justify-center">
                <span className="text-xs text-white/70">Prev</span>
              </div>

              {/* Current Image */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-[#F4D48D] overflow-hidden shadow-lg bg-gray-800 mx-2 sm:mx-0">
                <img
                  src={currentTestimonial.imageSrc}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Next image - hidden on mobile, visible on tablet+ */}
              <div className="hidden sm:flex w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-white/20 overflow-hidden bg-gray-700 opacity-50 items-center justify-center">
                <span className="text-xs text-white/70">Next</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="max-w-3xl w-[75%]  mx-auto text-[#C9D6DE] text-base sm:text-lg md:text-xl italic leading-relaxed mb-4 sm:mb-6 px-2 sm:px-0">
              “{currentTestimonial.quote}”
            </p>

            {/* Rating */}
            <div className="mb-3 sm:mb-0">
              <StarRating count={currentTestimonial.rating} />
            </div>

            {/* Client Name */}
            <p className="mt-2 sm:mt-4 text-lg sm:text-xl font-bold tracking-wider">
              {currentTestimonial.name}
            </p>
          </div>
        )}

        {/* Navigation Right - Hidden on mobile, visible on tablet+ */}
        <button
          type="button"
          onClick={handleNext}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-10 sm:w-12 grid place-items-center border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition z-20 mr-2 sm:mr-4"
          aria-label="Next Testimonial"
        >
          <img
            src={ArrowRight}
            alt="Next"
            className="h-4 sm:h-5 w-4 sm:w-5 opacity-80"
          />
        </button>

        {/* Mobile Navigation - Bottom centered */}
        <div className="sm:hidden flex justify-center mt-6 space-x-4">
          <button
            type="button"
            onClick={handlePrev}
            className="h-10 w-10 grid place-items-center border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition rounded-full"
            aria-label="Previous Testimonial"
          >
            <img
              src={ArrowLeft}
              alt="Previous"
              className="h-4 w-4 opacity-80"
            />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="h-10 w-10 grid place-items-center border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition rounded-full"
            aria-label="Next Testimonial"
          >
            <img src={ArrowRight} alt="Next" className="h-4 w-4 opacity-80" />
          </button>
        </div>
      </div>
    </section>
  );
}
