import React from "react";
import AnnualReportHeader from "../../components/Epc/EpcReport/AnnualReportHeader";
import FinancialResults from "../../components/Epc/EpcReport/FinancialResults";
import Footer from "../../components/Nexus_EPC/home/Footer";
import Epc_Navbar from "./Epc_Navbar";
const EPC_ReportPage = () => {
  return (
    <div>
      <Epc_Navbar />
      <AnnualReportHeader />
      <FinancialResults/>
      <Footer />
    </div>
  );
};

export default EPC_ReportPage;
