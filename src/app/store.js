import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";

// Store setup function for testing and reuse
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});



