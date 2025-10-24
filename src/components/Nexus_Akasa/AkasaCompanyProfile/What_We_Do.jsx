import React from 'react'

function What_We_Do() {
  const works=[
    {
      id:"0",
      workName:"Interior",
      workContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem",
    },
    {
      id:"0",
      workName:"Architecture",
      workContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem",
    },
    
  ]
  return (
    <div className='px-20 py-28'>
      {/* Akasa_What_We_Do.png */}


      <div className="relative mb-16 ">
                {/* Big outline background text (Kept offset for effect, as per original visual) */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center  pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
                    style={{
                        fontSize: "110px", // Increased size for impact
                        lineHeight: 1,
                        whiteSpace: "nowrap",

                        WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                    }}
                >
                    what we do
                </div>

                {/* Foreground title - Centered */}
                <div className="relative z-10 flex items-center">
                    <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-4 translate-x-8 font-noir ">
                        what we do
                    </h2>
                </div>
            </div>

            <img src="/assets/Akasa_What_We_Do.png" alt="" />

            <div className='flex justify-between gap-8 mt-8'>
              {works.map((work,idx)=>(
                <div key={idx} className='flex flex-col gap-3 max-w-[600px]'>
                  <h1 className='text-[#CDAB65] text-4xl font-bold'>{work.workName}</h1>
                  <p className='text-white text-lg'>{work.workContent}</p>
                </div>
              ))}
            </div>

    </div>
  )
}

export default What_We_Do