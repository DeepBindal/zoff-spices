"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: "44372507885863",
    title: "Zoff Shahi Biryani Masala 100g",
    price: "Rs. 155.00",
    image: "https://zofffoods.com/cdn/shop/files/1.jpg?v=1736931167",
    video:
      "https://cdn.shopify.com/videos/c/o/v/ba88e73474c745afa15312888aa7e02f.mp4",
    href: "/products/shahi-biryani-masala",
  },
  {
    id: "49417357852967",
    title: "Cashews | Cheese Flavored 25Gm",
    price: "Rs. 100.00",
    image: "https://zofffoods.com/cdn/shop/files/4.jpg?v=1736931167",
    video:
      "https://cdn.shopify.com/videos/c/o/v/0de46070178242efae19ceca26e953f3.mp4",
    href: "/products/cashews-cheese-flavored-25gm",
  },
  {
    id: "39532333498465",
    title: "Zoff Pani Puri Masala Powder",
    price: "Rs. 105.00",
    image: "https://zofffoods.com/cdn/shop/files/2.jpg?v=1736931167",
    video:
      "https://cdn.shopify.com/videos/c/o/v/0a468c829d3044eaae95cc7e0b4d7aa0.mp4",
    href: "/products/pani-puri-masala",
  },
  {
    id: "44353386578215",
    title: "Zoff White Sesame/Safed Til Seeds",
    price: "Rs. 60 - Rs. 87",
    image:
      "https://zofffoods.com/cdn/shop/files/Untitled_design_70.jpg?v=1736931467",
    video:
      "https://cdn.shopify.com/videos/c/o/v/b0157a05ecdf49cba4c8d7345aa82be9.mp4",
    href: "/products/white-sesame-safed-til-seeds",
  },
];

export default function ReelsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 leading-tight text-gray-800">
          Asli Moments. Asli Reviews. <br />
          asli Love for{" "}
          <Image
            src="https://cdn.shopify.com/s/files/1/0261/7960/0481/t/39/assets/logo.jpg?v=1736245709"
            alt="Zoff Logo"
            width={150}
            height={48}
            className="inline-block align-middle"
          />
        </h2>

        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          ref={ref}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-[1.02]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden group">
                {hoveredIndex === index ? (
                  <video
                    src={product.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 hover:text-yellow-600 transition">
                  <Link href={product.href}>{product.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
