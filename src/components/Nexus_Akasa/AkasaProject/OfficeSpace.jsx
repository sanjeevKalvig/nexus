import React from "react";

// Import your images from the specified path
import rs1 from "/assets/akasa/os1.jpg";
import rs2 from "/assets/akasa/os2.jpg";
import rs3 from "/assets/akasa/os3.jpg";
import rs4 from "/assets/akasa/os4.jpg";
import rs5 from "/assets/akasa/os5.jpg";
import rs6 from "/assets/akasa/os6.jpg";

const OfficeSpace = () => {
  // Define all images in an array
  const images = [
    { src: rs1, alt: "Modern office workspace with collaborative areas" },
    { src: rs2, alt: "Executive office with minimalist design" },
    { src: rs3, alt: "Office conference room with modern furniture" },
    { src: rs4, alt: "Creative workspace with open layout" },
    { src: rs5, alt: "Spacious office with exposed architectural features" },
    { src: rs6, alt: "Office breakout area with comfortable seating" },
  ];

  return (
    <div className="bg-[#0D131A] text-white font-sans lg:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="relative max-w-7xl mx-auto flex flex-col gap-16 pt-24">
        

        {/* Big outline background text */}
        <div
          aria-hidden="true"
          className="absolute left-1 top-0 uppercase font-extrabold text-transparent  font-noir hidden lg:flex  "
          style={{
            fontSize: "120px", // Increased size for impact
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1.5px rgba(255, 215, 0, 0.1)",
          }}
        >
          Office Space
        </div>

        {/* First Row: Text and 2 Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-medium text-amber-300 mb-5 uppercase">
              OFFICE SPACE
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

export default OfficeSpace;