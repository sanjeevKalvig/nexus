import React from 'react';

function Work() {
  return (
    <div className="bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.7)),url('/assets/AkasaWorkImage.jpg')] bg-cover bg-center py-8 sm:py-10 md:py-12 lg:py-16 xl:py-28">
      <div className="relative mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Responsive background text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
          style={{
            fontSize: "clamp(30px, 8vw, 110px)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          work
        </div>

        {/* Responsive foreground title */}
        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] font-noir">
            work
          </h2>
        </div>
      </div>

      <p className='text-white text-center max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[550px] m-auto text-base sm:text-lg md:text-xl leading-relaxed px-4'>
        Our commitment to quality and services ensure our clients happy. We're happy to make you feel more comfortable on your home.
      </p>

      <img 
        src="/assets/After-Before_Work.png" 
        className='max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[750px] m-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-12' 
        alt="Before and after work examples" 
      />
    </div>
  )
}

export default Work;