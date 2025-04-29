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
    <div className="flex gap-10 items-center justify-center overflow-x-auto sm:overflow-hidden border-b-[1px] border-gray-300 py-4">
      {Items.map((item) => (
        <Link key={item.name} href={`/shop-all/?q=${item.name}`}>
          <div
            className="flex flex-col justify-center items-center"
          >
            <Image src={item.url} alt="item-img" height={60} width={60} />
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuickSearch;
