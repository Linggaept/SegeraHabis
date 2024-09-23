import { fetchData } from "@/services/api";

export const fetchProducts = async () => {
  return await fetchData("products");
};

export const fetchCategories = async () => {
  return await fetchData("products/categories");
};

export const fetchProductbyCategory = async (id: string) => {
  return await fetchData(`products/category/${id}`);
};
