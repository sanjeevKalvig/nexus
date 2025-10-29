import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import EPC_HomePage from "./pages/Nexus_EPC/EPC_HomePage";
import Nexus_HomePage from "./pages/Nexus/Nexus_HomePage";
import EPC_OurServices from "./pages/Nexus_EPC/EPC_OurServices";
import EPC_ClientPage from "./pages/Nexus_EPC/EPC_ClientPage";
import ContactUs from "./pages/Nexus/ContactUs";
import EPC_CompanyProfile from "./pages/Nexus_EPC/EPC_CompanyProfile";
import EPC_ReportPage from "./pages/Nexus_EPC/EPC_ReportPage";
import Akasa_HomePage from "./pages/Akasa_Spaces/Akasa_HomePage";
import Akasa_CompanyProfile from "./pages/Akasa_Spaces/Akasa_CompanyProfile";
import Akasa_Project from "./pages/Akasa_Spaces/Akasa_Project";
import CompanyProfie from "./pages/Nexus/CompanyProfie";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Nexus_HomePage />} />
        <Route path="/companyprofile" element={<CompanyProfie />} />
        <Route path="/epc" element={<EPC_HomePage />} />
        <Route path="/epc_ourservices" element={<EPC_OurServices />} />
        <Route path="/epc_client" element={<EPC_ClientPage />} />
        <Route path="/epc_companyprofile" element={<EPC_CompanyProfile />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/epcreport" element={<EPC_ReportPage />} />
        <Route path="/akasa" element={<Akasa_HomePage />} />
        <Route path="/akasaproject" element={<Akasa_Project />} />
        <Route path="/akasacompany" element={<Akasa_CompanyProfile />} />
      </Routes>
    </>
  );
}
