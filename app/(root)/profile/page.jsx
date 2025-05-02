import OrderDetails from "@/components/OrderDetails";
import { getUserOrders } from "@/lib/actions/order.actions";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const current_user = await currentUser();
  if (!current_user) redirect("/sign-in");
  const user_id = current_user.id;
  const user = await getUser(user_id);
  const res = await getUserOrders(user._id);
  return <>{res.data ? <OrderDetails orders={res.data} /> : (<p className="text-center my-10 text-4xl">No orders to show. Continue shopping.</p>)}</>;
};

export default page;
