import CartDetails from "@/components/CartDetails";
import { getUserCart } from "@/lib/actions/cart.actions";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const current_user = await currentUser();
  if (!current_user) redirect("/sign-in");
  const user_id = current_user.id;
  const user = await getUser(user_id);
  const res = await getUserCart(user._id);
    
  return (
    <div>
      {res.data ? <CartDetails initialCart={res.data} userId={user._id}/> : <p className="text-center my-10 text-4xl">Your cart is empty.</p>}
    </div>
  );
};

export default page;
