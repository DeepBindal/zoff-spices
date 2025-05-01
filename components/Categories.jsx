"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
  const CATEGORIES = [
    {
      url: "https://zofffoods.com/cdn/shop/files/Frame_43_x400.jpg?v=1736010322",
      name: "Whole Spices",
    },
    {
      url: "https://zofffoods.com/cdn/shop/files/Frame_40_x400.jpg?v=1736010303",
      name: "Seasonings",
    },
    {
      url: "https://zofffoods.com/cdn/shop/files/Frame_43_x400.jpg?v=1736010322",
      name: "Powdered Spices",
    },
    {
      url: "https://zofffoods.com/cdn/shop/files/Frame_43_x400.jpg?v=1736010322",
      name: "Dry Fruits",
    },
  ];
  const categoryRef = useRef(null);
  const isInView = useInView(categoryRef, { once: true });
  return (
    <motion.section
      ref={categoryRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white"
    >
      <h1 className="text-[#e24504] text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
        CATEGORIES JO DIL JEET LE!
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {CATEGORIES.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              href={`/shop-all/?q=${item.name}`}
              className="flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <Image
                src={item.url}
                alt={item.name}
                height={200}
                width={200}
                className="rounded-lg shadow-md object-contain"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Categories;
