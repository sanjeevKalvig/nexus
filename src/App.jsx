import { Route, Routes } from "react-router-dom";
import EPC_HomePage from "./pages/Nexus_EPC/EPC_HomePage";
import Nexus_HomePage from "./pages/Nexus/Nexus_HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Nexus_HomePage />} />
      <Route path="/epc" element={<EPC_HomePage />} />
    </Routes>
  );
}
