import React from 'react'
import HeroSection from '../../components/Nexus/home/HeroSection'
import AboutUs from '../../components/Nexus/home/AboutUs'
import OurServices from '../../components/Nexus/home/OurServices'
import OurPeople from '../../components/Nexus/home/OurPeople'
import ContactUs from '../../components/Nexus/home/ContactUS'
import Footer from '../../components/Nexus/home/Footer'
import NexusNavbar from '../../components/Nexus/home/NexusNavbar'

function Nexus_HomePage() {
  return (
    <>
    <NexusNavbar />
    <HeroSection />
    <div className="flex h-2 justify-between opacity-40">
      <div className="bg-gray-300 opacity-4 w-[30%]" ></div>
      <div className="bg-gray-300 w-[30%] "></div>
      <div className="bg-gray-300 w-[30%]"></div>
    </div>
    <AboutUs />
    <OurServices />
    <OurPeople />
    <ContactUs />
    <Footer />
  </>
  )
}

export default Nexus_HomePage