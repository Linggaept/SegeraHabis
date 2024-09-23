/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/app/Navbar";
import {
  fetchCategories,
  fetchProductbyCategory,
} from "@/services/helper/productApi";
import { useEffect, useState } from "react";
import CardCategories from "../CardCategories";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CategoriesDetailClient = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [products, setProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const pathname = usePathname(); // Menggunakan usePathname

  const formatCategoryName = (categoryName: string) => {
    const decodedCategoryName = decodeURIComponent(categoryName);

    return decodedCategoryName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  // Fetch categories once when component is mounted
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategoriesList(data);
      } catch (error) {
        console.log("Failed to fetch categories: ", error);
      }
    };

    getCategories();
  }, []); // This useEffect runs only once when the component mounts

  // Fetch products and update category whenever the pathname changes
  useEffect(() => {
    const currentPath = pathname.split("/"); // Mengambil pathname dan membaginya
    const categoryFromUrl = currentPath[2]; // Mengambil kategori dari pathname
    setCategory(categoryFromUrl);

    const getProductbyCategory = async () => {
      if (categoryFromUrl) {
        try {
          const data = await fetchProductbyCategory(categoryFromUrl);
          setProducts(data);
        } catch (error) {
          console.log("Failed to fetch products: ", error);
        }
      }
    };

    getProductbyCategory();
  }, [pathname]); // Dependency: runs when pathname changes

  return (
    <div>
      <Navbar />
      <div className="w-11/12 p-5 mx-auto">
        <div className="flex gap-8">
          <div className="flex flex-col w-1/4">
            <div className="flex">
              <h1 className="text-xl font-bold">Kategori</h1>
            </div>
            <div className="flex flex-col p-2 border-2 border-gray-200 shadow-sm rounded-md mt-4 gap-2">
              {categoriesList.map((item: string, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-md cursor-pointer hover:underline hover:text-green-700"
                >
                  <Link href={`/categories/${item}`} className={"w-full"}>
                    <h1 className="text-sm">
                      {formatCategoryName(item)}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-3/4">
            <h1 className="text-xl">
              Berdasarkan Kategori{" "}
              <span className="font-bold">"{category && formatCategoryName(category)}"</span>
            </h1>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
              {products.map((product: any, index) => (
                <CardCategories key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetailClient;
