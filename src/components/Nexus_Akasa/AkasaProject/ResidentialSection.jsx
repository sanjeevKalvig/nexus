import React from "react";

// Import your images from the specified path
import rs1 from "/assets/akasa/rs1.jpg";
import rs2 from "/assets/akasa/rs2.jpg";
import rs3 from "/assets/akasa/rs3.jpg";
import rs4 from "/assets/akasa/rs4.jpg";
import rs5 from "/assets/akasa/rs5.jpg";
import rs6 from "/assets/akasa/rs6.jpg";
const ResidentialSection = () => {
  // Define all images in an array
  const images = [
    { src: rs1, alt: "Cozy living room with blue accents" },
    { src: rs2, alt: "Minimalist living area with plants" },
    { src: rs3, alt: "Living room with a gallery wall" },
    { src: rs4, alt: "Bohemian style room with a large mirror" },
    { src: rs5, alt: "Spacious modern living room with exposed beams" },
    { src: rs6, alt: "Modern kitchen with white chairs and wooden table" },
  ];

  return (
    <div className="bg-[#0D131A] text-white font-sans lg:py-20 px-4 sm:px-6 lg:px-8 mt-[6rem] ">
      <div className="relative max-w-7xl mx-auto flex flex-col gap-16 ">
        {/* Top Pre-Header Text */}
        <h3 className="text-2xl text-center mb-4">
          We Have Solutions for All Your Space Related Issues!
        </h3>

        {/* Big outline background text (Kept offset for effect, as per original visual) */}
        <div
          aria-hidden="true"
          className="absolute left-1 top-20 uppercase font-extrabold text-transparent  font-noir hidden lg:flex "
          style={{
            fontSize: "120px", // Increased size for impact
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1.5px rgba(255, 215, 0, 0.1)",
          }}
        >
          residential
        </div>

        {/* First Row: Text and 2 Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-medium text-amber-300 mb-5">
              RESIDENTIAL
            </h2>
            <p className="text-gray-300 max-w-sm">
              This is a short description elaborating the service you have
              mentioned above.
            </p>
          </div>

          {/* Two Images */}
          <div className="grid grid-cols-2 gap-6">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden  aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: 4 Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.slice(2, 6).map((image, index) => (
            <div
              key={`row2-${index}`}
              className="overflow-hidden  aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentialSection;
