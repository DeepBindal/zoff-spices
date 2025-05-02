"use client";

import { useCart } from "@/lib/context/CartContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Payments = ({ amount, items, userId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {quantity, setQuantity} = useCart();

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

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      // STEP 1: Create Razorpay order (server-side)
      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      const orderData = await res.json();
      if (!orderData.id) throw new Error("Failed to create Razorpay order");

      // STEP 2: Setup Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: amount * 100,
        currency: "INR",
        name: "ZOFF",
        description: "Test Order",
        order_id: orderData.id,
        image:
          "https://zofffoods.com/cdn/shop/files/image_1.png?v=1736009498&width=195",
        handler: async function (response) {
          try {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

            const order = {
              items: data,
              total: amount,
              user: userId,
              orderId: razorpay_order_id,
              status: "Paid",
            };

            const paymentData = {
              order,
              cartId: items._id,
              orderId: razorpay_order_id,
              razorpayPaymentId: razorpay_payment_id,
              razorpaySignature: razorpay_signature,
            };

            const res = await fetch("/api/verifyOrder", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(paymentData),
            });

            if (res.ok) {
              toast.success("Order placed successfully!");
              router.push("/");
              setQuantity(0);
            } else {
              throw new Error("Failed to save order");
            }
          } catch (err) {
            console.error("Payment success but order error:", err);
            toast.error("Payment succeeded but order saving failed.");
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
    } catch (err) {
      console.error("Payment initialization error:", err);
      toast.error("Unable to initiate payment.");
      setIsLoading(false);
    }
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
