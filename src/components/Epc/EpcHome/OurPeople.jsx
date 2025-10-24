import React from 'react'

function OurPeople() {
    const personData = [
        {
            id: 0,
            imgPath: "/assets/people1.png",
            peopleName: "Noah M. Huerta",
            designation: "Designation"
        },
        {
            id: 1,
            imgPath: "/assets/people2.png",
            peopleName: "Noah M. Huerta",
            designation: "Designation"
        },
        {
            id: 2,
            imgPath: "/assets/people3.png",
            peopleName: "Noah M. Huerta",
            designation: "Designation"
        },
        {
            id: 3,
            imgPath: "/assets/people4.png",
            peopleName: "Noah M. Huerta",
            designation: "Designation"
        },
    ]
    const subText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    return (
        <div className='bg-[##00131D] text-white py-20 px-20'>

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
                    our people
                </div>

                {/* Foreground title - Centered */}
                <div className="relative z-10 flex items-center justify-center">
                    <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-8 font-noir ">
                        our people
                    </h2>
                </div>
            </div>

            <p className='text-center mb-12 text-lg'>{subText}</p>
            <div className='flex gap-4 justify-center'>
                {personData.map((person, idx) => (
                    <div className='group flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'>
                        <img src={person.imgPath} alt="" />
                        <div className='flex flex-col items-center bg-[#042336] px-3 pt-4 pb-6'>
                            <span className='text-3xl group-hover:text-[#c9a961]'>{person.peopleName}</span>
                            <span className='text-lg group-hover:text-[#c9a961]'>{person.designation}</span>
                            <div className='flex gap-4 mt-3'>
                                <img src="/assets/linkedInLogo.svg" className='transition-transform duration-200 ease-in-out hover:scale-125' alt="" />
                                <img src="/assets/facebookLogo.svg" className='transition-transform duration-200 ease-in-out hover:scale-125' alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurPeople