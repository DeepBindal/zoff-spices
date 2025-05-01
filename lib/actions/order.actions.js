'use server'
import { connectToDatabase } from "../db"
import Order from "../db/models/order.model";
import { handleError } from "../utils";

export const createOrder = async (order) => {
    try {
        await connectToDatabase();
        const savedOrder = await Order.create(order);

        return JSON.parse(JSON.stringify(savedOrder));
    } catch (error) {
        handleError(error)
    }
}