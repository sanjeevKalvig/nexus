import React from "react";

const services = [
  {
    id: 1,
    title: "NEXUS EPC",
    img: "/assets/nexusepc.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Ākāsa",
    img: "/assets/aakas.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "NEXUS DRIVELINE",
    img: "/assets/nexusdriveline.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#071015] text-white py-24 px-4">
      {/* Heading */}
      <h2 className="text-[96px] font-semibold text-center mb-20">
        <span className="text-white">OUR </span>
        <span className="text-[#F4D48D]">SERVICES</span>
      </h2>

      {/* Cards Grid */}
      <div className="  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-16">
        {services.map(({ id, title, img, description }) => (
          <div
            key={id}
            className="bg-[#01141E] w-[367px] h-[588px]  p-8 flex flex-col items-center text-center justify-between rounded-[15px] "
          >
            {/* Logo */}
            <div className="w-[150px] h-[210px] flex items-center justify-center mb-6">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-gray-300 text-[20px] leading-relaxed">
              {description.split(" ").slice(0, 12).join(" ")}
              <br />
              {description.split(" ").slice(12).join(" ")}
            </p>

            {/* Button */}
            <button className="w-[180px] h-[55px] text-[#f2f1ef] text-[20px] bg-[#002538] rounded-[15px]">
              VIEW MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
