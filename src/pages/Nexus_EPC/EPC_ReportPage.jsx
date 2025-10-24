import React from "react";
import AnnualReportHeader from "../../components/Epc/EpcReport/AnnualReportHeader";
import FinancialResults from "../../components/Epc/EpcReport/FinancialResults";
import Footer from "../../components/Nexus_EPC/home/Footer";
import NexusNavbar from "../../components/Nexus/home/NexusNavbar";

const EPC_ReportPage = () => {
  return (
    <div>
      <NexusNavbar />
      <AnnualReportHeader />
      <FinancialResults/>
      <Footer />
    </div>
  );
};

export default EPC_ReportPage;
