import React from "react";
import Footer from "../../components/Nexus_EPC/home/Footer";
import NexusNavbar from "../../components/Nexus/home/NexusNavbar";
import HeroSection from "../../components/Nexus/home/HeroSection";
import Why_Choose_Us from "../../components/Nexus_Akasa/AkasaHome/Why_Choose_Us";
import Our_Offerings from "../../components/Nexus_Akasa/AkasaHome/Our_Offerings";
import Work from "../../components/Nexus_Akasa/AkasaHome/Work";
import AkasaNavbar from "./AkasaNavbar";

function Akasa_HomePage() {
  return (
    <>
      {/* <NexusNavbar /> */}
      <AkasaNavbar />
      <HeroSection />
      <Our_Offerings />
      <Why_Choose_Us />
      <Work />
      <Footer />
    </>
  );
}

export default Akasa_HomePage;
