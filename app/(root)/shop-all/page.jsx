import { getAllProducts } from "@/lib/actions/product.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const res = await getAllProducts();
  const products = res.data;

  return (
    <section className="px-8 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
          <div
            
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-lg font-semibold">{product.title}</p>
            <p className="text-gray-600 mt-1">From ₹{product.variants[0].price}</p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};




export default page;
