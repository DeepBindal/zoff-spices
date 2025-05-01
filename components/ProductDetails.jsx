"use client";

import { addCart } from "@/lib/actions/cart.actions";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Info, ShipIcon } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProductDetails = ({ product, userId }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.weight || ""
  );
  const [cartQuantity, setCartQuantity] = useState(1);
  let { quantity, setQuantity } = useCart();

  const addToCart = async () => {
    try {
      const price =
        cartQuantity *
        product.variants.find((v) => v.weight === selectedVariant)?.price;
      const data = {
        userId,
        items: [
          {
            product: product._id,
            quantity: cartQuantity,
            variant: selectedVariant,
            price,
          },
        ],
      };
      const res = await addCart(data);
      quantity = res.items.reduce((q, item) => q + item.quantity, 0);
      setQuantity(quantity);
      toast("Items added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-10 p-6 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Image Section */}
      <motion.div className="flex-1" variants={fadeInUp}>
        <Image
          src={product.images[0]}
          alt="product-img"
          width={500}
          height={500}
          className="rounded-xl object-contain w-full h-auto bg-gray-100"
        />
      </motion.div>

      {/* Details Section */}
      <motion.div className="flex-1 space-y-6" variants={fadeInUp}>
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {/* Variant Selector */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Select Variant:</h2>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.weight}
                onClick={() => setSelectedVariant(variant.weight)}
                className={`px-4 py-2 cursor-pointer hover:bg-[#e24504]/90 rounded-full border text-sm font-medium transition 
                  ${
                    selectedVariant === variant.weight
                      ? "bg-[#e24504] text-white border-[#e24504]0"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
              >
                {variant.weight}
              </button>
            ))}
          </div>
        </div>

        {/* Price & cartQuantity */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-gray-800">
            ₹
            {product.variants.find((v) => v.weight === selectedVariant)?.price ??
              "N/A"}
          </p>

          <div className="flex items-center gap-3 px-3 py-2 rounded-full border border-gray-300 bg-white shadow-sm">
            <button
              className="w-8 h-8 flex cursor-pointer items-center justify-center text-lg font-semibold text-gray-700 rounded-full hover:bg-gray-100"
              onClick={() => setCartQuantity((prev) => prev + 1)}
            >
              +
            </button>
            <span className="min-w-[24px] text-center text-base font-medium text-gray-800">
              {cartQuantity}
            </span>
            <button
              disabled={cartQuantity === 1}
              className="w-8 h-8 flex items-center cursor-pointer justify-center text-lg font-semibold text-gray-700 rounded-full hover:bg-gray-100 disabled:opacity-50"
              onClick={() => setCartQuantity((prev) => prev - 1)}
            >
              −
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          variants={fadeInUp}
          onClick={addToCart}
          className="w-full sm:w-fit px-6 py-3 bg-[#e24504] hover:bg-[#e24504]/90 cursor-pointer text-white rounded-lg text-base font-semibold transition"
        >
          Add to Cart
        </motion.button>

        {/* Accordion */}
        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="description">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  <span>Product Description</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                This product is carefully crafted using premium ingredients. It’s ideal for everyday cooking and brings out the authentic taste in your dishes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ingredients">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  <span>Ingredients</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Contains high-quality whole spices, ground powders, and natural preservatives. 100% vegetarian and free from artificial colors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <ShipIcon className="w-5 h-5" />
                  <span>Shipping & Returns</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Ships within 2-4 business days. Return accepted within 7 days of delivery if the product is unopened and in original condition.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;
