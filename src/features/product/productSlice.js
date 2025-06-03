import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct: null,
};


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      state.value += 1;
    }),

    incrementByAmount: create.reducer((state, action) => {
      state.value += action.payload;
    }),
    incrementAsync: create.asyncThunk(
      async (amount) => {
        // const response = await fetchCount(amount);
        // return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value += action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
  selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
  },
});

// Export actions
export const { increment, incrementByAmount, incrementAsync } =
  productSlice.actions;

// Export selectors
export const { selectCount, selectStatus } = productSlice.selectors;

export default productSlice.reducer;
