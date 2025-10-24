import React from 'react'

function AboutUs() {
    const aboutUsText = "Nexus EPC is an engineering contracting firm in India, staffed by a team of experts in various fields. They offer turn-key solutions for mechanical, civil, electrical, and instrumentation projects and specialize in serving the power, chemical, hydro-carbon, metal, and automobile industries. With ample in-house resources, including engineering manpower, tools and plants, and technical knowledge, Nexus EPC is equipped to handle all aspects of their projects, from design and engineering to quality assurance and inspection. They have dedicated departments for each of these functions, ensuring that clients receive a comprehensive service from a single, responsible source."
    return (
        <div className='bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white py-28'>


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
                    about us
                </div>

                {/* Foreground title - Centered */}
                <div className="relative z-10 flex items-center justify-center">
                    <h2 className="m-0 text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6 font-noir ">
                        about us
                    </h2>
                </div>
            </div>

            <div className='bg-[url("/assets/Blueprint.png")] bg-[length:80%] bg-no-repeat  bg-[position:100%_190%] px-32 py-[13vw]'>
                <p className='max-w-[400px]'>{aboutUsText}</p>
            </div>
      

        </div>
    )
}

export default AboutUs