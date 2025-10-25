import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Footer from "../../components/Nexus/home/Footer";
import Epc_Navbar from "./Epc_Navbar";


const EPC_CompanyProfile = () => {
  // Toggle navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className=" text-white min-h-screen overflow-hidden">
      {/* Navbar */}
     <Epc_Navbar />

      {/* 1. Company Section */}
      <section className="relative py-20 pl-20 sm:pl-32">
        <h2 className="text-[1.5rem] sm:text-[2rem] text-[#F4D48D] tracking-widest mb-6">
          COMPANY
        </h2>
      </section>

      {/* 2. Chairman's Note */}
      <section className="relative flex flex-col xl:flex-row items-center justify-between px-6 sm:px-16 py-16 max-w-[1400px] mx-auto mb-1">
        <div className="flex-1">
          <h2 className="text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-4">
            CHAIRMAN'S NOTE
          </h2>
          <h3 className="text-[#F4D48D] mb-6 text-[1.5rem]">Designation</h3>
          <p className="text-gray-300 leading-relaxed text-[1rem] max-w-xl">
            At Nexus EPC we take a certain pride in our vision and insight into
            your world.
            <br />
            <br />
            As a diversified holding company, we are active in a wide range of
            industries, including pipeline, road infrastructure, civil
            structures, and more. In every part of the business, we are
            dedicated to delighting our stakeholders and creating memorable
            moments for all our customers.
            <br />
            <br />
            It helps us appreciate your needs better. It is no secret that when
            you choose NEXUS EPC, you choose to escape mediocrity and take a
            giant leap into a bigger and better future. A journey of success
            always requires foresight, courage, and preparedness. All these,
            along with the power of trust, have allowed Nexus EPC to consistently
            achieve its goals. Our inspiration comes from your trust and belief
            in our ability to deliver.
          </p>

          <br />
          <h3 className="text-[#F4D48D] mb-6 text-[1.5rem]">
            Let's Explore a Career with Nexus EPC
          </h3>

          <button className="mt-8 border border-[#F4D48D] text-[#F4D48D] px-8 py-3 rounded-md hover:bg-[#F4D48D] hover:text-black transition">
            Join Us
          </button>
        </div>

        {/* Chairman Image */}
        <div className="flex-1 flex justify-center mt-12 xl:mt-0">
          <img
            src="/assets/chairman.png"
            alt="Chairman"
            className="w-[18rem] sm:w-[24rem] object-contain"
          />
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="bg-[#021A27] py-24 px-6 sm:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-center text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-16">
            VISION & MISSION
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10">
              <h3 className="text-[#F4D48D] text-[1.5rem] mb-3">Mission</h3>
              <p className="text-gray-300">
                EPC adopts a strategic mode of operation in all markets,
                focusing on key construction projects under the "One Belt and
                Road" initiative. We are committed to providing high-quality
                products and services, building strong supply and distribution
                chains, and implementing differentiated pricing strategies.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10">
              <h3 className="text-[#F4D48D] text-[1.5rem] mb-3">Vision</h3>
              <p className="text-gray-300">
                We are proud members of the Nexus family, dedicated to creating
                investor value by becoming a global champion in sustainable
                infrastructure development and shining as a global player.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="bg-[#011925] py-24 px-6 sm:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[#F4D48D] text-[2rem] sm:text-[3rem] font-semibold mb-12 text-center">
            VALUE
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3">
                Customer-Centricity
              </h4>
              <p className="text-gray-300">
                We are customer-centric. Our customers are at the heart of our
                business, and we strive to ensure each and every one feels valued
                and important.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3">
                Cost-effective Execution
              </h4>
              <p className="text-gray-300">
                Our goal is to provide clients with exceptional service and value,
                ensuring they return time and time again.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3">
                Innovation & Partnerships
              </h4>
              <p className="text-gray-300">
                We bring our customers the best in innovation and service,
                fostering partnerships that drive mutual growth.
              </p>
            </div>

            <div className="p-6 border-2 border-[#00B4D8] rounded-lg bg-opacity-10">
              <h4 className="text-[#F4D48D] text-[1.5rem] mb-3">
                Sustainability
              </h4>
              <p className="text-gray-300">
                We believe in a sustainable business model that supports a
                healthier world for our customers, their families, and the
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EPC_CompanyProfile;
