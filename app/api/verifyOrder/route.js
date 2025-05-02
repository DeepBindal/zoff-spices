import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createOrder } from "@/lib/actions/order.actions";
import { deleteCartById } from "@/lib/actions/cart.actions";

const generatedSignature = (
  razorpayOrderId,
  razorpayPaymentId
) => {
  const keySecret = process.env.RAZORPAY_SECRET;

  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request) {
  const { order, cartId, orderId, razorpaySignature, razorpayPaymentId } =
    await request.json();

  const signature = generatedSignature(orderId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  }

  await createOrder(order);
  await deleteCartById(cartId);
  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 }
  );
}