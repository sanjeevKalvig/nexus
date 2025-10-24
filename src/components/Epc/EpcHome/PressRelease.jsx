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
        <div className='bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-20 px-20'>

            <div className="relative mb-16">
                {/* Big outline background text (Kept offset for effect, as per original visual) */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
                    style={{
                        fontSize: "100px", // Increased size for impact
                        lineHeight: 1,
                        whiteSpace: "nowrap",

                        WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                    }}
                >
                    press release
                </div>

                {/* Foreground title - Centered */}
                <div className="relative z-10 flex items-center justify-center">
                    <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-8 font-noir ">
                        press release
                    </h2>
                </div>
            </div>

            <div className='mt-24 flex gap-8 justify-center'>
                {pressReleases.map((press, idx) => (
                    <div key={idx} className='group flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'>
                        <img src={press.imgPath} alt="" />
                        <div className='flex flex-col gap-2 bg-white px-4 pt-4 pb-6 text-black'>
                            <span className=''>{press.releaseDate}</span>
                            <span className='text-3xl transition-transform duration-300 ease-in-out group-hover:text-[#c9a961] '>{press.pressHeading}</span>
                            <span className='text-lg'>{press.pressContent}</span>
                            <div className='text-[#C9A760] flex gap-2 items-center hover:scale-105 w-max'>
                                <span className=''>Read more</span>
                                <MdOutlineArrowRightAlt size={30} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PressRelease