'use client'

import { deleteCartById } from "@/lib/actions/cart.actions";
import { createOrder } from "@/lib/actions/order.actions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Payments = ({ amount, items, userId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const data = items.items.map((item) => ({
    quantity: item.quantity,
    price: item.price,
    variant: item.variant,
    product: item.product._id,
  }));

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Ensure this is defined in your .env
      amount: amount * 100, // Amount in paisa
      currency: "INR",
      name: "ZOFF",
      description: "Test Order",
      image: "https://zofffoods.com/cdn/shop/files/image_1.png?v=1736009498&width=195",
      handler: async function (response) {
        setIsLoading(true);
        try {
          const paymentId = response.razorpay_payment_id;

          const order = {
            items: data,
            total: amount,
            user: userId,
            orderId: paymentId,
            status: "Paid",
          };

          await createOrder(order);
          await deleteCartById(items._id);

          toast.success("Order placed successfully!");
          router.push("/");
        } catch (err) {
          console.error("Payment handler error:", err);
          toast.error("Something went wrong while placing the order.");
        } finally {
          setIsLoading(false);
        }
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#FFD700",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="bg-secondary text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : `Pay Rs${amount}`}
      </button>
    </div>
  );
};

export default Payments;
