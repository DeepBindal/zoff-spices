"use client";

import React from "react";
import { motion } from "framer-motion";

const OrderDetails = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">No orders found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen p-6 md:p-10 bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Your Orders
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, idx) => (
          <motion.div
            key={order.orderId || idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
          >
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-gray-700">
                Order ID:{" "}
                <span className="text-black font-mono">
                  {order.orderId || "N/A"}
                </span>
              </h2>
              <p
                className={`mt-1 text-sm font-medium ${
                  order.status === "Paid"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                Status: {order.status}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Total: ₹{order.total}
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-medium text-gray-600 mb-2">Items:</p>
              <ul className="space-y-2">
                {order.items.map((item, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-gray-700 font-semibold">
                      {item.product.title} {item.variant}Gms
                    </span>
                    <span className="text-gray-500">
                      x{item.quantity} – ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OrderDetails;
