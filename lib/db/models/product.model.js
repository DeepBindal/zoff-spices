import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    variants: [
      {
        weight: { type: Number, required: true }, 
        price: { type: Number, required: true },
      },
    ],
    category: { type: String, required: true },
    images: { type: [String], default: [] },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
