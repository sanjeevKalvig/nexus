import React from "react";
import NexusNavbar from "../../components/Nexus/home/NexusNavbar";
import HeroSection from "../../components/Nexus/home/HeroSection";
import Footer from "../../components/Nexus_EPC/home/Footer";
import OurPeople from "../../components/Epc/EpcHome/OurPeople";
import PressRelease from "../../components/Epc/EpcHome/PressRelease";
import Why_Choose_Us from "../../components/Epc/EpcHome/Why_Choose_Us";
import AboutUs from "../../components/Epc/EpcHome/AboutUs";
import Epc_Navbar from "./Epc_Navbar";
import EpcHeroSection from "../../components/Nexus_EPC/home/EpcHeroSection";

function EPC_HomePage() {
  return (
    <>
      <Epc_Navbar />
      <EpcHeroSection />
      <AboutUs />
      <Why_Choose_Us />
      <OurPeople />
      <PressRelease />
      <Footer />
    </>
  );
}

export default EPC_HomePage;
