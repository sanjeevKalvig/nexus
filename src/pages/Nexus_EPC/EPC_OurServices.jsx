import React from "react";
import OurServices from "../../components/Epc/EpcProject/OurServices";
import SuccessSection from "../../components/Epc/EpcProject/SuccessSection";
import Footer from '../../components/Nexus_EPC/home/Footer'

import Epc_Navbar from "./Epc_Navbar";


const EPC_OurServices = () => {
  return (
    <div>
      <Epc_Navbar />
      <OurServices />
      <SuccessSection />
      <Footer />
    </div>
  );
};

export default EPC_OurServices;
