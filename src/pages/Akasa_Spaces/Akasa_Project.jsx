import React from "react";
import ResidentialSection from "../../components/Nexus_Akasa/AkasaProject/ResidentialSection";
import OfficeSpace from "../../components/Nexus_Akasa/AkasaProject/OfficeSpace";
import HolidayHome from "../../components/Nexus_Akasa/AkasaProject/HolidayHome";
import AkasaNavbar from "./AkasaNavbar";
import Footer from "../../components/Nexus_EPC/home/Footer";

const Akasa_Project = () => {
  return (
    <div>
      <AkasaNavbar />
      <ResidentialSection />
      <OfficeSpace />
      <HolidayHome />
      <Footer />
    </div>
  );
};

export default Akasa_Project;
