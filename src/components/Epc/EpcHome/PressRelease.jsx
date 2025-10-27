import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function PressRelease() {
    const pressReleases = [
        {
            id: "0",
            imgPath: "/assets/press0.jpg",
            releaseDate: "March 4,2022",
            pressHeading: "New Heading",
            pressContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took.",
        },
        {
            id: "1",
            imgPath: "/assets/press0.jpg",
            releaseDate: "March 4,2022",
            pressHeading: "New Heading",
            pressContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took.",
        },
        {
            id: "2",
            imgPath: "/assets/press0.jpg",
            releaseDate: "March 4,2022",
            pressHeading: "New Heading",
            pressContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took.",
        },
    ]
    return (
        <div className='bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-20'>

            <div className="relative mb-8 sm:mb-12 lg:mb-16">
                {/* Big outline background text (Responsive sizing) */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
                    style={{
                        fontSize: "clamp(40px, 10vw, 100px)",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                    }}
                >
                    press release
                </div>

                {/* Foreground title - Responsive and centered */}
                <div className="relative z-10 flex items-center justify-center">
                    <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-4 sm:translate-y-6 lg:translate-y-8 font-noir ">
                        press release
                    </h2>
                </div>
            </div>

            <div className='mt-12 sm:mt-16 lg:mt-24 flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center'>
                {pressReleases.map((press, idx) => (
                    <div key={idx} className='group flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-full sm:w-auto max-w-sm mx-auto'>
                        <img src={press.imgPath} alt="" className="w-full h-auto object-cover rounded-t-lg" />
                        <div className='flex flex-col gap-2 bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 text-black rounded-b-lg'>
                            <span className='text-sm sm:text-base'>{press.releaseDate}</span>
                            <span className='text-xl sm:text-2xl lg:text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#c9a961] font-semibold'>{press.pressHeading}</span>
                            <span className='text-sm sm:text-base lg:text-lg leading-relaxed'>{press.pressContent}</span>
                            <div className='text-[#C9A760] flex gap-1 sm:gap-2 items-center hover:scale-105 w-max mt-2 transition-transform duration-200'>
                                <span className='text-sm sm:text-base'>Read more</span>
                                <MdOutlineArrowRightAlt size={20} className="sm:size-24 lg:size-30" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PressRelease