"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Navbar from "@/app/Navbar";
import { SlCalender } from "react-icons/sl";
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/helper/productApi";
import Card from "@/components/Card";
import LoadingDetailProduct from "@/components/Loading/LoadingDetailProduct";

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {  
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const ProductDetailClient = ({ id }: { id: string }) => {
  const [products, setProducts] = useState([]);
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
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) {
    return <div><LoadingDetailProduct /></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <section className="w-full">
        <div className="w-11/12 p-5">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-11/12">
              <div className="w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full object-cover aspect-square rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-black">
                    {product.title}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <span>
                      <SlCalender className="w-3 h-3 md:w-4 md:h-4 mt-0.5 md:mt-0 text-yellow-500" />
                    </span>
                    <h1 className="text-gray-700 font-medium text-xs md:text-sm">
                      21 hari lagi | 1rb+ terjual
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-black">
                    ${product.price}
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-medium text-sm md:text-sm">Kuantitas</h1>
                  <div className="flex items-center">
                    <button className="py-2 px-3 border border-gray-300 bg-gray-200 rounded-l-sm text-sm">
                      -
                    </button>
                    <span className="py-2 px-8 border border-gray-300 bg-none text-sm">
                      1
                    </span>
                    <button className="py-2 px-3 border border-gray-300 bg-gray-200 rounded-r-sm text-sm">
                      +
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <button className="flex items-center p-4 bg-green-700 rounded-md gap-3">
                    <span>
                      <FaCartPlus className="w-3 h-3 md:w-6 md:h-6 text-white" />
                    </span>
                    <span>
                      <h1 className="text-lg font-semibold text-white">
                        Tambahkan ke Keranjang
                      </h1>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="flex flex-col w-1/2 gap-2">
                <div className="flex">
                  <h1 className="text-2xl font-bold text-black">
                    Informasi Produk
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-600 text-sm font-normal">
                    Kategori : {product.category}
                  </h1>
                  <h1 className="text-gray-600 text-sm font-normal">
                    Deskripsi :{" "}
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="text-black text-sm font-normal">
                    {product.description}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 mt-10 mx-auto">
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5">
              {products.map((product: any) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailClient;
