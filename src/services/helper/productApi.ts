import fetchData from "../api";

export const fetchProducts = async () => {
    return await fetchData("products");
}