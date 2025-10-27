import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Our_Offerings() {
    const offerings = [
        {
            id: "0",
            imgPath:"/assets/offering1.png",
            offeringName: "Residential",
            offeringContent: "We will measure your kitchen, ask you questions and start the actual design process with you.",
        },
        {
            id: "1",
            imgPath:"/assets/offering2.png",
            offeringName: "Offline Space",
            offeringContent: "We will measure your kitchen, ask you questions and start the actual design process with you.",
        },
        {
            id: "2",
            imgPath:"/assets/offering3.png",
            offeringName: "Holiday Home",
            offeringContent: "We will measure your kitchen, ask you questions and start the actual design process with you.",
        },
    ]
    return (
        <div className='bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20'>
            <div className="relative mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-24">
                {/* Big outline background text */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
                    style={{
                        fontSize: "clamp(40px, 8vw, 110px)",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                    }}
                >
                    our offerings
                </div>

                {/* Foreground title - Centered */}
                <div className="relative z-10 flex items-center justify-center">
                    <h2 className="m-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] font-noir">
                        our offerings
                    </h2>
                </div>
            </div>

            {/* Responsive Grid Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-[1400px] mx-auto'>
                {offerings.map((offering, idx) => (
                    <div
                        key={idx}
                        className="group h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[38vw] flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-7 xl:p-[3vw] bg-cover bg-no-repeat bg-center cursor-pointer transition-all duration-300 ease-in-out rounded-xl overflow-hidden"
                        style={{ backgroundImage: `url(${offering.imgPath})` }}
                    >
                        <h1 className='text-2xl xs:text-3xl sm:text-4xl transition-colors duration-300 ease-in-out group-hover:text-[#c9a961]'>
                            {offering.offeringName}
                        </h1>
                        <div className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
                            <p className='text-base sm:text-lg md:text-xl leading-relaxed text-white/90'>
                                {offering.offeringContent}
                            </p>
                            <div className='border border-white/30 p-2 w-max rounded-md transition-all duration-300 ease-in-out 
                                group-hover:scale-110 group-hover:bg-[#c9a961] group-hover:border-[#c9a961]'>
                                <MdOutlineArrowRightAlt size={20} sm:size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Our_Offerings