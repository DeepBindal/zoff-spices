"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader, 
  TableRow,
} from "./ui/table";
import { updateCart } from "@/lib/actions/cart.actions";
import { useCart } from "@/lib/context/CartContext";
import Payments from "./Payments";

const CartDetails = ({ initialCart, userId }) => {
  const [cart, setCart] = useState(initialCart);
  let { quantity, setQuantity } = useCart();
  const [loadingItem, setLoadingItem] = useState(null);

  useEffect(() => {
    quantity = cart.items.reduce((q, item) => q + item.quantity, 0);
    setQuantity(quantity);
  }, [cart, quantity]);

  const handleQuantityChange = async (productId, variant, newQty, price) => {
    if (newQty < 1) return;

    setLoadingItem(productId + variant);
    const updatedCart = await updateCart({
      userId,
      productId,
      variant,
      quantity: newQty,
      price,
    });
    setCart(updatedCart);
    setLoadingItem(null);
  };

  const totalPrice = cart?.items.reduce((total, item) => total + item.price, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-xl max-w-6xl mx-auto mt-8"
    >
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Your Cart
      </h1>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[220px] sm:w-[240px] text-gray-700 font-semibold">
                Product
              </TableHead>
              <TableHead className="text-center text-gray-700 font-semibold">
                Quantity
              </TableHead>
              <TableHead className="text-right text-gray-700 font-semibold">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <AnimatePresence>
              {cart?.items.map((item) => {
                const price = item.price / item.quantity;
                return (
                  <motion.tr
                    key={item._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <TableCell className=''>
                      <div className="flex sm:flex-row flex-col gap-4 items-center justify-center ">
                        {item?.product?.images?.[0] ? (
                          <Image
                            src={item.product.images[0]}
                            alt="product-img"
                            height={80}
                            width={80}
                            className="rounded-lg border object-cover"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                        <div className="min-w-[120px]">
                          <p className="font-semibold text-gray-800">
                            {item.product.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size: {item.variant}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            Rs. {price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <button
                          disabled={loadingItem === item.product._id + item.variant}
                          onClick={() =>
                            handleQuantityChange(
                              item.product._id,
                              item.variant,
                              item.quantity + 1,
                              price
                            )
                          }
                          className="w-8 h-8 sm:w-9 sm:h-9 text-lg bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700 disabled:opacity-50"
                        >
                          +
                        </button>
                        <span className="text-base font-medium text-gray-800 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          disabled={
                            item.quantity === 1 ||
                            loadingItem === item.product._id + item.variant
                          }
                          onClick={() =>
                            handleQuantityChange(
                              item.product._id,
                              item.variant,
                              item.quantity - 1,
                              -price
                            )
                          }
                          className="w-8 h-8 sm:w-9 sm:h-9 text-lg bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700 disabled:opacity-50"
                        >
                          −
                        </button>
                      </div>
                    </TableCell>

                    <TableCell className="text-right text-gray-800 font-semibold">
                      Rs. {item.price.toFixed(2)}
                    </TableCell>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center text-lg sm:text-xl font-semibold text-gray-900">
        <p className="mb-4 sm:mb-0">Total: Rs. {totalPrice?.toFixed(2)}</p>
        <div className="w-full sm:w-auto">
          <Payments amount={totalPrice} items={cart} userId={userId} />
        </div>
      </div>
    </motion.div>
  );
};

export default CartDetails;
