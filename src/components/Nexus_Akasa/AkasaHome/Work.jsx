import React from 'react'

function Work() {
  return (

    <div className="bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.7)),url('/assets/AkasaWorkImage.jpg')] bg-cover bg-center py-28">

      <div className="relative mb-16">
        {/* Big outline background text (Kept offset for effect, as per original visual) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
          style={{
            fontSize: "110px", // Increased size for impact
            lineHeight: 1,
            whiteSpace: "nowrap",

            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          work
        </div>

        {/* Foreground title - Centered */}
        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6 font-noir ">
            work
          </h2>
        </div>
      </div>

      <p className='text-white text-center max-w-[550px] m-auto text-[18px]'>Our commitment to quality and services ensure our clients happy. We’re happy to make you feel more comfortable on your home.</p>

<img src="/assets/After-Before_Work.png" className='max-w-[750px] m-auto mt-12' alt="" />

    </div>
  )
}

export default Work