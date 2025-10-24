import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from '../../components/Nexus/home/Footer'
import NexusNavbar from '../../components/Nexus/home/NexusNavbar';

function ContactUs() {
    return (
        <>
            <div className='px-20 py-8 bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] text-white'>
                {/* Header */}
                <NexusNavbar />

                {/* Hero Section */}
                <div className='mt-20'>
                    {/* Heading */}
                    <div className='relative ml-10'>

                        {/* Big outline background text (Kept offset for effect, as per original visual) */}
                        <div
                            aria-hidden="true"
                            className="absolute -left-12 inset-0 flex items-center  pointer-events-none uppercase font-extrabold text-transparent select-none"
                            style={{
                                fontSize: "120px", // Increased size for impact
                                lineHeight: 1,
                                whiteSpace: "nowrap",

                                WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                            }}
                        >
                            get in touch
                        </div>

                        {/* Foreground title - Centered */}
                        <div className="relative z-10 flex">
                            <h2 className="m-0 text-5xl md:text-6xl leading-tight font-extrabold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] translate-y-6">
                                get in touch
                            </h2>
                        </div>


                    </div>


                    <div className='flex mt-24 justify-between relative'>
                        <div className='absolute z-0 w-[900px] top-24'>
                            <img className='' src="assets/WorldMap.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-12 max-w-[32vw] relative z-10 text-[18px]'>
                            {/* Tag line */}
                            <p>In our metier of excellence and real customer focus, we are continually engaged in bring up a quality and work culture that is truly trust based.</p>

                            {/* Company Info */}
                            <div className=" flex flex-col gap-10 relative z-10">

                                {/* Contact */}
                                <div className='flex gap-5'>
                                    <div className=''>
                                        <img src="assets/Telephone.png" alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <span>Contact</span>
                                        <div>+91 0000000000</div>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className='flex gap-5'>
                                    <div className=''>
                                        <img src="assets/Email.png" alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <span>Email</span>
                                        <div>info@nexusgroup.com</div>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className='flex gap-5'>
                                    <div className=''>
                                        <img src="assets/location.png" alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2 max-w-[230px]'>
                                        <span>Location</span>
                                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col gap-6 p-12 relative z-10 bg-[radial-gradient(at_top_left,_#05141D,_#03090D)] rounded w-[38vw]'>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-2xl font-bold'>Do You Have Any Query?</h1>
                                <h2 className='text-lg'>Guaranteed Response within one Business Day!</h2>
                            </div>
                            <form action=""
                                className='flex flex-col gap-6 '
                                onSubmit={(e) => {
                                    e.preventDefault(); // 🚫 stops form from submitting/reloading
                                    console.log("Form clicked but not submitted!");
                                }}
                            >
                                <input type="text"
                                    className='bg-transparent border border-[#01344F] text-[#394E5A] p-3 rounded-[5.08px] outline-none
                                transition-all duration-300 ease-in-out focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                                '
                                    placeholder='Name*' />
                                <input type="email"
                                    className='bg-transparent border border-[#01344F] text-[#394E5A] p-3 rounded-[5.08px] outline-none
                                transition-all duration-300 ease-in-out focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                                '
                                    placeholder='Email*' />
                                <input type="number"
                                    className='bg-transparent border border-[#01344F] text-[#394E5A] p-3 rounded-[5.08px] outline-none
                                transition-all duration-300 ease-in-out focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                                '
                                    placeholder='Phone*' />
                                <textarea name="" id="" rows="4"
                                    className='bg-transparent border border-[#01344F] text-[#394E5A] p-3 rounded-[5.08px] outline-none
                                transition-all duration-300 ease-in-out focus:border-[#CDAB65] focus:shadow-[0_0_10px_#CDAB65]
                                '
                                    placeholder='Message'></textarea>
                                <button type='submit'
                                    className='bg-white rounded-[5.08px] text-black p-3
                                transition-all duration-300 ease-in-out hover:bg-[#CDAB65] hover:text-white hover:scale-105
                                '>Submit</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

            {/* Map */}
            <img src="assets/NexusLocationMap.png" alt="" />
            {/* Footer */}
            <Footer />

        </>
    )
}

export default ContactUs