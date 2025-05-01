'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const Collections = ({ products, emptyTitle }) => {
  if (!products?.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          {emptyTitle || 'No products found.'}
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, i) => (
        <motion.div
          key={product._id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link href={`/product/${product._id}`}>
            <div className="border rounded-xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer bg-white">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-md font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                {product.title}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                From ₹{product.variants[0].price}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Collections;
