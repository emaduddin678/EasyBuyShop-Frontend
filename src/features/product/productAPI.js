import axios from "axios";

export const fetchAllProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=194");
  return response.data.products;
};

export const fetchProductsByFilter = async (filter) => {
  console.log("Fetching products with filter:", filter);
  let queryString = "";
  for (let key in filter) {
    if (filter[key]) {
      queryString += `${key}=${filter[key]}&`;
    }
  }
  console.log("Query String:", queryString);
  const response = await axios.get(
    "https://dummyjson.com/products?" + queryString
  );
  console.log("Response Data:", response.data.products);
  return response.data.products;
};
