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
        <div className='bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-28 px-20'>

            <div className="relative mb-24">
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
                    our offerings
                </div>

                {/* Foreground title - Centered */}
                <div className="relative z-10 flex items-center justify-center">
                    <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6 font-noir ">
                        our offerings
                    </h2>
                </div>
            </div>

            <div className='flex gap-12 justify-center'>
                {offerings.map((offering,idx)=>(
                   <div
                   key={idx}
                   className="group h-[38vw] flex flex-col justify-between p-[3vw] bg-cover bg-no-repeat bg-center  cursor-pointer transition-transform duration-300 ease-in-out  hover:scale-110 hover:rounded-lg"
                   style={{ backgroundImage: `url(${offering.imgPath})` }}
                 >
                        <h1 className='text-4xl transition-transform duration-300 ease-in-out  group-hover:text-[#c9a961]'>{offering.offeringName}</h1>
                        <div className='flex flex-col gap-3'>
                            <p className='text-lg'>{offering.offeringContent}</p>
                            <div className='border p-2 w-max transition-transform duration-300 ease-in-out  hover:scale-110 hover:bg-[#c9a961]'>
                            <MdOutlineArrowRightAlt size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Our_Offerings