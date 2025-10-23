import { Route, Routes } from "react-router-dom";
import EPC_HomePage from "./pages/Nexus_EPC/EPC_HomePage";
import Nexus_HomePage from "./pages/Nexus/Nexus_HomePage";
import EPC_OurServices from "./pages/Nexus_EPC/EPC_OurServices";
import EPC_ClientPage from "./pages/Nexus_EPC/EPC_ClientPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Nexus_HomePage />} />
      <Route path="/epc" element={<EPC_HomePage />} />
      <Route path="/epc_ourservices" element={<EPC_OurServices />} />
      <Route path="/epc_client" element={<EPC_ClientPage />} />
    </Routes>
  );
}
