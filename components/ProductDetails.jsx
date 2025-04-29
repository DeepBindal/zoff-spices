"use client";

import Image from "next/image";
import { useState } from "react";

const ProductDetails = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.weight || ""
  );
  const addToCart = async () => {
    
  }
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 max-w-5xl mx-auto">
      <div className="flex-1">
        <Image
          src={product.images[0]}
          alt="product-img"
          width={440}
          height={440}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>

        <div>
          <h2 className="font-semibold mb-2">Select Variant:</h2>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.weight}
                onClick={() => setSelectedVariant(variant.weight)}
                className={`px-4 py-2 rounded border ${
                  selectedVariant === variant.weight
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {variant.weight}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xl font-semibold">
          Price: ₹
          {product.variants.find((v) => v.weight === selectedVariant)?.price ??
            "N/A"}
        </p>
        <div className="flex items-center gap-4 px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm w-fit">
          <button
            className="w-8 h-8 flex items-center justify-center text-lg font-semibold text-gray-700 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
          <span className="min-w-[24px] text-center text-base font-medium text-gray-800">
            {quantity}
          </span>
          <button
            disabled={quantity === 1}
            className="w-8 h-8 flex items-center justify-center text-lg font-semibold text-gray-700 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            −
          </button>
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
