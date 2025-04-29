'use server'
import { connectToDatabase } from "../db";
import Cart from "../db/models/cart.model";
import { handleError } from "../utils";

export const addCart = async (data) => {
  try {
    await connectToDatabase();

    let cart = await Cart.findOne({ user: data.userId });

    if (cart) {
      for (const newItem of data.items) {
        const existingItemIndex = cart.items.findIndex(
          (item) =>
            item.product.toString() === newItem.product.toString() &&
            item.variant == newItem.variant
        );

        if (existingItemIndex !== -1) {
          cart.items[existingItemIndex].quantity += newItem.quantity;
          cart.items[existingItemIndex].price += newItem.price;
        } else {
          cart.items.push(newItem);
        }
      }
      await cart.save();
    } else {
      cart = await Cart.create({
        user: data.userId,
        items: data.items,
      });
    }

    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getUserCart = async (userId) => {
    try {
        await connectToDatabase();
        const cart = await Cart.findOne({user: userId}).populate('items.product');

        return {data: JSON.parse(JSON.stringify(cart))};
    } catch (error) {
        handleError(error);
    }
}

export const updateCart = async ({ userId, productId, variant, quantity, price }) => {
  try {
    await connectToDatabase();

    let cart = await Cart.findOne({ user: userId });
    if (!cart) return null;

    const itemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        item.variant === variant
    );

    if (itemIndex !== -1) {
      if (quantity === 0) {
        cart.items.splice(itemIndex, 1); // Remove item
      } else {
        cart.items[itemIndex].quantity = quantity; // Update quantity
        cart.items[itemIndex].price += price; // Update quantity
      }
    }
    console.log(cart)
    await cart.save();
    cart = await Cart.findOne({ user: userId }).populate('items.product');
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    handleError(error);
    throw error;
  }
};