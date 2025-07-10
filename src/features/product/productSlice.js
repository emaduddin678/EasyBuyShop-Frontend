import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilter } from "./productAPI.js";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: "idle",
  totalItems: 0,
  selectedProduct: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async (params) => {
    // console.log("Fetching products with params:", params);
    const response = await fetchAllProducts();
    // console.log("Fetched products:", response);
    // console.log(response.map((p) => p.category));
    // console.log(...response.map((p) => p.category));
    // console.log([...response.map((p) => p.category)]);
    // console.log(new Set([...response.map((p) => p.category)]));
    // console.log(...new Set([...response.map((p) => p.category)]));
    // console.log(
    //   [
    //     ...new Set([
    //       ...response.map((p) => {
    //         return p.category;
    //       }),
    //     ]),
    //   ].map((c) => {
    //     // console.log(c);
    //     return {
    //       value: c,
    //       label: c
    //         .split("-")
    //         .join(" ")
    //         .split(" ")
    //         .map(
    //           (word) =>
    //             word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    //         )
    //         .join(" ")
    //         ,
    //       checked: false,
    //     };
    //   })
    // );
    return response;
  }
);
export const fetchProductsByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilter",
  async (filter) => {
    const response = await fetchProductsByFilter(filter);
    console.log(response);
    return response;
  }
);

export const productSlice = createSlice({
  name: "test",
  initialState,
  // reducers: {
  //   clearSelectedProduct: (state) => {
  //     state.selectedProduct = null;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
  // selectors: {
  //   selectCount: (counter) => counter.value,
  //   selectStatus: (counter) => counter.status,
  // },
});

// Export actions
export const { clearSelectedProduct } = productSlice.actions;

// Export selectors
export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectProductListStatus = (state) => state.product.status;

export const selectTotalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
