import React from "react";

function DecorativeSection() {
  const decorativeItems = [
    {
      id: "0",
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: "1",
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: "2",
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: "3",
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: "4",
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: "5",
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
  ];

  return (
    <>
      {/* ────────────────────── 1️⃣ Upper section ────────────────────── */}
      <div className="bg-[rgba(0,19,29,1)] px-4 sm:px-6 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-24
       flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Illustration – scales with the viewport */}
        <img
          src="/assets/AkasaDecorationSection.png"
          alt="Decoration"
          className="w-full max-w-[500px] md:max-w-none md:w-auto h-auto mx-auto md:mx-0"
        />

        {/* List of decorative items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {decorativeItems.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <img
                src={item.imgPath}
                className="w-[40px] h-[40px] flex-shrink-0"
                alt={item.itemName}
              />
              <div className="flex flex-col">
                <span className="text-[#CDAB65] font-bold text-sm sm:text-base">
                  {item.itemName}
                </span>
                <span className="text-white text-xs sm:text-sm">
                  {item.itemContent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────── 2️⃣ Lower banner ────────────────────── */}
      <div
        className="bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.8)),url('/assets/AkasaOfficeDesign.jpg')] bg-cover bg-center bg-no-repeat uppercase text-[#CDAB65] text-2xl sm:text-3xl md:text-4xl font-bold text-center p-12 sm:p-16 md:p-20"
      >
        we do office design
      </div>
    </>
  );
}

export default DecorativeSection;