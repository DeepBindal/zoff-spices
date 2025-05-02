'use server'
import { connectToDatabase } from "../db"
import Order from "../db/models/order.model";
import { handleError } from "../utils";
import Product from '../db/models/product.model'

export const createOrder = async (order) => {
    try {
        await connectToDatabase();
        const savedOrder = await Order.create(order);

        return JSON.parse(JSON.stringify(savedOrder));
    } catch (error) {
        handleError(error)
    }
}

export const getUserOrders = async (userId) => {
    try {
        await connectToDatabase();
        const orders = await Order.find({user: userId}).populate({path: 'items.product', select: 'title'}).sort({createdAt: -1});

        return {data: JSON.parse(JSON.stringify(orders))};
    } catch (error) {
        
    }
}