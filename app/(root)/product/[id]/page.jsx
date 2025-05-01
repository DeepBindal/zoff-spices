import Collections from "@/components/Collections";
import FaqSection from "@/components/FAQSection";
import ProductDetails from "@/components/ProductDetails";
import {
  getProductByCategroy,
  getProductById,
} from "@/lib/actions/product.actions";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser, getAuth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }) => {
  const current_user = await currentUser();
  if (!current_user) redirect("/sign-in");
  const user_id = current_user.id;
  const user = await getUser(user_id);
  const { id } = await params;

  const product = await getProductById(id);
  const res = await getProductByCategroy(product.category.toString());
  return (
    <div className="">
      <ProductDetails product={product} userId={user._id} />
      <Image
        src="https://zofffoods.com/cdn/shop/files/Group_1410086987.jpg?v=1736353242"
        alt="img"
        width={600}
        height={600}
        className="w-full"
      />
      <FaqSection />
      <section className="px-8 min-h-screen py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-10">
        ZYAADA OPTIONS, ZAYDA FUN!
        </h1>
        <Collections products={res.data} emptyTitle={"No products Found"} />
      </section>
    </div>
  );
};

export default page;
