import React, { useState } from "react";
import { Menu, X } from "lucide-react";  
import Footer from '../../components/Nexus/home/Footer'


const EPC_HomePage = () => {

  // for toggling nav
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#01141E] text-white min-h-screen overflow-hidden">
      <nav className="bg-[#01141E] py-4 px-6 sm:px-16 flex justify-between items-center sticky top-0 z-50 ">
        {/* Logo on Left */}
        <div className="flex items-center">
          <img
            src="/assets/nexusepc.png"
            alt="Nexus Logo"
            className="h-10 sm:h-12 object-contain"
          />
        </div>
      </nav>

    

  <section className="relative py-20 pl-20 sm:pl-32">
  <h2 className="text-[1.5rem] sm:text-[2rem] text-[#F4D48D] tracking-widest mb-6">
    COMPANY
  </h2>
</section>
      {/*  2. Chairman's Note */}
      <section className="relative flex flex-col xl:flex-row items-center justify-between px-6 sm:px-16 py-16 max-w-[1400px] mx-auto mb-1">
        <div className="flex-1">
          <h2 className="text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-4">
            CHAIRMAN'S NOTE
          </h2>
          <h3 className="text-[#F4D48D]  mb-6 text-[1.5rem]">Designation</h3>
          <p className="text-gray-300 leading-relaxed text-[1rem] max-w-xl">
            At Nexus EPC we take a certain pride in our vision and insight into your world.
            <br></br>

As a diversified holding company, we are active in a wide range of industries, including pipeline, road infrastructure, Civil structure or more. In every part of the business, we are dedicated to delighting our stakeholders and "creating memorable moments" for our all the customers.

   <br></br>
It helps us appreciate your need sweeter. It is no secret that when you choose NEXUS EPC, you choose to escape mediocrity, and take a giant leap into a bigger and better future. A journey of success always requires the qualities of foresight, taking challenges, and preparedness. All these, along with the power of trust. A crossing the 30th Milestone. The Nexus EPC always achieves the goals with hands worthy ends of our valued customers and professional teams, and mechanism methods that constitute the epicentre of all our operations. Our inspiration comes from your trust and willingness to believe in our capability to deliver.
</p>
   <br></br>
<h3 className="text-[#F4D48D]  mb-6 text-[1.5rem]">Let's Explore a career with Nexus EPC</h3>
          <button className="mt-8 border border-[#F4D48D] text-[#F4D48D] px-8 py-3 rounded-md hover:bg-[#F4D48D] hover:text-black transition">
            Join Us
          </button>
        </div>

        {/* Chairman image */}
        <div className="flex-1 flex justify-center mt-12 xl:mt-0">
          <img
            src="/assets/chairman.png"
            alt="Chairman"
            className="w-[18rem] sm:w-[24rem] object-contain"
          />
        </div>
      </section>

      {/*  3. Vision & Mission  */}
      <section className="bg-[#021A27] py-24 px-6 sm:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-center text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-16">
            VISION & MISSION
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10 ">
              <h3 className="text-[#F4D48D] text-[1.5rem] mb-3"> Mission</h3>
              <p className="text-gray-300">
                EPC adopts a strategic mode of operation in all markets, focusing
                on key construction projects of "One Belt and Road" initiative. We are committed to provide required products and services, forming strong supply and distribution chains, implementing differentiated pricing strategies.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10 ">
              <h3 className="text-[#F4D48D] text-[1.5rem] mb-3">Vision</h3>
              <p className="text-gray-300">
                We are proud members of the Nexus family, to create investor value by becoming a global champion for sustainable infrastructure
                development which will make us shine as global player.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  4. Values  */}
      <section className="bg-[#011925] py-24 px-6 sm:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-12 text-center">
            VALUE
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10 bg-">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3"> Customer-Centricity</h4>
              <p className="text-gray-300">
               We are customer centric. We understand that our customers are the heart 
               of our bussiness and we will do everything in our power to ensure that
               each and every customer feels valued and important.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10 ">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3"> Cost-effective Execution</h4>
              <p className="text-gray-300">
                Our goal is to providing clients with a level of luxury and outstanding service that will keep them coming back time and time again.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10 ">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3"> Innovation & Partnerships</h4>
              <p className="text-gray-300">
               We strive to bring our customers nothing less than the best in innovative products and services, because we know that if we do our job right, it will lead to partnership opportunities that will help us grow even more.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10 ">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3">Sustainability</h4>
              <p className="text-gray-300">
                Our company believes in a sustainble bussiness model. We want to help our customers create a healthier, more sustainble world for themselves, their family and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default EPC_HomePage;