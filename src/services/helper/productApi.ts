import { fetchData } from "@/services/api";

export const fetchProducts = async () => {
  return await fetchData("products");
};

export const fetchCategories = async () => {
  return await fetchData("products/categories");
};
