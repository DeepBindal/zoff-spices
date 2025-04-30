import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickSearch = () => {
  const Items = [
    {
      name: "Seasonings",
      url: "https://zofffoods.com/cdn/shop/files/Frame_125_1.jpg?crop=center&height=81&v=1736702005&width=81",
    },
    {
      name: "Powdered Spices",
      url: "https://zofffoods.com/cdn/shop/files/Frame_121.jpg?crop=center&height=81&v=1736015032&width=81",
    },
    {
      name: "Blended Spices",
      url: "https://zofffoods.com/cdn/shop/files/Mask_group.jpg?crop=center&height=81&v=1736015032&width=81",
    },
    {
      name: "Combo Packs",
      url: "https://zofffoods.com/cdn/shop/files/Frame_123.jpg?crop=center&height=81&v=1736015032&width=81",
    },
    {
      name: "Whole Food Products",
      url: "https://zofffoods.com/cdn/shop/files/Frame_123_1.jpg?crop=center&height=81&v=1736015032&width=81",
    },
    {
      name: "Dry Fruits",
      url: "https://zofffoods.com/cdn/shop/files/Frame_123_2.jpg?crop=center&height=81&v=1736015032&width=81",
    },
  ];

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex gap-6 sm:gap-10 items-center justify-start sm:justify-center overflow-x-auto px-4 sm:px-0 scrollbar-hide">
        {Items.map((item) => (
          <Link
            key={item.name}
            href={`/shop-all/?q=${item.name}`}
            className="flex flex-col items-center text-center hover:text-primary transition-all duration-200 min-w-[80px]"
          >
            <div className="w-[60px] h-[60px] mb-1 rounded-full border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src={item.url}
                alt={item.name}
                width={60}
                height={60}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm font-medium whitespace-nowrap">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickSearch;
