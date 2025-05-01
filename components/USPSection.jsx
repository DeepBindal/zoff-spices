"use client";
import { getUserCart } from "@/lib/actions/cart.actions";
import { getUser } from "@/lib/actions/user.actions";
import { useCart } from "@/lib/context/CartContext";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function USPSection() {
  const { user, isLoaded } = useUser();
  const { setQuantity } = useCart();

  useEffect(() => {
    const fetchQuantity = async () => {
      if (!isLoaded || !user) return;

      try {
        const current_user = await getUser(user.id);
        const res = await getUserCart(current_user._id);
        console.log(res)
        const cart = res.data;
        if(!cart) return
        const q = cart.items.reduce((total, item) => total + item.quantity, 0);
        setQuantity(q);
      } catch (err) {
        console.error("Failed to fetch cart quantity:", err);
      }
    };

    fetchQuantity();
  }, [isLoaded, user, setQuantity]);

  const uspItems = [
    {
      img: "//zofffoods.com/cdn/shop/files/Frame_22_5554f962-42ac-41e0-89b9-2a0241ba9c18_x162.jpg?v=1735988603",
      title: "100% Satisfaction",
      subtitle: "Try it to love it!",
    },
    {
      img: "//zofffoods.com/cdn/shop/files/Frame_23_x162.jpg?v=1735988564",
      title: "100% Genuine Products",
      subtitle: "Guaranteed quality",
    },
    {
      img: "//zofffoods.com/cdn/shop/files/Frame_22_1_x162.jpg?v=1735988564",
      title: "Membership Discounts",
      subtitle: "Join “ZING” and get 40% off",
    },
    {
      img: "//zofffoods.com/cdn/shop/files/Frame_23_1_x162.jpg?v=1735988564",
      title: "Free Shipping",
      subtitle: "On orders above Rs 249/-",
    },
  ];

  return (
    <section className="mt-8 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {uspItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} // animate every time it enters the view
            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={item.img}
              alt={item.title}
              width={162}
              height={153}
              loading="lazy"
              className="mb-4"
            />
            <div className="usp_text">
              <h4 className="text-lg font-semibold text-[#e24504]">
                {item.title}
              </h4>
              <h6 className="text-sm text-gray-700">{item.subtitle}</h6>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
