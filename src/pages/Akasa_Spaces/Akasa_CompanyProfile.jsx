import React from 'react'
import NexusNavbar from '../../components/Nexus/home/NexusNavbar'
import Footer from '../../components/Nexus_EPC/home/Footer'
import HeroSection from '../../components/Nexus_Akasa/AkasaCompanyProfile/HeroSection'
import DecorativeSection from '../../components/Nexus_Akasa/AkasaCompanyProfile/DecorativeSection'
import What_We_Do from '../../components/Nexus_Akasa/AkasaCompanyProfile/What_We_Do'
import AkasaNavbar from './AkasaNavbar'

function Akasa_CompanyProfile() {
  return (
    <>
    <AkasaNavbar />
    <HeroSection />
    <DecorativeSection />
    <What_We_Do />
    <Footer />
    </>
  )
}

export default Akasa_CompanyProfile