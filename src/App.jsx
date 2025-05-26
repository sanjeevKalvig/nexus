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
      <div className="flex h-[6px] ">
        <div className="bg-gray-300 w-1/3"></div>
        <div className="bg-gray-300 w-1/3 ml-1"></div>
        <div className="bg-gray-300 w-1/3 ml-1"></div>
      </div>
      <AboutUs/>
      <OurServices/>
      <OurPeople/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
