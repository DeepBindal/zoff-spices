import Collections from "@/components/Collections";
import { getAllProducts, getProductByCategroy } from "@/lib/actions/product.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({searchParams}) => {
  const {q} = await searchParams;
  let res ;
  if(q !== undefined){
    res = await getProductByCategroy(q);
  }else{
    res = await getAllProducts();
  }
  const products = res.data;
  return (
    <section className="px-8 min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop All Products</h1>
        <Collections products={products} emptyTitle='No products found' />
    </section>
  );
};




export default page;
