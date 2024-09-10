"use client";

import CarouselLanding from "@/components/Carousel";
import Navbar from "./Navbar";
import Card from "@/components/Card";
import Category from "@/components/Category";
import Footer from "./Footer";
import { use, useEffect, useState } from "react";
import { fetchProducts } from "@/services/helper/productApi";
import { fetchCategories } from "@/services/helper/productApi";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log("Failed to fetch products: ", error);
      }
    };

    getProduct();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const data = await fetchCategories();
        setCategory(data);
      } catch (error) {
        console.log("Failed to fetch products: ", error);
      }
    };

    getCategory();
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar />
        <main className="flex flex-col items-center w-11/12 px-1 md:px-5 mx-auto">
          <div className="w-full">
            <CarouselLanding />
            <div className="w-full py-5">
              <h1 className="text-2xl font-extrabold text-black py-5">
                Kategori
              </h1>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                {category.map((category: string) => (
                  <Category key={category} category={category} />
                ))}
              </div>
            </div>
            <div className="w-full py-5">
              <h1 className="text-2xl font-extrabold text-black py-5">
                Produk Kami
              </h1>
              <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5">
                {products.map((product: any) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
