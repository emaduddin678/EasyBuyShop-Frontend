import axios from "axios";

export const fetchAllProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=194");
  return response.data.products;
};
