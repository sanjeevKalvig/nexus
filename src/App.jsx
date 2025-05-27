import "./App.css";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUS";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/heroSection";
import OurPeople from "./components/home/Ourpeople";
import OurServices from "./components/home/OurServices";

export default function App() {
  return (
    <>
      <HeroSection />
      <div className="flex h-2 justify-between opacity-4">
        <div className="bg-gray-300 opacity-4 w-[30%]" ></div>
        <div className="bg-gray-300 w-[30%] "></div>
        <div className="bg-gray-300 w-[30%]"></div>
      </div>
      <AboutUs/>
      <OurServices/>
      <OurPeople/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
