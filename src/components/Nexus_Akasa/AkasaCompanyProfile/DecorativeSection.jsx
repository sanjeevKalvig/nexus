import React from 'react'

function DecorativeSection() {
  const decorativeItems = [
    {
      id: '0',
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: '1',
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: '2',
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: '3',
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: '4',
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },
    {
      id: '5',
      imgPath: "/assets/AkasaDecorativeItem1.png",
      itemName: "INTERIOR EXPERTISE",
      itemContent: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    },

  ];

  return (
    <>
      <div className='bg-[rgba(0,19,29,1)] px-28 py-20 flex gap-8'>

        <img src="/assets/AkasaDecorationSection.png" alt="" />

        <div className="grid grid-cols-2 gap-8">
          {decorativeItems.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <img src={item.imgPath} className="w-[40px] h-[40px]" alt="" />
              <div className="flex flex-col">
                <span className="text-[#CDAB65] font-bold">{item.itemName}</span>
                <span className="text-white">{item.itemContent}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.8)),url("/assets/AkasaOfficeDesign.jpg")] bg-cover bg-center bg-no-repeat uppercase text-[#CDAB65] text-4xl font-bold text-center p-20'>we do office design</div>
    </>
  )
}

export default DecorativeSection