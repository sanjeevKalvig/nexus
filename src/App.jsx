import "./App.css";
import About from "./components/home/About";
import ContactUs from "./components/home/ContactUS";
import HeroSection from "./components/home/heroSection";
import OurServices from "./components/home/OurServices";

export default function App() {
  return (
    <>
      <HeroSection />
      <div className="flex h-[6px] ">
        <div className="bg-gray-300 w-[200px]"></div>
        <div className="bg-black w-[200px] ml-1"></div>
        <div className="bg-gray-300 w-[200px] ml-1"></div>
      </div>
     {/*  <About/> */}
      <OurServices/>
      <ContactUs/>
    </>
  );
}
