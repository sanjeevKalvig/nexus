import React from 'react'

function Why_Choose_Us() {
    const chooseUsReasons = [
        {
            id: "0",
            heading: "Full Service",
            subHeading: "Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh, from removing the old countertops..",
        },
        {
            id: "1",
            heading: "Deliver Value",
            subHeading: "Value means many things to different people. We pledge to always provide optimal value for each and every client."
        },
        {
            id: "2",
            heading: "Integrity",
            subHeading: "Relationships drive business forward, and our integrity forms the bedrock of our relationships. Our coworkers, dealers"
        },
    ]
    return (
        <div className='bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-28 px-20'>

            <div className="bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.9)),url('/assets/akasaWhyChooseUs.jpg')] bg-cover bg-center px-20 pb-20">

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
                        why choose us
                    </div>

                    {/* Foreground title - Centered */}
                    <div className="relative z-10 flex items-center justify-center">
                        <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6 font-noir ">
                            why choose us
                        </h2>
                    </div>
                </div>

                <div className='mt-32 flex gap-5 justify-between'>
                    {chooseUsReasons.map((reason, idx) => (
                        <div key={idx} className='flex flex-col gap-3 w-[260px]'>
                            <div className='relative w-max flex gap-4 text-[#CDAB65] font-semibold text-2xl'>
                                {reason.heading}
                                <span className='absolute top-[50%] -right-20 w-[50px] border-b border-[#CDAB65]'></span>
                            </div>
                            <p className='text-lg'>{reason.subHeading}</p>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Why_Choose_Us