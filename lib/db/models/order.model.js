import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: { type: Number, required: true },
        variant: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    total: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
      enum: ["Paid", "Confirmed", "Pending"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema);

export default Order;
